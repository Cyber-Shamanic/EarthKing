/* EarthKing v0.0.6 — Royal Navigation & Independent Stickers */
(()=>{
  const qs=s=>document.querySelector(s);
  const nav=qs('.top .nav');
  if(nav){
    nav.id='earthkingNavigation';
    nav.classList.add('royal-nav-drawer');
    const button=document.createElement('button');
    button.id='navToggle';button.className='royal-nav-toggle';button.type='button';
    button.setAttribute('aria-controls',nav.id);button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','פתיחת תפריט הניווט');
    button.innerHTML='<span class="hamburger-mark" aria-hidden="true"><i></i><i></i><i></i></span><span class="nav-toggle-label">תפריט המלכות</span>';
    nav.before(button);
    const close=()=>{nav.classList.remove('is-open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','פתיחת תפריט הניווט')};
    const open=()=>{nav.classList.add('is-open');button.setAttribute('aria-expanded','true');button.setAttribute('aria-label','סגירת תפריט הניווט')};
    button.addEventListener('click',()=>nav.classList.contains('is-open')?close():open());
    nav.addEventListener('click',e=>{if(e.target.closest('a,button'))close()});
    document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!button.contains(e.target))close()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  }
  const toolbar=qs('.cognitive-toolbar');
  if(toolbar){
    const accordion=document.createElement('details');accordion.className='royal-access-accordion';
    accordion.innerHTML='<summary><span class="access-summary-icon">☷</span><span>♿ התאמת תצוגה ונגישות</span><span class="access-summary-note">צבעים · גופנים · גודל · נוחות קריאה</span><span class="access-chevron" aria-hidden="true">⌄</span></summary>';
    toolbar.before(accordion);accordion.append(toolbar);
    const original=qs('#displaySettings');if(original)original.textContent='⚙️ פתח סטודיו התאמה מפורט';
  }
  const header=qs('#wisdom');
  if(header){
    header.classList.add('royal-gateway');
    const intro=header.querySelector('.sub');if(intro)intro.textContent='בחר שער, פתח את סיפורו, והשקע במידה אחת בכל יום. לכל שער צבע, סמל ומד התקדמות אישי.';
    const labels=['כתר הבחירה','היכל החסד','אוצר הדעת','שומרי הארץ'];
    const adornments=['✧','❦','✦','❁'];
    [...header.querySelectorAll('.wisdom-card')].forEach((card,i)=>{
      card.classList.add('gateway-card');
      const heading=card.querySelector('h3');
      if(heading){heading.insertAdjacentHTML('beforebegin',`<div class="gateway-royal-mark" aria-hidden="true">${adornments[i]}</div><div class="gateway-ordinal">שער ${['ראשון','שני','שלישי','רביעי'][i]}</div>`)}
      const buttons=card.querySelectorAll('button');
      if(buttons[0])buttons[0].textContent='💎 11 המידות';
      if(buttons[1])buttons[1].textContent='📖 כניסה לשער';
      card.insertAdjacentHTML('beforeend',`<div class="gateway-meter-wrap"><div class="gateway-meter-title">${labels[i]} <strong id="gateCountV6-${i}">0 / 11</strong></div><div class="gateway-meter"><span id="gateBarV6-${i}"></span></div></div>`);
    });
    const originalUpdate=updateProgress;
    updateProgress=function(){originalUpdate();for(let gate=0;gate<4;gate++){const n=items.filter(m=>m.gate===gate&&completed.has(m.id)).length;const label=qs(`#gateCountV6-${gate}`),bar=qs(`#gateBarV6-${gate}`);if(label)label.textContent=`${n} / 11`;if(bar)bar.style.width=`${Math.round(n/11*100)}%`;}};
    updateProgress();
  }
  const museum=qs('#museum');if(museum){museum.classList.add('independent-museum');const intro=museum.querySelector('.sub');if(intro)intro.textContent='20 יצירות רסטר עצמאיות — כל סטיקר נוצר כקומפוזיציה נפרדת על רקע שקוף; הגדלה והורדת PNG מקורי בלחיצה.';}
  const name=qs('#version');if(name){name.textContent='v0.0.6';name.onclick=()=>openMarkdown('CHANGELOG.md','יומן גרסאות · v0.0.6')}
  document.title='EarthKing | מלך הארץ הזאת — v0.0.6';
  const footer=qs('.foot');if(footer)footer.innerHTML=footer.innerHTML.replace('גרסה 0.0.5','גרסה 0.0.6');
})();
