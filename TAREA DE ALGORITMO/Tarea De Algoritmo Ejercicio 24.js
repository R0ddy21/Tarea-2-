//24. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos. Si la nota es mayor a 0 y menor a 60 se queda para recuperación caso contario pierde la materia.
//BOSQUEJP
// Analisis de requerimentos:
// los datos o variables del problema
// Entrada:  notaExamen=0(CALCULAR),nombre=""(LEER)
// Los calculos o procesos que se hacen con las variables
// Proceso: SI  (notaExamen >= 60) Entonces
//    escribir "¡Felicidades!",nombre,"Has aprobado el examen.");
// sino 
// si (notaExamen >= 40 && notaExamen < 60) 
// escribir("El estudiante",nombre," Esta en recuperacion.");
//sino
// escribir "Lo siento",nombre,"has reprobado el examen.";
// La informacion de las variables procesadas
// Salida: Escribir "El informe del estudiante",nombre

const read = require('prompt-sync')();
const write = console.log

//LENGUAJE JAVASCRIPT

function estudiante(){
let notaExamen=0,nombre=""
write("Ingrese el nombre completo del estudiante")
nombre=(read())
write("Ingrese la nota de examen del estudiante")
notaExamen=parseInt(read())
if (notaExamen >= 60) {
    write("¡Felicidades!",nombre,"Has aprobado el examen.");
  } else {
    if (notaExamen >= 40 && notaExamen < 60) {
    write("El estudiante",nombre," Esta en recuperacion.");
  } else
    write("Lo siento",nombre,"has reprobado el examen.");
 }
 write("El informe del estudiante",nombre)
}
// se llama o se ejecuta la funcion
estudiante()

