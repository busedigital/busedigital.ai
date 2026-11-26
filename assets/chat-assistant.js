/* Buse Digital Asistan — hazır cevaplı, tamamen tarayıcıda çalışır; hiçbir veri dışarı gönderilmez. */
(function () {
  if (window.__bdChat) return; window.__bdChat = 1;
  var LOGO = '/assets/media/marka/busedigital-logo.svg?v=20261126';
  var IG = 'https://ig.me/m/busedigitalstudio';
  var FORM = '/index.html#/iletisim';
  var L = function (href, t) { return '<a href="' + href + '"' + (/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : '') + '>' + t + '</a>'; };
  var CTA = '<span class="bdc-cta">' + L(FORM, 'Ücretsiz Teklif Al') + L(IG, 'Instagram’dan Yaz') + '</span>';

  var A = [
    { id: 'hizmet', q: 'Hangi hizmetleri veriyorsunuz?', k: ['hizmet', 'neler yapiyor', 'ne yapiyor', 'neler var', 'is yapiyor', 'calisma alan'],
      a: 'Yapay zekâ ile şu hizmetleri veriyorum:<ul><li>' + L('/ai-reklam.html', 'AI Reklam Filmi &amp; Video') + '</li><li>' + L('/ai-urun-gorselleri.html', 'AI Ürün &amp; Kampanya Görselleri') + '</li><li>' + L('/marka-animasyon.html', 'Marka Animasyonu &amp; Maskot') + '</li><li>' + L('/index.html#/ai-avatarlarim', 'AI Avatar') + '</li><li>' + L('/sosyal-medya.html', 'Sosyal Medya Yönetimi') + '</li><li>' + L('/meta-reklam.html', 'Meta Reklam Yönetimi') + '</li><li>' + L('/web-tasarimi.html', 'Web Sitesi Tasarımı') + '</li></ul>Tümünü ' + L('/hizmetlerim.html', 'Hizmetler sayfasında') + ' inceleyebilirsiniz.' },
    { id: 'fiyat', q: 'Fiyatlar ne kadar?', k: ['fiyat', 'ucret', 'kac para', 'kac tl', 'ne kadar', 'butce', 'maliyet', 'paket', 'tarife'],
      a: 'Her proje farklı olduğu için sabit bir fiyat listem yok. Fiyat; görsel ve video sayısına, videonun süresine, sahne sayısına ve kullanılacak yapay zekâ araçlarına göre belirlenir. Size özel <strong>ücretsiz teklif</strong> hazırlıyorum.' + CTA },
    { id: 'sure', q: 'Kaç günde teslim ediyorsunuz?', k: ['kac gun', 'teslim', 'sure', 'ne zaman', 'hizli', 'acil', 'zaman'],
      a: 'Reklam filmi, görsel ve animasyonlarda teslim süresi kapsama göre ortalama <strong>2–7 gündür</strong>. Web sitelerinde süre talebe göre değişir ve <strong>en az 5 gün</strong> sürer. Acil teslim talepleri ayrıca değerlendirilir, ücreti değişkenlik gösterir.' },
    { id: 'revize', q: 'Revize hakkı var mı?', k: ['revize', 'revizyon', 'duzeltme', 'degisiklik'],
      a: 'Evet, her projeye <strong>1 revize hakkı</strong> dahildir. Ek revize talepleri ayrıca fiyatlandırılır ve ücreti talebin kapsamına göre değişkenlik gösterir.' },
    { id: 'reklam', q: 'AI reklam filmi nasıl hazırlanıyor?', k: ['reklam film', 'video', 'reels', 'tanitim film', 'ruffles'],
      a: 'Ürün fotoğraflarınızdan yola çıkarak çekim, set ve model olmadan reklam filmi hazırlıyorum: konsept ve sahne planı → yapay zekâ ile üretim → kurgu, müzik ve ses. Örnekleri ' + L('/ai-reklam.html', 'AI Reklam Filmi sayfasında') + ' izleyebilirsiniz.' },
    { id: 'urun', q: 'Telefonla çektiğim ürün fotoğrafı yeterli mi?', k: ['urun gorsel', 'urun foto', 'fotograf', 'e-ticaret', 'eticaret', 'telefon', 'kampanya gorsel'],
      a: 'Çoğu zaman evet. Ürünün net göründüğü, iyi ışıkta çekilmiş bir telefon fotoğrafı başlangıç için yeterlidir; ürünün farklı yüzleri görünecekse birkaç açıdan fotoğraf istenebilir. Önce/sonra örneği için ' + L('/ai-urun-gorselleri.html', 'Ürün Görselleri sayfasına') + ' bakabilirsiniz.' },
    { id: 'logo', q: 'Ürünüm ve logom doğru görünür mü?', k: ['logo', 'ambalaj', 'bozul', 'dogru gorun', 'gercekci'],
      a: 'Ürün fotoğraflarınızı referans alarak çalışırım. Ambalaj, logo, renk ve ürün detayları her sahnede kontrol edilir; hatalı detay içeren görseller teslimden önce düzeltilir ya da yeniden üretilir.' },
    { id: 'animasyon', q: 'Markama animasyon veya maskot yapıyor musunuz?', k: ['animasyon', 'maskot', 'karakter', 'cizgi', '3d', 'muse', 'cembo'],
      a: 'Evet. Ürününüzü bir hikâyenin içine yerleştiren 3D animasyon reklamlar ve markanıza özel maskotlar hazırlıyorum. Hazır maskotlarımdan birini de satın alabilirsiniz. ' + L('/marka-animasyon.html', 'Marka Animasyonu sayfası') + ' · ' + L('/index.html#/maskotlar', 'Maskotlar') },
    { id: 'kisiye', q: 'Kişiye özel animasyon yapıyor musunuz?', k: ['kisiye ozel', 'dogum gunu', 'cinsiyet', 'baby shower', 'babyshower', 'evlilik', 'dugun', 'nikah', 'hediye', 'hamilelik'],
      a: 'Evet. Cinsiyet partisi, baby shower davetiyesi, evlilik teklifi, düğün ve doğum günü için fotoğraflarınızdan kişiye özel 3D animasyonlar hazırlıyorum. Detaylar: ' + L('/kisiye-ozel-animasyon.html', 'Kişiye Özel Animasyon') + '. Bilgi için ' + L('https://ig.me/m/evreninanimasyonu', '@evreninanimasyonu') + ' hesabına yazabilirsiniz.' },
    { id: 'avatar', q: 'AI avatar satın alabilir miyim?', k: ['avatar', 'dijital ikiz', 'model', 'yuz', 'ugc'],
      a: 'Evet. Reklam ve içeriklerinizde markanızın yüzü olacak yapay zekâ avatarlarını ' + L('/index.html#/ai-avatarlarim', 'AI Avatarlar sayfasında') + ' inceleyebilirsiniz; dijital ikiz hariç hepsi markaya özel satılabilir. Avatarlarla kameraya konuşan AI UGC videolar da hazırlayabilirim.' },
    { id: 'sosyal', q: 'Sosyal medya yönetimi yapıyor musunuz?', k: ['sosyal medya', 'instagram', 'tiktok', 'youtube', 'hesap yonet', 'icerik plan', 'paylasim'],
      a: 'Evet. Instagram, TikTok, YouTube ve diğer platformlar için içerik planı, Reels/gönderi/Story üretimi ve paylaşım sürecini yürütüyorum. Kısa ' + L('/index.html#/sosyal-medya-yonetimi', 'talep formunu') + ' doldurursanız size özel plan hazırlarım. ' + L('/sosyal-medya.html', 'Detaylar') },
    { id: 'meta', q: 'Meta reklam bütçesi fiyata dahil mi?', k: ['meta', 'facebook', 'reklam butce', 'reklam ver', 'sponsorlu', 'reklam yonet'],
      a: 'Reklam bütçesinin planlanması hizmetin kapsamındadır, ancak bütçenin kendisi hizmet ücretine <strong>dahil değildir</strong>; Meta’ya ayrıca ödenir. Reklam kreatiflerini ben üretiyorum. ' + L('/meta-reklam.html', 'Meta Reklam sayfası') },
    { id: 'web', q: 'Web sitesi yapıyor musunuz?', k: ['web site', 'websitesi', 'site yap', 'domain', 'alan adi', 'hosting'],
      a: 'Evet. Mobil uyumlu, Google’a hazır ve markanıza özel web siteleri hazırlıyorum; şu an gezdiğiniz site de benim çalışmam. Süre talebe göre değişir, en az 5 gündür. Alan adı ve hosting ücretleri tasarım ücretine dahil değildir. ' + L('/web-tasarimi.html', 'Web Tasarımı sayfası') },
    { id: 'format', q: 'Hangi formatlarda teslim ediyorsunuz?', k: ['format', 'boyut', 'dikey', 'yatay', '9:16', '16:9', 'cozunurluk'],
      a: 'Reels, TikTok ve Shorts için dikey <strong>9:16</strong>; YouTube ve web sitesi için yatay <strong>16:9</strong>; gönderiler için <strong>1:1</strong> veya <strong>4:5</strong> formatında teslim ediyorum.' },
    { id: 'odeme', q: 'Ödeme nasıl yapılıyor?', k: ['odeme', 'iban', 'havale', 'eft', 'shopier', 'kredi kart', 'taksit'],
      a: 'Ödemeler banka havalesi/EFT (IBAN) ya da Shopier üzerinden alınır. Ödeme planı teklifte belirtilir. Ayrıntılar için ' + L('/hizmet-kosullari.html', 'Hizmet ve Satış Koşulları') + '.' },
    { id: 'haklar', q: 'Teslim edilen içerikleri ticari kullanabilir miyim?', k: ['ticari', 'kullanim hakk', 'telif', 'lisans', 'hak'],
      a: 'Teslim edilen çalışmalar, ödemenin tamamlanmasının ardından teklifte belirtilen amaçlar doğrultusunda kullanılabilir. Ayrıntılar ' + L('/hizmet-kosullari.html', 'Hizmet ve Satış Koşulları') + ' sayfasında.' },
    { id: 'referans', q: 'Daha önce kimlerle çalıştınız?', k: ['referans', 'is birligi', 'isbirligi', 'musteri', 'kimlerle', 'rahun', 'portfoy', 'ornek'],
      a: 'raHun grubunun “Kelebek” şarkısı için yapay zekâ destekli müzik klibini hazırladım. Farklı sektörlerdeki çalışmalarımı ' + L('/index.html#/calismalarim', 'Portföy') + ' sayfasında sektöre göre inceleyebilirsiniz. Portföydeki marka çalışmaları bağımsız örneklerdir, resmî iş birliği değildir.' },
    { id: 'akademi', q: 'Akademiye nasıl katılırım?', k: ['akademi', 'egitim', 'kurs', 'ders', 'ogren', 'mentor', 'collaby', 'matchai'],
      a: 'UGC &amp; AI Collaby Academy’ye benim aracılığımla katıldığınızda <strong>mentörünüz</strong> oluyorum. Ücret <strong>369 $</strong>, kayıt Shopier üzerinden. Bana Instagram’dan “AKADEMİ” yazmanız yeterli. Akademi bir eğitim programıdır; kazanç, gelir veya iş garantisi vermez. ' + L('/akademi.html', 'Akademi sayfası') },
    { id: 'garanti', q: 'Satış veya takipçi garantisi var mı?', k: ['garanti', 'kesin', 'satis artar', 'takipci', 'kazanc', 'para kazan'],
      a: 'Hayır. Satış, takipçi, erişim ya da kazanç gibi sonuçlar ürüne, bütçeye ve pazara bağlı olduğu için garanti edilmez. Amacım, doğru içerik ve kurguyla en iyi sonucu almanıza yardımcı olmak.' },
    { id: 'iletisim', q: 'Size nasıl ulaşırım?', k: ['iletisim', 'ulas', 'mail', 'e-posta', 'eposta', 'telefon numara', 'whatsapp', 'yaz', 'dm', 'numara'],
      a: 'Bana ' + L('mailto:info@busedigitalstudio.com', 'info@busedigitalstudio.com') + ' adresinden, ' + L(IG, 'Instagram DM') + ' üzerinden ya da ' + L(FORM, 'teklif formundan') + ' ulaşabilirsiniz; WhatsApp üzerinden hizmet vermiyorum. Genellikle 1 iş günü içinde yanıt veriyorum.' },
    { id: 'kim', q: 'Buse Digital kimdir?', k: ['kimsin', 'kim', 'hakkinda', 'buse', 'nerede', 'sehir', 'edirne'],
      a: 'Ben Buse Vatansever; Buse Digital AI Creative Studio olarak markalara yapay zekâ ile reklam filmi, ürün görseli ve animasyon üretiyorum. Kendi Instagram hesaplarımı (@busedigitalstudio, @evreninanimasyonu) da yönetiyorum. ' + L('/index.html#/hakkimda', 'Hakkımda') },
    { id: 'selam', q: null, k: ['merhaba', 'selam', 'iyi gunler', 'hey', 'slm', 'mrb'],
      a: 'Merhaba! Size nasıl yardımcı olabilirim? Aşağıdaki sorulardan birini seçebilir ya da sorunuzu yazabilirsiniz.' },
    { id: 'tesekkur', q: null, k: ['tesekkur', 'sagol', 'sağol', 'eyvallah', 'tamam'],
      a: 'Rica ederim! Başka bir sorunuz olursa buradayım. Projenizi konuşmak isterseniz:' + CTA },
  ];
  var PRI = { akademi: 3, meta: 3, kisiye: 3, web: 2.5, animasyon: 2, avatar: 2, sosyal: 2, garanti: 2.5, logo: 2, odeme: 2, haklar: 2, revize: 2, format: 2, urun: 1.5, iletisim: 1.5 };
  var QUICK = ['hizmet', 'fiyat', 'sure', 'revize', 'akademi', 'iletisim'];

  function norm(s) {
    return (s || '').toLocaleLowerCase('tr-TR').replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/â/g, 'a').replace(/î/g, 'i').replace(/\s+/g, ' ').trim();
  }
  function find(text) {
    var t = ' ' + norm(text) + ' ', best = null, score = 0;
    A.forEach(function (it) {
      var sc = 0; it.k.forEach(function (k) { if (t.indexOf(norm(k)) > -1) sc += k.length > 4 ? 2 : 1; }); if (sc) sc *= (PRI[it.id] || 1);
      if (sc > score) { score = sc; best = it; }
    });
    return best;
  }
  var FALLBACK = 'Bu soruya burada hazır bir cevabım yok, ama Buse size doğrudan yanıt verebilir:' + CTA;

  var css = '' +
    '.bdc-btn{position:fixed;z-index:950;right:20px;bottom:156px;width:56px;height:56px;border-radius:50%;border:2px solid #76618F;background:#fff;color:#fff;padding:0;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(48,31,65,.28);cursor:pointer}' +
    '.bdc-btn img{width:44px;height:44px;object-fit:contain}.bdc-badge{position:absolute;right:-4px;bottom:-4px;width:24px;height:24px;border-radius:50%;background:#76618F;border:2px solid #fff;display:flex;align-items:center;justify-content:center}.bdc-badge svg{width:13px;height:13px}' +
    '.bdc-tip{position:fixed;z-index:950;right:86px;bottom:166px;background:#fff;color:#3B3346;border:1px solid #E6DDEF;border-radius:12px;padding:8px 12px;font:500 13px Inter,Arial,sans-serif;box-shadow:0 6px 18px rgba(48,31,65,.12);white-space:nowrap}' +
    '.bdc-panel{position:fixed;z-index:960;right:20px;bottom:20px;width:370px;max-width:calc(100vw - 24px);height:560px;max-height:calc(100vh - 40px);background:#FAFAF8;border:1px solid #E0D6EA;border-radius:20px;box-shadow:0 18px 48px rgba(48,31,65,.25);display:flex;flex-direction:column;overflow:hidden;font:15px/1.55 Inter,Arial,sans-serif;color:#3B3346}' +
    '.bdc-panel[hidden]{display:none}' +
    '.bdc-head{display:flex;align-items:center;gap:10px;padding:14px 14px 12px;background:#E3D8EE;border-bottom:1px solid #D9CCE6}' +
    '.bdc-head img{width:40px;height:40px;border-radius:50%;background:#F2F3F1;padding:2px}' +
    '.bdc-head strong{display:block;color:#5F4B78;font-size:15px}.bdc-head small{display:block;color:#6B5F78;font-size:12px}' +
    '.bdc-x{margin-left:auto;width:36px;height:36px;border:0;border-radius:50%;background:transparent;color:#5F4B78;font-size:22px;cursor:pointer}.bdc-x:hover{background:rgba(118,97,143,.12)}' +
    '.bdc-log{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}' +
    '.bdc-m{max-width:88%;padding:10px 13px;border-radius:16px;word-wrap:break-word}' +
    '.bdc-m.bot{background:#fff;border:1px solid #E6DDEF;border-top-left-radius:6px;align-self:flex-start}' +
    '.bdc-m.me{background:#76618F;color:#fff;border-top-right-radius:6px;align-self:flex-end}' +
    '.bdc-m a{color:#5F4B78;font-weight:600}.bdc-m ul{margin:6px 0;padding-left:18px}.bdc-m li{margin:2px 0}' +
    '.bdc-cta{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.bdc-cta a{display:inline-flex;align-items:center;min-height:36px;padding:0 14px;border-radius:999px;background:#76618F;color:#fff!important;text-decoration:none;font-size:13px}.bdc-cta a+a{background:#fff;color:#5F4B78!important;border:1px solid #76618F}' +
    '.bdc-chips{display:flex;flex-wrap:wrap;gap:6px;padding:0 14px 10px}' +
    '.bdc-chip{border:1px solid #D9CCE6;background:#fff;color:#5F4B78;border-radius:999px;padding:7px 11px;font:600 12.5px Inter,Arial,sans-serif;cursor:pointer;text-align:left}.bdc-chip:hover{background:#F1EBF6;border-color:#76618F}' +
    '.bdc-form{display:flex;gap:8px;padding:10px 12px 12px;border-top:1px solid #E6DDEF;background:#fff}' +
    '.bdc-form input{flex:1;min-width:0;height:42px;border:1px solid #D9CCE6;border-radius:999px;padding:0 14px;font:15px Inter,Arial,sans-serif;color:#3B3346;outline:none}.bdc-form input:focus{border-color:#76618F}' +
    '.bdc-form button{width:42px;height:42px;border:0;border-radius:50%;background:#76618F;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}' +
    '.bdc-note{padding:0 14px 8px;font-size:11px;color:#8A7F95}' +
    '@media(max-width:768px){.bdc-btn{width:52px;height:52px;bottom:144px}.bdc-tip{display:none}.bdc-panel{right:0;left:0;bottom:0;width:auto;max-width:none;height:86vh;max-height:none;border-radius:20px 20px 0 0}}' +
    'body:has(.bd-standalone-mobile[open]) .bdc-btn,body:has(.site-header .menu-toggle[aria-expanded="true"]) .bdc-btn,body:has(dialog[open]) .bdc-btn{display:none}';
  function init() {
    var st = document.createElement('style'); st.id = 'bd-chat-css'; st.textContent = css; document.head.appendChild(st);
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'bdc-btn'; btn.setAttribute('aria-label', 'Buse Digital Asistan ile sohbet et'); btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<img src="' + LOGO + '" alt=""><span class="bdc-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg></span>';
    var tip = document.createElement('div'); tip.className = 'bdc-tip'; tip.textContent = 'Sorunuz mu var? 👋';
    var p = document.createElement('section'); p.className = 'bdc-panel'; p.hidden = true; p.setAttribute('role', 'dialog'); p.setAttribute('aria-label', 'Buse Digital Asistan');
    p.innerHTML = '<div class="bdc-head"><img src="' + LOGO + '" alt=""><div><strong>Buse Digital Asistan</strong><small>Sık sorulan sorulara anında yanıt</small></div><button type="button" class="bdc-x" aria-label="Sohbeti kapat">×</button></div>' +
      '<div class="bdc-log" aria-live="polite"></div><div class="bdc-chips"></div>' +
      '<p class="bdc-note">Hazır yanıtlar verir; yazdıklarınız kaydedilmez ve hiçbir yere gönderilmez.</p>' +
      '<form class="bdc-form"><input type="text" maxlength="200" placeholder="Sorunuzu yazın…" aria-label="Sorunuz"><button type="submit" aria-label="Gönder"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></button></form>';
    document.body.append(btn, tip, p);
    var log = p.querySelector('.bdc-log'), chips = p.querySelector('.bdc-chips'), inp = p.querySelector('input'), started = false;
    function add(html, who) { var m = document.createElement('div'); m.className = 'bdc-m ' + who; if (who === 'me') m.textContent = html; else m.innerHTML = html; log.appendChild(m); log.scrollTop = log.scrollHeight; }
    function renderChips(exclude) {
      chips.innerHTML = '';
      var ids = QUICK.concat(['reklam', 'urun', 'animasyon', 'avatar', 'sosyal', 'meta', 'web', 'odeme', 'kisiye']).filter(function (id) { return id !== exclude; });
      var seen = 0;
      ids.forEach(function (id) {
        if (seen >= 4) return; var it = A.filter(function (x) { return x.id === id; })[0]; if (!it || it.used) return; seen++;
        var c = document.createElement('button'); c.type = 'button'; c.className = 'bdc-chip'; c.textContent = it.q; c.onclick = function () { ask(it.q, it); }; chips.appendChild(c);
      });
    }
    function ask(text, forced) {
      add(text, 'me'); var it = forced || find(text);
      setTimeout(function () { if (it) { it.used = true; add(it.a, 'bot'); } else add(FALLBACK, 'bot'); renderChips(it && it.id); }, 350);
    }
    function open() {
      p.hidden = false; btn.style.display = 'none'; tip.remove(); btn.setAttribute('aria-expanded', 'true');
      if (!started) { started = true; add('Merhaba! Ben Buse Digital Asistanı. Hizmetler, fiyatlandırma, teslim süresi veya akademi hakkında merak ettiklerinizi sorabilirsiniz.', 'bot'); renderChips(); }
      setTimeout(function () { inp.focus(); }, 50);
    }
    function close() { p.hidden = true; btn.style.display = ''; btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    btn.onclick = open; tip.onclick = open; p.querySelector('.bdc-x').onclick = close;
    p.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    p.querySelector('form').addEventListener('submit', function (e) { e.preventDefault(); var v = inp.value.trim(); if (!v) return; inp.value = ''; ask(v); });
    p.addEventListener('click', function (e) { if (e.target.closest('a') && window.innerWidth <= 768) close(); });
    setTimeout(function () { if (tip.parentNode) tip.style.display = 'none'; }, 9000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
