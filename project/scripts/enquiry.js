const currentyear = document.querySelector("#currentyear");
const last = document.getElementById("lastModified");
const numberVisits = document.querySelector(".numVisits");

const today = new Date();

last.innerHTML = `<span class="last">Last Modification: ${document.lastModified}</span>`;
currentyear.innerHTML = today.getFullYear();

let visits = Number(localStorage.getItem("visits-ls")) ||
0;

if (visits !== 0) {
    numberVisits.textContent = visits;
}
else {
    numberVisits.textContent = "This is your first Visit";
}

visits++;

localStorage.setItem("visits-ls", visits);