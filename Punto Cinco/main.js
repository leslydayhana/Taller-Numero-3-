/* 
5. Cree la tabla de multiplicar de cualquier número ingresado de manera 
descendente.
 */


let numero = Number(prompt("Ingrese un número para generar su tabla de multiplicar de manera descendente:"));

for (let i = 30; i >= 1; i--) {
    document.write(`${numero} x ${i} = ${numero * i}<br>`);
}

 
