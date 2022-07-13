// ingrese un numero de dni
// el numero debe estar entre 0 y 9999999
// Debemos calcular el resto de la división entera entre el número y el número 23
// switch donde las opciones son de 0 a 22, mostrar por pantalla (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)

let dni = parseInt(prompt("Ingrese un dni 0 y 99999999"));
console.log(dni);

if (dni >= 0 && dni <= 99999999) {
  // calculo todo lo del dni
  let resultado = dni % 23;
  console.log(resultado);
  switch(resultado){
    case 17:
        document.write('T');
        alert('T');
        break
    default:
        alert('Valor erroneo');
  }
} else {
  alert("Ingreso un valor erroneo");
}
