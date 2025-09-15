const añoNacimiento = parseInt(prompt("Por favor ingrese tu año de nacimiento:"));
if (isNaN(añoNacimiento)) {
    console.log("Por favor ingrese un año válido.");
} else  {
const añoActual = 2024;
const edad = añoActual - añoNacimiento;
console.log ("Tienes " + edad  + " años.");
}