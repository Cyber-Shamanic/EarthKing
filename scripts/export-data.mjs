import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const src=fs.readFileSync(path.join(root,'dist/app.js'),'utf8');
const beforeStorage=src.split('const storageKey=')[0];
const context=vm.createContext({});
const data=vm.runInContext(beforeStorage+'\nJSON.stringify({groups:groups.map(g=>g[0]),items})',context);
const parsed=JSON.parse(data);
const output=path.join(root,'exports');
fs.mkdirSync(output,{recursive:true});
fs.writeFileSync(path.join(output,'44-מידות.json'),JSON.stringify({project:'EarthKing',version:'0.0.3',...parsed},null,2));
const markdown=['# EarthKing — 44 המידות','',...parsed.items.flatMap(m=>[`## EK-${String(m.id).padStart(2,'0')} — ${m.title}`,`שער: ${parsed.groups[m.gate]}`,'',`- 🚫 סור מרע: ${m.avoid}`,`- ✅ עשה טוב: ${m.do}`,`- ✦ הלכה למעשה: ${m.action}`,''])].join('\n');
fs.writeFileSync(path.join(output,'44-מידות.md'),markdown);
console.log('Exported',parsed.items.length,'items');
