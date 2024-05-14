// 14. Solicitar al usuario un número y mostrar si es positivo o negativo
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero1=0(leer);
// Los calculos o procesos que se hacen con las variables
// Proceso:  Si Cnúmero1 >= 0) Entonces
//        escribir ("El numero es positivo")
// Sino
//       escribir ("El numero es negativo")
// FinSi
// La informacion de las variables procesadas
// Salida: escribir "gracias por su visita"

const read = require('prompt-sync')();
const write = console.log

// LENGUAJE JAVASCRIPT

function positivoNegativo(){
let numero1=0;
numero1=read ("Ingrese un numero: ");
numero1=parseFloat=(numero1)
if (numero1 >= 0){
    write ("El numero es positivo")
}
else {
    write ("El numero es negativo")
}
 write("gracias por su visita")
}
// se llama o se ejecuta la funcion
positivoNegativo()