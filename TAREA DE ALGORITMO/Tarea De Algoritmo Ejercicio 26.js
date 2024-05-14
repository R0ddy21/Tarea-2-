//26. Pide al usuario el precio de un artículo y el porcentaje de impuesto de ventas aplicado en su región. Si el precio del artículo supera los $200, aplica el impuesto de ventas, de lo contrario, no se aplica impuesto. Calcula y muestra el precio final luego de aplicar el impuesto.
//BOSQUEJO
// Analisis de requerimentos:
// Entrada: precioArticulo=0(leer), porcentajeImpuesto=0(leer), precioFinal = 0(calcular)
// Proceso: Si( precioArticulo > 200) entonces 
//             precioFinal = precioArticulo + precioArticulo * porcentajeImpuesto / 100
//          sino  
//             precioFinal = precioArticulo
// Salida: Escribir "El precio final luego de aplicar el impuesto es: $" , precioFinal

const read = require("prompt-sync")();
const write=console.log

//LENGUAJE JAVASCRIPT

function calcularPrecioFinal() {
    let precioArticulo=0, porcentajeImpuesto=0, precioFinal = 0
    write("Ingrese el precio del artículo:")
    precioArticulo=parseInt(read())
    write("Ingrese el porcentaje de impuesto de ventas: ")
    porcentajeImpuesto=parseInt(read())
    if (precioArticulo > 200) {
        precioFinal = precioArticulo + (precioArticulo * porcentajeImpuesto / 100)
    } else {
        precioFinal = precioArticulo
    }
    write("El precio final luego de aplicar el impuesto es: $" , precioFinal)
}
calcularPrecioFinal()







