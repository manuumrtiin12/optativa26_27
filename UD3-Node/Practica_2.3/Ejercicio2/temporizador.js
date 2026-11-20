const [segundosTexto, ...palabras] = process.argv.slice(2);
const segundos = Number(segundosTexto);
const mensaje = palabras.join(' ') || '¡Tiempo!'; 

if (!Number.isInteger(segundos) || segundos <= 0) {
  console.error('Uso: node temporizador.js <segundos> [mensaje]');
  process.exit(1); 
}

let restantes = segundos;
console.time('Duración total'); 

const intervalo = setInterval(() => {
  restantes--;
  console.log(`Quedan ${restantes} s`);

  if (restantes === 0) {
    clearInterval(intervalo); 
    console.log(mensaje);
    console.timeEnd('Duración total'); 
  }
}, 1000);

setTimeout(() => {
  console.log('¡Ya vas por la mitad!');
}, (segundos * 1000) / 2);