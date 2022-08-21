const dire1 = "https://japceibal.github.io/emercado-api/cats_products/101.json";
let categoriesArray = []


function showCategoriesList(autos){
    let htmlContentToAppend = "";

    for(let auto of autos.products){ 
      
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img scr="` + auto.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ auto.name + "-" + auto.currency + "" + auto.cost + `</h4> 
                        <p> `+ auto.description +`</p> 
                        </div>
                        <small class="text-muted">` + auto.soldCount+ ` artículos</small> 
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("entregable1").innerHTML = htmlContentToAppend; 
    }
}


    document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(dire1).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                htmlContentToAppend  = resultObj.data;
                showCategoriesList(htmlContentToAppend);
            }
        });
    });