"""Build a print-ready, Hebrew RTL A5 EarthKing booklet using local assets."""
import ctypes
import json
import os
import pathlib
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A5
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader

ROOT=pathlib.Path(__file__).resolve().parents[1]
OUT=ROOT/'dist/assets/pdf/EarthKing_Royal_Booklet_v0.0.3.pdf'
OUT.parent.mkdir(parents=True,exist_ok=True)
data=json.loads((ROOT/'exports/44-מידות.json').read_text(encoding='utf-8'))
font='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
bold='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
pdfmetrics.registerFont(TTFont('Hebrew',font));pdfmetrics.registerFont(TTFont('HebrewBold',bold))
W,H=A5; navy=HexColor('#0A1627'); navy2=HexColor('#162B40');gold=HexColor('#D1A353');cream=HexColor('#FFF4D9');muted=HexColor('#CCD4D3')
f=ctypes.CDLL('libfribidi.so.0');f.fribidi_log2vis.argtypes=[ctypes.POINTER(ctypes.c_uint),ctypes.c_int,ctypes.POINTER(ctypes.c_uint),ctypes.POINTER(ctypes.c_uint),ctypes.c_void_p,ctypes.c_void_p,ctypes.c_void_p];f.fribidi_log2vis.restype=ctypes.c_int
def rtl(s):
    chars=(ctypes.c_uint*len(s))(*map(ord,s));out=(ctypes.c_uint*len(s))();base=ctypes.c_uint(0)
    if not s:return ''
    f.fribidi_log2vis(chars,len(s),ctypes.byref(base),out,None,None,None)
    return ''.join(chr(c) for c in out)
def label(c,t,x,y,size=12,color=cream,boldface=False):
    c.setFillColor(color);c.setFont('HebrewBold' if boldface else 'Hebrew',size);c.drawRightString(x,y,rtl(t))
def lines(s,size,width,face='Hebrew'):
    words=s.split();out=[];line=''
    for w in words:
        try_line=(line+' '+w).strip()
        if line and pdfmetrics.stringWidth(rtl(try_line),face,size)>width:
            out.append(line);line=w
        else:line=try_line
    if line:out.append(line)
    return out
def block(c,text,x,y,size=10,width=275,leading=19,color=cream,boldface=False):
    for line in lines(text,size,width,'HebrewBold' if boldface else 'Hebrew'):
        label(c,line,x,y,size,color,boldface);y-=leading
    return y
def background(c,page):
    c.setFillColor(navy);c.rect(0,0,W,H,fill=1,stroke=0)
    c.setStrokeColor(gold);c.setLineWidth(1.1);c.roundRect(20,20,W-40,H-40,13,fill=0,stroke=1)
    c.setStrokeColor(HexColor('#725A34'));c.setLineWidth(.45);c.roundRect(26,26,W-52,H-52,9,fill=0,stroke=1)
    c.setFillColor(gold);c.circle(W/2,H-31,2,stroke=0,fill=1)
    c.setFont('Hebrew',7);c.setFillColor(muted);c.drawCentredString(W/2,29,'AnLoMinus  |  Cyber Shamanic  |  2026')
    c.drawString(35,29,str(page))
def header(c,txt):
    label(c,txt,W-44,H-57,13,gold,True)
    c.setStrokeColor(gold);c.line(44,H-68,W-44,H-68)
def new(c,page,heading=None):
    c.showPage();background(c,page)
    if heading:header(c,heading)

c=canvas.Canvas(str(OUT),pagesize=A5,pageCompression=1)
c.setTitle('EarthKing — ספר חכמה ומלכות — v0.0.3')
background(c,1)
crown=ROOT/'dist/assets/images/royal-crown.png'
if crown.exists():c.drawImage(ImageReader(str(crown)),W/2-122,H-300,width=244,height=177,mask='auto',preserveAspectRatio=True,anchor='c')
label(c,'מֶלֶךְ הָאָרֶץ הַזֹּאת',W-47,H-345,24,gold,True)
label(c,'ספר חכמה ומלכות',W-47,H-385,19,cream,True)
label(c,'44 מידות | ארבעה שערים | תיקון עצמי',W-47,H-420,10,muted)
label(c,'לאון יעקובוב (AnLoMinus)',W-47,120,10,cream)
label(c,'כ״ה בחשוון תשפ״ז | 5 בנובמבר 2026',W-47,94,8,muted)
page=2;new(c,page,'הקדמה — הכתר הפנימי')
y=H-100
for para in ['מלכות האדם אינה נבנית מן הכוח המופעל על אחרים, אלא מן האחריות שהוא נוטל על עצמו.', 'הכתר הוא סמל למשמעת, לצדק ולחמלה. מי שעוצר לפני פגיעה, מקשיב לפני משפט ומתקן לפני האשמה - נושא כתר פנימי.', 'זהו ספר תרגול: ארבעה שערים, ארבעים וארבע מידות. בכל מידה סור מרע, עשה טוב ופעולה מעשית.', 'הנוסחים מקוריים ללימוד ולמחשבה. אין כאן פסקי הלכה.']:
    y=block(c,para,W-47,y,12,285,25);y-=22

introductions=[
 ('מלכות האדם','המלך הראשון שאדם פוגש הוא האדם שבמראה. ענווה אינה מחיקת הערך העצמי, וגבורה אינה צעקה. מלכות מתחילה בבחירה מדויקת.', 'באיזה רגע אוכל להנהיג את עצמי מתוך בחירה ולא מתוך תגובה?'),
 ('בין אדם לחברו','אין כתר המצדיק השפלה. כבוד הבריות הוא יסודה של הנהגה ראויה; הקשבה, חסד ומחילה פותחים דרך לתיקון.', 'האם דבריי היום הגדילו את כבוד האדם שלפניי?'),
 ('דעת ומעשה','לימוד שאינו יורד אל המעשה נשאר רעיון. חכמה מבקשת אמת, בדיקה, התמדה ונכונות לתקן טעות.', 'מה אני יודע שהוא נכון, ועדיין דוחה את עשייתו?'),
 ('אחריות לעולם','הארץ אינה רכושו המוחלט של האדם. המשאבים שבידיו הם אחריות לשמירת החיים, לצדק ולדורות הבאים.', 'איזה חלק קטן מן העולם נמצא היום באחריותי?')]

for gate,(title,intro,question) in enumerate(introductions):
    page+=1;new(c,page,f'שער {gate+1} — {title}')
    y=H-115;y=block(c,intro,W-47,y,13,285,27);y-=30
    label(c,'שאלה להתבוננות',W-47,y,14,gold,True);y-=30
    y=block(c,question,W-47,y,12,285,25);y-=43
    label(c,'דרך העבודה',W-47,y,14,gold,True);y-=30
    y=block(c,'בחר מידה אחת מן השער. קרא את עקרונות סור מרע ועשה טוב. פעל היום בדרך מעשית אחת, וכתוב בערב מה למדת.',W-47,y,12,285,25)
    members=[m for m in data['items'] if m['gate']==gate]
    for idx in range(0,len(members),2):
        page+=1;new(c,page,title)
        for j,m in enumerate(members[idx:idx+2]):
            top=H-95-j*235
            c.setFillColor(navy2);c.setStrokeColor(HexColor('#81673B'));c.roundRect(39,top-209,W-78,209,10,stroke=1,fill=1)
            label(c,f"{m['title']}  ·  EK-{m['id']:02}",W-55,top-27,15,gold,True)
            label(c,'סור מרע',W-55,top-50,9,gold,True)
            block(c,m['avoid'],W-55,top-69,9.5,290,15)
            label(c,'עשה טוב',W-55,top-110,9,HexColor('#A8E4BE'),True)
            block(c,m['do'],W-55,top-128,9.5,290,15)
            label(c,'הלכה למעשה',W-55,top-170,9,gold,True)
            block(c,m['action'],W-55,top-187,9,290,14)

psalm=(ROOT/'ROYAL_PSALM.md').read_text(encoding='utf-8')
stanzas=[];current=[]
for line in psalm.splitlines():
    if line.startswith('## '):
        if current:stanzas.append(current);current=[]
    elif line.strip() and not line.startswith('#') and not line.startswith('*') and not line.startswith('---') and not line.startswith('**'):
        current.append(line.rstrip())
if current:stanzas.append(current)
for k in range(0,len(stanzas),2):
    page+=1;new(c,page,'מזמור מלכות — כתר של תיקון')
    y=H-115
    for stanza in stanzas[k:k+2]:
        for line in stanza:
            y=block(c,line,W-45,y,11,292,22,cream,True)
        y-=32
page+=1;new(c,page,'חתימה וברכה')
y=H-120
y=block(c,'הכתר הנכון ביותר אינו מונח על הראש: הוא ניכר בלב, במילה ובמעשה.',W-45,y,15,290,31,gold,True)
y-=60
block(c,'״איזהו גיבור? הכובש את יצרו״ — אבות ד׳, א׳.',W-45,y,12,290,27)
c.save()
print(OUT,'pages',page)
