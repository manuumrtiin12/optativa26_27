const fs = require('fs');
const path = require('path');

process.stdout.write('¿Qué fichero quieres copiar?: ');

process.stdin.once('data', (resp) => {
  const origen = resp.toString().trim();
  const destino = path.join(path.dirname(origen), 'MAYUS-' + path.basename(origen));

  const lectura = fs.createReadStream(origen, 'utf8');
  let bytes = 0;


  lectura.on('open', () => {
    const escritura = fs.createWriteStream(destino);

    lectura.on('data', (chunk) => {
      bytes += Buffer.byteLength(chunk);   
      escritura.write(chunk.toUpperCase()); 
    });

    lectura.on('end', () => escritura.end());

    escritura.on('finish', () => {
      console.log(`Creado ${destino} (${bytes} bytes)`);
      process.exit(); 
    });
  });

  lectura.on('error', (err) => {
    console.error('Error:', err.message);
    process.exit(1); 
  });
});