// escribir numeros del 1 a 500
// tengo que saber cual de los numeros es multiplos de 4 y 9 (un numero es multiplo del otro si el resto de su division es 0)
// cada 5 linas dibujo un hr


// bucle que muestre numero 500 veces
for (let i = 1; i <= 500; i++) {
  document.write(i);
  // preguntar si es multiplo de 4
  if(i % 4 === 0){
    document.write(' Multiplo de 4')
  } if(i % 9 === 0){
    document.write(' Multiplo de 9')
  }
  document.write("<br>");
  //mostrar una linea
  if(i % 5 === 0){
    document.write('<hr>')
  }
}
