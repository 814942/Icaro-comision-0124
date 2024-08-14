# React conceptos 
## Programacion Funcional 

### Inmutabilidad
La inmutabilidad es un principio clave en la programación funcional donde los datos no se modifican directamente. En React, se evita cambiar el estado u objetos directamente, y en su lugar, se crean copias con los cambios necesarios. Esto es importante porque permite que React pueda determinar cuándo un componente debe actualizarse, comparando versiones anteriores y nuevas del estado para optimizar el rendimiento.

Ejemplo:
```
const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4]; // Se crea un nuevo array en lugar de modificar el 
```

### Composición de Funciones
La composición de funciones es el proceso de combinar funciones simples para construir funciones más complejas. En React, esto se puede ver al combinar componentes o funciones para construir la interfaz de usuario de manera modular y reutilizable.

Ejemplo:
```
const add = x => x + 1;
const multiply = x => x * 2;

const composedFunction = x => multiply(add(x));

console.log(composedFunction(5)); // Output: 12
```

### Higher-Order Components (HOC)
Un Higher-Order Component es una función que toma un componente como argumento y retorna un nuevo componente. Los HOCs permiten reutilizar la lógica entre componentes de una manera limpia y declarativa.

Ejemplo:
```
function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Rendering component');
    return <WrappedComponent {...props} />;
  };
}

const MyComponentWithLogging = withLogging(MyComponent);
```

### Paradigma Declarativo
En lugar de describir cómo hacer las cosas (imperativo), el paradigma declarativo se centra en lo que se quiere lograr. React utiliza este enfoque declarativo al definir la UI en términos de cómo debería verse en función del estado actual, y no cómo actualizarla paso a paso.

Ejemplo:
```
// Imperativo
const list = document.createElement('ul');
for (let i = 0; i < items.length; i++) {
  const li = document.createElement('li');
  li.textContent = items[i];
  list.appendChild(li);
}
document.body.appendChild(list);

// Declarativo en React
function ItemList({ items }) {
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
}
```

### Funciones Puras
Una función pura es aquella que siempre devuelve el mismo resultado para los mismos argumentos y no tiene efectos secundarios, como modificar variables fuera de su scope o interactuar con el DOM. En React, los componentes y funciones puras son preferibles porque son predecibles y fáciles de probar.

Ejemplo:
```
// Función pura
const sum = (a, b) => a + b;


// Función impura
let count = 0;
const impureFunction = () => count += 1;

let previousName = 'David';
function greet( name ) {
  if ( previousName !== name ) {
    console.log( `Hello, ${ name }!` );
  } else {
    console.log( `Welcome back, ${ name }!` );
  }
  previousName = name;
}
```

Estas características juntas permiten que React sea un framework eficiente, predecible, y fácil de razonar, lo que es clave para construir aplicaciones modernas y escalables.

## ¿Framework o libreria?

__Framework__

Un framework es una colección de herramientas, bibliotecas y mejores prácticas que proporcionan una estructura reutilizable para desarrollar aplicaciones. Un framework establece una forma estándar de construir y desplegar aplicaciones, y generalmente viene con una arquitectura definida y componentes preconstruidos. Ejemplos de frameworks incluyen:

* React (para JavaScript): Un framework para construir interfaces de usuario.
* Django (para Python): Un framework web de alto nivel que fomenta el desarrollo rápido.
* Spring (para Java): Un framework extensible para la creación de aplicaciones empresariales.
* NestJS (para Node.js): Un framework para construir aplicaciones del lado del servidor eficientes y escalables.

__Librería__

Una librería es una colección de funciones y métodos que pueden ser llamados desde tu código para realizar tareas específicas. A diferencia de los frameworks, las librerías no imponen una estructura en tu código y son más modulares, lo que te permite usarlas a discreción para solucionar problemas específicos. Ejemplos de librerías incluyen:

* Lodash (para JavaScript): Una librería que proporciona utilidades para tareas comunes de programación.
* Pandas (para Python): Una librería para la manipulación y análisis de datos.
* Axios (para JavaScript): Una librería para realizar solicitudes HTTP.
* Moment.js (para JavaScript): Una librería para manipulación y formateo de fechas.

### Diferencias Clave
__Control y Estructura__
* Framework: Proporciona una estructura y guía sobre cómo debe organizarse tu aplicación.
* Librería: Proporciona funciones reutilizables que puedes llamar desde tu código sin imponer una estructura.

__Inversión del Control__
* Framework: Generalmente sigue el principio de inversión del control (Inversion of Control, IoC), donde el framework llama a tu código.
* Librería: Tú llamas a las funciones de la librería desde tu código.

__Uso y Propósito__
* Framework: Ayuda a construir aplicaciones completas siguiendo un diseño específico.
* Librería: Se usa para resolver problemas específicos o agregar funcionalidades particulares a tu aplicación.