const http = require('http');
const os = require('os');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;

const servidor = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Servidor de 2º DAM</h1><p>Te invitamos a probar las rutas /info y /dado</p>');
    } else if (req.url === '/info') {
        const info = {
            sistema: os.type(),
            release: os.release(),
            cpus: os.cpus().length,
            versionNode: process.version
        };
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(info, null, 2));
    } else if (req.url === '/dado') {
        const x = crypto.randomInt(1, 7); // Genera un número aleatorio del 1 al 6
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<h1>Lanzamiento de dado</h1><p>Has sacado un ${x}</p>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('404 - Página no encontrada');
    }
});

servidor.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});