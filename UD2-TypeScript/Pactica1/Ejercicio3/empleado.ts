class Empleado {

    private nombre : string;
    private apellidos : string;
    private edad : number;
    private fechaDeInicio : Date;
    private fechaDeFin : Date;
    private profesion : string;

    constructor(nombre : string, apellidos : string, edad : number, fechaDeInicio : Date, fechaDeFin : Date, profesion : string) {

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

    getFechaDeFin(): Date {
        return this.fechaDeFin;
    }

    setFechaDeFin(fechaDeFin: Date): void {
        this.fechaDeFin = fechaDeFin;
    }

    getProfesion(): string {
        return this.profesion;
    }

    setProfesion(profesion: string): void {
        this.profesion = profesion;
    }

}

class main()