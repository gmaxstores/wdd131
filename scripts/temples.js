const currentyear = document.querySelector("#currentyear");
const last = document.getElementById("lastModified");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

const today = new Date();

last.innerHTML = `<span class="last">Last Modification: ${document.lastModified}</span>`;
currentyear.innerHTML = today.getFullYear();

hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});