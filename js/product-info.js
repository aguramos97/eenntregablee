let articulos = [];
let comentarios = [];

function MostrarArticulos(array) {
    let htmlContentToAppend = "";

    htmlContentToAppend = `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <h2>`+ array.name + `</h2><hr></hr>
                <p><strong>Precio:</strong>`+ array.cost + `</p>
                <p><strong>Descripción:</strong>`+ array.description + `</p>
                <p><strong>Categoría:</strong>`+ array.category + `</p>
                <p><strong>Cantidad vendidos:</strong> `+ array.soldCount + `</p>
                <p><strong>Imagenes ilustrativas:</strong></p>
                <div class="imagenes ilustrativas">${showImage(array)}</div>
            </div>
    
    </div >
        `
    document.getElementById("contenedor").innerHTML = htmlContentToAppend;
}


function MostrarComment(array) {
    let htmlContentToAppend = " "
    for (let i = 0; i < array.length; i++) { 
    let calificacion = array[i];

    htmlContentToAppend += `
        <li class="list-group-item">
            <p><strong>`+ calificacion.user + `</strong> -` + calificacion.dateTime + ` - ` + calificacion.score + ` ${MostrarStar(calificacion.score)}</p >
            <p> `+ calificacion.description + ` </p> 
        </li >
        `
    document.getElementById("comentarios").innerHTML = htmlContentToAppend;
}
}
    


function showImage(array) {
    let figura = array.images
    let vacio = ""
    for (let i = 0; i < figura.length; i++) {
        vacio += `
    <img src="`+ figura[i] + `" alt="product image" class="img-thumbnail">`
    }
    return vacio
}

function MostrarStar(numero) {
    let puntuacion = ""
    for (let i=0; i < 5; i++) {
        if (i < numero) {
            puntuacion +=`<span class="fa fa-star checked"></span>`
        } else {
            puntuacion += `<span class="fa fa-star"></span>`
        }
    }
    return puntuacion
}


document.addEventListener("DOMContentLoaded", function (e) {
    let product1 = localStorage.getItem("productID")
    getJSONData(PRODUCT_INFO_URL + product1 + ".json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            articulos = resultObj.data;
            MostrarArticulos(articulos);
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL + product1 + ".json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            comentarios = resultObj.data;
            MostrarComment(comentarios);
        }
    });
});