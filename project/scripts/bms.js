const currentyear = document.querySelector("#currentyear");
const last = document.getElementById("lastModified");
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const stateOptions = document.querySelector("select");


const today = new Date();

last.innerHTML = `<span class="last">Last Modification: ${document.lastModified}</span>`;
currentyear.innerHTML = today.getFullYear();

hamButton.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamButton.classList.toggle("show");
});

const states = [
    {
      id: "AB",
      name: "Abia",
    },
    {
      id: "AD",
      name: "Adamawa",
    },
    {
      id: "AK",
      name: "Akwa Ibom",
    },
    {
      id: "AN",
      name: "Anambra",
    },
    {
      id: "BY",
      name: "Bayelsa",
    },
    {
        id: "BE",
        name: "Benue",
    },
    {
        id: "BO",
        name: "Borno",
    },
    {
        id: "CR",
        name: "Cross River",
    },
    {
        id: "DE",
        name: "Delta",
    },
    {
        id: "EB",
        name: "Ebonyi",
    },
    {
        id: "ED",
        name: "Edo",
    },
    {
        id: "EK",
        name: "Ekiti",
    },
    {
        id: "EN",
        name: "Enugu",
    },
    {
        id: "GO",
        name: "Gombe",
    },
    {
        id: "IM",
        name: "Imo",
    },
    {
        id: "JI",
        name: "Jigawa",
    },
    {
        id: "KD",
        name: "Kaduna",
    },
    {
        id: "KN",
        name: "Kano",
    },
    {
        id: "KT",
        name: "Katsina",
    },
    {
        id: "KE",
        name: "Kebbi",
    },
    {
        id: "KO",
        name: "Kogi",
    },
    {
        id: "KW",
        name: "Kwara",
    },
    {
        id: "LA",
        name: "Lagos",
    },
    {
        id: "NA",
        name: "Nasarawa",
    },
    {
        id: "Ni",
        name: "Niger",
    },
    {
        id: "OG",
        name: "Ogun",
    },
    {
        id: "ON",
        name: "Ondo",
    },
    {
        id: "OS",
        name: "Osun",
    },
    {
        id: "OY",
        name: "Oyo",
    },
    {
        id: "PL",
        name: "Plateau",
    },
    {
      id: "RI",
      name: "Rivers",
    },
    {
        id: "SO",
        name: "Sokoto",
    },
    {
        id: "TA",
        name: "Taraba",
    },
    {
        id: "YO",
        name: "Yobe",
    },
    {
        id: "ZA",
        name: "Zamfara",
    },
    {
        id: "FCT",
        name: "Abuja",
    }
];

if (stateOptions) {
    states.forEach(state => {
        let node = document.createElement("option");
        node.textContent = state.name;
        stateOptions.appendChild(node);
    });
} else {
    console.error("stateOptions is null");
};
/*states.forEach(state => {
    let node = document.createElement("option");
    node.textContent = state.name;
    stateOptions.appendChild(node);
});
*/