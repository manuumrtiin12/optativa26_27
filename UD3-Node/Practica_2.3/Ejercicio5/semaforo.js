const EventEmitter = require('events');

class Semaforo extends EventEmitter {
    constructor(milisegundos) {
        super();
        this.colores = ['verde', 'ámbar', 'rojo'];
        this.indice = 0; // Empieza en verde
        
        this.timer = setInterval(() => {
            this.indice = (this.indice + 1) % this.colores.length;
            const colorActual = this.colores[this.indice];
            
            this.emit('cambio', colorActual);
            
            if (colorActual === 'rojo') {
                this.emit('rojo');
            }
        }, milisegundos);
    }

    parar() {
        clearInterval(this.timer);
        this.emit('parado');
    }
}

module.exports = Semaforo;