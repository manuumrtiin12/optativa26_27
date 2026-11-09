var nombre = prompt("Dame tu nombre completo: ")
var añoNacimiento = parseInt(prompt("Dame tu año de nacimiento: "))

if (añoNacimiento < 1900 || isNaN(añoNacimiento)) {

    console.log("¡ERROR! Es imposible nacer antes del 1900 o no has puesto un numero")

}
else {
    var fecha = new Date()
    var añoActual = fecha.getFullYear()

    var nombreUsuario = nombre.split(' ')[0]
    nombreUsuario = nombreUsuario.toUpperCase()

    console.log("ASISTENTE: " + nombreUsuario + " (" + (añoActual - añoNacimiento) + ")")
}