// Ejercicio 1 · Rutas y códigos de estado
const http = require('http')

const HTML = { 'Content-Type': 'text/html; charset=utf-8' }

// Cada ruta es una función: así el contenido se calcula en CADA petición
const rutas = {
  '/': () => `<h1>Inicio</h1>
<ul>
  <li><a href="/sobre-mi">Sobre mí</a></li>
  <li><a href="/aficiones">Aficiones</a></li>
  <li><a href="/hora">Hora</a></li>
</ul>`,
  '/sobre-mi': () => `<h1>Sobre mí</h1>
<p>Me llamo Nombre Apellido y estudio 2º de DAM. Me gusta programar y el diseño de interfaces.</p>
<a href="/">Volver</a>`,
  '/aficiones': () => `<h1>Aficiones</h1>
<ul>
  <li>Programar</li>
  <li>Música</li>
  <li>Senderismo</li>
</ul>
<a href="/">Volver</a>`,
  '/hora': () => `<h1>Hora</h1>
<p>Son las ${new Date().toLocaleTimeString('es-ES')}</p>
<a href="/">Volver</a>`
}

const servidor = http.createServer((req, res) => {
  console.log(req.method, req.url)
  const pagina = rutas[req.url]

  if (pagina) {
    res.writeHead(200, HTML)
    res.end(pagina())
  } else {
    res.writeHead(404, HTML)
    res.end('<h1>Error 404: la ruta no existe</h1><a href="/">Volver al inicio</a>')
  }
})

servidor.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})
