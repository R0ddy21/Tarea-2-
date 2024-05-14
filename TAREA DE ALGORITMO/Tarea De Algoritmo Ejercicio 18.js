// 18. Pedir al usuario un número y mostrar si es múltiplo de 3 y par
//BOSQUEJO
// analisis del requerimiento
// Entero:numero=0(leer),reciduo=0(calcular)
// Los calculos o procesos que se hacen con las variables
// Proceso: recidio = numero % 3
//      si reciduo==0 entonces
//         escribir "El numero es multiplo 3"
//      sino
//         escribir "El numero no es multiplo 3"
//      finsi
//      escribir "gracias por su visita..."
// La informacion de las variables procesadas
// SALIDA: mostrar el mensaje

const read = require('prompt-sync')();
const write = console.log

// lenjuage javascript
function multiplo3(){
  let numero = 0, reciduo = 0
  numero = read("Ingrese numero: ") 
  numero = parseInt(numero)
  reciduo = numero % 3
  if (reciduo == 0) {
    write(numero," es multiplo 3")
  }  
  else{
    write(numero," no es multiplo 3")

  }
  write("gracias por su visita...")
}
// se llama a la funcion para que se ejecute
multiplo3()