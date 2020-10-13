export default {
    form: (`
        <div class="content__title">
            <h1 class="content__h1">Autor: Sebastián Benavides</h1>
        </div>

        <div class="content__information">
            <p class="content__p" id="information"></p>  
        </div>

        <div class="content__result">
            <table class="content__table" id="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Cantidad</th>
                        <th>Descripción</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody id="array"></tbody>
            </table>
        </div>
    `),
    factura: {
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
    },
    loadFactura: function() {
        var information = document.getElementById("information");
        var array = document.getElementById("array");
        var table = document.getElementById("table");
        var factura = window.factura;
        var result = 0;
        
        information.innerHTML = (
            "CLIENTE: " + this.factura.cliente + "<br>" +
            "DOMICILIO: " + this.factura.domicilio + "<br>" +
            "CIUDAD: " + this.factura.ciudad + "<br>" +
            "TELEFONO: " + this.factura.telefono + "<br>"
        );

        array.innerHTML = "";
        table.setAttribute("border", 1);
        table.style.visibility = "visible";

        this.factura.detalle.forEach(item => {
            var code = document.createElement("td");
            var quantity = document.createElement("td");
            var description = document.createElement("td");
            var price = document.createElement("td");
            var total = document.createElement("td");
            var tr = document.createElement("tr");
            
            code.innerHTML = item.codigo;
            quantity.innerHTML = item.cantidad;
            description.innerHTML = item.descripcion;
            price.innerHTML = "$" + item.precioUnitario;
            total.innerHTML = '$' + (
                parseInt(item.cantidad) * parseInt(item.precioUnitario)
            );

            result += (
                parseInt(item.cantidad) * parseInt(item.precioUnitario)
            );

            tr.appendChild(code);
            tr.appendChild(quantity);
            tr.appendChild(description);
            tr.appendChild(price);
            tr.appendChild(total);
            array.appendChild(tr);
        });

        var data = [
            {name: "SUBTOTAL:", value: "$" + result},
            {name: "IVA(19%):", value: "$" + ((result * 19) / 100)},
            {name: "TOTAL:", value: "$" + (result + ((result * 19) / 100))},
        ];

        data.forEach(item => {
            var tr = document.createElement("tr");
            var tdOne = document.createElement("td");
            var tdTwo = document.createElement("td");

            tdOne.setAttribute("colspan", 4);

            tdOne.innerHTML = item.name;
            tdTwo.innerHTML = item.value;

            tr.appendChild(tdOne);
            tr.appendChild(tdTwo);

            array.appendChild(tr);
        });
    }
};