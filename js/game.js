const posibilidades = ["Piedra", "Papel", "Tijera"];
const piedra = document.querySelector('#piedra');
const papel = document.querySelector('#papel');
const tijera = document.querySelector('#tijera');
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
    /* console.log(`this playerSeleccion: ${this}`); */

    return { player };
}

function playGame(jugador, maquina) {

/*     console.log("aquí llega algo");
    console.log(`jugador: ${jugador}`);
    console.log(`maquina: ${maquina}`); */

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

    /* console.log(`resultado: ${resultado}`); */

}

function eligePiedra() {
    playerSelection(0);
    computerSelection();
/*     console.log(player);
    console.log(cpu);
    console.log(typeof player);
    console.log(typeof cpu);
    console.log(`this eligepiedra: ${this}`) */
    playGame(player, cpu);
    comprobacion();
}

function eligePapel() {
    playerSelection(1);
    computerSelection();
/*     console.log(player);
    console.log(cpu);
    console.log(typeof player);
    console.log(typeof cpu);
    console.log(`this eligepapel: ${this}`) */
    playGame(player, cpu);
    comprobacion();
}

function eligeTijera() {
    playerSelection(2);
    computerSelection();
/*     console.log(player);
    console.log(cpu);
    console.log(typeof player);
    console.log(typeof cpu);
    console.log(`this eligetijera: ${this}`) */
    playGame(player, cpu);
    comprobacion();
}

piedra.addEventListener('click', eligePiedra, false);
papel.addEventListener('click', eligePapel, false);
tijera.addEventListener('click', eligeTijera, false);

function comprobacion() {

    if (resultado == "empate") {
        console.log("Tú: " + player);
        console.log("CPU: " + cpu);
        console.log("¡Empate!");
        console.log("Ganadas: " + victoria + " Empatadas: " + empate + " Perdidas: " + derrota);
    } else if (resultado == "victoria") {
        console.log("Tú: " + player);
        console.log("CPU: " + cpu);
        console.log("¡Ganaste! " + player + " gana a " + cpu.toLowerCase() + ".");
        console.log("Ganadas: " + victoria + " Empatadas: " + empate + " Perdidas: " + derrota);
    } else if (resultado == "derrota") {
        console.log("Tú: " + player);
        console.log("CPU: " + cpu);
        console.log("¡Perdiste! " + cpu + " gana a " + player.toLowerCase() + ".");
        console.log("Ganadas: " + victoria + " Empatadas: " + empate + " Perdidas: " + derrota);
    }

}

// console.log("Ganadas: " + victoria + " Empatadas: " + empate + " Perdidas: " + derrota);