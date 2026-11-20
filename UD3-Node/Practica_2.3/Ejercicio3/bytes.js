
const texto = process.argv.slice(2).join(' ');

if (!texto) {
  console.error('Uso: node bytes.js <texto>');
  process.exit(1); // termina indicando error
}

console.log('Texto     :', texto);
console.log('Caracteres:', texto.length);
console.log('Bytes     :', Buffer.byteLength(texto));
console.log('Buffer    :', Buffer.from(texto));

const abecedario = Buffer.alloc(26);
for (let i = 0; i < abecedario.length; i++) {
  abecedario[i] = 65 + i;
}
console.log('Abecedario:', abecedario.toString('ascii'));