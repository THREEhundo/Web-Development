const nav = document.querySelector("nav");
const jordan1 = [
  {
    name: "Royal Toe",
    color: "blue"
  },
  {
    name: "BRed",
    color: "bred"
  },
  {
    name: "Dark Mocha",
    color: "brown"
  },
  {
    name: "Shadow",
    color: "gray"
  },
  {
    name: "Clay Green",
    color: "green"
  },
  {
    name: "Shattered",
    color: "orange"
  },
  {
    name: "CO Japan Neutral",
    color: "silver"
  },
  {
    name: "First Class Flight",
    color: "white"
  }
];

// header / image / blurb
function createMenu(headerName, arr) {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const header = document.createElement("h2");
  header.innerHTML = headerName;
  header.classList.add("menu-header");

  const lowercaseHeader = headerName.toLowerCase();
  const formattedLower = lowercaseHeader.replace(" ", "-");

  const sneakersContainer = document.createElement("div");
  sneakersContainer.id = `${formattedLower}-container`;
  sneakersContainer.classList.add("container");

  nav.appendChild(menuContainer);
  menuContainer.appendChild(header);
  menuContainer.appendChild(sneakersContainer);

  arr.forEach((sneaker) => {
    const container = document.createElement("div");
    container.classList.add("menu-square");

    const lowJordan = sneaker.color.toLowerCase();

    const img = document.createElement("img");
    img.src = `./css/img/${lowJordan}.jpg`;
    img.classList.add("menu-icon");

    const blurb = document.createElement("p");
    blurb.innerHTML = sneaker.name;

    sneakersContainer.appendChild(container);
    container.appendChild(img);
    container.appendChild(blurb);
  });
}

createMenu("Jordan One", jordan1);
