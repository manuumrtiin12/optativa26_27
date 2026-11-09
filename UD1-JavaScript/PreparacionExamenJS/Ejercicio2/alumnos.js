        const alumno1 = {
            nombre: "Ana",
            edad: 28,
            nota: 10
        }

        const alumno2 = {
            nombre: "Juan",
            edad: 26,
            nota: 2
        }

        const alumno3 = {
            nombre: "Manuel",
            edad: 24,
            nota: 8
        }

        let listaAlumnos = []
        listaAlumnos.push(alumno1)
        listaAlumnos.push(alumno2)
        listaAlumnos.push(alumno3)

        listaAlumnos.forEach(alumno => {
            if (alumno.nota >= 5) {
                console.log(alumno.nombre + ": APROBADO")
            } else {
                console.log(alumno.nombre + ": SUSPENSO")
            }
        });