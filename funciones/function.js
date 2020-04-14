/*

function sumar (a, b) {

    return a + b;

} 

let total = sumar (10, 20);

console.log('Total: ' + total);

*/

function imprimirTabla ( base, limite ) {
    
for (let i = 1; i <=limite; i++) {

    let resultado = base * i
    
    console.log(base + ' x ' + i + ' = ' + resultado );

    }
}

imprimirTabla ( 10, 5 );
imprimirTabla ( 3, 10 );

/*
FUNCIONES
Una funcion es un conjunt de lineas de codigo que realizan 
una tarea especifica y pueden retornar algo.

Ejemplo: 
function saludar () {
   

}

LLamada a la funcion 
saludar ();

PARAMETRO Es algo que le podemos mandar a la funcion para que trabjae con el 


*/