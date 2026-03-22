import "./style.css";

const card = document.querySelector<HTMLElement>(".card-shell");
const frontFace = document.querySelector<HTMLElement>(".card-face-front");
const backFace = document.querySelector<HTMLElement>(".card-face-back");

const isActivationKey = (key: string) => key === "Enter" || key === " ";

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

  if (target instanceof Element && target.closest("a")) {
    return;
  }

  toggleCard();
});

card.addEventListener("keydown", (event) => {
  if (!isActivationKey(event.key)) {
    return;
  }

  event.preventDefault();
  toggleCard();
});

syncState();
