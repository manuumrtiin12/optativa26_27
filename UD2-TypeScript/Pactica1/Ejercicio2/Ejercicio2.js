function contarPalabras(texto) {
    let palabras = texto.split(" ");
    return palabras.length;
}

function getAvenger(nombre, poder, arma = "Arco") {

    console.log("Nombre: " + nombre + " Poder: " + poder + " Arma: " + arma);

}

console.log(contarPalabras("Hola que tal"));
console.log(contarPalabras("Estoy aprendiendo TypeScript"));
console.log(contarPalabras("Buenos días"));

getAvenger("Ojo de Halcón", "Precisión");
getAvenger("Spiderman", "sentido aracnido", "puño electrico");






