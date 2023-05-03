//Elaborar un algoritmo que le permita al usuario leer 3 número diferentes entre sí y el computador le imprima el mayor de ellos.
function Numeros() {
var n1=parseFloat(document.getElementById("n1").value);
var n2=parseFloat(document.getElementById("n2").value);
var n3=parseFloat(document.getElementById("n3").value);
var mayor=n1;

if (n2>mayor) {
    mayor=n2;
}
if (n3>mayor) {
    mayor=n3;
}
document.getElementById("resultado").innerHTML = `El numero con mas valor es: ${mayor}`;
}