export {};

class Almacen<T> {

    private elementos: T[] = [];

    agregarElemento(elemento: T): void {
        this.elementos.push(elemento);
        console.log("Elemento agregado: " + JSON.stringify(elemento));
    }

    obtenerElemento(posicion: number): T | undefined {
        if (posicion < 0 || posicion >= this.elementos.length) {
            console.log("No existe ningún elemento en la posición " + posicion);
            return undefined;
        }
        return this.elementos[posicion];
    }

    listarElementos(): void {
        if (this.elementos.length === 0) {
            console.log("El almacén está vacío");
            return;
        }
        for (let i = 0; i < this.elementos.length; i++) {
            console.log(i + ": " + JSON.stringify(this.elementos[i]));
        }
    }
}

interface Producto {
    nombre: string;
    precio: number;
}

// Almacén de números
console.log("--- ALMACÉN DE NÚMEROS ---");
const almacenNumeros = new Almacen<number>();
almacenNumeros.agregarElemento(10);
almacenNumeros.agregarElemento(25);
almacenNumeros.agregarElemento(42);
console.log("Elemento en posición 1: " + almacenNumeros.obtenerElemento(1));
almacenNumeros.obtenerElemento(7);
almacenNumeros.listarElementos();

// Almacén de cadenas
console.log("--- ALMACÉN DE CADENAS ---");
const almacenCadenas = new Almacen<string>();
almacenCadenas.agregarElemento("Hola");
almacenCadenas.agregarElemento("TypeScript");
almacenCadenas.agregarElemento("Genéricos");
console.log("Elemento en posición 2: " + almacenCadenas.obtenerElemento(2));
almacenCadenas.listarElementos();

// Almacén de objetos
console.log("--- ALMACÉN DE OBJETOS ---");
const almacenProductos = new Almacen<Producto>();
almacenProductos.agregarElemento({ nombre: "Teclado", precio: 25.5 });
almacenProductos.agregarElemento({ nombre: "Ratón", precio: 12.99 });
const producto = almacenProductos.obtenerElemento(0);
if (producto) {
    console.log("Primer producto: " + producto.nombre + " - " + producto.precio + " €");
}
almacenProductos.listarElementos();

// Almacén de booleanos
console.log("--- ALMACÉN DE BOOLEANOS ---");
const almacenBooleanos = new Almacen<boolean>();
almacenBooleanos.agregarElemento(true);
almacenBooleanos.agregarElemento(false);
almacenBooleanos.listarElementos();