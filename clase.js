let carro1 = {
   marca: 'Toyota',
   tipo: 'Sedan',
   puertas: 3
};

/* 
Las clases ofrecen encapsulamiento 
*/

//El constructor es una nueva instancia de la clase 
//Se pueden agregar creaciones al objeto 
//Cada una de las propiedades dentro de la clase se 
//utiliza this. 

/*Dentro de constructor 
     this.marca = marca

     this.marca // hace referencia a la propiedad de la clase Carro
     = marca //Hace referencia al argumento del constructor

*/
class Carro {
     
    constructor(marca1, tipo1, puertas){
         
        this.marca = marca1;
        this.tipo = tipo1; 
        this.puertas = puertas;

        this.creadoEn = 'hoy';
    }
}

//Se crea el nuevo carro 
//La palabra reservada new se utiliza para crear
//nuevas instancias de la clase 
let carro2 = new Carro('Mazda','Sedan',2);

console.log(carro1);
console.log(carro2);

