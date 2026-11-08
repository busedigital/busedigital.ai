#!/usr/bin/env python3
"""Prepare GitHub Pages-friendly videos and real thumbnail images. No source media is deleted."""
import hashlib
import json
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parents[2]
INDEX = ROOT / "index.html"
MEDIA = ROOT / "assets/media"
POSTERS = ROOT / "assets/posters"
POSTERS.mkdir(parents=True, exist_ok=True)
failures = []
changes = {}

def run(*args):
    return subprocess.run(args, cwd=ROOT, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

def video_codec(path):
    p = run("ffprobe", "-v", "error", "-select_streams", "v:0", "-show_entries",
            "stream=codec_name,pix_fmt", "-of", "json", str(path))
    if p.returncode:
        return None, None
    streams = json.loads(p.stdout).get("streams", [])
    return (streams[0].get("codec_name"), streams[0].get("pix_fmt")) if streams else (None, None)

def audio_codec(path):
    p = run("ffprobe", "-v", "error", "-select_streams", "a:0", "-show_entries",
            "stream=codec_name", "-of", "json", str(path))
    if p.returncode:
        return None
    streams = json.loads(p.stdout).get("streams", [])
    return streams[0].get("codec_name") if streams else None

videos = sorted(x for x in MEDIA.rglob("*") if x.is_file() and x.suffix.lower() in (".mov", ".mp4", ".m4v", ".webm") and not x.name.endswith(".web.mp4"))
for source in videos:
    rel = source.relative_to(ROOT).as_posix()
    vcodec, pix = video_codec(source)
    acodec = audio_codec(source)
    if not vcodec:
        failures.append(f"Cannot read video stream: {rel}")
        continue
    needs_transcode = source.suffix.lower() != ".mp4" or vcodec != "h264" or pix not in ("yuv420p", "yuvj420p") or acodec not in (None, "aac")
    destination = source
    if needs_transcode:
        destination = source.with_suffix(".mp4") if source.suffix.lower() != ".mp4" else source.with_name(source.stem + ".web.mp4")
        if not destination.exists() or destination.stat().st_mtime < source.stat().st_mtime:
            print(f"Transcode: {rel} → {destination.relative_to(ROOT)}", flush=True)
            cmd = run("ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", str(source),
                      "-map", "0:v:0", "-map", "0:a:0?", "-vf",
                      "scale='min(1080,iw)':-2:force_original_aspect_ratio=decrease:force_divisible_by=2",
                      "-c:v", "libx264", "-preset", "fast", "-crf", "23", "-pix_fmt", "yuv420p",
                      "-c:a", "aac", "-b:a", "128k", "-movflags", "+faststart", str(destination))
            if cmd.returncode:
                failures.append(f"Conversion failed: {rel}: {cmd.stderr[-550:]}")
                destination.unlink(missing_ok=True)
                continue
        changes[rel] = destination.relative_to(ROOT).as_posix()
    target_rel = destination.relative_to(ROOT).as_posix()
    poster = POSTERS / (hashlib.sha1(target_rel.encode("utf-8")).hexdigest()[:18] + ".jpg")
    if not poster.exists() or poster.stat().st_mtime < destination.stat().st_mtime:
        result = run("ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-ss", "0.35",
                     "-i", str(destination), "-frames:v", "1", "-vf",
                     "scale='min(960,iw)':-2:force_original_aspect_ratio=decrease:force_divisible_by=2",
                     "-q:v", "4", str(poster))
        if result.returncode or not poster.exists():
            # Very short videos may not have a frame at 350 ms.
            result = run("ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i",
                         str(destination), "-frames:v", "1", "-q:v", "4", str(poster))
        if result.returncode:
            failures.append(f"Poster creation failed: {target_rel}: {result.stderr[-450:]}")
            continue

s = INDEX.read_text(encoding="utf-8")
marker = "const PORTFOLIO="
start = s.index(marker) + len(marker)
end = s.index(";\n", start)
data = json.loads(s[start:end])
posters = {}
for video in videos:
    original = video.relative_to(ROOT).as_posix()
    target = changes.get(original, original)
    name = hashlib.sha1(target.encode("utf-8")).hexdigest()[:18] + ".jpg"
    path = POSTERS / name
    if path.exists():
        posters[target] = path.relative_to(ROOT).as_posix()
for item in data["media"]:
    original = item["path"]
    if original in changes:
        item["path"] = changes[original]
    target = item["path"]
    if target in posters:
        item["poster"] = posters[target]
    elif item.get("poster") and not (ROOT / item["poster"]).exists():
        item.pop("poster")
s = s[:start] + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + s[end:]
for old,new in changes.items():
    # Update any direct HTML / script references, not only PORTFOLIO.
    s=s.replace(old,new)

# Resolve current media and poster set for frontend availability checks.
expr = re.compile(r"const availablePaths=new Set\((\[[^;]+\])\);")
m = expr.search(s)
if not m:
    raise RuntimeError("availablePaths field not found")
available = sorted(p.relative_to(ROOT).as_posix() for base in (MEDIA, POSTERS)
                   for p in base.rglob("*") if p.is_file())
s = s[:m.start(1)] + json.dumps(available, ensure_ascii=False, separators=(",", ":")) + s[m.end(1):]

# For video-led categories show an actual video frame instead of an empty video tag.
anchor = "if(still){\n          card.append(mediaFrame(media[still.id],label+' proje örneği'));\n        }else{"
if anchor in s:
    new = """if(still){
          card.append(mediaFrame(media[still.id],label+' proje örneği'));
        }else if(works[0] && media[works[0].id].poster && availablePaths.has(media[works[0].id].poster)){
          const poster=media[works[0].id].poster;
          card.append(mediaFrame({path:poster,width:960,height:540},label+' video kapağı'));
        }else{"""
    s = s.replace(anchor, new, 1)

INDEX.write_text(s, encoding="utf-8")
print(f"Converted {len(changes)} video(s); wrote {len(posters)} preview still(s)", flush=True)
if failures:
    for error in failures:
        print("ERROR", error, file=sys.stderr, flush=True)
    sys.exit(1)
