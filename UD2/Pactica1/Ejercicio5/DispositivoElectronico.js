class Laptop {
    constructor(nombre, modelo) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log("La laptop " + this.nombre + " se ha encendido");
    }
    apagar() {
        this.encendido = false;
        console.log("La laptop " + this.nombre + " se ha apagado");
    }
    abrirPrograma(programa) {
        if (this.encendido) {
            console.log("Abriendo " + programa + " en la laptop " + this.nombre + " (modelo " + this.modelo + ")");
        }
        else {
            console.log("No se puede abrir " + programa + ": la laptop está apagada");
        }
    }
}
class Smartphone {
    constructor(nombre, marca) {
        this.nombre = nombre;
        this.marca = marca;
        this.encendido = false;
    }
    encender() {
        this.encendido = true;
        console.log("El smartphone " + this.nombre + " se ha encendido");
    }
    apagar() {
        this.encendido = false;
        console.log("El smartphone " + this.nombre + " se ha apagado");
    }
    llamar(numero) {
        if (this.encendido) {
            console.log("Llamando al " + numero + " desde el smartphone " + this.nombre + " (marca " + this.marca + ")");
        }
        else {
            console.log("No se puede llamar: el smartphone está apagado");
        }
    }
}
// Pruebas
const laptop1 = new Laptop("Portátil de trabajo", "ThinkPad X1");
const movil1 = new Smartphone("Mi móvil", "Samsung");
console.log("--- LAPTOP ---");
laptop1.abrirPrograma("Visual Studio Code"); // apagada
laptop1.encender();
console.log("Encendido: " + laptop1.encendido);
laptop1.abrirPrograma("Visual Studio Code");
laptop1.apagar();
console.log("Encendido: " + laptop1.encendido);
console.log("--- SMARTPHONE ---");
movil1.llamar("600123456"); // apagado
movil1.encender();
console.log("Encendido: " + movil1.encendido);
movil1.llamar("600123456");
movil1.apagar();
console.log("Encendido: " + movil1.encendido);
console.log("--- ARRAY DE DISPOSITIVOS ---");
const dispositivos = [laptop1, movil1];
for (const d of dispositivos) {
    d.encender();
    d.apagar();
}
export {};
