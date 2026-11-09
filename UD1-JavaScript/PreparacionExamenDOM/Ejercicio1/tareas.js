// 1. Esperamos a que el HTML esté completamente cargado
window.onload = function() {

    // 2. Seleccionamos los elementos del HTML por su ID
    var inputTarea = document.getElementById("nuevaTarea");
    var btnAgregar = document.getElementById("btnAgregar");
    var listaTareas = document.getElementById("listaTareas");

    // 3. Asignamos la función al botón "Agregar Tarea"
    btnAgregar.onclick = function() {

        // Obtenemos el texto introducido en el input
        var texto = inputTarea.value;

        // Comprobamos si el input está vacío
        if (texto === "") {
            alert("Por favor, escribe una tarea antes de añadir.");
            return;
        }

        // --- PROCESO DE CREACIÓN DEL NODO EN EL DOM ---

        // Paso A: Crear la etiqueta <li>
        var nuevoLi = document.createElement("li");

        // Paso B: Crear el texto que irá dentro del <li>
        var textoLi = document.createTextNode(texto + " ");

        // Paso C: Meter el texto dentro del <li>
        nuevoLi.appendChild(textoLi);

        // Paso D: Crear el botón de "Eliminar"
        var btnEliminar = document.createElement("button");
        var textoBtn = document.createTextNode("Eliminar");

        btnEliminar.appendChild(textoBtn);

        // LÓGICA DE ELIMINACIÓN
        btnEliminar.onclick = function() {

            // Eliminamos el <li> desde su nodo padre
            nuevoLi.parentNode.removeChild(nuevoLi);

        };

        // Metemos el botón de eliminar dentro del <li>
        nuevoLi.appendChild(btnEliminar);

        // Paso E: Añadimos el <li> completo a la lista <ul>
        listaTareas.appendChild(nuevoLi);

        // Limpiamos el input para la siguiente tarea
        inputTarea.value = "";

    };

};