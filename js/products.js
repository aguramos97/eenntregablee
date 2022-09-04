const dire1 = "https://japceibal.github.io/emercado-api/cats_products/101.json";
let categoriesArray = []


function showCategoriesList(autos){
    let htmlContentToAppend = "";

    for(let auto of autos){ 
      
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

    function sortCategories(criteria, array){
        let result = [];
        if (criteria === ORDER_ASC_BY_NAME)
        {
            result = array.sort(function(a, b) {
                if ( a.cost < b.cost ){ return -1; }
                if ( a.cost > b.cost ){ return 1; }
                return 0;
            });
        }else if (criteria === ORDER_DESC_BY_NAME){
            result = array.sort(function(a, b) {
                if ( a.cost > b.cost ){ return -1; }
                if ( a.cost < b.cost ){ return 1; }
                return 0;
            });
        }else if (criteria === ORDER_BY_PROD_COUNT){
            result = array.sort(function(a, b) {
                let aCount = parseInt(a.soldCount);
                let bCount = parseInt(b.soldCount);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
        }
    
        return result;
    }

