
// Esperamos a que todo el HTML esté cargado
window.onload = function() {

    // Creamos una variable para almacenar el total de alumnos
    var totalAlumnos = 0;

    // Buscamos el input donde escribiremos el nombre del alumno
    var inputAlumno = document.getElementById("nombreInput");

    // Buscamos el botón que registra a los alumnos
    var btnAnadir = document.getElementById("btnAnadir");

    // Buscamos la lista donde aparecerán los alumnos
    var listaAlumnos = document.getElementById("listaAlumnos");

    // Buscamos el elemento HTML donde mostraremos el contador
    var contador = document.getElementById("contador");

    // Indicamos qué función se ejecutará al pulsar el botón de añadir
    btnAnadir.onclick = function() {

        // Obtenemos el texto que ha escrito el usuario en el input
        var nombreAlumno = inputAlumno.value;

        // Comprobamos si el usuario ha dejado el input vacío
        if(nombreAlumno === "") {

            // Mostramos un mensaje de aviso
            alert("Por favor, escribe el nombre del alumno.");

            // Detenemos la ejecución para no registrar un alumno vacío
            return;
        }

        // Creamos un nuevo elemento HTML <li>
        var nuevoLi = document.createElement("li");

        // Creamos un nodo de texto con el nombre del alumno
        // Añadimos un espacio al final para separar el nombre de los botones
        var nodoNombreAlumno = document.createTextNode(nombreAlumno + " ");

        // Introducimos el nodo de texto dentro del elemento <li>
        nuevoLi.appendChild(nodoNombreAlumno);

        // Creamos un nuevo botón HTML
        var btnPresente = document.createElement("button");

        // Creamos el texto que aparecerá dentro del botón
        var textoBtn = document.createTextNode("Presente");

        // Introducimos el texto dentro del botón
        btnPresente.appendChild(textoBtn);

        // Indicamos qué sucederá al pulsar el botón Presente
        btnPresente.onclick = function() {

            // Añadimos o quitamos la clase CSS "presente" al alumno
            // Esto permite cambiar su color a verde y volver al original
            nuevoLi.classList.toggle("presente");
        };

        // Introducimos el botón Presente dentro del elemento <li>
        nuevoLi.appendChild(btnPresente);

        // Creamos otro botón HTML para eliminar al alumno
        var btnEliminar = document.createElement("button");

        // Creamos el texto que aparecerá dentro del botón
        var textoEliminar = document.createTextNode("Eliminar");

        // Introducimos el texto dentro del botón Eliminar
        btnEliminar.appendChild(textoEliminar);

        // Indicamos qué sucederá al pulsar el botón Eliminar
        btnEliminar.onclick = function() {

            // Eliminamos el elemento <li> utilizando su nodo padre
            nuevoLi.parentNode.removeChild(nuevoLi);

            // Restamos uno al total de alumnos
            totalAlumnos--;

            // Actualizamos el contador que aparece en el HTML
            contador.textContent = totalAlumnos;
        };

        // Introducimos el botón Eliminar dentro del elemento <li>
        nuevoLi.appendChild(btnEliminar);

        // Añadimos el <li> completo (nombre y botones) a la lista <ul>
        listaAlumnos.appendChild(nuevoLi);

        // Sumamos uno al total de alumnos registrados
        totalAlumnos++;

        // Actualizamos el número de alumnos que aparece en el HTML
        contador.textContent = totalAlumnos;

        // Limpiamos el input para poder escribir otro nombre
        inputAlumno.value = "";

    };

};
