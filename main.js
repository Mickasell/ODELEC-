let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const total = slides.length;

  currentIndex = (index + total) % total;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  adjustSliderHeight();
}

function adjustSliderHeight() {
  const container = document.getElementById("slider-container");
  const slides = document.querySelectorAll(".slide");

  if (!slides.length) return;

  const currentSlide = slides[currentIndex];
  const image = currentSlide.querySelector("img");

  if (image && image.complete) {
    container.style.height = image.offsetHeight + "px";
  } else if (image) {
    image.onload = () => {
      container.style.height = image.offsetHeight + "px";
    };
  }
}

// Initialisation au chargement de la page
window.addEventListener("load", () => {
  showSlide(currentIndex); // affiche le premier slide
});

// Ajustement de la hauteur au redimensionnement
window.addEventListener("resize", adjustSliderHeight);

// ➕ Défilement automatique (optionnel : décommente si tu veux l’activer)
/*
setInterval(() => {
  showSlide(currentIndex + 1);
}, 4000);
*/
