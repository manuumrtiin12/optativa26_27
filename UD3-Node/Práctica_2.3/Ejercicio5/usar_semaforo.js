const Semaforo = require('./semaforo');

const semaforo = new Semaforo(1000);
let contadorRojos = 0;

semaforo.on('cambio', (color) => {
    console.log(`Cambio de color: ${color}`);
});

semaforo.once('rojo', () => {
    console.log('(primer rojo: ¡frena!)');
});

semaforo.on('rojo', () => {
    contadorRojos++;
    if (contadorRojos === 2) {
        semaforo.parar();
    }
});

semaforo.on('parado', () => {
    console.log('Semáforo apagado');
});