//Crear un algoritmo que le permita al usuario ingresar el tipo de trabajador (FIJO o TEMPORAL) y con base en esto pueda imprimir el nombre y el salario neto, sabiendo que si es FIJO debe leer el nombre, el número de horas trabajadas, el salario básico hora, el total de deducciones y el total de bonificaciones y si es TEMPORAL solo debe leer el nombre y el número de horas trabajadas; estos trabajadores tienen un salario básico hora fijo de $6.000 y no tienen deducciones ni bonificaciones.

function calcularSalario() {
    var tipoTrabajador = document.getElementById("tipo").value;
    var nombre = document.getElementById("nombre").value;
    var horasTrabajadas = parseInt(document.getElementById("horas").value);
    var salarioNeto = 0;
    
    if (tipoTrabajador === "FIJO") {
      var salarioBasicoHora = 6000;
      var totalDeducciones = parseFloat(document.getElementById("deducciones").value);
      var totalBonificaciones = parseFloat(document.getElementById("bonificaciones").value);
      
      salarioNeto = (salarioBasicoHora * horasTrabajadas) + totalBonificaciones - totalDeducciones;
    } else if (tipoTrabajador === "TEMPORAL") {
      var salarioBasicoHora = 6000;
      salarioNeto = salarioBasicoHora * horasTrabajadas;
    }
    
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Nombre: " + nombre + "<br>";
    resultadoElement.innerHTML += "Salario Neto: $" + salarioNeto.toFixed(2);
  }