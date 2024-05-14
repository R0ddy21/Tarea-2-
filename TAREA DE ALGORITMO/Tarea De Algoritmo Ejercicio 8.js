// 8. Pedir al usuario un número y mostrar si es negativo menor que -20, sino mostrar si es positivo par o impar múltiplo de 7
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  numeros=0(leer);
// Los calculos o procesos que se hacen con las variables
// Proceso:  
//           Si (numero <= -20) entonces
//              escribir "El número es menor a 0:";
//              escribir numero;
//           Sino
//              escribir "El numero es mayor a 0=";
//              escribir numero

//           Si (numero > 0) entonces
//               escribir "El numero es positivo:";
//               escribir numero;
//           Sino
//               escribir "El numero es negativo:;
//               escribir numero;

//           Si  (numero % 2 == 0) entonces
//               escribir ""El número es par:"";
//               escribir numero;
//           Sino
//               escribir "El numero no es par:";
//               escribir numero;

//           Si  (numero % 7 == 0) entonces
//               escribir "El número es múltiplo de 7:";
//               escribir numero;
//           Sino
//               escribir "El número no es múltiplo de 7:";
//               escribir numero;
//           FinSi
// La informacion de las variables procesadas
// Salida:  escribir "gracias por ingresar"

const read = require("prompt-sync")();
const write = console.log;

// LENGUAJE JAVASCRIPT

function leerNumero(){
let numero=0
 write("Ingrese un número:");
 numero=parseFloat(read())
 if (numero <= -20) {
    write("El número es menor a 0:")
    write(numero);
}else{
    write("El numero es mayor a 0=")
    write(numero)
    } if (numero > 0) {
        write("El numero es positivo:")
        write(numero)
    }else{
        write("El numero es negativo:")
        write(numero)
    }
    if (numero % 2 == 0) {
        write("El número es par:")
        write(numero);
    }else {
        write("El numero no es par:")
        write(numero)
    }
    if (numero % 7 == 0) {
        write("El número es múltiplo de 7:")
        write(numero);
    }else{
        write("El número no es múltiplo de 7:")
        write(numero)
    }
        write("gracias por ingresar");
}
leerNumero()
