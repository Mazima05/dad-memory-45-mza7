const pages = [
  {
    type: "cover",
    kicker: "For Dad",
    title: "Our favourite memories with you",
    text: "Forty-five years of you, and a long healthy wealthy life to spend more, inshallah"
  },
  {
    type: "intro",
    kicker: "Before you begin",
    title: "This is not just an E-book.",
    text: "It is a collection of the moments we kept, the words we sometimes forgot to say, and the love that has always felt like home.",
    signature: "Turn the page, Dad."
  },
  {
    type: "audioMemory",
    kicker: "A message from Mom",
    title: "A voice from the heart",
    text:" ",
    image: "/Users/maryaza3/Desktop/dad_birthday_memory_site_v3/assets/Screenshot 2026-07-24 at 5.16.32 PM.png",
    imageAlt: "Grandma's photograph",
    audio: "/Users/maryaza3/Desktop/dad_birthday_memory_site_v3/assets/grandma-message.mp3",
    signature: "With all my love, Son"
  },
  {
    type: "memory",
    kicker: "A message from Dad",
    title: "Words from a lifetime of love",
    text: "The day you came into my life, my heart found its greatest joy. Watching you grow has been the greatest privilege of my life, and no matter how old you become, you will always be my little boy and my greatest blessing.",
    image: "/Users/maryaza3/Desktop/dad_birthday_memory_site_v3/assets/Screenshot 2026-07-24 at 5.54.18 PM.png",
    imageAlt: "Grandpa's message photograph placeholder",
    signature: "With love, Son"
  },

  {
    type: "memory",
    kicker: "A memory from Fatin",
    title: "Something words can never describe",
    text: "My one and only, it's such an adorable feeling to share (again), one of your birthdays among many, always proud and excited to see you in better places, you are great and I hope you know it",
    image: "/Users/maryaza3/Desktop/dad_birthday_memory_site_v3/assets/Screenshot 2026-07-24 at 5.50.16 PM.png",
    imageAlt: "Fatin's memory photograph placeholder",
    signature: "With all my love, Fatin"
  },
  {
    type: "memory",
    kicker: "A message from Noor Alhuda",
    title: "For being the wall",
    text: "Thank you for being the father figure I needed ,for always believing in me and creating so many opportunities for my future. I will always be grateful for your love, support, and everything you've done for me.",
    image: "/Users/maryaza3/Desktop/dad_birthday_memory_site_v3/assets/Screenshot 2026-07-24 at 5.18.49 PM.png",
    imageAlt: "Noor Alhuda's message photograph placeholder",
    signature: "With all appreciation, Noor Alhuda"
  },

  {
    type: "memory",
    kicker: "A memory from Maryam",
    title: "For always pushing us to prefection",
    text: "Happy birthday first of all, second thank you for making my standards high enough to always do everything perfectly, just as you do.",
    image: "/Users/maryaza3/Desktop/dad_birthday_memory_site_v3/assets/IMG_1480.jpeg",
    imageAlt: "Maryam's memory photograph placeholder",
    signature: "With all my love, Maryam"
  },
  {
    type: "memory",
    kicker: "A memory from Mohammed Almahdi",
    title: "Happy birthday dad !",
    text: "I cannot tell you how much greatful I am to be your son, thank you for being always proud and believing in me no matter what the results are.",
    image: "/Users/maryaza3/Desktop/dad_birthday_memory_site_v3/assets/Mohammedimage.png",
    imageAlt: "Mohammed Almahdi's memory photograph placeholder",
    signature: "With love, Mohammed Almahdi"
  },
  {
    type: "memory",
    kicker: "A memory from Aman",
    title: "My all time favourite hero",
    text: "Thank you for being the person who is always there and shows me how best things can be accomplished, following your lead, daddy !",
    image: "/Users/maryaza3/Desktop/dad_birthday_memory_site_v3/assets/Amanimage.png",
    imageAlt: "Aman's memory photograph placeholder",
    signature: "With love, Aman"
  },
  {
    type: "memory",
    kicker: "A memory from Yaman",
    title: "My daddy is a superior dad !",
    text: "Dad, I'm not good with expresing myself but I really want you to know that I am super proud of you, and by the way, I LOVE YOU DADDDD",
    image: "/Users/maryaza3/Desktop/dad_birthday_memory_site_v3/assets/Screenshot 2026-07-24 at 5.39.10 PM.png",
    imageAlt: "Yaman's memory photograph placeholder",
    signature: "With love, Yaman"
  },
  {
    type: "final",
    kicker: "Our gift to you",
    title: "Happy 46th Birthday, Dad",
    text: "There is nothing we could ever buy that would equal what our father means to us — not even a little. So instead of trying to find the perfect gift, we gathered our memories, our voices, and the love you have given us. It may not be enough to repay you, but it felt like the right place to start.",
    signature: "Here’s to every memory behind us — and every beautiful one still ahead."
  },
  {
    type: "back",
    kicker: "With love, always",
    title: "For every chapter still to come",
    text: "Happy 45th Birthday",
    signature: "From all of us"
  }
];

const modal = document.getElementById("memoryModal");
const openButton = document.getElementById("openBookButton");
const closeTargets = document.querySelectorAll("[data-close-modal]");
const leftPage = document.getElementById("leftPage");
const rightPage = document.getElementById("rightPage");
const turningSheet = document.getElementById("turningSheet");
const turnFront = document.getElementById("turnFront");
const turnBack = document.getElementById("turnBack");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const pageCounter = document.getElementById("pageCounter");

let spreadIndex = 0;
let isAnimating = false;

function pageMarkup(page, side = "left") {
  if (!page) {
    return `<div class="page-inner page-inner--center"><p class="page-text">The end.</p></div>`;
  }

  if (page.type === "cover") {
    return `
      <div class="page-inner page-inner--center">
        <div class="cover-mark">46</div>
        <p class="page-kicker">${page.kicker}</p>
        <h3 class="page-title">${page.title}</h3>
        <div class="heart-line"></div>
        <p class="page-text">${page.text}</p>
      </div>`;
  }

  if (page.type === "intro") {
    return `
      <div class="page-inner page-inner--center">
        <p class="page-kicker">${page.kicker}</p>
        <h3 class="page-title">${page.title}</h3>
        <p class="page-text">${page.text}</p>
        <p class="page-signature">${page.signature}</p>
      </div>`;
  }

  if (page.type === "memory") {
    return `
      <div class="page-inner">
        <span class="tape" aria-hidden="true"></span>
        <img class="memory-photo ${side === "right" ? "memory-photo--right" : ""}"
             src="${page.image}" alt="${page.imageAlt}" />
        <p class="page-kicker">${page.kicker}</p>
        <h3 class="page-title">${page.title}</h3>
        <p class="page-text">${page.text}</p>
        <p class="page-signature">${page.signature}</p>
      </div>`;
  }

  if (page.type === "audioMemory") {
    return `
      <div class="page-inner page-inner--audio-memory">
        <span class="tape" aria-hidden="true"></span>
  
        <img
          class="memory-photo ${side === "right" ? "memory-photo--right" : ""}"
          src="${page.image}"
          alt="${page.imageAlt}"
        />
  
        <p class="page-kicker">${page.kicker}</p>
        <h3 class="page-title">${page.title}</h3>
        <p class="page-text">${page.text}</p>
  
        <div class="audio-card audio-card--real">
          <audio controls preload="metadata">
            <source src="${page.audio}" type="audio/mpeg">
            Your browser does not support audio playback.
          </audio>
  
          <small>Grandma’s voice message</small>
        </div>
  
        <p class="page-signature">${page.signature}</p>
      </div>
    `;
  }
  if (page.type === "back") {
    return `
      <div class="page-inner page-inner--center page-inner--back">
        <div class="cover-mark">45</div>
        <p class="page-kicker">${page.kicker}</p>
        <h3 class="page-title">${page.title}</h3>
        <div class="heart-line"></div>
        <p class="page-text">${page.text}</p>
        <p class="page-signature">${page.signature}</p>
      </div>`;
  }

  return `
    <div class="page-inner page-inner--center page-inner--final">
      <p class="page-kicker">${page.kicker}</p>
      <h3 class="page-title">${page.title}</h3>
      <div class="heart-line"></div>
      <p class="final-note">${page.text}</p>
      <p class="page-signature">${page.signature}</p>
    </div>`;
}

function renderSpread() {
  leftPage.innerHTML = pageMarkup(pages[spreadIndex], "left");
  rightPage.innerHTML = pageMarkup(pages[spreadIndex + 1], "right");

  const visibleEnd = Math.min(spreadIndex + 2, pages.length);
  pageCounter.textContent = `Pages ${spreadIndex + 1}–${visibleEnd} of ${pages.length}`;

  previousButton.disabled = spreadIndex === 0;
  nextButton.disabled = spreadIndex + 2 >= pages.length;
  nextButton.textContent = spreadIndex + 2 >= pages.length ? "The End ♥" : "Next →";

  wireAudioPlaceholder();
}

function wireAudioPlaceholder() {
  document.querySelectorAll(".audio-placeholder").forEach((audioButton) => {
    audioButton.addEventListener("click", () => {
      const audioName = audioButton.dataset.audioName || "The voice message";
      alert(`${audioName} will play here once we add the recording file.`);
    });
  });
}

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  spreadIndex = 0;
  renderSpread();
  setTimeout(() => previousButton.focus(), 300);
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  openButton.focus();
}

function nextSpread() {
  if (isAnimating || spreadIndex + 2 >= pages.length) return;
  isAnimating = true;

  const nextIndex = spreadIndex + 2;

  turnFront.innerHTML = pageMarkup(pages[spreadIndex + 1], "right");
  turnBack.innerHTML = pageMarkup(pages[nextIndex], "left");
  rightPage.innerHTML = pageMarkup(pages[nextIndex + 1], "right");

  turningSheet.className = "turning-sheet is-turning-next";

  setTimeout(() => {
    spreadIndex = nextIndex;
    turningSheet.className = "turning-sheet";
    renderSpread();
    isAnimating = false;
  }, 820);
}

function previousSpread() {
  if (isAnimating || spreadIndex === 0) return;
  isAnimating = true;

  const previousIndex = spreadIndex - 2;

  turnFront.innerHTML = pageMarkup(pages[spreadIndex], "left");
  turnBack.innerHTML = pageMarkup(pages[previousIndex + 1], "right");
  leftPage.innerHTML = pageMarkup(pages[previousIndex], "left");

  turningSheet.className = "turning-sheet is-turning-previous";

  setTimeout(() => {
    spreadIndex = previousIndex;
    turningSheet.className = "turning-sheet";
    renderSpread();
    isAnimating = false;
  }, 820);
}

openButton.addEventListener("click", openModal);
closeTargets.forEach((target) => target.addEventListener("click", closeModal));
nextButton.addEventListener("click", nextSpread);
previousButton.addEventListener("click", previousSpread);

document.addEventListener("keydown", (event) => {
  if (!modal.classList.contains("is-open")) return;

  if (event.key === "Escape") closeModal();
  if (event.key === "ArrowRight") nextSpread();
  if (event.key === "ArrowLeft") previousSpread();
});

renderSpread();
