function login1() {
let usuario = {}
usuario.nombre= document.getElementById("login").value;
usuario.contraseña = document.getElementById("password").value;
}

if(usuario.nombre!="" && usuario.contraseña!="") {
   localStorage.setItem("Item", JSON.stringify(usuario));
    location.href="index.html";
} 
else {
    alert("¡Debe introducir email y contraseña!");
}

document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("enviar").addEventListener("click", () => {
        login1();
    });
})

