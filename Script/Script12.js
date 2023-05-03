//Se tienen el área, el valor del metro cuadrado de una propiedad y la forma de pago de la cuota inicial. Se pide calcular el precio de venta de la propiedad y el valor de la cuota inicial, que sería el 20% del valor del precio de venta. Si la forma de pago es 1, se otorga un descuento del 10% sobre la cuota inicial y si la forma de pago es 2, se le recarga un 8% en el valor de la misma. Mostrar el valor del precio de venta y el de la cuota inicial de la propiedad (sólo hay 2 formas de pago).

function Area() {
    const area=parseFloat(document.getElementById("area").value);
    const valor=parseFloat(document.getElementById("valor").value);
    const formaPago=parseFloat(document.getElementById("formaPago").value);
    var descuentoAumento, porcentje;
    const valorFinal=area*valor;
    const cuotaInicial=valorFinal*0.2;
    switch(formaPago) {
        case 1:
            porcentje=cuotaInicial*0.10;
            descuentoAumento=cuotaInicial-porcentje;
            document.getElementById("resultado").innerHTML=`El total del de la compra total de la propiedad es de: $${valorFinal}<br>Tu cuota inicial tiene un valor de: $${cuotaInicial}<br>Debido a tu metodo de pago has recibido un descuento del 10% en tu cuota inicial, por lo tanto, tu cuota inicial quedara en: $${descuentoAumento}`
        break;
        case 2:
            porcentje=cuotaInicial*0.08;
            descuentoAumento=cuotaInicial+porcentje;
            document.getElementById("resultado").innerHTML=`El total del de la compra total de la propiedad es de: $${valorFinal}<br>Tu cuota inicial tiene un valor de: $${cuotaInicial}<br>Debido a tu metodo de pago habra un aumento del 8% en tu cuota inicial, por lo tanto, tu cuota inicial quedara en: $${descuentoAumento}`
    }
    
}