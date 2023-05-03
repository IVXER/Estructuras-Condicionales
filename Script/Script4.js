//4. Crear un algoritmo que le permita al usuario ingresar los datos de dos buses así: Placa, El número de pasajeros transportados y el valor del pasaje, y el computador le muestre la placa del bus que más dinero recogió.

function Pasajeros() {
  const placa=document.getElementById("placa").value;
  const pasajeros=document.getElementById("pasajeros").value;
  const valor=document.getElementById("valor").value;
  const rsl=pasajeros*valor
  document.getElementById("resultado").innerHTML = `${placa}`;
  document.getElementById("resultado").innerHTML = `El total de dinero recogido por cada uno de los pasajeros es: $${rsl}`;
}