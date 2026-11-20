
const express = require('express');

const path = require('path');

const app = express();

const PORT = 3000;

// Middleware de registro
app.use((req, res, next) => {

    const hora = new Date().toLocaleTimeString('es-ES', {
        hour12: false
    });

    console.log(`${hora} ${req.method} ${req.url}`);

    next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/horario', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'horario.html'));
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
