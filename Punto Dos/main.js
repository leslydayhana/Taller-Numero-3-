/* 
2.	Hacer un programa que pida el nombre de un estudiante y N notas, 
calcular el promedio de las notas y determinar si el estudiante aprueba o reprueba; 
(Aprueba con un promedio de 3).   
*/


let nombre = prompt("Ingrese su nombre");
let numero_notas = Number(prompt("Ingrese el numero de notas a promediar"));
let suma = 0;
let notas = 0;

for (let i = 1; i <= numero_notas; i++) {

    notas = Number(prompt("Ingrese la nota "));
    suma = suma + notas;
}

let promedio  =  suma / numero_notas;
promedio = promedio.toFixed(2); 

if (promedio < 3) {
    document.write(" El promedio del estudiante es de: " + promedio + " Por lo tanto NO APROBO la materia");
} else{
    document.write(" El promedio del estudiante es de: " + promedio + " Por lo tanto APROBO la materia");

}
 
