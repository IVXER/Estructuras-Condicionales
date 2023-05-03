//1. Elabore un algoritmo que permita averiguar cuál es el nombre del mayor de 2 hermanos no gemelos. Como datos de entrada se tiene el nombre y la edad de las 2 personas.

function MayorEdad() {
    const edad1=document.getElementById("edad1").value;
    const edad2=document.getElementById("edad2").value;
    const nombre1=document.getElementById("nombre1").value;
    const nombre2=document.getElementById("nombre2").value;
    let resultado=0;
    if (edad1>edad2) {
        document.getElementById("resultado").innerHTML = `El mayor de los hermanos es: ${nombre1}`;
    }
    else if (edad1<edad2) {
        document.getElementById("resultado").innerHTML = `El mayor de los hermanos es: ${nombre2}`;
    }
}