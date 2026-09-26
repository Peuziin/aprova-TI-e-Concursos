const subjects=[
 {name:"Português",cat:"base",tag:"BASE",desc:"Interpretação, gramática, sintaxe, pontuação, concordância, regência e crase."},
 {name:"Raciocínio Lógico",cat:"base",tag:"BASE",desc:"Proposições, conectivos, equivalências, conjuntos, porcentagem e probabilidade."},
 {name:"Matemática",cat:"base",tag:"BASE",desc:"Aritmética, regra de três, porcentagem, razão, proporção e estatística básica."},
 {name:"Direito Constitucional",cat:"base",tag:"DIREITO",desc:"Constituição, direitos fundamentais e Administração Pública."},
 {name:"Direito Administrativo",cat:"base",tag:"DIREITO",desc:"Princípios, atos, poderes, agentes, serviços, licitações e contratos."},
 {name:"Informática",cat:"base",tag:"BASE",desc:"Windows, Office, internet, segurança e fundamentos de tecnologia."},
 {name:"Direitos Humanos",cat:"base",tag:"DIREITO",desc:"Direitos e garantias, tratados e princípios de proteção."},
 {name:"Administração Pública",cat:"base",tag:"GESTÃO",desc:"Princípios, gestão pública, ética e organização administrativa."},
 {name:"Atualidades",cat:"base",tag:"GERAL",desc:"Brasil, mundo, tecnologia, economia, sociedade e meio ambiente."},
 {name:"Redes de Computadores",cat:"ti",tag:"TI",desc:"OSI, TCP/IP, IPv4, IPv6, DNS, DHCP, HTTP, VPN e VLAN."},
 {name:"Banco de Dados",cat:"ti",tag:"TI",desc:"Modelo relacional, SQL, normalização, transações e modelagem."},
 {name:"Segurança da Informação",cat:"ti",tag:"TI",desc:"Criptografia, autenticação, firewall, LGPD, riscos e Zero Trust."},
 {name:"Sistemas Operacionais",cat:"ti",tag:"TI",desc:"Windows, Linux, processos, memória, arquivos e permissões."},
 {name:"Programação",cat:"ti",tag:"TI",desc:"Algoritmos, estruturas de dados, POO, Java, Python e APIs."},
 {name:"Engenharia de Software",cat:"ti",tag:"TI",desc:"Requisitos, UML, testes, arquitetura, Scrum e desenvolvimento."},
 {name:"Governança de TI",cat:"ti",tag:"TI",desc:"ITIL, COBIT, gestão de serviços, processos e governança."},
 {name:"Cloud Computing",cat:"ti",tag:"TI",desc:"IaaS, PaaS, SaaS, virtualização, containers e computação em nuvem."},
 {name:"Ciência de Dados e IA",cat:"ti",tag:"TI",desc:"Dados, estatística, aprendizado de máquina e inteligência artificial."}
];

const questions=[
 {sub:"Português",q:"Em um texto, a ideia principal corresponde:",o:["A uma informação sempre implícita.","Ao assunto central desenvolvido pelo autor.","A qualquer opinião apresentada.","Somente ao título.","À última frase do texto."],a:1,e:"A ideia principal representa o núcleo ou assunto central desenvolvido no texto."},
 {sub:"Raciocínio Lógico",q:"Se todo A é B e todo B é C, então podemos afirmar que:",o:["Todo C é A.","Nenhum A é C.","Todo A é C.","Algum C não é B.","A e C são conjuntos iguais."],a:2,e:"A relação de inclusão é transitiva: se A está contido em B e B em C, A está contido em C."},
 {sub:"Direito Constitucional",q:"A Constituição Federal de 1988 é conhecida como:",o:["Constituição Imperial.","Constituição Cidadã.","Constituição Provisória.","Carta de 1967.","Constituição Administrativa."],a:1,e:"A Constituição de 1988 é conhecida como Constituição Cidadã."},
 {sub:"Direito Administrativo",q:"Qual princípio está expressamente relacionado à Administração Pública no art. 37 da Constituição Federal?",o:["Legalidade.","Exclusividade.","Privacidade.","Informalidade.","Arbitrariedade."],a:0,e:"O art. 37 apresenta os princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência."},
 {sub:"Informática",q:"Qual destes é um sistema operacional?",o:["SQL.","Linux.","HTML.","DNS.","HTTP."],a:1,e:"Linux é um sistema operacional."},
 {sub:"Redes de Computadores",q:"Qual protocolo é usado para resolver nomes de domínio em endereços IP?",o:["DHCP.","FTP.","DNS.","SMTP.","SSH."],a:2,e:"O DNS (Domain Name System) realiza a resolução de nomes de domínio."},
 {sub:"Banco de Dados",q:"Qual comando SQL é usado para consultar dados?",o:["SELECT.","DELETE.","DROP.","ALTER.","INSERT."],a:0,e:"SELECT é utilizado para consultar registros em bancos de dados relacionais."},
 {sub:"Segurança da Informação",q:"Qual propriedade busca garantir que somente pessoas autorizadas tenham acesso à informação?",o:["Disponibilidade.","Confidencialidade.","Redundância.","Latência.","Compressão."],a:1,e:"Confidencialidade protege a informação contra acesso não autorizado."},
 {sub:"Sistemas Operacionais",q:"No Linux, qual comando é tradicionalmente usado para listar arquivos e diretórios?",o:["ls","pwdx","mkdir","grep","chmod"],a:0,e:"O comando ls lista arquivos e diretórios."},
 {sub:"Programação",q:"Qual estrutura é normalmente usada para repetir um bloco de código enquanto uma condição for verdadeira?",o:["if","while","switch","class","import"],a:1,e:"while executa repetidamente enquanto sua condição for verdadeira."},
 {sub:"Engenharia de Software",q:"No Scrum, o Sprint é:",o:["Um banco de dados.","Um período de trabalho com duração definida.","Uma linguagem de programação.","Um tipo de servidor.","Um protocolo de rede."],a:1,e:"Sprint é um ciclo de trabalho com duração definida para produzir um incremento."},
 {sub:"Governança de TI",q:"ITIL está principalmente relacionado a:",o:["Gestão de serviços de TI.","Criação de sistemas operacionais.","Edição de imagens.","Programação de jogos.","Projeto de redes elétricas."],a:0,e:"ITIL é um conjunto de boas práticas para gestão de serviços de TI."}
];

const plan=[
 ["01","Fundamentos","Português, Raciocínio Lógico, Informática e introdução ao Direito."],
 ["02","Base para concursos","Constitucional, Administrativo, Direitos Humanos, Atualidades e Matemática."],
 ["03","TI — núcleo técnico","Redes, Sistemas Operacionais, Banco de Dados e Segurança."],
 ["04","TI — desenvolvimento","Programação, Engenharia de Software, APIs, Cloud e Dados."],
 ["05","Questões intensivas","Aumentar volume de questões, revisar erros e estudar por bancas."],
 ["06","Reta final","Simulados, revisão de pontos fracos e provas anteriores."]
];

let state=JSON.parse(localStorage.getItem("aprovaState")||'{"questions":0,"correct":0,"wrong":0,"hours":0,"days":0,"errors":[],"bySubject":{}}');
let currentIndex=0,currentList=questions,currentAnswered=false;

function save(){localStorage.setItem("aprovaState",JSON.stringify(state));renderAll();}
function goTo(id){document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));document.getElementById(id).classList.add("active");document.querySelectorAll(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.section===id));document.getElementById("sidebar").classList.remove("open");if(id==="questoes")renderQuestion();if(id==="desempenho"||id==="dashboard")renderAll();if(id==="erros")renderErrors();window.scrollTo(0,0)}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2200)}
function startStudy(sub){state.hours=(state.hours||0)+0.5;state.days=Math.max(state.days||0,1);save();toast("Sessão de estudo registrada: "+sub)}
function renderSubjects(filter="all"){document.getElementById("subjectGrid").innerHTML=subjects.filter(s=>filter==="all"||s.cat===filter).map((s,i)=>`<article class="subject-card"><span class="tag">${s.tag}</span><h3>${s.name}</h3><p>${s.desc}</p><button class="small-btn" onclick="filterQuestions('${s.name}')">Praticar questões →</button></article>`).join("")}
function filterQuestions(sub){currentList=questions.filter(q=>q.sub===sub);if(!currentList.length){currentList=questions}currentIndex=0;currentAnswered=false;goTo("questoes");renderQuestion()}
function renderQuestion(){const q=currentList[currentIndex%currentList.length];currentAnswered=false;document.getElementById("questionBox").innerHTML=`<div class="question-meta"><b>${q.sub}</b> · Questão ${currentIndex+1}</div><h2>${q.q}</h2><div class="options">${q.o.map((x,i)=>`<button class="option" onclick="answer(${i})">${String.fromCharCode(65+i)}) ${x}</button>`).join("")}</div>`}
function answer(i){if(currentAnswered)return;currentAnswered=true;const q=currentList[currentIndex%currentList.length];const opts=document.querySelectorAll(".option");opts[q.a].classList.add("correct");if(i===q.a){state.correct++;toast("Resposta correta!")}else{state.wrong++;state.errors.unshift({sub:q.sub,q:q.q,answer:q.o[q.a],given:q.o[i],explanation:q.e});opts[i].classList.add("wrong");toast("Resposta incorreta — revise o tema.")}state.questions++;state.bySubject[q.sub]=state.bySubject[q.sub]||{c:0,t:0};state.bySubject[q.sub].t++;if(i===q.a)state.bySubject[q.sub].c++;document.getElementById("questionBox").insertAdjacentHTML("beforeend",`<div class="feedback"><strong>${i===q.a?"✅ Correto":"❌ Revise esta questão"}</strong><br>${q.e}</div><button class="primary next-btn" onclick="nextQuestion()">Próxima questão →</button>`);save()}
function nextQuestion(){currentIndex++;renderQuestion()}
function startQuiz(n,cat){currentList=cat==="ti"?questions.filter(q=>subjects.find(s=>s.name===q.sub)?.cat==="ti"):questions;currentIndex=0;goTo("questoes");toast(`Simulado iniciado: ${n} questões`);renderQuestion()}
function renderPlan(){document.getElementById("timeline").innerHTML=plan.map(x=>`<article class="month"><div class="month-num">MÊS ${x[0]}</div><div><h3>${x[1]}</h3><p>${x[2]}</p></div></article>`).join("")}
function renderProgress(){const top=subjects.slice(0,8);document.getElementById("progressList").innerHTML=top.map(s=>{const x=state.bySubject[s.name]||{c:0,t:0};const p=x.t?Math.round(x.c/x.t*100):0;return `<div class="progress-row"><div class="progress-head"><span>${s.name}</span><b>${p}%</b></div><div class="bar"><i style="width:${p}%"></i></div></div>`}).join("")}
function renderErrors(){const el=document.getElementById("errorsList");if(!state.errors.length){el.innerHTML='<div class="empty">🎉 Seu caderno de erros está vazio. Continue praticando!</div>';return}el.innerHTML=state.errors.slice(0,30).map((e,i)=>`<article class="error-card"><strong>${i+1}. ${e.sub}</strong><p>${e.q}</p><p><b>Resposta correta:</b> ${e.answer}</p><p><b>Você marcou:</b> ${e.given}</p><p><b>Revisão:</b> ${e.explanation}</p></article>`).join("")}
function renderPerformance(){document.getElementById("performanceList").innerHTML=Object.keys(state.bySubject).length?Object.entries(state.bySubject).map(([s,x])=>`<div class="progress-row"><div class="progress-head"><span>${s}</span><b>${x.t?Math.round(x.c/x.t*100):0}% (${x.c}/${x.t})</b></div><div class="bar"><i style="width:${x.t?x.c/x.t*100:0}%"></i></div></div>`).join(""):'<div class="empty">Responda algumas questões para gerar seu desempenho.</div>'}
function renderAll(){document.getElementById("statQuestions").textContent=state.questions||0;document.getElementById("statAccuracy").textContent=state.questions?Math.round(state.correct/state.questions*100)+"%":"0%";document.getElementById("statHours").textContent=(state.hours||0)+"h";document.getElementById("statDays").textContent=state.days||0;document.getElementById("perfQuestions").textContent=state.questions||0;document.getElementById("perfCorrect").textContent=state.correct||0;document.getElementById("perfWrong").textContent=state.wrong||0;document.getElementById("perfAccuracy").textContent=state.questions?Math.round(state.correct/state.questions*100)+"%":"0%";renderProgress();renderPerformance();renderErrors()}
document.querySelectorAll(".nav-item").forEach(n=>n.addEventListener("click",()=>goTo(n.dataset.section)));
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderSubjects(b.dataset.filter)}));
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("themeBtn").addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("aprovaDark",document.body.classList.contains("dark"))});
if(localStorage.getItem("aprovaDark")==="true")document.body.classList.add("dark");

let deferredPrompt;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;document.getElementById("installBtn").hidden=false});
document.getElementById("installBtn").addEventListener("click",async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;document.getElementById("installBtn").hidden=true});
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));

renderSubjects();renderPlan();renderAll();renderQuestion();
