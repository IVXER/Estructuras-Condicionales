//5. Elaborar un algoritmo donde el usuario ingrese la placa de un bus, el número de pasajeros transportados y la ruta donde prestó el servicio (A o B) el computador le debe mostrar el dinero que recolectó sabiendo que en la ruta A el pasaje es a $1.200 y en la B a $1.000.

function Pago() {
  const placa=document.getElementById("placa").value;
  const ruta=parseInt(document.getElementById("ruta").value);
  const pasajeros=document.getElementById("pasajeros").value;
  let precioRuta= 0;
    switch (ruta) {
      case 1:
        precioRuta=1200;
        break;
      case 2:
        precioRuta=1000;
    }
    resultado=precioRuta*pasajeros
  document.getElementById("resultado").innerHTML = `El monto a pagar al trabajador es de: $${resultado}`;
}