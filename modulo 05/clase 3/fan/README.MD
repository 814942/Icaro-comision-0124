# FAN APP

### Instrucciones

Vamos a crear una web donde podamos "prender" y "apagar" un ventilador.

* Mi fan-app debera tener un elemento contenedor con el id="container".
* Mi fan-app tendra un elemento img con el id="fan-img" y la class="fan-img", dentro del id="container".
* El elemento con el id="fan-img" contendra la imagen fan.png
* Mi fan-app debera tener un elemento contenedor con el id="buttons-container", dentro del id="container".
* Mi fan-app debera contener 5 elementos clickeables, dentro del id="buttons-container", con los siguientes ids: id="button-on", id="button-off", id="button-1", id="button-2" y id="button-3".
* Cada vez que se presione un boton debera disparar un funcion acorde.
* El elemento con el id="button-on" deberia comenzar a girar el fan.
* El elemento con el id="button-of" deberia detener el movimiento del fan.
* El elemento con el id="button-1" deberia acelerar el movimiento del fan.
* El elemento con el id="button-2" deberia acelerar el movimiento del fan aun mas.
* El elemento con el id="button-3" deberia acelerar el movimiento del fan al maximo.
* Bonus: estilar con CSS.

### Estructura de Archivos

* index.html
* styles.css
* script.js
* fan.png

### Pista

Para lograr que la img gire debemos ir cambiando progresivamente el estilo [animation-duration](https://developer.mozilla.org/es/docs/Web/CSS/animation-duration)