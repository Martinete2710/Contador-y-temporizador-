
//Obtener el elemento del contador por su ID
var contadorElemento = document.getElementById("CONTADOR");

//Inicializar el contador en 0
var contador = 0;

// Función para aumentar el contador en uno
function aumentar() {
    contador++;
    contadorElemento.textContent = contador;
}

// Función para disminuir el contador en uno
function disminuir() {
    contador--;
    contadorElemento.textContent = contador;
}
////////////////////////////// TEMPORIZADOR///////////
window.onload = function TEMPORIZADOR() {
    var temporizador = document.getElementById('temporizador');
    var tiempoRestante = 60;

    function actualizarTemporizador() {
        var minutos = Math.floor(tiempoRestante / 60);
        var segundos = tiempoRestante % 60;

        minutos = minutos < 10 ? '0' + minutos : minutos;
        segundos = segundos < 10 ? '0' + segundos : segundos;

        temporizador.innerHTML = minutos + ':' + segundos;

        if (tiempoRestante === 0) {
            clearInterval(temporizadorInterval);
            alert('¡se acabo tu tiempo!');
        }

        tiempoRestante--;
    }

    var temporizadorInterval = setInterval(actualizarTemporizador, 1000);
};
