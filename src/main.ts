import "./style.css";

type ContactLink = {
  label: string;
  href: string;
};

const contacts: ContactLink[] = [
  { label: "Portfolio", href: "https://krishg.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/kkrishguptaa" },
  { label: "Email", href: "mailto:m.krishggupta@icloud.com" },
];

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("App root not found.");
}

app.innerHTML = `
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
              ${contacts
                .map(
                  ({ href, label }) => `
                    <li>
                      <a href="${href}" target="_blank" rel="noreferrer">${label}</a>
                    </li>
                  `,
                )
                .join("")}
            </ul>
          </nav>
        </section>
      </div>
    </div>
    <p class="flip-hint">click to flip</p>
  </section>
`;

const card = document.querySelector<HTMLElement>(".card-shell");
const frontFace = document.querySelector<HTMLElement>(".card-face-front");
const backFace = document.querySelector<HTMLElement>(".card-face-back");

if (!card || !frontFace || !backFace) {
  throw new Error("Card UI failed to initialize.");
}

let isFlipped = false;

const syncState = () => {
  card.classList.toggle("is-flipped", isFlipped);
  card.setAttribute("aria-pressed", String(isFlipped));
  frontFace.setAttribute("aria-hidden", String(isFlipped));
  backFace.setAttribute("aria-hidden", String(!isFlipped));
};

const toggleCard = () => {
  isFlipped = !isFlipped;
  syncState();
};

card.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof HTMLAnchorElement) {
    return;
  }

  toggleCard();
});

card.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") {
    return;
  }

  event.preventDefault();
  toggleCard();
});

syncState();
