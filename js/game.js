const posibilidades = ["Piedra", "Papel", "Tijera"];
const piedra = document.querySelector('#piedra');
const papel = document.querySelector('#papel');
const tijera = document.querySelector('#tijera');
const ganadas = document.querySelector('#ganadas');
const empatadas = document.querySelector('#empatadas');
const perdidas = document.querySelector('#perdidas');
const total = document.querySelector('#total');
const decision = document.querySelector('#decision');
const startOver = document.getElementById('startOver');
let cpu;
let player;
let texto;

// Declaramos la variable donde almacenaremos el resultado de cada juego y los
// contadores con los que llevaremos la cuenta de nuestro progreso

let resultado;
let empate = 0;
let victoria = 0;
let derrota = 0;

function computerSelection() {

    // Con random obtenemos un número entre 0 y 1 y lo multiplicamos por el
    // total de las posiciones de la matriz, le restamos uno porque realmente
    // iría desde 0 hasta 2. Con round eliminamos los decimales.

    cpu = posibilidades[Math.round(Math.random() *
        (posibilidades.length - 1))];

    return cpu;

}

function playerSelection(opcion) {

    player = posibilidades[opcion];

    return { player };
}

function playGame(jugador, maquina) {

    if (jugador === maquina) {

        resultado = "empate";
        empate++;
        return resultado;

    } else if (jugador === "Piedra" && maquina === "Papel") {

        resultado = "derrota";
        derrota++;
        return resultado;

    } else if (jugador === "Piedra" && maquina === "Tijera") {

        resultado = "victoria";
        victoria++;
        return resultado;

    } else if (jugador === "Papel" && maquina === "Tijera") {

        resultado = "derrota";
        derrota++;
        return resultado;

    } else if (jugador === "Papel" && maquina === "Piedra") {

        resultado = "victoria";
        victoria++;
        return resultado;

    } else if (jugador === "Tijera" && maquina === "Papel") {

        resultado = "victoria";
        victoria++;
        return resultado;

    } else if (jugador === "Tijera" && maquina === "Piedra") {

        resultado = "derrota";
        derrota++;
        return resultado;

    }

}

function borrarSeleccion() {
    document.getElementById('playerPiedra').innerText = "";
    document.getElementById('playerPapel').innerText = "";
    document.getElementById('playerTijera').innerText = "";
    document.getElementById('cpuPiedra').innerText = "";
    document.getElementById('cpuPapel').innerText = "";
    document.getElementById('cpuTijera').innerText = "";
    decision.textContent = "";
}

function cpuSeleccion() {
    if (cpu == 'Piedra') {
        document.getElementById('cpuPiedra').innerText = "CPU";
    } else if (cpu == 'Papel') {
        document.getElementById('cpuPapel').innerText = "CPU";
    } else if (cpu == 'Tijera') {
        document.getElementById('cpuTijera').innerText = "CPU";
    }
}

function eligePiedra() {
    borrarSeleccion();
    playerSelection(0);
    computerSelection();
    document.getElementById('playerPiedra').innerText = "Tú";
    playGame(player, cpu);
    cpuSeleccion();
    comprobacion();
}

function eligePapel() {
    borrarSeleccion();
    playerSelection(1);
    computerSelection();
    document.getElementById('playerPapel').innerText = "Tú";
    playGame(player, cpu);
    cpuSeleccion();
    comprobacion();
}

function eligeTijera() {
    borrarSeleccion();
    playerSelection(2);
    computerSelection();
    document.getElementById('playerTijera').innerText = "Tú";
    playGame(player, cpu);
    cpuSeleccion();
    comprobacion();
}

piedra.addEventListener('click', eligePiedra, false);
papel.addEventListener('click', eligePapel, false);
tijera.addEventListener('click', eligeTijera, false);

function puntuacion() {

    let suma = empate + victoria + derrota;

    ganadas.textContent = "";
    ganadas.append(`Ganadas: ${victoria}`);
    perdidas.textContent = "";
    perdidas.append(`Perdidas: ${derrota}`);
    empatadas.textContent = "";
    empatadas.append(`Empatadas: ${empate}`);
    total.textContent = "";
    total.append(`Total: ${suma}`);

}

function resetear() {

    ganadas.textContent = "";
    victoria = 0;
    ganadas.append(`Ganadas: ${victoria}`);
    perdidas.textContent = "";
    derrota = 0;
    perdidas.append(`Perdidas: ${derrota}`);
    empatadas.textContent = "";
    empate = 0;
    empatadas.append(`Empatadas: ${empate}`);
    total.textContent = "";
    suma = 0;
    total.append(`Total: ${suma}`);
    piedra.removeAttribute("disabled");
    papel.removeAttribute("disabled");
    tijera.removeAttribute("disabled");

}

function jugarOtraVez() {

    const jugarDeNuevo = document.createElement('button');
    jugarDeNuevo.setAttribute("id", "gameOver");
    let t = document.createTextNode("Jugar de nuevo")
    jugarDeNuevo.appendChild(t);
    jugarDeNuevo.addEventListener('click', resetear, false);
    jugarDeNuevo.addEventListener('click', borrarSeleccion, false);
    jugarDeNuevo.addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target)
    });
    startOver.append(jugarDeNuevo);

}


function comprobacion() {

    if (victoria == 5) {

        puntuacion();
        decision.textContent = "";
        decision.append(`¡Se acabó! ¡Ganaste a la máquina!`);
        piedra.setAttribute("disabled", true);
        papel.setAttribute("disabled", true);
        tijera.setAttribute("disabled", true);
        jugarOtraVez();

    } else if (derrota == 5) {

        puntuacion();
        decision.textContent = "";
        decision.append(`¡Se acabó! ¡Te ganó la máquina!`);
        piedra.setAttribute("disabled", true);
        papel.setAttribute("disabled", true);
        tijera.setAttribute("disabled", true);
        jugarOtraVez();

    } else {

        let suma = empate + victoria + derrota;

        if (resultado == "empate") {

            puntuacion();
            decision.textContent = "";
            decision.append(`¡Empate!`)

        } else if (resultado == "victoria") {

            puntuacion();
            decision.textContent = "";
            decision.append(`¡Ganaste! ${player} gana a ${cpu}.`)

        } else if (resultado == "derrota") {

            puntuacion();
            decision.textContent = "";
            decision.append(`¡Perdiste! ${cpu} gana a ${player}.`)

        }
    }

}
