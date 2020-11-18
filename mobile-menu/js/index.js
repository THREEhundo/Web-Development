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
const yeezy = [
  {
    name: "350 V2 Beluga",
    color: "350 beluga"
  },
  {
    name: "350 V2 Black Red",
    color: "350 bred"
  },
  {
    name: "350 V2 Carbon",
    color: "350 carbon"
  },
  {
    name: "350 V2 Cinder",
    color: "350 cinder"
  },
  {
    name: "350 V2 Clay",
    color: "350 clay"
  },
  {
    name: "350 V2 Desert",
    color: "350 desert"
  },
  {
    name: "350 V2 Earth",
    color: "350 earth"
  },
  {
    name: "350 V2 Yecheil",
    color: "350 yecheil"
  },
  {
    name: "350 V2 Zebra",
    color: "350 zebra"
  },
  {
    name: "350 V2 350",
    color: "350"
  }
];
const dunks = [
  {
    name: "Dunk High Chinese New Year",
    color: "dunk chinese new year"
  },
  {
    name: "Dunk High Concepts",
    color: "dunk concepts"
  },
  {
    name: "Dunk High De La Soul",
    color: "dunk de la soul"
  },
  {
    name: "Dunk High Dog Walker",
    color: "dunk dog walker"
  },
  {
    name: "Dunk High FPAR",
    color: "dunk fpar"
  },
  {
    name: "Dunk High Lucky 7",
    color: "dunk lucky 7"
  },
  {
    name: "Dunk High Northern Lights",
    color: "dunk northern lights"
  },
  {
    name: "Dunk High Spectrum",
    color: "dunk spectrum"
  },
  {
    name: "Dunk High Supreme Blue",
    color: "dunk supreme blue"
  },
  {
    name: "Dunk High Supreme Red",
    color: "dunk supreme red"
  },
  {
    name: "Dunk High Truck It",
    color: "dunk truck it"
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

    const lowSneaker = sneaker.color.toLowerCase();

    const img = document.createElement("img");
    img.src = `./css/img/${lowSneaker}.jpg`;
    img.classList.add("menu-icon");

    const blurb = document.createElement("p");
    blurb.innerHTML = sneaker.name;

    sneakersContainer.appendChild(container);
    container.appendChild(img);
    container.appendChild(blurb);
  });
}

createMenu("Jordan One", jordan1);
createMenu("Yeezy Boost", yeezy);
createMenu("Nike Dunk High", dunks);
