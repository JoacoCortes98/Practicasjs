// como crear un arreglo vacio
let colores = [];
console.log(colores.length); // Con lenght sabemos la cantidad de items que tiene un arreglo

// como crear un arreglo con datos
let series = ["Loky", 1, "Stranger", 1, "Stranger Things", 4, true];

console.log(series.length);

// Mostrar el arreglo por pantalle
document.write(series);

document.write("<ul>");
for (let i = 0; i < series.length; i++) {
  document.write("<li>" + series[i] + "</li>");
}
document.write("</ul>");

// agregar un nuevo elemento al final del arreglo
series.push("The crown");

document.write("<h3>Agregar un nuevo elemento al final del arreglo</h3>");
document.write("<ul>");
for (let i = 0; i < series.length; i++) {
  document.write("<li>" + series[i] + "</li>");
}
document.write("</ul>");

// Agregar un item en una posicion particular
series.splice(3, 0, "Daredevil"); // (posicion del nuevo elemento, cantidad de elementos a borrar, item nuevo)

document.write("<h3>Agregar un nuevo elemento al final del arreglo</h3>");
document.write("<ul>");
for (let i = 0; i < series.length; i++) {
  document.write("<li>" + series[i] + "</li>");
}
document.write("</ul>");

// eliminar un elemento
series.splice(1, 1); // (posicion del elemento a borrar, cantidad de elementos a borrar)

document.write("<h3>Eliminar un elemento de una posición del arreglo</h3>");
document.write("<ul>");
for (let i = 0; i < series.length; i++) {
  document.write("<li>" + series[i] + "</li>");
}
document.write("</ul>");

// eliminar varios items desde una posicion particular
series.splice(5); // (posicion desde la que borramos todos los elementos acontinuacion)

document.write("<h3>Eliminar varios items desde una posición particular</h3>");
document.write("<ul>");
for (let i = 0; i < series.length; i++) {
  document.write("<li>" + series[i] + "</li>");
}
document.write("</ul>");

// eliminar el elemento de la primera posicion
series.pop();

document.write("<h3>Eliminar el ultimo item del arreglo</h3>");
document.write("<ul>");
for (let i = 0; i < series.length; i++) {
  document.write("<li>" + series[i] + "</li>");
}
document.write("</ul>");

// modificar un item del arreglo
series[3] = 'The punisher';

document.write("<h3>Modificar un item del arreglo</h3>");
document.write("<ul>");
for (let i = 0; i < series.length; i++) {
  document.write("<li>" + series[i] + "</li>");
}
document.write("</ul>");

console.log(series[30]);

// ejercicio pequeño
do{
    let colorNuevo = prompt('Ingrese un color');
    colores.push(colorNuevo);
} while(confirm('Desea ingresar mas colores?'))

document.write(colores);