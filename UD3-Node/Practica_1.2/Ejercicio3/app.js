
const fs = require('fs/promises')
const { media, aprobados, mejor } = require('./notas')
const pc = require('picocolors')

async function main() {
    try {
        const datos = await fs.readFile('notas.json', 'utf8')
        const lista = JSON.parse(datos)

        console.log('RESUMEN DE NOTAS')
        console.log('----------------')

        lista.forEach(alumno => {
            if (alumno.nota >= 5) {
                console.log(pc.green(`${alumno.nombre}: ${alumno.nota}`))
            } else {
                console.log(pc.red(`${alumno.nombre}: ${alumno.nota}`))
            }
        })

        console.log('----------------')
        console.log('Nota media:', media(lista).toFixed(2))
        console.log('Número de aprobados:', aprobados(lista).length)
        console.log('Mejor alumno:', mejor(lista).nombre)
    } catch (err) {
        console.error('Error:', err.message)
    }
}

main()
