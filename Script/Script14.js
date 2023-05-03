//Para la materia de Destrezas se determinó con los estudiantes que, si la nota del primer quiz era menor que la del segundo, se sustituye la primera nota por la segunda. La tercera y cuarta nota no se modifican. Elabore un algoritmo que le permita al profesor ingresar las 4 notas que obtuvo un alumno y el computador le muestre la nota definitiva y la calificación cualitativa que es: “E” si es mayor o igual a 4.5, “S” si es mayor o igual a 4.0 y menor de 4.5, “B” si es mayor o igual a 3.5 y menor de 4.0, “A” si es mayor o igual a 3.0 y menor de 3.5, “D” si es mayor o igual a 2.0 y menor de 3.0 “I” si es menor de 2.0.

function Notas() {
    var n1=parseFloat(document.getElementById("n1").value);
    var n2=parseFloat(document.getElementById("n2").value);
    var n3=parseFloat(document.getElementById("n3").value);
    var n4=parseFloat(document.getElementById("n4").value);
    var resultado=(n1+n2+n3+n4)/4
    var calificaciónCualitativa=0

    if(n1<n2) {
        n1=n2
        resultado=(n1+n2+n3+n4)/4
    }

    if(resultado>=4.5) {
        calificaciónCualitativa="E"
    }

    else if (resultado>=4.0 && resultado<4.5) {
        calificaciónCualitativa="S"
    }

    else if(resultado>=3.5 && resultado<4.0) {
        calificaciónCualitativa="B"
    }

    else if(resultado>=3.0 && resultado<3.5) {
        calificaciónCualitativa="A"
    }

    else if(resultado>=2.0 && resultado<3.0) {
        calificaciónCualitativa="D"
    }
    
    else if(resultado<2.0) {
        calificaciónCualitativa="I"
    }

    document.getElementById("resultado").innerHTML=`Tu nota final es de: ${resultado}<br>Tu calificación cualitativa es: ${calificaciónCualitativa}`
}