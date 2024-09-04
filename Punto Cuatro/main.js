/* 
4. realice una tabla de multiplicar con cualquier número ingresado hasta el 30.
*/



let numero = Number(prompt("Ingrese un número para generar su tabla de multiplicar hasta el 30:"));

for (let i = 1; i <= 30; i++) {
    document.write(`${numero} x ${i} = ${numero * i}<br>`);
}

