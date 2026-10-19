export {};

class Animal {

    private nombre: string;
    private edad: number;
    private tipo: string;

    constructor(nombre: string, edad: number, tipo: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    getTipo(): string {
        return this.tipo;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    hacerRuido(): void {
        console.log("El animal hace un ruido");
    }
}

class Perro extends Animal {

    private raza: string;

    constructor(nombre: string, edad: number, raza: string) {
        super(nombre, edad, "Perro");
        this.raza = raza;
    }

    getRaza(): string {
        return this.raza;
    }

    setRaza(raza: string): void {
        this.raza = raza;
    }

    jugar(): void {
        console.log(this.getNombre() + " está jugando");
    }

    hacerRuido(): void {
        console.log("Guau guau");
    }
}

class Pajaro extends Animal {

    private puedeVolar: boolean;

    constructor(nombre: string, edad: number, puedeVolar: boolean) {
        super(nombre, edad, "Pájaro");
        this.puedeVolar = puedeVolar;
    }

    getPuedeVolar(): boolean {
        return this.puedeVolar;
    }

    setPuedeVolar(puedeVolar: boolean): void {
        this.puedeVolar = puedeVolar;
    }

    volar(): void {
        if (this.puedeVolar) {
            console.log(this.getNombre() + " está volando");
        } else {
            console.log(this.getNombre() + " no puede volar");
        }
    }

    hacerRuido(): void {
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