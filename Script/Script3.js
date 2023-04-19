function Salario() {
    const nombre1=document.getElementById("nombre").value;
    const nombre2=document.getElementById("nombre2").value;
    const salario1=document.getElementById("salario").value;
    const salario2=document.getElementById("salario2").value;
    const deducciones1=document.getElementById("deducciones").value;
    const deducciones2=document.getElementById("deducciones2").value;
    const bonificaciones1=document.getElementById("bonificaciones").value;
    const bonificaciones2=document.getElementById("bonificaciones2").value;
    let rsl1=salario1+bonificaciones1-deducciones1
    let rsl2=salario2+bonificaciones2-deducciones2


    if (rsl1>rsl2) {
        document.getElementById("resultado").innerHTML = `${nombre1} tiene un salario bruto mas alto con un total de: ${rsl1}`;
    }
    else if (rsl1<rsl2) {
        document.getElementById("resultado").innerHTML = `${nombre2} tiene un salario bruto mas alto con un total de: ${rsl2}`;
    }
}