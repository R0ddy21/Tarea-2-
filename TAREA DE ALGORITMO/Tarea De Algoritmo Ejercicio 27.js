//Solicita al usuario su sueldo actual y el porcentaje de incremento salarial anual. Si el
//sueldo actual es menor que 500, aplica el incremento del 5%, de lo contrario, no
//aplica ningún incremento. Calcula y muestra el sueldo esperado con el incremento
//aplicado.

//BOSQUEJO
// Analisis de requerimiento
// Entrada: sueldoActual=0.0, porcentajeAnual=0, sueldoEsperado=0.0 
// Los calculos o procesos que se hacen con las variables
// Proceso: Si sueldoActual < 500 entonces 
// sueldoEsperado= sueldoActual*porcentajeAnual/100 + 5/100
// si no sueldoEsperado= sueldoActual
// La informacion de las variables procesadas
// Salida: Escribir "El sueldo esperado con el incremento aplicado es: $" ,sueldoEsperado

const read = require("prompt-sync")()
const write = console.log

//LENGUAJE JAVASCRIPT

function sueldoFinal(){
    let sueldoActual=0.0, porcentajeAnual=0,sueldoAnual=0.0, sueldoEsperado=0.0
    write("Ingrese su sueldo actual:")
    sueldoActual=parseFloat(read())
    write("Ingrese el porcentaje de incremento salarial anual: ")
    porcentajeAnual=parseFloat(read())
    if (sueldoActual <= 500){
        sueldoAnual= sueldoActual +  sueldoActual* porcentajeAnual /100
        sueldoEsperado= sueldoAnual + sueldoAnual * 5/100
    } else{
        sueldoEsperado=sueldoActual
    }
    write("El sueldo esperado con el incremento aplicado es: $" ,sueldoEsperado)
}
sueldoFinal()