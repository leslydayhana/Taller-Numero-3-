/* 
6.	Cree un ciclo que cuente del 1 al 30 en intervalos el numero ingresado
*/

let intervalo = parseInt(prompt("Ingrese el intervalo para contar del 1 al 30:"));

if (intervalo > 0) {

  for (let i = 1; i <= 30; i += intervalo) {
    document.write(i + "<br>");
  }
} else {
  console.log("Por favor, ingrese un número mayor que cero.");
} 
