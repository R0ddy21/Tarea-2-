//25. Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación está entre el 2020 y 2023, aplicar un descuento del 5% sobre el precio de venta. mostrar el precio final incluyendo el 15% del IVA.
//NOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:precioVenta=0(leer),anioFabricacion=0(leer),descuento=0(calcular),precioFinal=0(calculado)
// Los calculos o procesos que se hacen con las variables
// Proceso: Si (anioFabricacion >= 2010 && anioFabricacion <= 2023) entonces
//                 descuento = (precioVenta*0.10)
//         sino
//                 descuento =(precioVenta*0.15)
//        finSi
//          precioFinal=precioVenta+descuento
// La informacion de las variables procesadas
// Salida: Escribir `Precio Venta: ${precioVenta} - Descuento:${descuento}: Precio Final=${precioFinal}`


const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function ventaVehiculo(){
    let precioVenta=0,anioFabricacion=0,descuento=0,precioFinal=0
    write("Ingrese Precio Venta:") 
    precioVenta = parseInt(read())
    write("Ingrese Año De Fabricacion:")
    anioFabricacion = parseInt(read()) 
    if (anioFabricacion >= 2010 && anioFabricacion <= 2023){
          descuento =(precioVenta*0.05)
    }else{
        descuento =(precioVenta*0.15)
    }
     precioFinal=precioVenta+descuento
    write(`Precio Venta: ${precioVenta} - Descuento:${descuento}: Precio Final=${precioFinal}`)
  }
  // se llama a la funcion para que se ejecute
  ventaVehiculo()