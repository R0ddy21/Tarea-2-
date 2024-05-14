// 16. Solicitar al usuario un carácter y mostrar si es una vocal o consonante.
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: vocal=""(leer), 
// Los calculos o procesos que se hacen con las variables
// Proceso: Si (vocal == "a")entonces
//     escribir("97")
//   Sino Si(vocal == "A")entonces
//      escribir("65")
//  Sino Si (vocal == "e") entonces
//      escribir("101")
//   Sino Si (vocal == "E") entonces
//      escribir("69")
//   Sino Si (vocal == "i") entonces
//      escribir("105")
//  Sino Si (vocal == "I") entonces
//         escribir("73")
//   Sino Si (vocal == "o") entonces
//      escribir("111")
//   Sino Si (vocal == "O") entonces
//      escribir("79")
//   Sino Si(vocal == "u") entonces
//      escribir("117")
//   Sino Si (vocal == "U") entonces
//     escribir("85")
//   sino
//     escribir"caracter no es una vocal"

// La informacion de las variables procesadas
// Salida: escribir "gracias por ingresar"

const read = require('prompt-sync')();
const write = console.log;

//LENGUAJE JAVASCRIPT 

function vocalAscii(){
   let vocal=""
   write("Ingrese una vocal:");
   vocal=(read())
   if (vocal == "a"){
     write("97")
   }else if (vocal == "A"){
     write("65")
   } else if (vocal == "e") {
     write("101")
   } else if (vocal == "E") {
     write("69")
   } else if (vocal == "i") {
     write("105")
   } else if (vocal == "I") {
     write("73")
   } else if (vocal == "o") {
     write("111")
   } else if (vocal == "O") {
     write("79")
   } else if (vocal == "u") {
     write("117")
   } else if (vocal == "U") {
     write("85")
   }else{
     write("caracter no es una vocal")
   }
 }
 vocalAscii()