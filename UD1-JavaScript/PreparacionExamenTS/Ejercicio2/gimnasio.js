"use strict";
var Nivel;
(function (Nivel) {
    Nivel[Nivel["Principiante"] = 0] = "Principiante";
    Nivel[Nivel["Intermedio"] = 1] = "Intermedio";
    Nivel[Nivel["Avanzado"] = 2] = "Avanzado";
})(Nivel || (Nivel = {}));
class SocioEstandar {
    id;
    nombre;
    contacto;
    nivel;
    _cuotaMensual;
    constructor(id, nombre, contacto, nivel, cuotaMensual) {
        this.id = id;
        this.nombre = nombre;
        this.contacto = contacto;
        this.nivel = nivel;
        this._cuotaMensual = cuotaMensual;
    }
    get cuotaMensual() {
        return this._cuotaMensual;
    }
    obtenerResumen() {
        return `${this.nombre} (${this.contacto[0]}) - Cuota mensual: ${this._cuotaMensual}€`;
    }
}
class SocioVIP extends SocioEstandar {
    _entrenador;
    constructor(id, nombre, contacto, nivel, cuotaMensual, entrenador) {
        super(id, nombre, contacto, nivel, cuotaMensual);
        this._entrenador = entrenador;
    }
    obtenerResumen() {
        return super.obtenerResumen() + ` | Entrenador VIP: ${this._entrenador}`;
    }
}
class GestorRegistros {
    elementos = [];
    agregar(item) {
        this.elementos.push(item);
    }
    mostrarTodos() {
        this.elementos.forEach(item => {
            console.log(item.obtenerResumen());
        });
    }
}
const gestor = new GestorRegistros();
const laura = new SocioEstandar(1, "Laura", ["laura@email.com", 600111222], Nivel.Intermedio, 30);
const marcos = new SocioVIP(2, "Marcos", ["marcos@email.com", 655444333], Nivel.Avanzado, 60, "Pedro");
gestor.agregar(laura);
gestor.agregar(marcos);
gestor.mostrarTodos();
