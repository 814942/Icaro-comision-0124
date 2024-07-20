const astronaut = document.getElementById('astronaut');

let posX = 50;
let posY = 50;
let size = 100;
let isDragging = false;

document.addEventListener('keydown', (event) => {
    const step = 10;
    switch (event.key) {
        case 'ArrowUp':
            posY -= step;
            break;
        case 'ArrowDown':
            posY += step;
            break;
        case 'ArrowLeft':
            posX -= step;
            break;
        case 'ArrowRight':
            posX += step;
            break;
        case '+':
            size += 10;
            break;
        case '-':
            size -= 10;
            break;
        case 'H':
        case 'h':
            alert('¡Hola desde el espacio!');
            break;
    }
    updateAstronaut();
});

astronaut.addEventListener('mousedown', (event) => {
  isDragging = true;
});

document.addEventListener('mousemove', (event) => {
  if (isDragging) {
      const rect = astronaut.parentElement.getBoundingClientRect();
      posX = ((event.clientX - rect.left) / rect.width) * 100;
      posY = ((event.clientY - rect.top) / rect.height) * 100;
      updateAstronaut();
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

function updateAstronaut() {
    astronaut.style.left = `${posX}%`;
    astronaut.style.top = `${posY}%`;
    astronaut.style.width = `${size}px`;
}

function resetAstronaut() {
    posX = 50;
    posY = 50;
    size = 100;
    updateAstronaut();
}

function moveAstronautRandom() {
    posX = Math.random() * 100;
    posY = Math.random() * 100;
    updateAstronaut();
}
