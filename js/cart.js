const CARRITO = CART_INFO_URL;
let producto = [];

function MostrarCarrito(array) {
    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let producto = array[i];
        htmlContentToAppend += `
            <tr>
            <td class="col"> <img width=150 src="`+ producto.image + `"></td>
            <td class="col">`+ producto.name + `</td>
            <td class="col">`+ producto.currency + producto.unitCost + `</td>
            <td class="col"> <input type="number" onchange="pepe(${producto.unitCost})" min=1 id="sumar" value="${producto.count}"></td>
            <td class="col" id="subTotal">${producto.unitCost * producto.count} </td>
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
    let total = valor * a;
    document.getElementById("subTotal").innerHTML = total;
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

