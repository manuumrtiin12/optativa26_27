# Respuestas · Ejercicio 2

**1. Al cargar `/` aparecen dos peticiones en la terminal. ¿Cuáles son y por qué?**

`GET /` y `GET /estilos.css`. El navegador pide primero el HTML y, al leerlo y encontrar el `<link rel="stylesheet" href="/estilos.css">`, hace una segunda petición para descargar la hoja de estilos. Cada recurso (HTML, CSS, imágenes...) es una petición distinta. (A veces aparece además `GET /favicon.ico`.)

**2. Servir un vídeo de 500 MB: ¿qué problema tiene `fs.readFile` y qué alternativa usaría?**

`fs.readFile` carga el fichero entero en memoria antes de enviarlo: 500 MB de RAM por cada petición, y el navegador no recibe nada hasta que termina la lectura. Con varias peticiones a la vez el servidor podría quedarse sin memoria.

La alternativa vista en clase son los streams: `fs.createReadStream(ruta).pipe(res)`. El fichero se envía a trozos conforme se lee, sin cargarlo entero en memoria (`res` es un stream de escritura).
