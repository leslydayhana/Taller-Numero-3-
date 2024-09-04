/* 
3.	Ingrese varios números enteros y muestre la cantidad de números ingresados 
y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra 
FIN. 
*/



let suma = 0;
let cantidad = 0;
let numeros;

for (;;) {
    numeros = prompt("Ingrese un número entero (o 'FIN' para terminar):");
    
    if (numeros.toLowerCase() === "fin") {
        break;
    }
    
    let numeroEntero = parseInt(numeros);
    
    if (!isNaN(numeroEntero)) {
        suma += numeroEntero;
        cantidad++;
    } else {
        alert("Por favor, ingrese un número entero válido.");
    }
}

document.write("El programa ha finalizado. Has ingresado: " + cantidad + " números y la suma total de ellos es de: " + suma);
