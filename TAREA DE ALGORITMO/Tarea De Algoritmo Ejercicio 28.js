//28. Pide al usuario el precio total de una compra en una tienda en línea y el cupón de
//descuento a aplicar en porcentaje. Si el precio total de la compra supera los $10,
//aplica el descuento, de lo contrario, no aplica ningún descuento. Calcula y muestra el
//monto final con el descuento con el IVA del 15%.

// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: precioTotal=0.0, descuentoCupon=0, descuento=0.0, precioDescuento=0.0, montoFinal=0.0, IVA=0.0
// Los calculos o procesos que se hacen con las variables
// Proceso:   Si precioTotal > 10 entonces
// descuento= precioTotal * descuentoCupon/100
// precioDescuento= precioTotal - descuento
// si no precioDescuento=0
// IVA= precioDescuento * 15/100
// montoFinal= precioDescuento + IVA
// La informacion de las variables procesadas
// Salida: escribir "El monto final con el descuento y el IVA del 15% es: $", montoFinal

const read = require("prompt-sync")()
const write = console.log

//LENGUAJE JAVASCRIPT

function pagofinal(){
    let precioTotal=0.0, descuentoCupon=0, descuento=0.0, precioDescuento=0.0, montoFinal=0.0, IVA=0.0
    precioTotal=parseFloat(read("Ingrese el precio total de su compra: $"))
    descuentoCupon=parseFloat(read("Ingrese el cupon de descuento a aplicar en %: "))
    if (precioTotal > 10){
        (descuento= precioTotal * descuentoCupon /100)
        precioDescuento= precioTotal - descuento 
    } else {
        precioDescuento= 0
    }
    IVA= precioDescuento * 0.15
    montoFinal= precioDescuento + IVA
 write("El monto final con el descuento y el IVA del 15% es: $", montoFinal)
}
pagofinal()