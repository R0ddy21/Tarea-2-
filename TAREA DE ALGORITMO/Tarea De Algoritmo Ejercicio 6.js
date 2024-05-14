// 6. Escribir un algoritmo que lea cuatro números y determine si el numero 1 es la mitad del número 2; Y si el numero 3 es divisor del numero4
// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  valor=[](PROCESO);
// Los calculos o procesos que se hacen con las variables
// Proceso:  // Verificar si el número 1 es la mitad del número 2
//           Si (valor * 2 == valor2) entonces
//              escribirvalor, " es la mitad de ",valor2;
//           Sino
//              escribir valor, " no es la mitad de " , valor2;
//           FinSi
//           // Verificar si el número 3 es divisor del número 4
//           Si (valor4 % valor3 == 0) entonces
//               escribir valor3 , "  divisor de " , valor4);
//           Sino
//               escribir valor3 , " no es divisor de " , valor4;
//           FinSi
// La informacion de las variables procesadas
// Salida:  escribir "gracias por ingresar"

const read = require('prompt-sync')();
const write = console.log

// LENGUAJE JAVASCRIPT

function leernumeros (){
    let valor=[]
    write ("Ingrese el número 1:");
    valor=(read())
    write("Ingrese el número 2:");
    valor2=(read())
    write("Ingrese el número 3:");
    valor3=(read())
    write("Ingrese el número 4:");
    valor4=(read())

    write(valor)
    write(valor2)
    write(valor3)
    write(valor4)
    
// Verificar si el número 1 es la mitad del número 2
if (valor * 2 == valor2) {
    write(valor, " es la mitad de ",valor2);
} else {
    write(valor, " no es la mitad de " , valor2);
}
// Verificar si el número 3 es divisor del número 4
if (valor4 % valor3 == 0) {
    write(valor3 , "  divisor de " , valor4);
} else {
    write(valor3 , " no es divisor de " , valor4);
}
    write("gracias por ingresar")

}
leernumeros ()