# STARMAN
<!-- ![Starman](/clase%203/astronauta.png "Starman") -->
<p ba>
  <img height="200" src="./astronauta.png" />
</p>

### Instrucciones

Vamos a crear una página web interactiva utilizando HTML y JavaScript. Aquí tienes un ejemplo de cómo lograr todo lo que has mencionado:

* Desplazar la imagen del astronauta por el eje x e y.
* Agrandar o achicar el astronauta.
* Reiniciarlo a su posición original.
* Al presionar la tecla H, debe salir un alert donde el astronauta nos salude.
* Un botón que, al hacer clic, mueva aleatoriamente al astronauta a través de la ventana.

### Estructura de Archivos

* index.html
* styles.css
* script.js
* espacio.jpg
* astronauta.png

### Explicación

#### HTML: La estructura básica de la página con un contenedor para el juego (gameArea) y controles (botones).

#### CSS: Estiliza la página, el área del juego, y el astronauta. Usa background-image para poner la imagen de fondo.

#### JavaScript - Eventos de Teclado: Detecta las teclas de flecha para mover el astronauta, + y - para cambiar el tamaño, y H para mostrar un mensaje.

#### Funciones: updateAstronaut para actualizar la posición y tamaño del astronauta, resetAstronaut para reiniciarlo, y moveAstronautRandom para moverlo aleatoriamente.

Con estos archivos, tendrás una página interactiva donde puedes mover, escalar, reiniciar y hacer que el astronauta salude y se mueva aleatoriamente con los controles especificados.