window.onload = function() {

    var parrafoExtra = document.getElementById("parrafoExtra");
    var btnToggle = document.getElementById("btnToggle");
    var parrafo1 = document.getElementById("parrafo1");
    var btnEstilo = document.getElementById("btnEstilo");

    btnToggle.onclick = function() {

        if (parrafoExtra.classList.contains("oculto")) {
            parrafoExtra.classList.remove("oculto");
            btnToggle.textContent = "Mostrar menos...";
        } else {
            parrafoExtra.classList.add("oculto");
            btnToggle.textContent = "Mostrar más...";
        }

    };

    btnEstilo.onclick = function() {

        parrafo1.classList.toggle('destacado')
        
        if (!parrafo1.classList.contains("oculto")) {

            parrafoExtra.classList.toggle('destacado')

        }

        
    }
 
};