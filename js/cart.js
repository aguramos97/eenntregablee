const CARRITO = CART_INFO_URL;
let producto = [];
let totalAll = 0;

function MostrarCarrito(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let producto = array[i];
        htmlContentToAppend += `
            <tr>
            <td class="col"> <img width=150 src="`+ producto.image + `"></td>
            <td class="col">`+ producto.name + `</td>
            <td class="col"><span class="price">`+ producto.currency + producto.unitCost + `</span></td>
            <td class="col"> <input class="cantidad" type="number" onchange="pepe(${producto.unitCost})" min=1 id="sumar" value="${producto.count}"></td>
            <td class="col" id="subTotal"><span class="subtotall">${producto.currency} ${producto.unitCost * producto.count} </span></td>
            </tr>`}

    document.getElementById("carrito").innerHTML = htmlContentToAppend;
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CART_INFO_URL + "25801.json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            producto = resultObj.data.articles;
            MostrarCarrito(producto);
        }
    });
});

function pepe(a) {
    let valor = document.getElementById("sumar").value;
    totalAll = valor * a;
    document.getElementById("subTotal").innerHTML = "USD" + totalAll;
    calculando();
}

function pago() {
    let tarjeta = document.getElementById("card");
    let transferencia = document.getElementById("transfer");

    if (tarjeta.checked) {
        document.getElementById("numcuenta").disabled = true;

    }

    else if (transferencia.checked) {
        document.getElementById("ntarjeta").disabled = true;
        document.getElementById("codigos").disabled = true;
        document.getElementById("vencimiento").disabled = true;


    }
}

function checkeado() {

    let nombre = document.getElementById('calle').value;
    let calle = document.getElementById('numerito').value;
    let esquina = document.getElementById('esquina').value;


    if (numerito = "" || calle == "" || esquina == "") {
        showAlertError();
    }
}

function calculando() {
    let cantidades = document.getElementsByClassName('cantidad');
    let precios = document.getElementsByClassName('price');
    let subtotales = document.getElementsByClassName('subtotall');
    let envios = document.getElementsByName('ingresos');
    let subtotal = totalAll, costoEnvio = 0, total = 0;



    for (let envio of envios) {
       if(envio.checked) {
            costoEnvio=subtotal*envio.value;
        }
        envio.addEventListener('click',() => {
                calculando();
        })
    }
    total=subtotal+costoEnvio;
    document.getElementById('productCostText').innerHTML=subtotal.toFixed(2);
    document.getElementById('comissionText').innerHTML=subtotal.toFixed(2);
    document.getElementById('totalCostText').innerHTML=subtotal.toFixed(2);
}