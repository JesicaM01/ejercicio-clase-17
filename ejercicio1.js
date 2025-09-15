//const añoNacimiento = parseInt(prompt("Por favor ingrese tu año de nacimiento:"));
//if (isNaN(añoNacimiento)) {
 //   console.log("Por favor ingrese un año válido.");
//} else  {
//const añoActual = 2024;
//const edad = añoActual - añoNacimiento;
//console.log ("Tienes " + edad  + " años.");
//}



//const calcularDescuento = (edad) => {if (edad >= 65) {
 //return 15;
  //  } else  {
//return 0;
//}
//};
//const edadUsuario = parseInt(prompt("Por favor ingrese su edad:"));
//if (isNaN(edadUsuario) || edadUsuario < 0) {
// console.log("Por favor ingrese una edad válida.");
//} else 
  //  {
// const descuento = calcularDescuento(edadUsuario);
//if (descuento > 0) {
 //console.log(`Felicidades! Tienes un Descuento del ${descuento} %`);
 //} else
   //  {
 //console.log("Lo siento no aplica ningun descuento");
  //  }
//}



const convertidorDolaresAPesos = (dolares,tasacambio) => {
 return dolares * tasacambio;
};
const dolaresIngresados = parseFloat(prompt("Por favor ingrese la cantidad en dólares que desea convertir a pesos:"));
const tasaDeCambio = 1400; // Ejemplo de tasa de cambio
const pesosConvertidos = convertidorDolaresAPesos(dolaresIngresados, tasaDeCambio);
if (isNaN(dolaresIngresados) || isNaN(tasaDeCambio)) {
console.log("Por favor ingrese valores numéricos válidos.");
} else {
console.log(`La cantidad en pesos es: ${pesosConvertidos}`);
}
if (isNaN(dolaresIngresados) || dolaresIngresados < 0) {
console.log("Por favor ingrese una cantidad válida en dólares.");
}