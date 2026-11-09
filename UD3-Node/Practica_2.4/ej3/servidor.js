// Ejercicio 3 · Libro de visitas con GET y POST
const http = require('http')
const fs = require('fs')
const path = require('path')

const HTML = { 'Content-Type': 'text/html; charset=utf-8' }
const JSON_TIPO = { 'Content-Type': 'application/json; charset=utf-8' }

const rutaFormulario = path.join(__dirname, 'recursos', 'formulario.html')

// Las firmas se guardan en memoria
const firmas = []

// Ampliación: evita que el texto del usuario se interprete como HTML
function escaparHTML(texto) {
  return texto
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

const servidor = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')
  console.log(req.method, req.url)

  // GET / -> formulario
  if (req.method === 'GET' && url.pathname === '/') {
    return fs.readFile(rutaFormulario, (err, datos) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
        return res.end('Error al leer el fichero')
      }
      res.writeHead(200, HTML)
      res.end(datos)
    })
  }

  // GET /firmas -> JSON (con filtro opcional por nombre)
  if (req.method === 'GET' && url.pathname === '/firmas') {
    const nombre = url.searchParams.get('nombre')
    let resultado = firmas
    if (nombre) {
      resultado = firmas.filter((f) => f.nombre === nombre)
    }
    res.writeHead(200, JSON_TIPO)
    return res.end(JSON.stringify(resultado, null, 2))
  }

  // POST /firmar -> recoger datos a trozos
  if (req.method === 'POST' && url.pathname === '/firmar') {
    let cuerpo = '' // dentro de la función: uno nuevo en cada petición

    req.on('data', (chunk) => {
      cuerpo += chunk
    })

    req.on('end', () => {
      const datos = Object.fromEntries(new URLSearchParams(cuerpo))
      const nombre = (datos.nombre || '').trim()
      const mensaje = (datos.mensaje || '').trim()

      if (!nombre || !mensaje || mensaje.length > 200) {
        res.writeHead(400, HTML)
        return res.end(
          '<h1>Error 400</h1>' +
          '<p>El nombre y el mensaje son obligatorios y el mensaje no puede superar los 200 caracteres.</p>' +
          '<a href="/">Volver</a>'
        )
      }

      firmas.push({ nombre, mensaje, fecha: new Date().toISOString() })

      res.writeHead(201, HTML)
      res.end(`<h1>Gracias por firmar, ${escaparHTML(nombre)}</h1><a href="/">Volver</a>`)
    })
    return
  }

  // Cualquier otra cosa -> 404
  res.writeHead(404, HTML)
  res.end('<h1>Error 404</h1>')
})

servidor.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})
