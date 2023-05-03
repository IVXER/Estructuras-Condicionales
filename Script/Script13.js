//Elaborar un programa que le permita a un usuario ingresar el nombre de un trabajador, el número de horas trabajadas y valor hora, se pide que el programa le imprima el salario bruto, las bonificaciones, las deducciones y el salario neto; teniendo en cuenta que las bonificaciones serán de $20.000 sí trabajó como máximo 48 horas, de $50.000 si trabajo entre 49 y 58 horas y de $100.000 si trabajó más de 58 horas. Las deducciones son de $10.000 si el salario básico hora es menor de $5.000, de $20.000 si el salario básico hora es mayor de $5.000 y menor de $8.000 y de $ 50.000 si su salario básico hora es de $8.000 o más.

function Trabajadores() {
    const nombre=document.getElementById("nombre").value;
    const horas=parseFloat(document.getElementById("horas").value);
    const valor=parseFloat(document.getElementById("valor").value);
    const salarioBruto=horas*valor
    var bonificacion=0
    var salarioNeto=0
    var deducciones=0

    if(valor<5000) {
        deducciones=10000
     }

     else if(valor>=5000 && valor<8000) {
        deducciones=20000                  
     }

     else if(valor>8000) {
        deducciones=50000
     }

     if(horas==48) {
        bonificacion=20000
        salarioNeto=horas*valor-deducciones+bonificacion;
     }

     else if(horas>=49 && horas<=58) {
        bonificacion=50000
        salarioNeto=horas*valor-deducciones+bonificacion;
     }

     else if(horas>58) {
        bonificacion=100000
        salarioNeto=horas*valor-deducciones+bonificacion;
     }

     

     document.getElementById("resultado").innerHTML=`Hola ${nombre}<br>Tu salario bruto tiene un total de: $${salarioBruto}<br>Tus bonificaciones han tenido un total de: $${bonificacion}<br>Tus deducciones han tenido un total de: $${deducciones}<br>Tu salario neto tiene un total de: $${salarioNeto}`
}