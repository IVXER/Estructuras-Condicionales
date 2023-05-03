//2. Elaborar un algoritmo que muestre un mensaje según la edad ingresada; niño (menor de 10 años), preadolescente (entre 10 y 15 años), un adolescente (entre 15 y 18 años), adulto (entre 18 y 50 años), adulto mayor (mayor de 50 años).

function Edad() {
    const edad=document.getElementById("edad").value;
    const nombre=document.getElementById("nombre").value;
    let resultado=0;
    if (edad<10) {
        document.getElementById("resultado").innerHTML = `${nombre} eres un: Niño`;
    }
    else if (edad>=10 && edad<15) {
        document.getElementById("resultado").innerHTML = `${nombre} eres un: Preadolescente`;
    }
    else if (edad>=15 && edad<18) {
        document.getElementById("resultado").innerHTML = `${nombre} eres un: Adolescente`;
    }
    else if (edad>=18 && edad<50) {
        document.getElementById("resultado").innerHTML = `${nombre} eres un: Adulto`;
    }
    else if (edad>=50) {
        document.getElementById("resultado").innerHTML = `${nombre} eres un: Adulto Mayor`;
    }
}