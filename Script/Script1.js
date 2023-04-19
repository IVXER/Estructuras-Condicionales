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