let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const total = slides.length;

  currentIndex = (index + total) % total;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  adjustSliderHeight(); // <-- ajuste la hauteur ici
}
function adjustSliderHeight() {
  const container = document.getElementById("slider-container");
  const slides = document.querySelectorAll(".slide");
  const currentSlide = slides[currentIndex];
  const image = currentSlide.querySelector("img");

  if (image.complete) {
    container.style.height = image.offsetHeight + "px";
  } else {
    image.onload = () => {
      container.style.height = image.offsetHeight + "px";
    };
  }
}

// Ajuste la hauteur au chargement initial
window.addEventListener("load", adjustSliderHeight);
window.addEventListener("resize", adjustSliderHeight);

// Défilement automatique
// setInterval(() => {
//   showSlide(currentIndex + 1);
// }, 4000);
