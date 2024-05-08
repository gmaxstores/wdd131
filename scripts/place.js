const currentyear = document.querySelector("#currentyear");
const last = document.getElementById("lastModified");
const reqValues = document.querySelector(".col-windchill");
const colTemp = document.querySelector(".col-temp");
const colWind = document.querySelector(".col-wind");
const colcond = document.querySelector(".col-conditions");

const today = new Date();

last.innerHTML = `<span class="last">Last Modification: ${document.lastModified}</span>`;
currentyear.innerHTML = today.getFullYear();

let temperature = 30;
let windSpeed = 4;

function calcWindChill(temp, windSpeed) {
    return 35.74 + 0.6215*temp - 35.75 * (windSpeed^0.16) + 0.4275 * temp * (windSpeed^0.16);
}
colTemp.textContent = `${temperature} °F`;
colWind.textContent = `${windSpeed} mph`;
colcond.textContent = 'Partly cloudy';

if (temperature <= 50 & windSpeed > 3) {
    reqValues.textContent = `${calcWindChill(temperature, windSpeed)} °F`;
}
else (reqValues.textContent = "NA");

