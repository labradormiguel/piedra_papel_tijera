let posibilidades = ["Piedra", "Papel", "Tijera"];
// cpu y player las necesito fuera del scope de sus funciones 
// para poder mostrar más adelante quien ha ganado a quien
let cpu;
let player;

function computerSelection() {

    // Con random obtenemos un número entre 0 y 1 y lo multiplicamos por el
    // total de las posiciones de la matriz, le restamos uno porque realmente
    // iría desde 0 hasta 2. Con round eliminamos los decimales.

    cpu = posibilidades[Math.round(Math.random() *
        (posibilidades.length - 1))];

    return cpu;

}

function playerSelection() {

    // Introducimos un texto y lo pasamos a minúsuculas

    let texto = prompt("¿Qué eliges?").toLowerCase();

    // Pasamos la primera letra a mayúsculas y lo almacenamos en r1

    let r1 = texto.charAt(0).toUpperCase();

    // Cortamos el resto del texto y lo almacenamos en r2

    let r2 = texto.slice(1, texto.length);

    // Juntamos r1 y r2 en la variable player

    player = r1 + r2;

    return player;
}

// Declaramos la variable donde almacenaremos el resultado de cada juego y los
// contadores con los que llevaremos la cuenta de nuestro progreso

let resultado;
let empate = 0;
let victoria = 0;
let derrota = 0;

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

    } else {

        playGame(playerSelection(), computerSelection());

    }
}



playGame(playerSelection(), computerSelection());

if (resultado == "empate") {
    console.log("Tú: " + player);
    console.log("CPU: " + cpu);
    console.log("¡Empate!");
} else if (resultado == "victoria") {
    console.log("Tú: " + player);
    console.log("CPU: " + cpu);
    console.log("¡Ganaste! " + player + " gana a " + cpu.toLowerCase() + ".");
} else if (resultado == "derrota") {
    console.log("Tú: " + player);
    console.log("CPU: " + cpu);
    console.log("¡Perdiste! " + cpu + " gana a " + player.toLowerCase() + ".");
}



console.log("Ganadas: " + victoria + " Empatadas: " + empate + " Perdidas: " + derrota);