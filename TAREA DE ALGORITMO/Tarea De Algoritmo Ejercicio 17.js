// 17. Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo
//BOSQUEJO
// Analisis de requerimentos:
// Entrada: nombre1=""(leer), nombre2=""(leer), comparacion(proceso)
// los datos o variables del problema
// Proceso: Si nombre1 === nombre2 entonces
//       comparacion="iguales"
//    sino si nombre1 > nombre2 entonces
//       comparacion="el primero es mayor"
//    sino
//       comparacion="el segundo es mayor"
//    FinSi
// Los calculos o procesos que se hacen con las variables
// Salida: comparacion


const read = require('prompt-sync')();
const write = console.log;

//LENGUAJE JAVASCRIPT

function compararNombres() {
   let nombre1 = "", nombre2 = "", comparacion = "";
   write("Ingrese el primer nombre:");
   nombre1 = read();
   write("Ingrese el segundo nombre:");
   nombre2 = read();
   if (nombre1 === nombre2) {
      comparacion = "iguales";
   } else if (nombre2 > nombre1) {
      comparacion = "el primero es mayor";
   } else {
      comparacion = "el segundo es mayor";
   }
   write(comparacion);
}

compararNombres();