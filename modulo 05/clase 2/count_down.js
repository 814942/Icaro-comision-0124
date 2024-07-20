// Establece la fecha y hora objetivo para la cuenta regresiva
const countdownDate = new Date("Jul 19, 2024 19:10:00").getTime();

// Actualiza la cuenta regresiva cada 1 segundo
const x = setInterval(function() {

    // Obtiene la fecha y hora actual
    const now = new Date().getTime();

    // Encuentra la diferencia entre ahora y la fecha objetivo
    const distance = countdownDate - now;

    // Calcula el tiempo para días, horas, minutos y segundos
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra los resultados en los elementos correspondientes
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si la cuenta regresiva ha terminado, escribe un texto
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
