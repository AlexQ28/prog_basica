//ESTRUCTURAS DE CONTROL ///
/*
Crear un algoritmo, que basado en la nota imprima 
si el alumno aprueba la materia 
aprueba 60 
Si el alumno tiene nota menor a 50 
imprimir un mensaje que diga:
por favor estudie mas 

*/

let calif = 50;

if (calif >= 60) {
    console.log('El Alumno APRUEBA la clase');
} else if (calif <= 50) {
    console.log('Por favor estudie más'); 
} else {
    console.log('El Alumno NO APRUEBA la clase');
}

console.log('Fin del Programa')
