//Se tiene un código, número de artículos vendidos y el valor del artículo con ese código. Calcule el valor de la compra, teniendo en cuenta lo siguiente: si la compra es de 50 o más artículos se le da al cliente 10% de descuento; si la compra es menor de 50 artículos no se hace descuento. Mostrar el código, el total de la compra y el valor del descuento.

function calcularCompra() {
    var codigoArticulo = document.getElementById("codigo").value;
    var cantidadArticulos = parseInt(document.getElementById("cantidad").value);
    var valorArticulo = parseFloat(document.getElementById("valor").value);
    
    var totalCompra = cantidadArticulos * valorArticulo;
    var descuento = 0;
    
    if (cantidadArticulos >= 50) {
      descuento = totalCompra * 0.1;
    }
    
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "Código del artículo: " + codigoArticulo + "<br>";
    resultadoElement.innerHTML += "Total de la compra: $" + totalCompra.toFixed(2) + "<br>";
    resultadoElement.innerHTML += "Descuento: $" + descuento.toFixed(2);
}