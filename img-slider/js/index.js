const carouselContainer = document.querySelector(".carousel-container");
const imgArr = [1, 2, 3, 4, 5];

function showImg(i, dir) {
  const parent = document.querySelector(".carousel-viewport");
  const nodeChildren = parent.childNodes;
  nodeChildren.forEach((child) => {
    if (dir === "pre") {
      if (i === 1) {
        child.style.display = "none";
        document.querySelector(`#slide-5`).style.display = "list-item";
      } else {
        child.style.display = "none";
        document.querySelector(`#slide-${i - 1}`).style.display = "list-item";
      }
    } else if (dir === "nxt") {
      if (i === 5) {
        child.style.display = "none";
        document.querySelector(`#slide-1`).style.display = "list-item";
      } else {
        child.style.display = "none";
        document.querySelector(`#slide-${i + 1}`).style.display = "list-item";
      }
    }
  });
}

function createCarousel() {
  const ol = document.createElement("ol");
  ol.classList.add("carousel-viewport");
  carouselContainer.appendChild(ol);

  imgArr.forEach((i) => {
    const background = document.createElement("li");
    background.id = `slide-${i}`;
    background.classList.add("slide");
    background.innerHTML = i;

    const snapper = document.createElement("div");
    snapper.classList.add("snapper");

    const left = document.createElement("img");
    left.classList.add("previous");
    left.src = "./css/img/left-arrow.png";

    left.addEventListener("click", () => {
      showImg(i, "pre");
    });

    const right = document.createElement("img");
    right.classList.add("next");
    right.src = "./css/img/right-arrow.png";
    right.addEventListener("click", () => {
      showImg(i, "nxt");
    });

    ol.appendChild(background);
    background.appendChild(snapper);
    snapper.appendChild(left);
    snapper.appendChild(right);
  });
}

createCarousel();
