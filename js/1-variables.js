// Esto es un comentario de una sola linea

/* Esto es un comentario 
de multiples lines */

// mostrar o imprimir un mensaje en el documento html o pantalla
document.write("<h1>Hola mundo, año 2022, canción</h1>");

// mostrar un mensaje por consola
console.log("alguan frase");

// mostrar un mensaje por una ventana emergente
// alert('esto es una ventana emergente');

// mostrar por pantalla la suma de dos numero 29 + 6
document.write("<p>Resultado: " + (29 + 6) + "</p>");

// crear o declarar o inicializar variables (var - let - const)

let nombrePersona = "Cristian";
let dolar = 238;

document.write("<p>Persona: " + nombrePersona + "</p>");
document.write("<p>Play5: $" + 500 * dolar + " sin impuestos <p>");

// actualizar el valor del dolar
dolar = 220;
document.write("<p>Play5: $" + 500 * dolar + " sin impuestos <p>");

// pedimos al usuario qu ingrese el valor actual del dolar
dolar = parseInt(prompt("Ingrese el valor del dolar"));
console.log(dolar);
document.write("<p>Play5: $" + 500 * dolar + " sin impuestos <p>");
