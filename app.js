const groups=[
 ['מלכות האדם','👑',[
 ['ענווה','אל תתנשא על אחרים','הכר בערכו של כל אדם','הקשב היום למישהו בלי לקטוע אותו'],
 ['אמת','אל תעוות עובדות לנוחותך','דבר אמת ברגישות','תקן פרט אחד שאמרת באופן לא מדויק'],
 ['משמעת','אל תיכנע לכל דחף רגעי','בחר הרגל קטן והתמד בו','הקדש עשר דקות למשימה חשובה'],
 ['אומץ','אל תיתן לפחד לבטל את ערכיך','פעל נכון גם כשלא נוח','עשה צעד אמיץ ומכבד אחד'],
 ['סבלנות','אל תדרוש שכל דבר יקרה מיד','תן לזמן ולתהליך מקום','המתן בנחת לפני תגובה'],
 ['אחריות','אל תטיל כל אשמה על הזולת','קח אחריות על חלקך','אמור: כאן אני יכול לתקן'],
 ['מתינות','אל תפעל מתוך קיצוניות','בחר במידה ובאיזון','עצור לבדיקה לפני החלטה'],
 ['שמחה','אל תבטל את הטוב שכבר קיים','הודה על הטוב הקטן','כתוב שלושה דברים משמחים'],
 ['גבורה','אל תבלבל כוח עם פגיעה','משול ביצר ובתגובה','התאפק מפעולה מזיקה אחת'],
 ['תקווה','אל תכריע שהכול אבוד','שמור פתח לצמיחה','כתוב צעד חיובי למחר'],
 ['כבוד עצמי','אל תבזה את עצמך','שמור על גבולות וכבוד','בחר אמירה טובה ואמיתית על עצמך']]],
 ['בין אדם לחברו','🤝',[
 ['חסד','אל תתעלם מצורך ברור','הושט עזרה בלי השפלה','עזור לאדם אחד באופן מעשי'],
 ['כבוד הבריות','אל תלבין פני אדם','דבר בכבוד גם במחלוקת','החמא בכנות למישהו'],
 ['הקשבה','אל תכין תשובה במקום להקשיב','תן מקום לקול האחר','שאל שאלה והקשב עד הסוף'],
 ['נדיבות','אל תאחז בכל מה שיש לך','חלוק זמן או משאב בחכמה','תן משהו ללא ציפייה לתמורה'],
 ['מחילה','אל תטפח עלבון לנצח','חפש דרך לתיקון והשלמה','כתוב צעד קטן להפגת כעס'],
 ['שלום','אל תוסיף אש למריבה','חפש גשר של הבנה','בחר משפט מפייס אחד'],
 ['נאמנות','אל תבגוד באמון שניתן בך','עמוד בהתחייבות ראויה','קיים הבטחה קטנה'],
 ['צדקה','אל תאטום לב למצוקה','תן באופן המכבד את המקבל','בדוק דרך אמינה לתרום או לסייע'],
 ['הכרת הטוב','אל תיקח את עמל הזולת כמובן מאליו','אמור תודה מפורשת','שלח הודיית אמת לאדם שעזר לך'],
 ['עין טובה','אל תמהר לפרש כל מעשה לרעה','חפש נקודת זכות','מצא מעלָה באדם שמאתגר אותך'],
 ['ערבות','אל תעמוד מנגד לפגיעה','תמוך בצדק ובביטחון','בדוק מי בסביבתך זקוק לעזרה']]],
 ['דעת ומעשה','📖',[
 ['לימוד','אל תסתפק בסיסמאות','בדוק והעמק במקורות','למד רעיון חדש במשך רבע שעה'],
 ['תבונה','אל תחליט בלי להבין השלכות','שקול עובדות וערכים','כתוב יתרון וחיסרון להחלטה'],
 ['דיבור נקי','אל תפיץ לשון הרע','דבר באופן בונה ומדויק','הימנע היום מרכילות אחת'],
 ['כוונה','אל תפעל רק למראית עין','בדוק לשם מה אתה פועל','נסח כוונה למעשיך היום'],
 ['חריצות','אל תדחה כל דבר חשוב','התחל בפעולה ממוקדת','בצע משימה של חמש דקות'],
 ['יצירתיות','אל תיכנע למחשבה שאין פתרון','נסה דרך חדשה ואחראית','הצע פתרון חלופי לאתגר'],
 ['דיוק','אל תמהר במחיר של שגיאה','בדוק פרטים לפני פרסום','עבור שוב על מסר חשוב'],
 ['ענייניות','אל תגלוש להתקפות אישיות','התמקד בטענה ובמעשה','נסח ביקורת בלי כינויי גנאי'],
 ['התבוננות','אל תחיה רק על טייס אוטומטי','עצור לחשבון נפש','שאל מה למדתי היום'],
 ['עקביות','אל תנטוש יעד בגלל קושי יחיד','חזור לצעד הבא','השלם פעולה קטנה מהרגל שבחרת'],
 ['יושרה','אל תפריד ערכים ממעשים','פעל לפי העקרונות שלך','בדוק התאמה בין הבטחה לפעולה']]],
 ['אחריות לעולם','🌍',[
 ['צדק','אל תעדיף כוח על פני הגינות','בחן כל אדם באמת מידה שווה','תקן חוסר הוגנות קטן'],
 ['שמירת הטבע','אל תבזבז משאבים ללא צורך','השתמש במה שיש בתבונה','צמצם פסולת אחת היום'],
 ['קהילה','אל תתנתק מצורכי הכלל','תרום מיכולתך לסביבה','השתתף במעשה קהילתי'],
 ['חירות','אל תכפה רצונך על הזולת','כבד בחירה וגבולות','שאל להסכמה לפני החלטה משותפת'],
 ['רחמים','אל תקשיח לב מול סבל','שלב רגישות עם אחריות','הצע תמיכה למי שקשה לו'],
 ['מנהיגות','אל תדרוש מאחרים מה שאינך מקיים','היה דוגמה אישית','בצע ראשון מעשה שאתה מבקש מאחרים'],
 ['שקיפות','אל תסתיר מידע מהותי בזדון','שתף בהגינות את הנוגעים בדבר','הבהר ציפייה או מגבלה'],
 ['שיתוף פעולה','אל תראה בכל שותף יריב','חפש כוח בעבודה משותפת','הזמן אדם לחשיבה משותפת'],
 ['שמירת החיים','אל תזלזל בבטיחות וברווחה','בחר בהתנהגות מגינה','בדוק מפגע בטיחותי בסביבה'],
 ['תיקון','אל תסתפק בביקורת בלבד','הצע דרך מעשית לשיפור','תקן דבר קטן בסביבתך'],
 ['ברכה','אל תשתמש בהצלחה רק לעצמך','הפוך שפע לאחריות ולנתינה','שתף את הטוב עם אדם נוסף']]]
];
const items=groups.flatMap((g,gi)=>g[2].map((m,i)=>({id:gi*11+i+1,gate:gi,title:m[0],avoid:m[1],do:m[2],action:m[3]})));
const storageKey='earthking-progress-v1';const favoritesKey='earthking-favorites-v2';const journalKey='earthking-journal-v2';let completed=new Set();try{const saved=JSON.parse(localStorage.getItem(storageKey)||'[]');if(Array.isArray(saved))completed=new Set(saved.filter(v=>Number.isInteger(v)&&v>=1&&v<=44));}catch{}
const readStored=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
let favorites=new Set((readStored(favoritesKey,[])).filter?.(v=>Number.isInteger(v)&&v>=1&&v<=44)||[]);
let journal=(readStored(journalKey,[]));if(!Array.isArray(journal))journal=[];journal=journal.filter(v=>v&&typeof v.text==='string'&&typeof v.date==='string').slice(0,200);
let activeGate='all';const $=id=>document.getElementById(id);const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function save(){localStorage.setItem(storageKey,JSON.stringify([...completed].sort((a,b)=>a-b)));updateProgress();render();}
function updateProgress(){const n=completed.size;$('doneCount').textContent=n;$('progressLabel').textContent=`${n} מתוך 44 מידות · ${Math.round(n/44*100)}%`;$('progressBar').style.width=`${n/44*100}%`;$('progressTrack').setAttribute('aria-valuenow',n);}
function render(){const q=$('search').value.trim().toLocaleLowerCase('he');const state=$('status').value;const visible=items.filter(m=>(activeGate==='all'||m.gate===Number(activeGate))&&(state==='all'||state==='favorite'&&favorites.has(m.id)||state==='done'&&completed.has(m.id)||state==='todo'&&!completed.has(m.id))&&[m.title,m.avoid,m.do,m.action,groups[m.gate][0]].some(s=>s.toLocaleLowerCase('he').includes(q)));$('cards').innerHTML=visible.map(m=>`<article class="card ${completed.has(m.id)?'done':''}"><div class="card-top"><span class="number">EK-${String(m.id).padStart(2,'0')}</span><span>${groups[m.gate][1]} ${groups[m.gate][0]}</span></div><h3>${escapeHtml(m.title)}</h3><div class="pair"><b>🚫 סור מרע</b>${escapeHtml(m.avoid)}</div><div class="pair good"><b>✅ עשה טוב</b>${escapeHtml(m.do)}</div><p class="practice">✦ הלכה למעשה: ${escapeHtml(m.action)}</p><div class="card-bottom"><button class="check" data-toggle="${m.id}" aria-pressed="${completed.has(m.id)}">${completed.has(m.id)?'✓ בוצע · בטל סימון':'○ סימון כבוצע'}</button><button class="mini ${favorites.has(m.id)?'fav':''}" data-fav="${m.id}" aria-label="מועדף ${escapeHtml(m.title)}" aria-pressed="${favorites.has(m.id)}">${favorites.has(m.id)?'★':'☆'}</button><button class="mini" data-detail="${m.id}" aria-label="פרטי ${escapeHtml(m.title)}">קלף</button></div></article>`).join('');$('empty').hidden=visible.length>0;}
function renderGates(){$('gates').innerHTML=[['all','כל השערים'],...groups.map((g,i)=>[String(i),`${g[1]} ${g[0]}`])].map(([id,label])=>`<button class="gate ${activeGate===id?'active':''}" data-gate="${id}" aria-pressed="${activeGate===id}">${label}</button>`).join('');}
function modal(title,html){$('modalTitle').textContent=title;$('modalBody').innerHTML=html;$('modal').showModal();}
function cardText(m){return `👑 EarthKing · EK-${String(m.id).padStart(2,'0')} · ${m.title}\n🚫 סור מרע: ${m.avoid}\n✅ עשה טוב: ${m.do}\n✦ הלכה למעשה: ${m.action}\nAnLoMinus · Cyber Shamanic`;}
function detail(id){const m=items.find(x=>x.id===id);if(!m)return;modal(`${m.title} · EK-${String(id).padStart(2,'0')}`,`<div class="card-art"><div class="crown">${groups[m.gate][1]}</div><p>EARTHKING · מלך הארץ הזאת</p><h3>${escapeHtml(m.title)}</h3><p>🚫 ${escapeHtml(m.avoid)}</p><p>✅ ${escapeHtml(m.do)}</p><p>✦ ${escapeHtml(m.action)}</p><span class="tiny">AnLoMinus · Cyber Shamanic</span></div><div class="modal-actions"><button class="quiet" data-copy="${id}">📋 העתקת הקלף</button><button class="quiet" data-share="${id}">↗ שיתוף</button></div><p class="tiny">הנוסחים הם יצירה מקורית בהשראת ערכי מוסר כלליים, ואינם מובאים כציטוט הלכתי.</p>`);}
document.addEventListener('click',async e=>{const t=e.target.closest('[data-toggle],[data-detail],[data-gate],[data-fav],[data-copy],[data-share],[data-delete]');if(!t)return;if(t.dataset.toggle){const id=Number(t.dataset.toggle);completed.has(id)?completed.delete(id):completed.add(id);save();}if(t.dataset.fav){const id=Number(t.dataset.fav);favorites.has(id)?favorites.delete(id):favorites.add(id);localStorage.setItem(favoritesKey,JSON.stringify([...favorites]));render();}if(t.dataset.detail)detail(Number(t.dataset.detail));if(t.dataset.gate){activeGate=t.dataset.gate;renderGates();render();}if(t.dataset.copy){try{await navigator.clipboard.writeText(cardText(items[Number(t.dataset.copy)-1]));t.textContent='✓ הועתק';}catch{t.textContent='לא ניתן להעתיק בדפדפן זה';}}if(t.dataset.share){const m=items[Number(t.dataset.share)-1];try{if(navigator.share)await navigator.share({title:m.title,text:cardText(m)});else{await navigator.clipboard.writeText(cardText(m));t.textContent='✓ הועתק לשיתוף';}}catch{}}if(t.dataset.delete){const idx=Number(t.dataset.delete);journal.splice(idx,1);persistJournal();}});
$('search').addEventListener('input',render);$('status').addEventListener('change',render);$('closeModal').onclick=()=>$('modal').close();
const dayIndex=Math.floor(Date.now()/86400000)%44;const daily=items[dayIndex];$('dailyTitle').textContent=daily.title;$('dailyText').textContent=`🚫 ${daily.avoid}  ·  ✅ ${daily.do}`;$('dailyAction').textContent=`הפעולה של היום: ${daily.action}`;$('dailyOpen').onclick=()=>detail(daily.id);
$('about').onclick=()=>modal('אודות EarthKing',`<p>מלך הארץ הזאת — 44 מידות לתרגול עצמי, צדק, חמלה ואחריות. ארבעה שערים, אחת עשרה מידות בכל שער.</p><p><strong>יוצר:</strong> לאון יעקובוב (AnLoMinus) · Cyber Shamanic</p><p><a href="https://github.com/Anlominus" target="_blank" rel="noopener">GitHub</a> · <a href="https://www.linkedin.com/in/anlominus/" target="_blank" rel="noopener">LinkedIn</a> · <a href="https://codepen.io/Anlominus" target="_blank" rel="noopener">CodePen</a></p><p><a href="mailto:cybershamanic@gmail.com">cybershamanic@gmail.com</a><br><a href="https://wa.me/972535366687" target="_blank" rel="noopener">WhatsApp: 053-536-6687</a><br><a href="https://wa.me/972543285967" target="_blank" rel="noopener">WhatsApp: 054-328-5967</a></p><p class="tiny">הסימונים נשמרים בדפדפן בלבד. אין מעקב אחרי מבקרים.</p>`);
$('version').onclick=()=>openMarkdown('CHANGELOG.md','יומן גרסאות · v0.0.3');
$('tasks').onclick=()=>openMarkdown('TODO.md','יומן משימות · TODO');
async function openMarkdown(path,title){try{const res=await fetch(path);if(!res.ok)throw Error('המסמך אינו זמין');const md=await res.text();const html=md.split('\n').map(line=>{const s=escapeHtml(line);if(s.startsWith('### '))return `<h3>${s.slice(4)}</h3>`;if(s.startsWith('## '))return `<h3>${s.slice(3)}</h3>`;if(s.startsWith('# '))return `<h2>${s.slice(2)}</h2>`;if(s.startsWith('- [x] '))return `<p>✅ ${s.slice(6)}</p>`;if(s.startsWith('- [ ] '))return `<p>☐ ${s.slice(6)}</p>`;if(s.startsWith('- '))return `<p>• ${s.slice(2)}</p>`;return s?`<p>${s}</p>`:''}).join('');modal(title,`<div class="md">${html}</div>`);}catch(err){modal(title,escapeHtml(err.message));}}
function downloadJson(name,body){const blob=new Blob([JSON.stringify(body,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
$('export').onclick=()=>downloadJson('earthking-progress.json',{app:'EarthKing',version:'0.0.3',date:new Date().toISOString(),completed:[...completed],favorites:[...favorites],journal});
$('import').onclick=()=>$('importFile').click();$('importFile').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>500000)throw Error('קובץ גדול מדי');const data=JSON.parse(await file.text());const validIds=a=>Array.isArray(a)&&a.every(v=>Number.isInteger(v)&&v>=1&&v<=44);if(data.app!=='EarthKing'||!validIds(data.completed)||data.favorites!==undefined&&!validIds(data.favorites)||data.journal!==undefined&&(!Array.isArray(data.journal)||data.journal.length>200||data.journal.some(v=>!v||typeof v.text!=='string'||v.text.length>2000||typeof v.date!=='string')))throw Error('מבנה קובץ לא תקין');completed=new Set(data.completed);if(data.favorites)favorites=new Set(data.favorites);if(data.journal)journal=data.journal;localStorage.setItem(favoritesKey,JSON.stringify([...favorites]));persistJournal();save();modal('ייבוא הושלם','ההתקדמות, המועדפים והיומן נטענו בהצלחה.');}catch(err){modal('שגיאה בייבוא',escapeHtml(err.message));}e.target.value='';});
function persistJournal(){localStorage.setItem(journalKey,JSON.stringify(journal));renderJournal();}
function renderJournal(){$('journalList').innerHTML=journal.map((r,i)=>`<div class="journal-row"><div class="tiny">${escapeHtml(r.date)}</div><p>${escapeHtml(r.text)}</p><button class="mini" data-delete="${i}" aria-label="מחיקת רשומה">מחיקה</button></div>`).join('')||'<p class="tiny">אין עדיין רשומות. אפשר להתחיל בצעד אחד קטן.</p>';}
$('saveReflection').onclick=()=>{const text=$('reflection').value.trim();if(!text)return;if(text.length>2000)return;journal.unshift({date:new Date().toLocaleString('he-IL',{timeZone:'Asia/Jerusalem'}),text});journal=journal.slice(0,200);$('reflection').value='';persistJournal();};
$('exportJournal').onclick=()=>downloadJson('earthking-journal.json',{app:'EarthKing',version:'0.0.3',journal});
$('printCards').onclick=()=>window.print();
document.querySelectorAll('[data-gate-jump]').forEach(button=>button.addEventListener('click',()=>{activeGate=button.dataset.gateJump;renderGates();render();$('library').scrollIntoView({behavior:'smooth'});}));
let psalmFull='';
async function loadPsalm(){try{const res=await fetch('ROYAL_PSALM.md');if(!res.ok)throw Error('file');const md=await res.text();psalmFull=md;const text=md.split('\n').filter(l=>!l.startsWith('# ')&&!l.startsWith('*')&&!l.startsWith('---')&&!l.startsWith('**')&&l.trim());$('psalmText').innerHTML=text.map(l=>l.startsWith('## ')?`<h3>${escapeHtml(l.slice(3))}</h3>`:`<p>${escapeHtml(l.replace(/  $/,''))}</p>`).join('');}catch{$('psalmText').textContent='מזמור מלכות — כתר של תיקון. קובץ המזמור זמין בחבילת הפרויקט.';}}
$('copyPsalm').onclick=async()=>{if(!psalmFull)return;try{await navigator.clipboard.writeText(psalmFull);$('copyPsalm').textContent='✓ המזמור הועתק';}catch{$('copyPsalm').textContent='העתקה אינה זמינה בדפדפן זה';}};
loadPsalm();
renderGates();updateProgress();render();renderJournal();
