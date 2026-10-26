***a) ¿En qué orden se mostrarán las letras A, B, C y D? Razona la respuesta utilizando la pila de***

***llamadas, la cola de callbacks y el event loop.***



A

D 

B

C



***b) Ejecútalo y comprueba tu respuesta. ¿Qué instrucción es bloqueante? ¿Cuáles son no***

***bloqueantes? Explica la diferencia.***



Bloqueante: fs.readFileSync(), porque espera a que termine la lectura.



No bloqueantes: fs.readFile() y setTimeout(), porque permiten continuar con el resto del código.



***c) Cambia \_\_filename por 'no-existe.txt' en la llamada a readFile y añade al callback la***

***gestión del error con el parámetro err (convención «error primero»). ¿Qué muestra ahora? ¿Se***

***detiene el programa?***



Si cambiamos el archivo por 'no-existe.txt' y gestionamos el error aparecerá ENOENT, que significa que el archivo no existe. El programa no se detiene, porque estamos gestionando el error.



***d) Añade al final console.log(process.version) y console.log(document.title). ¿Qué***

***ocurre con cada una? Relaciónalo con las diferencias entre JavaScript en el navegador y en***

***Node.js.***



console.log(process.version): muestra la versión de Node.js.



console.log(document.title): produce un error porque document no existe por defecto en Node.js.

