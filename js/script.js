import conversion from "./modules/conversion.js";
import myCakes from "./modules/myCakes.js";

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

window.factura = {
    cliente: "INFORMATICA INACAP",
    domicilio: "AV. SAN MIGUEL 445",
    ciudad: "Talca",
    telefono: "223344",
    detalle: [
        {codigo: 1, cantidad: 3, descripcion: 'PASTEL MIL HOJAS', precioUnitario: 10000},
        {codigo: 2, cantidad: 4, descripcion: 'GALLETAS FINAS', precioUnitario: 8000},
        {codigo: 3, cantidad: 2, descripcion: 'BERLIN', precioUnitario: 500},
        {codigo: 4, cantidad: 1, descripcion: 'PIE DE LIMON', precioUnitario: 10000},
        {codigo: 5, cantidad: 5, descripcion: 'PASTEL MANJAR', precioUnitario: 12000},
        {codigo: 6, cantidad: 3, descripcion: 'PASTEL CREMA', precioUnitario: 13000}
    ]
};

document.getElementById("conversion").addEventListener("click", function() {
    content.innerHTML = conversion.form;
    window.values = conversion.valores;
    window.calculate = conversion.calculate;
});

document.getElementById("myCakes").addEventListener("click", function() {
    content.innerHTML = myCakes.form;
    myCakes.loadFactura();
});