(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function d(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(r){if(r.ep)return;r.ep=!0;const n=d(r);fetch(r.href,n)}})();const _=`<header class="header">\r
  <img src="assets/images/josuelogo.png" alt="logo" class="logo">\r
  <h1 class="title">Josué López Frontend DEV</h1>\r
  <button aria-label="activar modo oscuro" class="dark-mode-btn">\r
    <img src="assets/images/sun.svg" alt="imagen sol">\r
  </button>\r
  <button aria-label="activar modo claro" class="light-mode-btn">\r
    <img src="assets/images/moon.svg" alt="imagen luna">\r
  </button>\r
      \r
      <input type="checkbox" class="checkbox">\r
      <i class="icon-menu fi fi-ss-apps-add"></i>\r
      <i class="icon-menu fi fi-ss-apps-delete"></i>\r
      <ul class="mobile-menu">\r
          <li>\r
            <a href="#start" class="menu-item">Inicio</a>\r
          </li>\r
          <li>\r
            <a href="#who" class="menu-item">Quién Soy</a>\r
          </li>\r
          <li>\r
            <a href="#skills" class="menu-item">Habilidades</a>\r
          </li>\r
          <li>\r
            <a href="#projects" class="menu-item">Proyectos</a>\r
          </li>\r
          <li>\r
            <a href="#contact" class="menu-item">Contáctame</a>\r
          </li>\r
        </ul>\r
        <ul class="desktop-menu">\r
          <li>\r
            <a href="#start" class="menu-item-desktop">Inicio</a>\r
          </li>\r
          <li>\r
            <a href="#who" class="menu-item-desktop">Quién Soy</a>\r
          </li>\r
          <li>\r
            <a href="#skills" class="menu-item-desktop">Habilidades</a>\r
          </li>\r
          <li>\r
            <a href="#projects" class="menu-item-desktop">Proyectos</a>\r
          </li>\r
          <li>\r
            <a href="#contact" class="menu-item-desktop">Contáctame</a>\r
          </li>\r
        </ul>\r
</header>\r
<main class="main">\r
  <a name="start" ></a>\r
  <section class="container-card">\r
      <div class="container-text">\r
          <h2 class="card__title">Josué D. López B.</h2>\r
          <p class="card__subtitle">Frontend DEV</p>\r
      </div>\r
      <img src="assets/images/computer-4795762_1280.jpg" alt="imagen computador" class="card__img">\r
  </section>\r
  <a name="who"></a>\r
  <section class="container-card row-reverse">\r
      <div class="container-text">\r
          <h2 class="card__title">¿Quién soy?</h2>\r
          <p class="card__subtitle">Soy Ing. en Sistemas y Frontend DEV.</p>\r
      </div>\r
      <img src="assets/images/pexels-s-migaj-951076.jpg" alt="imagen meta" class="card__img">\r
  </section>\r
  <a name="skills"></a>\r
  <section class="container-card">\r
    <div class="container-text">\r
      <h2 class="card__title">Habilidades</h2>\r
      <p class="card__subtitle">Manejo de HTML, CSS y JavaScript. Control de versiones con Git y Github. Gestión de proyectos con Jira</p>\r
    </div>\r
      <div class="cubo-container">\r
        <div class="container-cubo spinY">\r
            <img src="assets/images/html.png" class="top side">\r
            <img src="assets/images/css.png" class="left side">\r
            <img src="assets/images/javascript.png" class="right side">\r
            <img src="assets/images/git.png" class="bottom side">\r
            <img src="assets/images/github.png" class="front side">\r
            <img src="assets/images/jira.png" class="back side">\r
        </div>\r
    </div>\r
    <!-- <div class="container-carousel">\r
      <a name="item-1"></a>\r
      <div class="container-carousel-item">\r
        <div class="img-container">\r
          <img src="assets/images/html.png" alt="html logo" class="img">\r
        </div>\r
        <div class="arrows-container">\r
          <a href="#item-6">\r
            <i class="icon-arrows fi fi-rr-angle-double-small-left"></i>\r
          </a>\r
          <a href="#item-2">\r
            <i class="icon-arrows fi-rr-angle-double-small-right"></i>\r
          </a>\r
        </div>\r
      </div>\r
      <div class="container-carousel-item">\r
        <a name="item-2"></a>\r
        <div class="img-container">\r
          <img src="assets/images/css.png" alt="css logo" class="img">\r
        </div>\r
        <div class="arrows-container">\r
          <a href="#item-1">\r
            <i class="icon-arrows fi fi-rr-angle-double-small-left"></i>\r
          </a>\r
          <a href="#item-3">\r
            <i class="icon-arrows fi-rr-angle-double-small-right"></i>\r
          </a>\r
        </div>\r
      </div>\r
      <a name="item-3"></a>\r
      <div class="container-carousel-item">\r
        <div class="img-container">\r
          <img src="assets/images/javascript.png" alt="javascript logo" class="img">\r
        </div>\r
        <div class="arrows-container">\r
          <a href="#item-2">\r
            <i class="icon-arrows fi fi-rr-angle-double-small-left"></i>\r
          </a>\r
          <a href="#item-4">\r
            <i class="icon-arrows fi-rr-angle-double-small-right"></i>\r
          </a>\r
        </div>\r
      </div>\r
      <a name="item-4"></a>\r
      <div class="container-carousel-item">\r
        <div class="img-container">\r
          <img src="assets/images/git.png" alt="git logo" class="img">\r
        </div>\r
        <div class="arrows-container">\r
          <a href="#item-3">\r
            <i class="icon-arrows fi fi-rr-angle-double-small-left"></i>\r
          </a>\r
          <a href="#item-5">\r
            <i class="icon-arrows fi-rr-angle-double-small-right"></i>\r
          </a>\r
        </div>\r
      </div>\r
      <a name="item-5"></a>\r
      <div class="container-carousel-item">\r
        <div class="img-container">\r
          <img src="assets/images/github.png" alt="github logo" class="img">\r
        </div>\r
        <div class="arrows-container">\r
          <a href="#item-4">\r
            <i class="icon-arrows fi fi-rr-angle-double-small-left"></i>\r
          </a>\r
          <a href="#item-6">\r
            <i class="icon-arrows fi-rr-angle-double-small-right"></i>\r
          </a>\r
        </div>\r
      </div>\r
      <a name="item-6"></a>\r
      <div class="container-carousel-item">\r
        <div class="img-container">\r
          <img src="assets/images/jira.png" alt="jira logo" class="img">\r
        </div>\r
        <div class="arrows-container">\r
          <a href="#item-5">\r
            <i class="icon-arrows fi fi-rr-angle-double-small-left"></i>\r
          </a>\r
          <a href="#item-1">\r
            <i class="icon-arrows fi-rr-angle-double-small-right"></i>\r
          </a>\r
        </div>\r
      </div>\r
    </div> -->\r
  </section>\r
  <a name="projects"></a>\r
  <section class="container-card projects-container">\r
    <h2 class="card-title">Mis Proyectos</h2>\r
    <div class="project-container">\r
      <div class="project-item">\r
        <a href="https://josuedlb1982.github.io/blackjack-vite-github/" target="_blank">\r
          <img src="assets/images/blackjack.png" alt="image" class="img-projects">\r
        </a>\r
        <a href="https://github.com/JosueDLB1982/blackjack-vite-github.git" target="_blank">\r
          <p class="card__subtitle">Blackjack</p>\r
        </a>\r
      </div>\r
      <div class="project-item">\r
        <img src="assets/images/git.png" alt="image" class="img-projects">\r
        <p class="card__subtitle">Proyecto 2</p>  \r
      </div>\r
      <div class="project-item">\r
        <img src="assets/images/git.png" alt="image" class="img-projects">  \r
        <p class="card__subtitle">Proyecto 3</p>\r
      </div>\r
      <div class="project-item">\r
        <img src="assets/images/git.png" alt="image" class="img-projects">  \r
        <p class="card__subtitle">Proyecto 4</p>\r
      </div>\r
      <div class="project-item">\r
        <img src="assets/images/git.png" alt="image" class="img-projects">  \r
        <p class="card__subtitle">Proyecto 5</p>\r
      </div>\r
      <div class="project-item">\r
        <img src="assets/images/git.png" alt="image" class="img-projects">  \r
        <p class="card__subtitle">Proyecto 6</p>\r
      </div>\r
    </div>\r
</section>\r
<a name="contact"></a>\r
<section class="container-card">\r
  <div class="container-contact">\r
    <div class="container-text">\r
      <h2 class="card__title title-contact-form">Comunícate conmigo</h2>\r
    </div>\r
    <form action="#" class="form">\r
      <fieldset class="fieldset">\r
        <legend class="legend">Déjame Tus Datos</legend>\r
        <div class="contact-field">\r
          <label for="name" class="label">Nombre:</label>\r
          <input\r
            id="name"\r
            class="input"\r
            type="text"\r
            placeholder=""\r
            required\r
          >\r
        </div>\r
        <div class="contact-field">\r
          <label for="surname" class="label">Apellido:</label>\r
          <input\r
            id="surname"\r
            class="input"\r
            type="text"\r
            placeholder=""\r
            required\r
          >\r
        </div>\r
        <div class="contact-field">\r
          <label for="email" class="label">Email De Contacto:</label>\r
          <input\r
            id="email"\r
            class="input"\r
            type="email"\r
            placeholder=""\r
            required\r
          >\r
        </div>\r
        <div class="contact-field">\r
          <label for="phone" class="label">Teléfono De Contacto:</label>\r
          <input\r
            id="phone"\r
            class="input"\r
            type="tel"\r
            placeholder=""\r
          >\r
        </div>\r
        <div class="contact-field">\r
          <label for="textarea" class="label textarea-label">Déjame tus comentarios:</label>\r
          <textarea\r
            name="textarea"\r
            id="textarea"\r
            cols="20" rows="4"\r
            class="input textarea-input"\r
          >\r
          </textarea>\r
        </div>\r
      </fieldset>\r
      <input\r
        type="submit"\r
        value="Enviar"\r
        class="contact-btn"\r
      >\r
    </form>\r
  </div>\r
</section>        \r
</main>\r
\r
<section class="download-container">    \r
<div class="container">\r
  <a id="download-btn" class="button">\r
      <ul>\r
          <li>Descargar CV</li>\r
          <li>Descargando</li>\r
          <li>Listo</li>\r
      </ul>\r
      <div>\r
          <svg viewBox="0 0 24 24"></svg>\r
      </div>\r
  </a>\r
</div>\r
</section>\r
<footer class="footer">\r
  <div class="icons-containers">\r
    <a href="https://github.com/JosueDLB1982" target="_blank">\r
      <i class="fa-brands fa-github social-networks__icon"></i>\r
    </a>\r
    <a href="https://www.instagram.com/josuedlopez1982/" target="_blank">\r
      <i class="fa-brands fa-instagram social-networks__icon"></i>\r
    </a>\r
    <a href="https://twitter.com/JosueLo68369645" target="_blank">\r
      <i class="fa-brands fa-x-twitter social-networks__icon"></i>\r
    </a>\r
    <a href="https://web.facebook.com/JosueLopez1982" target="_blank">\r
      <i class="fa-brands fa-facebook social-networks__icon"></i>\r
    </a>\r
    <a href="https://www.linkedin.com/in/josue-lopez-7950b1228/" target="_blank">\r
      <i class="fa-brands fa-linkedin social-networks__icon"></i>\r
    </a>\r
  </div>\r
  <p class="footer__text"><span>&copy; 2024 </span>Desarrollado por Josué López Frontend DEV</p>\r
</footer>`,y=()=>{const o=window.matchMedia("(prefers-color-scheme: dark)"),s=r=>{document.documentElement.setAttribute("data-theme",r)};o.matches&&s("dark"),o.addEventListener("change",r=>{s(r.matches?"dark":"light")});const d=document.querySelector(".light-mode-btn"),e=document.querySelector(".dark-mode-btn");d.addEventListener("click",()=>{s("dark")}),e.addEventListener("click",()=>{s("light")})},p=document.createElement("a"),k=()=>{document.querySelector("#download-btn").addEventListener("click",()=>{setTimeout(()=>{p.href="./assets/documents/cv-enero-2024.pdf",p.download="Josue Lopez Frontend DEV",p.click()},3200)}),document.querySelectorAll(".button").forEach(e=>{let r=3e3,n=e.querySelector("svg"),i=new Proxy({y:null,smoothing:null},{set(a,t,l){return a[t]=l,a.y!==null&&a.smoothing!==null&&(n.innerHTML=d(a.y,a.smoothing,null)),!0},get(a,t){return a[t]}});e.style.setProperty("--duration",r),i.y=20,i.smoothing=0,e.addEventListener("click",a=>{e.classList.contains("loading")||(e.classList.add("loading"),gsap.to(i,{smoothing:.3,duration:r*.065/1e3}),gsap.to(i,{y:12,duration:r*.265/1e3,delay:r*.065/1e3,ease:Elastic.easeOut.config(1.12,.4)}),setTimeout(()=>{n.innerHTML=d(0,0,[[3,14],[8,19],[21,6]])},r/2))})});function s(e,r,n,i){let a=(c,u,b,w)=>{let m=u||c,g=b||c,f={length:Math.sqrt(Math.pow(g[0]-m[0],2)+Math.pow(g[1]-m[1],2)),angle:Math.atan2(g[1]-m[1],g[0]-m[0])},h=f.angle+(w?Math.PI:0),v=f.length*i;return[c[0]+Math.cos(h)*v,c[1]+Math.sin(h)*v]},t=a(n[r-1],n[r-2],e,!1),l=a(e,n[r-1],n[r+1],!0);return`C ${t[0]},${t[1]} ${l[0]},${l[1]} ${e[0]},${e[1]}`}function d(e,r,n){return`<path d="${(n||[[4,12],[12,e],[20,12]]).reduce((t,l,c,u)=>c===0?`M ${l[0]},${l[1]}`:`${t} ${s(l,c,u,r)}`,"")}" />`}},j=o=>{(()=>{const s=document.createElement("div");s.innerHTML=_,document.querySelector(o).append(s)})(),y(),k()};j("#app");
