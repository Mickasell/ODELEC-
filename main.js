let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  const total = slides.length;

  if (!slider || slides.length === 0) return;

  currentIndex = (index + total) % total;
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;

  adjustSliderHeight();
}

function adjustSliderHeight() {
  const container = document.getElementById("slider-container");
  const slides = document.querySelectorAll(".slide");

  if (!container || slides.length === 0) return;

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

window.addEventListener("load", () => {
  showSlide(currentIndex);
});

window.addEventListener("resize", adjustSliderHeight);

// Défilement automatique (optionnel)
// setInterval(() => {
//   showSlide(currentIndex + 1);
// }, 4000);
