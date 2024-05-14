// 13. Pedir al usuario un número y mostrar si es par o impar
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero1=0(leer);
// Los calculos o procesos que se hacen con las variables
// Proceso:  Si Cnúmero1 % 2) Entonces
//        escribir ("El numero es impar")
// Sino
//       escribir ("El numero es par")
// FinSi
// La informacion de las variables procesadas
// Salida: escribir "gracias por su visita"

const read = require('prompt-sync')();
const write = console.log

// LENGUAJE JAVASCRIPT
function parImpar(){
let numero1=0;
numero1=read ("ingrese un numero: ");
numero1=parseFloat=(numero1)
if (numero1 % 2 ){
    write ("El numero es impar")
}
else {
    write ("El numero es par")
}
 write("gracias por su visita")
}
// se llama o se ejecuta la funcion
parImpar()