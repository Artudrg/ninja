class Ninja{
    constructor(nombre, salud){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log(`El nombre del ninja es: ${this.nombre}`);
    }

    showStats(){
        console.log(`Nombre: ${this.nombre}`)
        console.log(`Salud: ${this.salud}`);
        console.log(`Velocidad: ${this.velocidad}`);
        console.log(`Fuerza: ${this.fuerza}`);
    }
    
    drinkSake(){
        this.salud += 10;
        console.log(`${this.nombre} bebio sake, ahora su salud es de: ${this.salud}`);
    }
}
const ninja = new Ninja("Joaquin", 100);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();

 // Clase Super Ninja//

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre, 200,10,10);
        this.sabiduria = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("There is no light without dark. There is no joy without pain. You can not have a rainbow. Without a little rain ");
    }
}
const superSensei = new Sensei("Master Po");
superSensei.speakWisdom();
superSensei.showStats();

