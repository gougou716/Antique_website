let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll(".indicator");
const heroTitle = document.querySelector(".hero-title");

const titles = ["Buddha's Hand", "The Westmacott Athlete", ""];

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  indicators[currentSlide].classList.remove("active");

  currentSlide = (n + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  indicators[currentSlide].classList.add("active");

  // 更新標題文字
  heroTitle.textContent = titles[currentSlide];
}

function moveSlide(n) {
  showSlide(currentSlide + n);
}

function setSlide(n) {
  showSlide(n);
}

// 自動輪播 (可選)
setInterval(() => {
  moveSlide(1);
}, 5000);
