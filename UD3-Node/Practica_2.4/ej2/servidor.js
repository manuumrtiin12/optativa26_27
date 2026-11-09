// Ejercicio 2 · Una web servida desde ficheros
const http = require('http')
const fs = require('fs')
const path = require('path')

const tipos = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8'
}

// Ruta -> fichero que hay que enviar
const ficheros = {
  '/': 'index.html',
  '/contacto': 'contacto.html',
  '/estilos.css': 'estilos.css'
}

const servidor = http.createServer((req, res) => {
  console.log(req.method, req.url)

  // 1º decidimos qué fichero y qué código corresponden
  let nombre = ficheros[req.url]
  let codigo = 200
  if (!nombre) {
    nombre = '404.html'
    codigo = 404
  }

  const ruta = path.join(__dirname, 'paginas', nombre)
  const tipo = tipos[path.extname(nombre)]

  // 2º leemos el fichero (una sola llamada a readFile)
  fs.readFile(ruta, (err, datos) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
      return res.end('Error al leer el fichero')
    }
    res.writeHead(codigo, { 'Content-Type': tipo })
    res.end(datos)
  })
})

servidor.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})
