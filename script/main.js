/*==============
SIDEBAR
==============*/

const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

/*=================
MUSICS CARDS
=================*/

const back = document.getElementById("back");
const next = document.getElementById("next");
const cardsSlide = document.querySelector(".musics-cards-slide");

const cardWidth = 200;
const totalCards = document.querySelectorAll(".music-card").length;

let currentIndex = 0;

function updateSlide() {
  cardsSlide.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  cardsSlide.style.transition = "transform 0.4s ease";
}

next.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    updateSlide();
  }
});


back.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

/*====================
LIKE BUTTON
====================*/

const msgSecret = document.getElementById("msgSecret");

document.querySelectorAll(".like-btn").forEach(button => {
  button.addEventListener("click", () => {
    const music = button.dataset.name;
    const icon = button.querySelector("i");

    // Toggle heart icon
    icon.classList.toggle("bi-heart");
    icon.classList.toggle("bi-heart-fill");
    
    msgSecret.textContent = `Você gosta de ${music}? Interessante 😉`;
    msgSecret.style = "color: #fff; padding: 10px; border: 1.3px solid #06D400; border-radius: 10px"
  });
});
