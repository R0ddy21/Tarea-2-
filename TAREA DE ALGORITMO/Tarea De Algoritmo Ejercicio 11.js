// 11. Pedir al usuario un número y mostrar si es mayor o menor que 10
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: numero1=0(leer)
// Los calculos o procesos que se hacen con las variables
// Proceso:  Escribir Ingrese el primer número";
//            Leer número1 
//         Si Cnúmero1 >=10) Entonces
//           escribir "El numero es mayor a 10"
//  sino
//           escribir "El numero es menor a 10" 
// La informacion de las variables procesadas
// Salida: escribir "gracias por su visita"

const read = require('prompt-sync')();
const write = console.log
// LENGUAJE JAVASCRIPT
function menorMayor(){
let numero1=0;
write ("Ingrese un numero: ");
numero1=parseFloat=(read())
if (numero1>10){
    write ("El numero es mayor a 10")
}
else {
    write ("El numero es menor a 10")
}
 write("gracias por su visita")
}
// se llama o se ejecuta la funcion
menorMayor()