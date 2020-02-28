let persona1 = {
    nombre: 'Alex',
    edad: 32
};

let persona2 = {
    nombre: 'Fernanda',
    edad: 27
};

let persona3 = {
    nombre: 'Melissa',
    edad: 42
};

//Arreglo de Personas
let personas = [persona1, persona2, persona3];

//console.log(personas);

for (let i=0; i < personas.length; i ++) {

   let persona = personas [i];  //Variable temporal y se asigna a personas refiriendose al arreglo personas
   console.log(`${persona.nombre} -- ${persona.edad}`); 

}
