(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function p(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=p(e);fetch(e.href,t)}})();const h=[{label:"Portfolio",href:"https://krishg.com"},{label:"LinkedIn",href:"https://linkedin.com/in/kkrishguptaa"},{label:"Email",href:"mailto:m.krishggupta@icloud.com"}],n=document.querySelector("#app");if(!n)throw new Error("App root not found.");n.innerHTML=`
  <section class="stage" aria-label="Business card">
    <div
      class="card-shell"
      role="button"
      tabindex="0"
      aria-pressed="false"
      aria-label="Flip business card to view contact details"
    >
      <div class="card-inner">
        <section class="card-face card-face-front" aria-hidden="false">
          <p class="eyebrow">Krish Gupta</p>
          <div class="front-copy">
            <h1>Krish Gupta</h1>
            <p>poet, economist, engineer</p>
          </div>
        </section>

        <section class="card-face card-face-back" aria-hidden="true">
          <div class="back-copy">
            <p class="eyebrow">Connect</p>
            <h2>Krish Gupta</h2>
          </div>
          <nav aria-label="Contact links">
            <ul class="contact-list">
              ${h.map(({href:r,label:i})=>`
                    <li>
                      <a href="${r}" target="_blank" rel="noreferrer">${i}</a>
                    </li>
                  `).join("")}
            </ul>
          </nav>
        </section>
      </div>
    </div>
    <p class="flip-hint">click to flip</p>
  </section>
`;const s=document.querySelector(".card-shell"),l=document.querySelector(".card-face-front"),d=document.querySelector(".card-face-back");if(!s||!l||!d)throw new Error("Card UI failed to initialize.");let a=!1;const f=()=>{s.classList.toggle("is-flipped",a),s.setAttribute("aria-pressed",String(a)),l.setAttribute("aria-hidden",String(a)),d.setAttribute("aria-hidden",String(!a))},u=()=>{a=!a,f()};s.addEventListener("click",r=>{r.target instanceof HTMLAnchorElement||u()});s.addEventListener("keydown",r=>{r.key!=="Enter"&&r.key!==" "||(r.preventDefault(),u())});f();
