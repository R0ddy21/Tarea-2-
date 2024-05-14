//29. Pide al usuario su salario actual y la cantidad de años de antigüedad. Calcule el valor
//del bono de antigüedad del empleado aplicando el 3% del salario por el número de
//años de antigüedad siempre y cuando supere los 3 años, caso contrario el bono de
//antigüedad es de cero. Se pide mostrar el salaria y el bono de antigüedad.

// BOSQUEJO
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada: salarioActual=0.0, aniosAntiguedad=0, bonoAntiguedad=0.0 
// Los calculos o procesos que se hacen con las variables
// Proceso: si (aniosAntiguedad > 3 ) entonces
//               bonoAntiguedad= salarioActual * 0.03 * aniosAntiguedad
//          sino 
//               bonoantiguedad= 0
//          finsi
// La informacion de las variables procesadas
// Salida: escribir "Su salario es $", salarioActual;
//         escribir "El bono por antiguedad es $",bonoAntiguedad

const read = require("prompt-sync")()
const write = console.log
function bonoTrabajo(){
    let salarioActual=0.0, aniosAntiguedad=0, bonoAntiguedad=0.0
salarioActual=parseFloat(read("Ingrese su salario Actual: $"))
aniosAntiguedad=parseInt(read("Ingrese sus anios de Antiguedad: "))
if ( aniosAntiguedad > 3){
    (bonoAntiguedad= salarioActual * 0.03 * aniosAntiguedad)
} else{
    (bonoAntiguedad= 0)
}
write("Su salario es $", salarioActual)
write("El bono por antiguedad es $",bonoAntiguedad)
}
bonoTrabajo()