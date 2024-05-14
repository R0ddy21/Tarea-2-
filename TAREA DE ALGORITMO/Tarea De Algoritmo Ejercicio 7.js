//7. Escribir un algoritmo que lea cuatro números y determine si el numero 1 es divisor del numero3 Y si el numero 2 es el doble del numero4.
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  numeros=[](PROCESO);
// Los calculos o procesos que se hacen con las variables
// Proceso:  
//           Si ( numero3 % numero == 0) entonces
//              escribir numero, " El primer numero es divisor del tercero ",numero3;
//           Sino
//              escribir numero, " El primer numero no es divisor del tercero " ,numero3;
//           FinSi
//           Si (numero2 % numero4 * 2) entonces
//               escribir numero2 , "El segundo numero es el doble del cuarto " , numero4;
//           Sino
//               escribir numero2, " El segundo numero no es el doble del cuarto" , numero4;
//           FinSi
// La informacion de las variables procesadas
// Salida:  escribir "gracias por ingresar"



const read = require("prompt-sync")();
const write = console.log;

// LENGUAJE JAVASCRIPT

function leernumeros (){
    let numero=[]
    write ("Ingrese el número 1:");
    numero=(read())
    write("Ingrese el número 2:");
    numero2=(read())
    write("Ingrese el número 3:");
    numero3=(read())
    write("Ingrese el número 4:");
    numero4=(read())
write ("los numero ingresado:")
    write(numero)
    write(numero2)
    write(numero3)
    write(numero4)
   
if ( numero3 % numero == 0){
    write(numero, " El primer numero es divisor del tercero ",numero3);
} else {
    write(numero, " El primer numero no es divisor del tercero " ,numero3);
}
if (numero2 % numero4 * 2){
    write(numero2 , "El segundo numero es el doble del cuarto " , numero4);
} else {
    write(numero2, " El segundo numero no es el doble del cuarto" , numero4);
}
write("graciass por ingresar")
}
leernumeros ()
