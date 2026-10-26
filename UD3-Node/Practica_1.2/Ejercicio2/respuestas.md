a) Explica por qué este código es un ejemplo de callback hell. ¿Por qué cada readFile/writeFile
tiene que ir dentro del anterior?

Esto se debe a que hay algunos callbacks entre sí.Se dependen el uno al otro; primero se lee la configuración luego los estudiantes y por último el informe.

b) y c)

Archivos creados

d) Borra (o renombra) alumnos.txt y ejecuta las tres versiones. ¿En cuántos sitios hay que
gestionar el error en cada una?

Habrá un error mostrado en cada uno de los tres casos ya que no existe dicho archivo y no se puede generar el informe.

- Callbacks: Tendrás que lidiar con los errores en tres lugares: al leer y al escribir.

- then(): Solo necesitarás un .catch().

- async/await: Solo necesitarás un try/catch.

e) 

Creado



