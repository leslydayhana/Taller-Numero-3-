/* 
1. Hacer un programa que calcule la suma de los N primeros números naturales, 
dónde N es el número límite ingresado. 
*/


let limite = Number(prompt("Ingrese el numero limite"));
suma =0;

//Calculo

for (let i = 1; i <= limite; i++) {
    suma += i;
    
}

document.write("La suma total de los numeros es: " + suma);
 
