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