function perfil () {
   
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
   
    if (nombre = "" || apellido == "" || email == "" ){
        showAlertError();
    }else{
        showAlertSuccess();

    }
    localStorage.setItem()
}

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    console.log("showAlertSuccess")
}
function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
    console.log("showAlertError")
}


document.addEventListener('DOMContentLoaded', () => {  
    let boton1 = document.getElementById('cambios')
    boton1.addEventListener('click', () => {
        perfil();
    })
});

function recordardatos() {

localStorage.getItem('login');

localStorage.setItem('perfil', JSON.stringify(perfilUsuario))
}