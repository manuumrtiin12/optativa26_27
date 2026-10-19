
class Employee {

    private nombre: string;
    private apellidos: string;
    private edad: number;
    private fechaDeInicio: Date;
    private fechaDeFin: Date | null;
    private profesion: string;

    constructor(nombre: string, apellidos: string, edad: number, fechaDeInicio: Date, fechaDeFin: Date | null, profesion: string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.fechaDeInicio = fechaDeInicio;
        this.fechaDeFin = fechaDeFin;
        this.profesion = profesion;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getApellidos(): string {
        return this.apellidos;
    }

    setApellidos(apellidos: string): void {
        this.apellidos = apellidos;
    }

    getEdad(): number {
        return this.edad;
    }

    setEdad(edad: number): void {
        this.edad = edad;
    }

    getFechaDeInicio(): Date {
        return this.fechaDeInicio;
    }

    setFechaDeInicio(fechaDeInicio: Date): void {
        this.fechaDeInicio = fechaDeInicio;
    }

    getFechaDeFin(): Date | null {
        return this.fechaDeFin;
    }

    setFechaDeFin(fechaDeFin: Date | null): void {
        this.fechaDeFin = fechaDeFin;
    }

    getProfesion(): string {
        return this.profesion;
    }

    setProfesion(profesion: string): void {
        this.profesion = profesion;
    }
}

const empleado1 = new Employee(
    "Carlos",
    "García López",
    35,
    new Date("2018-03-12"),
    new Date("2024-06-30"),
    "Programador"
);

const empleado2 = new Employee(
    "Lucía",
    "Martínez Pérez",
    28,
    new Date("2022-09-01"),
    null,
    "Diseñadora"
);

console.log("Nombre: " + empleado1.getNombre() + ", Edad: " + empleado1.getEdad());
console.log("Nombre: " + empleado2.getNombre() + ", Edad: " + empleado2.getEdad());
