//Crear un algoritmo que le permita al usuario ingresar el nombre de un estudiante y las 4 notas que obtuvo en una materia y el computador le imprima el nombre, la nota definitiva y un mensaje que le indique si “GANA” O “PIERDE”. (LAS NOTAS SON DE 0 A 5.0, GANA SI LA NOTA ES MAYOR O IGUAL A 3.0 Y PIERDE SI ES MENOR A 3.0) Necesitamos crear una variable Nombre para capturar el nombre del estudiante. Necesitamos 4 variables de tipo real para las respectivas notas. Por último, creamos un variable para la nota definitiva.

function Nota() {
    const nombre=document.getElementById("nombre").value;
    const nota1=parseFloat(document.getElementById("nota1").value);
    const nota2=parseFloat(document.getElementById("nota2").value);
    const nota3=parseFloat(document.getElementById("nota3").value);
    const nota4=parseFloat(document.getElementById("nota4").value);
    const resultadoNotas=(nota1+nota2+nota3+nota4)/4

    if(resultadoNotas>=3) {
        document.getElementById("resultado").innerHTML=`${nombre} Felicidades!!!<br>Has aprobado la materia con una nota final de: ${resultadoNotas}.`
    }
    else if(resultadoNotas<3) {
        document.getElementById("resultado").innerHTML=`${nombre} Lo sentimos<br>Tu nota final es de: ${resultadoNotas}<br>La nota minima para aprobar es 3.0, por lo tanto, no has aprobado.`
    }
}