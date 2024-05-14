// 23. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado.Calcular y mostrar el precio final luego de aplicar el descuento siempre cuando el precio sea mayor $100.

// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  precioProducto=0(leer),porcentajeDescuento=0(calcular),precioFinal=0(calculat)
// Los calculos o procesos que se hacen con las variables
// Proceso: porcentajeDescuento=parseInt(read())
//    si (precioProducto > 100) entonces
//        precioFinal = precioProducto+(precioProducto*porcentajeDescuento/100)
//        escrinir"El precio final luego de aplicar un descuento de: ","$",precioFinal
//    } else {
//        escribir "El precio del producto no es mayor a $100. No se aplica ningún descuento el total de su factura es de:","$",precioProducto;
//FinSi
// La informacion de las variables procesadas
// Salida: Escribir "gracias por su compra"

const read = require('prompt-sync')();
const write = console.log;

//LENGUAJE JAVASCRIPT

function calcularPrecioFinal() {
    let precioProducto=0,porcentajeDescuento=0,precioFinal=0
     write("Ingrese el precio del producto: ")
     precioProducto = parseInt(read())
     write("Ingrese el porcentaje de descuento aplicado: ")
     porcentajeDescuento=parseInt(read())
    if (precioProducto > 100) {
        precioFinal = precioProducto+(precioProducto*porcentajeDescuento/100)
        write("El precio final luego de aplicar un descuento de: ","$",precioFinal)
    } else {
        write("El precio del producto no es mayor a $100. No se aplica ningún descuento el total de su factura es de:","$",precioProducto);
    }
    write("gracias por su compra")

}

calcularPrecioFinal();
