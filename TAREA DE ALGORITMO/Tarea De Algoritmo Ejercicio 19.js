// 19. Solicitar al usuario un número y mostrar si es divisible por 2 o impar
//BOSQUEJO
// Analisis del requerimiento
// Entrada:numero=0(leer),reciduo=0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: recidio = numero % 2
//      si reciduo==0 entonces
//         escribir "El numero es divisible para 2"
//      sino
//         escribir "El numero no es divisible para 2"
//      finsi
//      escribir "gracias por su visita..."
// La informacion de las variables procesadas
// Salida: mostrar el mensaje

const read = require('prompt-sync')();
const write = console.log

// lenjuage javascript
function divisible2(){
  let numero = 0, reciduo = 0
  numero = read("Ingrese numero: ") 
  numero = parseInt(numero)
  reciduo = numero % 2
  if (reciduo == 0) {
    write(numero," es dibisible para 2")
    
  }  
  else{
    write(numero," no es divisible para 2")
    
  }
  write("gracias por su visita...")
}
// llamar a la funcion para que s ejecute
divisible2()