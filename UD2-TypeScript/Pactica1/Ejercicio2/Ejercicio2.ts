function contarPalabras(texto: string): number {
    let palabras = texto.split(" ");
    return palabras.length;
}

console.log(contarPalabras("Hola que tal"));
console.log(contarPalabras("Estoy aprendiendo TypeScript"));
console.log(contarPalabras("Buenos días")); 