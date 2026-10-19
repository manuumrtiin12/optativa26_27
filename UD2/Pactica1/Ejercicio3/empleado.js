class Empleado {
    constructor(nombre, apellidos, edad, fechaDeInicio, fechaDeFin, profesion) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.fechaDeInicio = fechaDeInicio;
        this.fechaDeFin = fechaDeFin;
        this.profesion = profesion;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellidos() {
        return this.apellidos;
    }
    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getFechaDeInicio() {
        return this.fechaDeInicio;
    }
    setFechaDeInicio(fechaDeInicio) {
        this.fechaDeInicio = fechaDeInicio;
    }
    getFechaDeFin() {
        return this.fechaDeFin;
    }
    setFechaDeFin(fechaDeFin) {
        this.fechaDeFin = fechaDeFin;
    }
    getProfesion() {
        return this.profesion;
    }
    setProfesion(profesion) {
        this.profesion = profesion;
    }
}
const empleado1 = new Empleado("Carlos", "García López", 35, new Date("2018-03-12"), new Date("2024-06-30"), "Programador");
const empleado2 = new Empleado("Lucía", "Martínez Pérez", 28, new Date("2022-09-01"), null, "Diseñadora");
console.log("Nombre: " + empleado1.getNombre() + ", Edad: " + empleado1.getEdad());
console.log("Nombre: " + empleado2.getNombre() + ", Edad: " + empleado2.getEdad());
