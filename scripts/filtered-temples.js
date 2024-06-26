const currentyear = document.querySelector("#currentyear");
const last = document.getElementById("lastModified");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const grid = document.querySelector(".temple-grid");
const old = document.querySelector(".old");
const large = document.querySelector(".large");
const small = document.querySelector(".small");
const neww = document.querySelector(".new");
const heading = document.querySelector("h2");

const today = new Date();

last.innerHTML = `<span class="last">Last Modification: ${document.lastModified}</span>`;
currentyear.innerHTML = today.getFullYear();

hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Adelaide Australia",
        location: "Marden, South Australia, Australia",
        dedicated: "2000, June, 15",
        area: 10700,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/800x500/adelaide-australia-temple-lds-856093-wallpaper.jpg"
    },
    {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "1983, August, 5",
        area: 18691,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/800x500/apia-samoa-temple-lds-460475-wallpaper.jpg"
    },
    {
        templeName: "Anchorage Alaska",
        location: "Alasaka, United States",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/anchorage-alaska/800x1280/anchorage-temple-lds-60814-wallpaper.jpg"
    }
  ];

createTempleCards(temples);

function createTempleCards(filteredTemples) {
    grid.innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "350");
        img.setAttribute("height", "175");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        grid.appendChild(card);
    });
};


old.addEventListener("click", () => {
    heading.textContent = "Old Temples";
    createTempleCards(temples.filter(temple => parseInt(temple.dedicated.slice(0, 4), 10) < 1900));
});

neww.addEventListener("click", () => {
    heading.textContent = "New Temples";
    createTempleCards(temples.filter(temple => parseInt(temple.dedicated.slice(0, 4), 10) > 2000));
});

large.addEventListener("click", () => {
    heading.textContent = "Large Temples";
    createTempleCards(temples.filter(temple => temple.area > 90000));
});

small.addEventListener("click", () => {
    heading.textContent = "Small Temples";
    createTempleCards(temples.filter(temple => temple.area < 10000));
});