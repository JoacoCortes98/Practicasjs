/*
while(condicional logica){
    todo el codigo que quiero ejecutar repetidas veces
    cambiar la condicion logica
}
*/

// let cantidadMates = 20;

// while (cantidadMates >= 1) {
//   document.write("<br>Mate cebado N: " + cantidadMates);
//   cantidadMates--;
// }

// Ejemplo de bucle do-while, hacer ... mientras (se cumpla la condicion logica)

/*
do{
  todas las lineas de codigo que quiero ejecutar varias veces
  cambiar la condicion logica
}while(condicion logica)
*/

// let cantidadMates = 0;
// do{
//   document.write('<br>Mate cebado N: ' + cantidadMates);
//   cantidadMates--;
// }while( cantidadMates >= 1)

// Ejemplo bucle for 

/*  
  for(inicializar una variable; condicion logica; modificr el valor de la variable){
    todo el codigo que quiero ejecutar muchas veces
  }

*/

for(let mates = 20; mates >= 1; mates--){
  document.write('Mate cebado N: ' + mates + '<br>');
}