//La funcion va a recibier cualquier persona
//Dentro de los parentesis va un argumento 
//puede ser nombrado como queramos 

function describirPersona (p) {  

 console.log(`${p.nombre} tiene una edad de: ${p.edad} y mide: ${p.estatura} `); 

}

let persona = {
    nombre:'Fernando',
    edad: 32,
    estatura: 1.79
}

//Llamada a la funcion
describirPersona(persona);
//Todo el objeto persona lo estoy llamando a la funcion 