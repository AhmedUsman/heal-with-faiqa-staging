'use strict';
const menu=document.querySelector('#toggle');
menu?.addEventListener('click',()=>menu.setAttribute('aria-expanded',String(menu.getAttribute('aria-expanded')!=='true')));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){menu.setAttribute('aria-expanded','false');menu.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))menu?.setAttribute('aria-expanded','false')});
const cfg=window.HEAL_CONFIG||{};
function form(key){try{const u=new URL(cfg.bookingForms?.[key]);return u.protocol==='https:'&&!u.username&&!u.password?u.href:''}catch{return ''}}
document.querySelectorAll('[data-book]').forEach(a=>{const url=form(a.dataset.book);if(url)a.href=url});
document.querySelectorAll('[data-form]').forEach(box=>{const url=form(box.dataset.form);if(!url)return;const a=document.createElement('a');a.className='btn';a.href=url;a.textContent='Open booking form ↗';box.replaceChildren(a)});
document.querySelector('#print')?.addEventListener('click',()=>window.print());
const videos=document.querySelector('#videos');if(videos){const labels={emotional:'Emotional wellbeing',mindset:'Mindset & self-talk',quran:'Quranic reflection'};const items=Object.entries(cfg.youtube||{}).filter(([k,v])=>k in labels&&/^[\w-]{11}$/.test(v));if(items.length){videos.lastElementChild.remove();for(const [k,v] of items){const b=document.createElement('button');b.className='btn';b.textContent='Play on YouTube: '+labels[k];b.onclick=()=>{const f=document.createElement('iframe');f.className='video';f.title=labels[k];f.src='https://www.youtube-nocookie.com/embed/'+v+'?autoplay=1';f.allow='autoplay; encrypted-media';f.allowFullscreen=true;b.replaceWith(f)};videos.append(b)}}}
