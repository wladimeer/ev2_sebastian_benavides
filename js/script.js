import conversion from "./modules/conversion.js";

loadHeader();
var content = document.getElementById("content");

function loadHeader() {
    var header = document.getElementById("header");

    var conversion = document.createElement("a");
    conversion.innerHTML = "Conversión Moneda";
    conversion.setAttribute("href", "#");
    conversion.setAttribute("id", "conversion");

    var myCakes = document.createElement("a");
    myCakes.innerHTML = "Mis Pasteles";
    myCakes.setAttribute("href", "#");
    myCakes.setAttribute("id", "myCakes");

    header.appendChild(conversion);
    header.appendChild(myCakes);
};

document.getElementById("conversion").addEventListener("click", function() {
    content.innerHTML = conversion.form;
    window.values = conversion.valores;
    window.calculate = conversion.calculate;
});