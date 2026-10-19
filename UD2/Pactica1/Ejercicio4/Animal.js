"use strict";
class Animal {
    constructor(nombre, edad, tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    hacerRuido() {
        console.log("El animal hace un ruido");
    }
}
class Perro extends Animal {
    constructor(nombre, edad, raza) {
        super(nombre, edad, "Perro");
        this.raza = raza;
    }
    getRaza() {
        return this.raza;
    }
    setRaza(raza) {
        this.raza = raza;
    }
    jugar() {
        console.log(this.getNombre() + " está jugando");
    }
    hacerRuido() {
        console.log("Guau guau");
    }
}
class Pajaro extends Animal {
    constructor(nombre, edad, puedeVolar) {
        super(nombre, edad, "Pájaro");
        this.puedeVolar = puedeVolar;
    }
    getPuedeVolar() {
        return this.puedeVolar;
    }
    setPuedeVolar(puedeVolar) {
        this.puedeVolar = puedeVolar;
    }
    volar() {
        if (this.puedeVolar) {
            console.log(this.getNombre() + " está volando");
        }
        else {
            console.log(this.getNombre() + " no puede volar");
        }
    }
    hacerRuido() {
        console.log("Pío pío");
    }
}
const perro1 = new Perro("Toby", 5, "Labrador");
const pajaro1 = new Pajaro("Piolín", 2, true);
console.log("Nombre: " + perro1.getNombre());
console.log("Edad: " + perro1.getEdad());
console.log("Tipo: " + perro1.getTipo());
console.log("Raza: " + perro1.getRaza());
perro1.hacerRuido();
perro1.jugar();
console.log("Nombre: " + pajaro1.getNombre());
console.log("Edad: " + pajaro1.getEdad());
console.log("Tipo: " + pajaro1.getTipo());
console.log("Puede volar: " + pajaro1.getPuedeVolar());
pajaro1.hacerRuido();
pajaro1.volar();
