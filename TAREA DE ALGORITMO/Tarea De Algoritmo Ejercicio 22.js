//22. Pedir al usuario el monto total de una factura y el año de la compra. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA. Si el año de la compra es menor al 2024 el porcentaje del IVA es del 12% caso contrario aplicar el IVA del 15%
//BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  montoTotal=0(leer),añoCompra=0(Proceso),totalConIva=0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: si (añoCompre <= 2024) entonces 
//      totalConIVA = montoTotal+(montoTotal*0.12) // 12% de IVA
// Sino
//      totalConIVA =  montoTotal+(montoTotal*0.15); // 15% de IVA
//  FinSi
// La informacion de las variables procesadas
// Salida: Escribir "Monto total a pagar incluyendo el IVA:","$", totalConIVA;

const read = require('prompt-sync')();
const write = console.log;

//LENGUAJE JAVASCRIPT

function calcularTotalConIVA() {
    let montoTotal = 0, añoCompra = 0, totalConIVA = 0;
    
    write("Ingrese el monto total de la factura:");
    montoTotal = parseInt(read());
    write("Ingrese el año de la compra:");
    añoCompra = parseInt(read());

    if (añoCompra <= 2024) {
        totalConIVA = montoTotal+(montoTotal*0.12) // 12% de IVA
    } else {
        totalConIVA =  montoTotal+(montoTotal*0.15); // 15% de IVA
    }

    write("Monto total a pagar incluyendo el IVA:","$", totalConIVA)
}

calcularTotalConIVA();