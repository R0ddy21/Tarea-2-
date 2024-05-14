// 9. Calculadora de sueldo con aumento: Pide al usuario que ingrese su salario actual y el porcentaje de aumento que recibirá. Calcula y muestra el nuevo salario después del aumento.
//BOSQUEJO
// Analisis de requerimentos:
// Entrada: salarioActual=0(leer), porcentajeAumento=0(leer),nuevoSalario(calcular)
// los datos o variables del problema
// Proceso: aumento = salarioActual +(salarioActual*porcentajeAumento/100);
// Los calculos o procesos que se hacen con las variables
// Salida: Escribir "su salario con su aumento",aumento

const read = require("prompt-sync")();
const write = console.log;

//LENGUAJE JAVASCRIPT

function calcularNuevoSalario(){
    let salarioActual=0, porcentajeAumento=0
    write("Ingrese su salario actual")
    salarioActual=parseInt(read())
    write("Ingrese el procentaje de aumento")
    porcentajeAumento=parseInt(read())
     aumento = salarioActual +(salarioActual*porcentajeAumento/100);
    write("su salario con su aumento",aumento)
}
calcularNuevoSalario()