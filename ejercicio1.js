//const añoNacimiento = parseInt(prompt("Por favor ingrese tu año de nacimiento:"));
//if (isNaN(añoNacimiento)) {
 //   console.log("Por favor ingrese un año válido.");
//} else  {
//const añoActual = 2024;
//const edad = añoActual - añoNacimiento;
//console.log ("Tienes " + edad  + " años.");
//}



const calcularDescuento = (edad) => {if (edad >= 65) {
 return 15;
    } else  {
return 0;
}
};
const edadUsuario = parseInt(prompt("Por favor ingrese su edad:"));
if (isNaN(edadUsuario) || edadUsuario < 0) {
 console.log("Por favor ingrese una edad válida.");
} else 
    {
 const descuento = calcularDescuento(edadUsuario);
if (descuento > 0) {
 console.log(`Felicidades! Tienes un Descuento del ${descuento} %`);
 } else
     {
 console.log("Lo siento no aplica ningun descuento");
    }
}