/* BUSE DIGITAL — single-instance contextual cursor module */
(()=>{
 'use strict';
 const allowed=matchMedia('(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)');
 if(window.BuseContextCursor?.destroy)window.BuseContextCursor.destroy();
 if(!allowed.matches)return;
 const dot=document.createElement('div'),ring=document.createElement('div'),caption=document.createElement('span');
 dot.className='bd-context-dot';ring.className='bd-context-ring';ring.append(caption);document.body.append(dot,ring);
 document.body.classList.add('bd-context-cursor');
 const state={x:0,y:0,rx:0,ry:0,shown:false,raf:0,hover:null,magnet:null,press:null};
 const restore=[];
 const setAttr=(el,name,value)=>{if(el.hasAttribute(name))return;el.setAttribute(name,value);};
 const mediaSelector=['#bd-featured-portfolio .proof-work-card','#home-collabs .proof-collaboration-visual','#home-start .hero-showcase figure','.proof-work-card','.discovery-card','.featured-card','.work-card','.work-card .media-open','.avatar-card','.avatar-item','.avatar-tile','.avatar-preview','.brand-media-frame','.media-open','.portfolio-card','.project-card','.studio-media-target','.studio-media-wrap'].join(',');
 const magneticSelector=['.smart-search-trigger','#home-start .hero-actions .button','#home-contact .button','.bc-submit','#contact-form button[type=submit]','.site-footer .footer-links a','.social-icon'].join(',');
 function decorate(){
  document.querySelectorAll(mediaSelector).forEach(el=>{
    if(el.hasAttribute('data-cursor'))return;
    const isVideo=el.matches('video')||!!el.querySelector('video, [data-media-type=video]');
    el.setAttribute('data-cursor',isVideo?'play':'view');
  });
  document.querySelectorAll('video').forEach(el=>{if(!el.hasAttribute('data-cursor')&&!el.closest('dialog'))el.setAttribute('data-cursor','play')});
  document.querySelectorAll(magneticSelector).forEach(el=>setAttr(el,'data-magnetic',''));
 }
 decorate();
 let scanPending=false;
 const observer=new MutationObserver(()=>{if(scanPending)return;scanPending=true;requestAnimationFrame(()=>{scanPending=false;decorate()})});
 observer.observe(document.body,{childList:true,subtree:true});
 const isNative=(el)=>!!el.closest('input,textarea,select,[contenteditable],dialog,[role=dialog]');
 const isOutside=(el)=>!!el.closest('dialog[open],[role=dialog][aria-modal=true]');
 const position=(el,x,y)=>{el.style.transform='translate3d('+x+'px,'+y+'px,0) translate3d(-50%,-50%,0)'};
 function resetMagnet(){if(state.magnet){state.magnet.style.translate='';state.magnet=null}}
 function updateMagnet(){
  const el=state.hover?.closest('[data-magnetic]')||null;
  if(!el){resetMagnet();return}
  if(state.magnet!==el)resetMagnet();
  state.magnet=el;
  const box=el.getBoundingClientRect();
  const centerX=box.left+box.width/2,centerY=box.top+box.height/2;
  const dx=state.x-centerX,dy=state.y-centerY;
  const range=Math.max(box.width,box.height)*.85+26;
  if(Math.hypot(dx,dy)>range){el.style.translate='';return}
  const maxX=box.width*.3,maxY=box.height*.3;
  const influence=Math.max(0,1-Math.hypot(dx,dy)/range);
  el.style.translate=(Math.max(-maxX,Math.min(maxX,dx*influence*.38))).toFixed(2)+'px '+(Math.max(-maxY,Math.min(maxY,dy*influence*.38))).toFixed(2)+'px';
 }
 function classify(target){
  if(!target||!target.closest){ring.className='bd-context-ring';dot.style.opacity=state.shown?'1':'0';return}
  const native=isNative(target);
  const custom=target.closest('[data-cursor]');
  const magnetic=target.closest('[data-magnetic]');
  const link=target.closest('a,button,[role=button]');
  const reveal=!!custom&&!native;
  ring.classList.toggle('is-reveal',reveal);
  ring.classList.toggle('is-magnetic',!!magnetic&&!reveal&&!native);
  ring.classList.toggle('is-link',!!link&&!magnetic&&!reveal&&!native);
  const en=document.documentElement.lang.toLowerCase().startsWith('en');
  caption.textContent=custom?.getAttribute('data-cursor-text')||(custom?.getAttribute('data-cursor')==='play'?(en?'▶ PLAY':'▶ OYNAT'):(en?'VIEW ↗':'GÖR ↗'));
  const visible=state.shown&&!native;
  ring.style.opacity=visible?'1':'0';
  dot.style.opacity=visible&&!reveal&&!link&&!magnetic?'1':'0';
  if(native)resetMagnet();
 }
 function frame(){
  state.raf=0;
  if(!state.shown)return;
  state.rx+=(state.x-state.rx)*.15;state.ry+=(state.y-state.ry)*.15;
  if(Math.abs(state.rx-state.x)<.09)state.rx=state.x;
  if(Math.abs(state.ry-state.y)<.09)state.ry=state.y;
  position(ring,state.rx,state.ry);
  if(state.rx!==state.x||state.ry!==state.y)state.raf=requestAnimationFrame(frame);
 }
 const request=()=>{if(!state.raf)state.raf=requestAnimationFrame(frame)};
 const mousemove=e=>{
  if(e.pointerType&&e.pointerType!=='mouse')return;
  state.x=e.clientX;state.y=e.clientY;
  if(!state.shown){state.shown=true;state.rx=state.x;state.ry=state.y}
  position(dot,state.x,state.y);
  state.hover=e.target;
  classify(state.hover);updateMagnet();request();
 };
 const over=e=>{state.hover=e.target;classify(state.hover)};
 const out=e=>{if(!e.relatedTarget){state.shown=false;dot.style.opacity='0';ring.style.opacity='0';resetMagnet()}else{state.hover=e.relatedTarget;classify(state.hover);if(!state.hover.closest('[data-magnetic]'))resetMagnet()}};
 const down=e=>{if(e.button===0)ring.classList.add('is-pressed')};
 const up=()=>ring.classList.remove('is-pressed');
 const leave=()=>{state.shown=false;dot.style.opacity='0';ring.style.opacity='0';resetMagnet()};
 const focus=()=>classify(document.elementFromPoint(state.x,state.y));
 document.addEventListener('pointermove',mousemove,{passive:true});
 document.addEventListener('mouseover',over,{passive:true});
 document.addEventListener('mouseout',out,{passive:true});
 document.addEventListener('pointerdown',down,{passive:true});
 document.addEventListener('pointerup',up,{passive:true});
 document.addEventListener('pointercancel',up,{passive:true});
 document.addEventListener('mouseleave',leave,{passive:true});
 document.addEventListener('focusin',focus,{passive:true});
 const onHash=()=>{resetMagnet();requestAnimationFrame(decorate)};
 window.addEventListener('hashchange',onHash);
 function destroy(){
  observer.disconnect();resetMagnet();if(state.raf)cancelAnimationFrame(state.raf);
  document.removeEventListener('pointermove',mousemove);document.removeEventListener('mouseover',over);document.removeEventListener('mouseout',out);document.removeEventListener('pointerdown',down);document.removeEventListener('pointerup',up);document.removeEventListener('pointercancel',up);document.removeEventListener('mouseleave',leave);document.removeEventListener('focusin',focus);window.removeEventListener('hashchange',onHash);
  dot.remove();ring.remove();document.body.classList.remove('bd-context-cursor');
 }
 window.BuseContextCursor={refresh:decorate,destroy};
 allowed.addEventListener?.('change',()=>{if(!allowed.matches){destroy();location.reload()}});
})();