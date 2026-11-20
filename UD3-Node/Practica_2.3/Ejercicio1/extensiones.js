const fs = require('fs');
const path = require('path');

const [ruta = __dirname] = process.argv.slice(2);

let entradas;
try {
  entradas = fs.readdirSync(ruta, { withFileTypes: true }); // options es opcional
} catch (err) {
  console.error(`No se puede leer la carpeta "${ruta}": ${err.message}`);
  process.exit(1); // termina indicando error
}

const cuenta = {};
for (const entrada of entradas) {
  if (!entrada.isFile()) continue; 
  const ext = path.extname(entrada.name) || '(sin extensión)';
  cuenta[ext] = (cuenta[ext] || 0) + 1;
}

console.table(cuenta); 
