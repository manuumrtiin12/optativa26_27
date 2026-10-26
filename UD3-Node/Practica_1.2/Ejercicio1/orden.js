const fs = require('fs')
console.log('A')
setTimeout(() => console.log('B'), 0)
fs.readFile('no-existe.txt', 'utf8', (err, datos) => {
    if (err) {
        console.log('Error:', err.code)
    } else {
        console.log(datos)
    }
})
const texto = fs.readFileSync(no-existe.txt, 'utf8')
console.log('D', texto.length > 0)




