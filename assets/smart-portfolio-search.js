(()=>{'use strict';
const nav=document.getElementById('navigation');if(!nav||document.getElementById('smart-portfolio-search'))return;
const normalize=s=>String(s||'').toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i');
const labels={automotive:'Otomotiv',cosmetics:'Kozmetik',fashion:'Moda',food:'Gıda',pets:'Evcil Hayvan',architecture:'Mimari',technology:'Elektronik / Ev',furniture:'Mobilya',business:'İşletme Tanıtımı',retail:'E-Ticaret',personal:'Kişiye Özel Animasyon',brand:'Markaya Özel Animasyon'};
const control=document.createElement('div');control.id='smart-portfolio-search';control.className='smart-search';
control.innerHTML='<button type="button" class="smart-search-trigger" aria-expanded="false" aria-controls="smart-search-panel" aria-label="Akıllı Portföy Arama"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg><span>Akıllı Portföy Arama</span></button><div id="smart-search-panel" class="smart-search-panel" hidden><label for="smart-search-input">Portföyde Ara</label><input id="smart-search-input" type="search" autocomplete="off" placeholder="Marka, ürün, sektör veya proje ara…"><div id="smart-search-results" class="smart-search-results" role="status" aria-live="polite"></div></div>';
nav.append(control);
const trigger=control.querySelector('.smart-search-trigger'),panel=control.querySelector('.smart-search-panel'),input=control.querySelector('input'),results=control.querySelector('.smart-search-results');
function close(){panel.hidden=true;trigger.setAttribute('aria-expanded','false')}
function open(){panel.hidden=false;trigger.setAttribute('aria-expanded','true');render();input.focus()}
trigger.addEventListener('click',()=>panel.hidden?open():close());
function items(){
 const out=[],seen=new Set();
 function add(title,category,description,href,keywords){if(!title||!href||seen.has(href+'|'+title))return;seen.add(href+'|'+title);out.push({title,category,description,href,keywords})}
 if(typeof PORTFOLIO!=='undefined'){
  (PORTFOLIO.works||[]).forEach(w=>{const cat=labels[w.category]||w.category||'Portföy';const tab=w.type==='animation'?'animation':w.type==='collaborations'?'collaborations':'ai';const url='#/hizmetlerim?tab='+encodeURIComponent(tab)+(w.category?'&sector='+encodeURIComponent(w.category):'')+'&project='+encodeURIComponent(w.id);add(w.title,cat,w.description||'',url,[w.id,w.type,w.category,cat].join(' '))});
  (PORTFOLIO.sectors||[]).filter(x=>x[0]!=='all').forEach(x=>add(x[1],'Sektör','Sektördeki çalışmaları inceleyin','#/hizmetlerim?tab=ai&sector='+encodeURIComponent(x[0]),x[0]));
 }
 [['AI Avatarlarım','#/ai-avatarlarim'],['UGC İçeriklerim','#/ugc-iceriklerim'],['Animasyon','#/hizmetlerim?tab=animation'],['İletişim','#/iletisim'],['Hizmetlerim','#/hizmetlerim?tab=ai'],['Web Sitesi Tasarımı','#/hizmetlerim']].forEach(x=>add(x[0],'Sayfa','',x[1],'hizmet portföy'));
 return out;
}
function render(){
 const q=normalize(input.value.trim());results.replaceChildren();
 if(!q){const p=document.createElement('p');p.textContent='Otomotiv, paspas, kozmetik veya marka adı arayabilirsiniz.';results.append(p);return}
 const found=items().map(x=>({...x,score:normalize(x.title).includes(q)?3:normalize(x.category).includes(q)?2:normalize(x.description+' '+x.keywords).includes(q)?1:0})).filter(x=>x.score).sort((a,b)=>b.score-a.score).slice(0,12);
 if(!found.length){const p=document.createElement('p');p.textContent='Eşleşen çalışma bulunamadı.';results.append(p);const a=document.createElement('a');a.href='#/iletisim';a.textContent='Projeniz için iletişime geçin →';results.append(a);return}
 found.forEach(x=>{const a=document.createElement('a');a.href=x.href;a.className='smart-search-result';const strong=document.createElement('strong');strong.textContent=x.title;const small=document.createElement('small');small.textContent=x.category;a.append(strong,small);results.append(a)});
}
input.addEventListener('input',render);
results.addEventListener('click',e=>{if(e.target.closest('a'))close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
document.addEventListener('click',e=>{if(!control.contains(e.target))close()});
window.addEventListener('hashchange',close);
})();