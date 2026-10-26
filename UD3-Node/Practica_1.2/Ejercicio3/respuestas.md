6. 

El comando npm start ejecuta el programa y muestra su salida. El comando npm run dev ejecutará el programa en modo de observación. Si cambiamos y guardamos app.js entonces el programa se reiniciará automáticamente pero cambiar el archivo notes.json no garantiza un reinicio automático.

7. 

El archivo .gitignore incluye node_modules y .env para que Git no agregue estos archivos al repositorio. Si se elimina el archivo node_modules y se ejecuta npm install las dependencias se reinstalarán y la aplicación funcionará.

- Package.json:Incluye la información del proyecto, las dependencias y los scripts.
- package-lock.json:Lista la versión exacta de las dependencias instaladas.

