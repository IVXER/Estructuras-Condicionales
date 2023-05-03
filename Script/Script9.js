//Crear un algoritmo que le permita al usuario ingresar 3 números diferentes entre sí y el computador se los muestre en orden ascendente.

function Ascendentes() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var num3 = parseFloat(document.getElementById("numero3").value);

    if (num1 === num2 || num1 === num3 || num2 === num3) {
        document.getElementById("resultado").innerHTML = "Error: Los números deben ser diferentes entre sí.";
    } else {
        var numeros = [num1, num2, num3];
        numeros.sort(function(a, b){ return a - b; });
        document.getElementById("resultado").innerHTML = "Los números en orden ascendente son: " + numeros.join(", ");
    }
}