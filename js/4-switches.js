let estacion = prompt(
  "Seleccione su estación preferida: 1- verano, 2- primavera, 3- otoño, 4- invierno"
);

// if(estacion === '1'){
//     document.write(
//     `<ul>
//       <li>comida= Sandwich de Milanesa</li>
//       <li>bebida= Cerveza</li>
//     </ul>`);
// }else{
//     if(estacion === '2'){
//         document.write(
//             `<ul>
//               <li>comida= Tacos</li>
//               <li>bebida= Tequila</li>
//             </ul>`);
//     }else if(estacion === '3'){
//         document.write(
//             `<ul>
//               <li>comida= Humita</li>
//               <li>bebida= Vino</li>
//             </ul>`);
//     }else if(estacion === '4'){
//         document.write(
//             `<ul>
//               <li>comida= Guizo</li>
//               <li>bebida= Aguita</li>
//             </ul>`);
//     }else{
//         document.write(`Seleccionaste una es las estaciones erroneas`);
//     }

// }

switch (estacion) {
  case "1":
  case "verano":
    document.write(
      `<ul>
              <li>comida= Sandwich de Milanesa</li>
              <li>bebida= Cerveza</li>
            </ul>`
    );
    break;
  case "2":
  case "primavera":
    document.write(
      `<ul>
              <li>comida= tacos</li>
              <li>bebida= tequila</li>
            </ul>`
    );
    break;
  case "3":
  case "otoño":
    document.write(
      `<ul>
              <li>comida= humita</li>
              <li>bebida= vino</li>
            </ul>`
    );
    break;
  case "4":
  case "invierno":
    document.write(
      `<ul>
              <li>comida= quizo</li>
              <li>bebida= aquita</li>
            </ul>`
    );
    break;
  default:
    document.write(`Seleccionaste una opción erronea`);
}
