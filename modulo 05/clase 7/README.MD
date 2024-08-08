### Como crear un proyecto en TS

* Instalar TS con el comando: `npm install -g typescript`
* Crear un nuevo proyecto con: `npm init -y`
* Crear un proyecto TS con: `tsc --init`
* Escuchamos el proyecto TS con: `tsc -w`

## Construyamos nuestro primer archivo TS

Creamos el archivo app.ts
```
function greeter(person) {
  return "Hello, " + person;
}
 
let user = "Pablo";
// let user = [0, 1, 2];
 
console.log(user)
```