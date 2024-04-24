const currentyear = document.querySelector("#currentyear");
const last = document.getElementById("lastModified");

const today = new Date();

last.innerHTML = `<span class="last">Last Modification: ${document.lastModified}</span>`;
currentyear.innerHTML = today.getFullYear();