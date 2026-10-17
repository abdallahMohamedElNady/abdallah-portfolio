import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import emailjs from '@emailjs/browser';
import { ArrowDown, ArrowUpRight, ArrowUp, Code2, Bug, BrainCircuit, ShieldCheck, Server, Github, Linkedin, Instagram, Facebook, Mail, Menu, X, Sun, Moon, MessageCircle, Sparkles, Globe2, Send, CheckCircle2, AlertTriangle, Gamepad2, Trophy, Star, RotateCcw } from 'lucide-react';
import './style.css';

const content = {
 en: {
  nav: ['Home','About','Skills','Projects','Mini game','Contact'],
  eyebrow: 'FRONT-END DEVELOPER · SOFTWARE TESTER',
  heroLead: 'I’m Abdallah El Nady.',
  roles: ['Front-End Developer', 'Software Tester'],
  greeting: ['Good morning', 'Good afternoon', 'Good evening'],
  intro: 'I’m Abdallah El Nady — a Front-End Developer and Software Tester focused on crafting thoughtful web experiences and making software more reliable.',
  contact: 'Let’s talk on WhatsApp', projects: 'Explore projects', scroll: 'SCROLL TO EXPLORE', gameTitle: 'A little game break', gameText: 'Collect stars and avoid bugs. Use the arrow keys or the controls.', gameStart: 'Start game', gameAgain: 'Play again', gameOver: 'Game over — try again!', gameScore: 'Score', gameBest: 'Best', gameHelp: 'Use ← → or A / D, or tap the controls below.',
  aboutTitle: 'A little about me', aboutText: 'I enjoy turning ideas into clear, responsive interfaces and approaching software with a tester’s mindset. I care about usability, quality, and continuous learning — with additional interests in DevOps and penetration testing.',
  focus: 'What I bring', focusText: 'A balance of building, checking, and solving problems.',
  skillsTitle: 'Skills & interests', skillsText: 'A growing toolkit, built through practice and continuous learning.',
  projectsTitle: 'Projects are on the way', projectsText: 'I’m currently building and refining projects. This space will become a collection of real work, lessons learned, and live demos — no placeholder achievements.',
  projectTag: 'IN PROGRESS', projectCta: 'Check my GitHub',
  contactTitle: 'Have an idea in mind?', contactText: 'For opportunities, collaboration, or just a friendly conversation — reach out on WhatsApp or send me an email.',
  whatsapp: 'Message me on WhatsApp', emailTitle: 'Send me an email', emailText: 'Fill out the form and I’ll get back to you as soon as I can.', nameLabel: 'Your name', emailLabel: 'Your email', subjectLabel: 'Subject', messageLabel: 'Your message', sendEmail: 'Send email', emailReady: 'Your email app will open with your message ready to send.', emailSent: 'Message prepared successfully.', footer: 'Designed with intent. Built to keep growing.', available: 'Open to learning & collaboration'
 },
 ar: {
  nav: ['الرئيسية','عني','المهارات','المشاريع','اللعبة','تواصل'],
  eyebrow: 'مطور واجهات أمامية · مختبر برمجيات',
  heroLead: 'أنا عبدالله النادي.',
  roles: ['مطور واجهات أمامية', 'مختبر برمجيات'],
  greeting: ['صباح الخير', 'مساء الخير', 'مساء النور'],
  intro: 'أنا عبدالله النادي، مطور واجهات أمامية ومختبر برمجيات، أهتم ببناء تجارب ويب واضحة وسريعة وبجودة يمكن الاعتماد عليها.',
  contact: 'تواصل معي عبر واتساب', projects: 'استكشف المشاريع', scroll: 'انتقل لاكتشاف المزيد', gameTitle: 'استراحة لعب صغيرة', gameText: 'اجمع النجوم وتجنب الأخطاء البرمجية باستخدام الأسهم أو أزرار التحكم.', gameStart: 'ابدأ اللعب', gameAgain: 'العب مرة أخرى', gameOver: 'انتهت اللعبة — جرّب مرة أخرى!', gameScore: 'النقاط', gameBest: 'أفضل نتيجة', gameHelp: 'استخدم ← → أو A / D، أو اضغط أزرار التحكم بالأسفل.',
  aboutTitle: 'نبذة عني', aboutText: 'أستمتع بتحويل الأفكار إلى واجهات متجاوبة وواضحة، والتعامل مع البرمجيات بعقلية المختبِر. أهتم بسهولة الاستخدام والجودة والتعلم المستمر، مع اهتمام إضافي بمجال DevOps واختبار الاختراق (Penetration Testing).',
  focus: 'ما الذي أقدمه؟', focusText: 'مزيج من التطوير والاختبار وحل المشكلات.',
  skillsTitle: 'المهارات والاهتمامات', skillsText: 'مجموعة مهارات تتطور بالممارسة والتعلم المستمر.',
  projectsTitle: 'المشاريع قادمة قريبًا', projectsText: 'أعمل حاليًا على بناء مشاريع وتطويرها. سيصبح هذا القسم معرضًا لأعمال حقيقية وما تعلمته منها وروابط التجربة المباشرة، دون ادعاء إنجازات غير موجودة.',
  projectTag: 'قيد التطوير', projectCta: 'شاهد حساب GitHub',
  contactTitle: 'هل لديك فكرة أو فرصة؟', contactText: 'للتعاون أو فرص العمل، يمكنك مراسلتي عبر واتساب أو إرسال رسالة على البريد الإلكتروني.',
  whatsapp: 'راسلني على واتساب', emailTitle: 'أرسل لي بريدًا إلكترونيًا', emailText: 'املأ النموذج وسأرد عليك في أقرب وقت ممكن.', nameLabel: 'اسمك', emailLabel: 'بريدك الإلكتروني', subjectLabel: 'الموضوع', messageLabel: 'رسالتك', sendEmail: 'إرسال البريد', emailReady: 'سيتم فتح تطبيق البريد لديك مع تجهيز الرسالة للإرسال.', emailSent: 'تم تجهيز الرسالة بنجاح.', footer: 'تصميم له هدف، وموقع قابل للتطور.', available: 'منفتح على التعلم والتعاون'
 }
};
const skills = [
 {icon: Code2, name:'Front-End Development', desc:'Responsive interfaces · React · JavaScript'},
 {icon: Bug, name:'Software Testing', desc:'Test design · Quality mindset · Bug reporting'},
 {icon: BrainCircuit, name:'Problem Solving', desc:'Analytical thinking · Breaking down challenges'},
 {icon: Server, name:'DevOps', desc:'Learning workflows, tooling, and deployment'},
 {icon: ShieldCheck, name:'Penetration Testing', desc:'Security testing · Vulnerability assessment · Ethical testing'}
];
function timeGreeting(lang) {
 const hour = new Date().getHours();
 const index = hour < 12 ? 0 : hour < 18 ? 1 : 2;
 return content[lang].greeting[index];
}

function MiniGame({ lang, t }) {
 const [running, setRunning] = useState(false);
 const [score, setScore] = useState(0);
 const [best, setBest] = useState(() => Number(localStorage.getItem('abdallah-game-best') || 0));
 const [playerX, setPlayerX] = useState(50);
 const [items, setItems] = useState([]);
 const [ended, setEnded] = useState(false);
 const playerXRef = React.useRef(50);
 const runningRef = React.useRef(false);
 useEffect(() => { playerXRef.current = playerX; }, [playerX]);
 useEffect(() => { runningRef.current = running; }, [running]);
 const move = (delta) => setPlayerX(x => { const next = Math.max(8, Math.min(92, x + delta)); playerXRef.current = next; return next; });
 const start = () => { setScore(0); setItems([]); setPlayerX(50); playerXRef.current = 50; setEnded(false); setRunning(true); runningRef.current = true; };
 useEffect(() => {
  const onKey = (e) => {
   if (!['ArrowLeft','ArrowRight','a','d','A','D'].includes(e.key)) return;
   if (e.key.startsWith('Arrow')) e.preventDefault();
   if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') move(-7);
   if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') move(7);
  };
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
 }, []);
 useEffect(() => {
  if (!running) return;
  let raf = 0, lastSpawn = 0, lastFrame = 0;
  const tick = (now) => {
   if (!runningRef.current) return;
   const dt = lastFrame ? Math.min(2, (now-lastFrame)/16.67) : 1; lastFrame = now;
   if (now-lastSpawn > 700) { lastSpawn = now; setItems(old => [...old, {id: `${now}-${Math.random()}`, x: 7+Math.random()*86, y: -8, kind: Math.random() > .72 ? 'bug' : 'star'}]); }
   setItems(old => {
    const next=[];
    for (const item of old) {
     const moved={...item,y:item.y+1.05*dt};
     const hit=moved.y>76 && moved.y<92 && Math.abs(moved.x-playerXRef.current)<9;
     if (hit && moved.kind==='star') {
      setScore(s=>{ const n=s+1; setBest(b=>{const v=Math.max(b,n);localStorage.setItem('abdallah-game-best',String(v));return v;});return n; });
     } else if (hit && moved.kind==='bug') { setEnded(true); setRunning(false); runningRef.current=false; }
     else if (moved.y<105) next.push(moved);
    }
    return next;
   });
   raf=requestAnimationFrame(tick);
  };
  raf=requestAnimationFrame(tick);
  return () => cancelAnimationFrame(raf);
 }, [running]);
 return <section className="section wrap" id="game"><div className="section-heading game-heading"><div><h2>{t.gameTitle}<span className="accent-dot">.</span></h2><p>{t.gameText}</p></div><div className="game-scoreboard"><span><Star size={15}/>{t.gameScore}: <b>{score}</b></span><span><Trophy size={15}/>{t.gameBest}: <b>{best}</b></span></div></div>
  <div className="game-layout"><div className={`game-board${running?' is-running':''}`}>
   <div className="game-grid"/>{items.map(item=><span key={item.id} className={`falling-item ${item.kind}`} style={{left:`${item.x}%`,top:`${item.y}%`}}>{item.kind==='star'?'✦':'⌁'}</span>)}
   <div className="game-player" style={{left:`${playerX}%`}}><img src="/game-character.jpeg" alt="Game character"/><span className="player-fallback">A.</span></div>
   {!running&&<div className="game-overlay"><div className="game-overlay-icon"><Gamepad2 size={28}/></div><p>{ended?t.gameOver:(lang==='ar'?'جاهز؟ ابدأ وقت ما تحب':'Ready when you are')}</p><button className="btn primary" onClick={start}><RotateCcw size={16}/>{ended?t.gameAgain:t.gameStart}</button></div>}
  </div><aside className="game-side"><div className="game-tip"><span className="tip-icon"><Sparkles size={20}/></span><h3>{lang==='ar'?'طريقة اللعب':'How to play'}</h3><p>{lang==='ar'?'اجمع النجوم الذهبية وتجنب العلامات الحمراء. لمس الخطأ ينهي الجولة.':'Collect golden stars and avoid red bugs. Hitting a bug ends the round.'}</p></div><p className="game-help">{t.gameHelp}</p><div className="game-controls"><button onClick={()=>move(-9)} aria-label="Move left">←</button><button onClick={()=>move(9)} aria-label="Move right">→</button></div></aside></div>
 </section>;
}

function App(){
 const [lang,setLang]=useState(localStorage.getItem('portfolio-lang')||'en');
 const [dark,setDark]=useState((localStorage.getItem('portfolio-theme')||'dark')==='dark');
 const [menu,setMenu]=useState(false); const [scrolled,setScrolled]=useState(false); const [emailStatus,setEmailStatus]=useState(''); const [emailSending,setEmailSending]=useState(false); const [roleIndex,setRoleIndex]=useState(0); const [typedRole,setTypedRole]=useState(''); const [deleting,setDeleting]=useState(false); const t=content[lang];
 useEffect(()=>{document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('portfolio-lang',lang);localStorage.setItem('portfolio-theme',dark?'dark':'light')},[lang,dark]);
 useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>70);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);
 useEffect(()=>{const word=t.roles[roleIndex];let delay=deleting?48:88;if(!deleting&&typedRole===word)delay=1450;if(deleting&&typedRole==='')delay=350;const timer=setTimeout(()=>{if(!deleting){if(typedRole.length<word.length)setTypedRole(word.slice(0,typedRole.length+1));else setDeleting(true)}else if(typedRole.length>0)setTypedRole(typedRole.slice(0,-1));else{setDeleting(false);setRoleIndex((roleIndex+1)%t.roles.length)}},delay);return()=>clearTimeout(timer)},[typedRole,deleting,roleIndex,lang]);
 const wa='https://wa.me/201279247804';
 const social=[{name:'GitHub',icon:Github,url:'https://github.com/'},{name:'LinkedIn',icon:Linkedin,url:'https://www.linkedin.com/'},{name:'Instagram',icon:Instagram,url:'https://www.instagram.com/'},{name:'Facebook',icon:Facebook,url:'https://www.facebook.com/'}];
 return <div className="app-shell">
  <div className="ambient-bg" aria-hidden="true"><span/><span/><span/></div>
  <header className={`topbar wrap${scrolled?' is-scrolled':''}`}><button className="icon-btn hamburger-trigger" aria-label={menu?'Close navigation menu':'Open navigation menu'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>{menu?<X size={21}/>:<Menu size={21}/>}</button><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>ABDALLAH <b>EL NADY</b></span></a>
   <nav className="nav-primary" aria-label="Primary navigation">{t.nav.map((n,i)=><a key={n} href={'#'+['home','about','skills','projects','game','contact'][i]}>{n}</a>)}</nav>
   <nav className={menu?'nav nav-dropdown open':'nav nav-dropdown'} aria-label="Menu navigation" aria-hidden={!menu}>{t.nav.map((n,i)=><a key={n} href={'#'+['home','about','skills','projects','game','contact'][i]} onClick={()=>setMenu(false)}>{n}</a>)}</nav>
   <div className="nav-actions"><button className="icon-btn" aria-label="Toggle theme" onClick={()=>setDark(!dark)}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button><button className="lang-btn" onClick={()=>setLang(lang==='en'?'ar':'en')}><Globe2 size={16}/>{lang==='en'?'عربي':'English'}</button></div>
  </header>
  <main>
   <section className="hero wrap" id="home"><div className="hero-copy"><div className="eyebrow">{t.eyebrow}</div><h1 className="hero-type-title"><span className="time-greeting">{timeGreeting(lang)}</span><br/><span className="hero-lead">{t.heroLead}</span><br/><span className="typing-role">{typedRole}<i className="typing-caret" aria-hidden="true">|</i></span></h1><p className="hero-intro">{t.intro}</p><div className="hero-buttons"><a className="btn primary" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{t.contact}<ArrowUpRight size={17}/></a><a className="btn secondary" href="#projects">{t.projects}<ArrowDown size={17}/></a></div><div className="hero-socials">{social.map(s=><a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}><s.icon size={18}/></a>)}<span className="social-note">{t.available}</span></div></div>
    <div className="hero-visual"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="photo-frame"><img src="/profile.jpeg" alt="Abdallah El Nady" onError={e=>{e.currentTarget.style.display="none";}}/><div className="photo-overlay"/></div><div className="float-card code-card"><Code2 size={18}/><span>Build <b>with purpose</b></span></div><div className="float-card test-card"><ShieldCheck size={18}/><span>Quality <b>by design</b></span></div></div>
</section>
   <section className="section wrap" id="about"><div className="about-grid"><h2>{t.aboutTitle}<span className="accent-dot">.</span></h2><div><p className="large-copy">{t.aboutText}</p><div className="focus-line"><Sparkles size={20}/><div><b>{t.focus}</b><p>{t.focusText}</p></div></div></div></div></section>
   <section className="section wrap" id="skills"><div className="section-heading"><div><h2>{t.skillsTitle}<span className="accent-dot">.</span></h2><p>{t.skillsText}</p></div></div><div className="skills-grid">{skills.map((s,i)=><article className="skill-card" key={s.name}><div className="skill-top"><span className="skill-icon"><s.icon size={22}/></span></div><h3>{s.name}</h3><p>{s.desc}</p><div className="card-bottom"><span>EXPLORE & GROW</span><ArrowUpRight size={17}/></div></article>)}</div></section>
   <section className="section wrap" id="projects"><div className="projects-panel"><div className="project-glow"/><div className="project-content"><span className="pill"><span className="status-dot"/>{t.projectTag}</span><h2>{t.projectsTitle}<span className="accent-dot">.</span></h2><p>{t.projectsText}</p><a className="btn secondary" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={18}/>{t.projectCta}<ArrowUpRight size={17}/></a></div><div className="project-art"><div className="window-bar"><i/><i/><i/><span>future-projects.jsx</span></div><pre><code><span className="code-purple">const</span> portfolio = {'{'}{`\n`}  focus: <span className="code-green">['build', 'test']</span>,{`\n`}  mindset: <span className="code-green">'keep learning'</span>,{`\n`}  next: <span className="code-blue">'coming soon'</span>{`\n`}{'}'};</code></pre><div className="art-foot"><span>STATUS: IN PROGRESS</span><span>●</span></div></div></div></section>
   <MiniGame lang={lang} t={t}/>
   <section className="section wrap contact-section" id="contact"><div className="contact-card"><div className="contact-icon"><MessageCircle size={25}/></div><h2>{t.contactTitle}<span className="accent-dot">.</span></h2><p>{t.contactText}</p><a className="btn primary" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{t.whatsapp}<ArrowUpRight size={17}/></a><div className="email-form-wrap"><div className="email-form-heading"><Mail size={20}/><div><h3>{t.emailTitle}</h3><p>{t.emailText}</p></div></div><form className="email-form" onSubmit={async(e)=>{e.preventDefault();setEmailStatus('');const form=e.currentTarget;const data=new FormData(form);const sender=String(data.get('sender')||'');const senderEmail=String(data.get('senderEmail')||'');const subject=String(data.get('subject')||'Portfolio contact');const message=String(data.get('message')||'');const serviceId=import.meta.env.VITE_EMAILJS_SERVICE_ID;const templateId=import.meta.env.VITE_EMAILJS_TEMPLATE_ID;const publicKey=import.meta.env.VITE_EMAILJS_PUBLIC_KEY;const contactEmail=import.meta.env.VITE_CONTACT_EMAIL;if(serviceId&&templateId&&publicKey){try{setEmailSending(true);await emailjs.send(serviceId,templateId,{from_name:sender,reply_to:senderEmail,subject,message},publicKey);setEmailStatus(lang==='en'?'Email sent successfully!':'تم إرسال البريد الإلكتروني بنجاح!');form.reset();}catch(err){setEmailStatus(lang==='en'?'Email could not be sent. Please try WhatsApp instead.':'تعذر إرسال البريد. يُرجى التواصل عبر واتساب.');}finally{setEmailSending(false);}}else if(contactEmail){const body=`From: ${sender} (${senderEmail})\n\n${message}`;const mailto=`mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;setEmailStatus(t.emailReady);window.location.href=mailto;}else{setEmailStatus(lang==='en'?'Email is not configured yet. Please contact me via WhatsApp for now.':'لم يتم إعداد البريد الإلكتروني بعد. يمكنك التواصل معي عبر واتساب حاليًا.');}}}><label><span>{t.nameLabel}</span><input name="sender" required autoComplete="name" placeholder={lang==='en'?'Your name':'اكتب اسمك'}/></label><label><span>{t.emailLabel}</span><input name="senderEmail" type="email" required autoComplete="email" placeholder="name@example.com"/></label><label className="full-field"><span>{t.subjectLabel}</span><input name="subject" required placeholder={lang==='en'?'How can I help?':'بخصوص ماذا؟'}/></label><label className="full-field"><span>{t.messageLabel}</span><textarea name="message" required rows="5" placeholder={lang==='en'?'Write your message...':'اكتب رسالتك هنا...'} /></label><button className="btn primary email-submit" type="submit"><Send size={17}/>{emailSending?(lang==='en'?'Sending...':'جارٍ الإرسال...'):t.sendEmail}<ArrowUpRight size={17}/></button>{emailStatus&&<p className={`email-status ${/not configured|could not be sent|لم يتم إعداد|تعذر إرسال/i.test(emailStatus) ? 'is-warning' : /successfully|success|بنجاح/i.test(emailStatus) ? 'is-success' : ''}`} role="status">{/not configured|could not be sent|لم يتم إعداد|تعذر إرسال/i.test(emailStatus) ? <AlertTriangle size={20}/> : <CheckCircle2 size={20}/>}<span>{emailStatus}</span></p>}</form></div><div className="contact-socials">{social.map(s=><a key={s.name} href={s.url} target="_blank" rel="noreferrer"><s.icon size={17}/>{s.name}</a>)}</div><p className="social-warning">Update the social links and configure EmailJS or VITE_CONTACT_EMAIL before publishing.</p></div></section>
  </main>
  <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">A<span>.</span></span><span>ABDALLAH <b>EL NADY</b></span></a><p>© {new Date().getFullYear()} Abdallah El Nady. {t.footer}</p><a href="#home" className="back-top" aria-label="Back to top" title="Back to top"><ArrowUp size={18}/></a></footer>
 </div>
}

createRoot(document.getElementById('root')).render(<App/>);
