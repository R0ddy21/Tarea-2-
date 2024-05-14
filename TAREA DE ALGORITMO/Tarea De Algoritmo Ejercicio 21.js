// 21. Solicitar al usuario un número y mostrar si es un número de un solo dígito. 
//BOSQUEJO
// 11. Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// Analisis de requerimentos:
// Entrada: numero=0(leer), unSoloDigito(proceso)
// La informacion de las variables procesadas
// Proceso: 
//    Si numero es mayor o igual a -9 y menor o igual a 9 entonces
//       numero="es un número de un solo dígito"
//    sino
//       numero="no es un número de un solo dígito"
//    FinSi
// Los calculos o procesos que se hacen con las variables
// Salida: numero

const read = require('prompt-sync')();
const write = console.log;

//LENGUAJE JAVASCRIPT

function verificarUnSoloDigito() {
   let numero = 0;
   write("Ingrese un número:");
   numero = parseFloat(read());
   if (numero >= -9 && numero <= 9) {
      numero = "Es un número de un solo dígito";
   } else {
      numero = "No es un número de un solo dígito";
   }
   write(numero);
}

verificarUnSoloDigito();