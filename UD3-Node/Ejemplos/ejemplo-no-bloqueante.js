//Lectura asincrona (no bloqueante)

const { error } = require("console");
const fs = require("fs");
const { text } = require("stream/consumers");
console.log("1. Antes de leer el fichero")

//El callback se ejecutara cuando termineç

fs.readFile("archivo.txt", "utf8", (err, texto) => {

    if(err) return console.error(err.message)
    console.log("3. Contenido: ", texto.trim())
})

console.log("2. Pedida la lectura (no espero)")