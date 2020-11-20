const slideshowContainer = document.querySelector(".slideshow-container");

let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dot");
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i += 1) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  setTimeout(() => {
    slideIndex += 1;
    if (slideIndex > slides.length) slideIndex = 1;
    showSlides();
  }, 5000);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function nextSlide(n) {
  showSlides((slideIndex += n));
}

function createArrows() {
  // Left Arrow
  const prev = document.createElement("a");
  prev.classList.add("prev");
  prev.innerHTML = "&#10094";
  prev.addEventListener("click", () => {
    nextSlide(-1);
  });

  // Right Arrow
  const next = document.createElement("a");
  next.classList.add("next");
  next.innerHTML = "&#10095";
  next.addEventListener("click", () => {
    nextSlide(1);
  });

  slideshowContainer.appendChild(prev);
  slideshowContainer.appendChild(next);
}

const createSlideshow = () => {
  const navDotsContainer = document.createElement("div");
  navDotsContainer.classList.add("nav-container");

  for (let i = 0; i < 4; i += 1) {
    const slide = document.createElement("div");
    slide.classList.add("slides", "fade");
    slide.id = `slide-${i + 1}`;
    slide.innerHTML = i + 1;

    const background = document.createElement("div");
    background.classList.add("color");
    // background.id = `slide-${i + 1}`;

    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentSlide(i);
    });

    slideshowContainer.appendChild(slide);
    slideshowContainer.appendChild(background);
    navDotsContainer.appendChild(dot);
  }
  createArrows();

  slideshowContainer.appendChild(navDotsContainer);
};

createSlideshow();
showSlides(slideIndex);
