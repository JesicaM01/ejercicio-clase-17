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



//const convertidorDolaresAPesos = (dolares,tasacambio) => {
 //return dolares * tasacambio;
//};
//const dolaresIngresados = parseFloat(prompt("Por favor ingrese la cantidad en dólares que desea convertir a pesos:"));
//const tasaDeCambio = 1400; // Ejemplo de tasa de cambio
//const pesosConvertidos = convertidorDolaresAPesos(dolaresIngresados, tasaDeCambio);
//if (isNaN(dolaresIngresados) || isNaN(tasaDeCambio)) {
//console.log("Por favor ingrese valores numéricos válidos.");
//} else {
//console.log(`La cantidad en pesos es: ${pesosConvertidos}`);
//}
//if (isNaN(dolaresIngresados) || dolaresIngresados < 0) {
//console.log("Por favor ingrese una cantidad válida en dólares.");
//}



//const verificarVacunacion = (nombre, estado) => {
  //const respuesta = estado.toLowerCase();

  //if (respuesta === 'sí' || respuesta === 'si') {
   // console.log(`${nombreMascota} está vacunado/a.`);
  //} else if (respuesta === 'no' || respuesta === 'No') {
   // console.log(`${nombreMascota}  no está vacunado/a.`);
  //} else  {
   // console.log("Respuesta no válida. Por favor, responda 'sí' o 'no'.");
  //}
//};

//const nombreMascota = prompt("Por favor, ingrese el nombre de la mascota:");
//const estaVacunada = prompt("¿La mascota está vacunada? (Sí/No)");

//verificarVacunacion(nombreMascota, estaVacunada);



//const numeroSecreto = Math.floor(Math.random() * 10) + 1;
//let intento = "";
//while (parseInt(intento) !== numeroSecreto) {
  //intento = prompt("Adivina el número secreto entre 1 y 10:");
 // let intentoNumerico = parseInt(intento);
//if (isNaN(intentoNumerico) || intentoNumerico < 1 || intentoNumerico > 10) {
//console.log("Por favor, ingresa un número válido entre 1 y 10.");
 // } else if (intentoNumerico !== numeroSecreto) {
//console.log("¡Incorrecto! Vuelve a intentarlo.");
  //}
//}
//console.log(`¡Felicidades! Adivinaste el número secreto. Era ${numeroSecreto}.`);



let numerosPares = [];
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        numerosPares.push(i);
    }
}
console.log("Números pares del 1 al 100:", numerosPares);