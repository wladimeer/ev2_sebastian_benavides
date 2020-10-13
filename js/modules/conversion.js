export default {
    form: (`
        <div class="content__title">
            <h1 class="content__h1">Autor: Sebastián Benavides</h1>
        </div>

        <div class="content__inputs">
            <label class="content__label">Valor en Pesos Chilenos</label>
            <input type="number" id="coin" class="content__input" placeholder="1000">
        </div>

        <div class="content__radios">
            <div class="content__group">
                <input class="content__radio" type="radio" id="dolar" name="type">a Dolar
            </div>

            <div class="content__group">
                <input class="content__radio" type="radio" id="uf" name="type">a UF
            </div>
    
            <div class="content__group">
                <input class="content__radio" type="radio" id="euro" name="type">a Euro
            </div>
        </div>

        <div class="content__buttons">
            <button class="content__button" onClick="calculate()">
                Calcular
            </button>
        </div>

        <div class="content__result">
            <p class="content__p" id="result"></p>
        </div>
    `),
    valores: {
        dolar: 628.68, uf: 26648.67, euro: 740.67
    },
    calculate: function() {
        var coin = document.getElementById("coin");
        var result = document.getElementById("result");
        var type = document.getElementsByName("type");
        var message = "";
        var error = "";
        var count = 0;

        type.forEach(item => {
            if(!item.checked) {
                count++;
            }

            if((coin.value == "" || coin.value < 1) && count == type.length) {
                error = "Verifica los Campos";
            } else {
                if(coin.value == "" || coin.value < 1) {
                    error = "Verifica los Pesos Ingresados";
                }

                if(count == type.length) {
                    error = "Selecciona una Conversión";
                } else if(item.checked) {
                    if(item.id == "dolar") {
                        var total = (coin.value / 628.68);
                        message = "$" + coin.value + " Pesos Chilenos a Dolares: $" + total.toFixed(0);
                    } else if(item.id == "uf") {
                        var total = (coin.value / 26648.67);
                        message = "$" + coin.value + " Pesos Chilenos a UF: " + total.toFixed(0);
                    } else {
                        var total = (coin.value / 740.67);
                        message = "$" + coin.value + " Pesos Chilenos a Euros: €" + total.toFixed(0);
                    }
                }
            }
        });

        if(error == "") {
            result.innerHTML = message;
            result.style.color = "blue";
            coin.value = "";
        } else {
            result.innerHTML = error;
            result.style.color = "red";
        }
    }
};