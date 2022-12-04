// Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. En el constructor realizar el ingreso de datos. 
// Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)

class Alumno {
    constructor(nombre, edad){
    this.nombre = nombre
    this.edad = edad
    }
    
    getData(){
        console.log(this.nombre + ", " + this.edad + " años")
    }

    getAge(){
        console.log(this.edad >= 18 ? "Mayor de edad" : "Menor de edad")
    }
}


var a = new Alumno( "Florencia Oldani", 28)
var b = new Alumno( "Veronica Perez", 8)

a.getData()  //Florencia Oldani, 28 años
a.getAge()  // Mayor de edad


b.getData()  // Veronica Perez, 8 años
b.getAge()  // Menor de edad