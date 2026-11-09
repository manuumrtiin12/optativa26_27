# Respuestas · Ejercicio 1

**1. ¿Quién pide `/favicon.ico` y qué le responde mi servidor?**

Lo pide el navegador automáticamente, para mostrar el icono de la pestaña. Mi servidor no tiene esa ruta en el objeto `rutas`, así que le responde con la página de error 404.

**2. ¿Por qué la hora siempre sale igual si la escribo directamente en el objeto de rutas?**

Porque el objeto `rutas` se crea una sola vez, al arrancar el servidor, y `new Date()` se ejecuta en ese momento. La hora queda guardada como texto fijo. Si en su lugar guardo una función, se ejecuta en cada petición y la hora se calcula de nuevo cada vez.
