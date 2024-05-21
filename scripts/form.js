const currentyear = document.querySelector("#currentyear");
const last = document.getElementById("lastModified");
const productOptions = document.querySelector("select");


const today = new Date();

last.innerHTML = `<span class="last">Last Modification: ${document.lastModified}</span>`;
currentyear.innerHTML = today.getFullYear();

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgrating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      avgrating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      avgrating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      avgrating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      avgrating: 5.0
    }
];


products.forEach(product => {
    let node = document.createElement("option");
    node.textContent = product.name
    productOptions.appendChild(node);
});