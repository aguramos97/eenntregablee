catid = localStorage.getItem("catID");
const dire1 = "https://japceibal.github.io/emercado-api/cats_products/"+catid+".json";

let categoriesArray = []


function showCategoriesList(autos){
    let htmlContentToAppend = "";

    for(let auto of autos){ 
        htmlContentToAppend += `
        <div onclick="setProductID(${auto.id})" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                 <img src=`+ auto.image +` alt="product image" class="img-thumbnail">
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
        document.getElementById("entregable1").innerHTML=htmlContentToAppend; 
    }
}

function setProductID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html"
}

    document.addEventListener("DOMContentLoaded", function(e){
        let usuario1= localStorage.getItem("Item");
        document.getElementById("usuario").innerHTML=usuario1;
        getJSONData(dire1).then(function(resultObj){
            if (resultObj.status === "ok")
            {
                categoriesArray = resultObj.data.products;
                showCategoriesList(categoriesArray);
            }
        });
        document.getElementById("filtrar").addEventListener("click", function(){
            filtrar();
        });
        document.getElementById("sortAsc").addEventListener("click", function(){
            let result = [];
            result = categoriesArray.sort(function(a, b) {
                if ( a.cost < b.cost ){ return -1; }
                if ( a.cost > b.cost ){ return 1; }
                return 0;
            });
            showCategoriesList(result);
        });
    
        document.getElementById("sortDesc").addEventListener("click", function(){
            let result = [];
            result = categoriesArray.sort(function(a, b) {
                if ( a.cost > b.cost ){ return -1; }
                if ( a.cost < b.cost ){ return 1; }
                return 0;
            });
            showCategoriesList(result);
        });

        document.getElementById('limpiar').addEventListener('click', function () {
            showCategoriesList(categoriesArray);
          
        });

        document.getElementById("sortByCount").addEventListener("click", function(){
            let result = [];
            result = categoriesArray.sort(function(a, b) {
                let aCount = parseInt(a.soldCount);
                let bCount = parseInt(b.soldCount);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
            showCategoriesList(result);
        });
   
    });


    function filtrar(){
        //parseInt porque es un string, y necesito un integer
        let inicial = parseInt(document.getElementById('minimo').value);//tomo el valor mínimo
        let final = parseInt(document.getElementById('maximo').value);//tomo el valor máximo
        let listaFiltrada = categoriesArray.filter(producto => producto.cost >= inicial && producto.cost <= final );
        // arr.sort((a,b)=>a-b)
        listaFiltrada.sort((ant,sig)=>ant.cost-sig.cost);
      
        showCategoriesList (listaFiltrada);
    
    }  

  
    