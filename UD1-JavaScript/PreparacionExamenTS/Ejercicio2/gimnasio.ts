type Contacto = [string, number];

enum Nivel {
    Principiante,
    Intermedio,
    Avanzado
}

interface Socio {
    id: number;
    nombre: string;
    contacto: Contacto;
    nivel: Nivel;
    obtenerResumen(): string;
}

class SocioEstandar implements Socio {
    private _cuotaMensual: number;

    constructor(
        public id: number,
        public nombre: string,
        public contacto: Contacto,
        public nivel: Nivel,
        cuotaMensual: number
    ) {
        this._cuotaMensual = cuotaMensual;
    }

    get cuotaMensual(): number {
        return this._cuotaMensual;
    }

    obtenerResumen(): string {
        return `${this.nombre} (${this.contacto[0]}) - Cuota mensual: ${this._cuotaMensual}€`;
    }
}

class SocioVIP extends SocioEstandar {
    private _entrenador: string;

    constructor(
        id: number,
        nombre: string,
        contacto: Contacto,
        nivel: Nivel,
        cuotaMensual: number,
        entrenador: string
    ) {
        super(id, nombre, contacto, nivel, cuotaMensual);
        this._entrenador = entrenador;
    }

    obtenerResumen(): string {
        return super.obtenerResumen() + ` | Entrenador VIP: ${this._entrenador}`;
    }
}

class GestorRegistros<T extends Socio> {
    private elementos: T[] = [];

    agregar(item: T): void {
        this.elementos.push(item);
    }

    mostrarTodos(): void {
        this.elementos.forEach(item => {
            console.log(item.obtenerResumen());
        });
    }
}

const gestor = new GestorRegistros<SocioEstandar>();

const laura = new SocioEstandar(1, "Laura", ["laura@email.com", 600111222], Nivel.Intermedio, 30);
const marcos = new SocioVIP(2, "Marcos", ["marcos@email.com", 655444333], Nivel.Avanzado, 60, "Pedro");

gestor.agregar(laura);
gestor.agregar(marcos);

gestor.mostrarTodos();