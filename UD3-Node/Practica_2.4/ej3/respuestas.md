# Respuestas · Ejercicio 3

**1. Paro el servidor, lo vuelvo a lanzar y visito `/firmas`. ¿Qué ha pasado con las firmas?**

Han desaparecido: `/firmas` devuelve `[]`. Las firmas se guardan en un array en memoria, y la memoria del proceso se borra al pararlo. Al arrancar de nuevo, el array se crea vacío.

**2. ¿Por qué `let cuerpo = ''` va dentro de la función de cada petición?**

Porque cada petición necesita su propio `cuerpo`. Si estuviera al principio del fichero sería una única variable compartida: los datos de un usuario se mezclarían con los de otro (y con los de peticiones anteriores, que nunca se vaciarían). Dentro de la función se crea una variable nueva y vacía en cada petición.

**3. Si el formulario tuviera `required`, ¿haría falta validar en el servidor?**

Sí. `required` solo lo comprueba el navegador, y el usuario puede saltárselo: desde Postman, con otro programa, o modificando el HTML en F12. El servidor nunca debe fiarse de lo que llega del cliente. Además, `required` no comprueba la longitud máxima del mensaje ni los espacios sobrantes (`"   "` pasa como valor relleno).

**4. Firmo con el nombre `<h1 style="color:red">Hola</h1>`. ¿Qué aparece y por qué es un problema de seguridad?**

Sin proteger (`${nombre}` directamente), el navegador interpreta el texto como HTML y aparece un «Hola» grande y en rojo en vez del texto literal. Es un problema de seguridad porque el usuario puede inyectar HTML y código en la página (ataque XSS), por ejemplo un `<script>` que robe datos de otros visitantes que vean esa página.

En mi servidor lo resuelvo con la función `escaparHTML`, que cambia `&`, `<` y `>` por `&amp;`, `&lt;` y `&gt;`, de modo que el navegador muestra el texto tal cual, sin interpretarlo.
