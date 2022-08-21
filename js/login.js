function login1() {
let nombre = document.getElementById("login").value;
let contraseña = document.getElementById("password").value;

if(nombre.length==0 || contraseña.length==0) {
   alert("¡Debe introducir email y contraseña!");
} 
else {
    localStorage.setItem("Item", JSON.stringify(login1));
    location.href="index.html";
}
}


document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("enviar").addEventListener("click", () => {
        login1();
    });
})

