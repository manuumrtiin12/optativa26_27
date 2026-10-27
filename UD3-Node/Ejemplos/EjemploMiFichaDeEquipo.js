const os = require("os")
const path = require("path")
const fs = require("fs")


const ruta = path.join(__dirname, "ficha.txt")
const texto = 
"Id: ${crypto.randomUUID()}\n" +
"Usuario: ${os.userInfo().username} \n" +
"Sistema: ${os.type()}\n" +
"CPUs: ${os.}"

fs.writeFileSync()