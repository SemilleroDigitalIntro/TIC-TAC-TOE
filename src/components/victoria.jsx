export function verificarVictoria(tablero) {
    let condicionVictoria = null;

    // Verificar líneas horizontales
    for (let i = 0; i < 3; i++) {
        if (
            (tablero[i][0] === 0 && tablero[i][1] === 0 && tablero[i][2] === 0) ||
            (tablero[i][0] === 1 && tablero[i][1] === 1 && tablero[i][2] === 1)
        ) {
            condicionVictoria = tablero[i][0];
        }
    }

    // Verificar líneas verticales
    for (let i = 0; i < 3; i++) {
        if (
            (tablero[0][i] === 0 && tablero[1][i] === 0 && tablero[2][i] === 0) ||
            (tablero[0][i] === 1 && tablero[1][i] === 1 && tablero[2][i] === 1)
        ) {
            condicionVictoria = tablero[0][i];
        }
    }

    // Verificar diagonales
    if (
        (tablero[0][0] === 0 && tablero[1][1] === 0 && tablero[2][2] === 0) ||
        (tablero[0][0] === 1 && tablero[1][1] === 1 && tablero[2][2] === 1)
    ) {
        condicionVictoria = tablero[0][0];
    } else if (
        (tablero[0][2] === 0 && tablero[1][1] === 0 && tablero[2][0] === 0) ||
        (tablero[0][2] === 1 && tablero[1][1] === 1 && tablero[2][0] === 1)
    ) {
        condicionVictoria = tablero[0][2];
    }

    return condicionVictoria;
}

export function Victoria({jugador}) {
    return (
        <div className="victoria">
            <h2>🎉 ¡Felicidades, campeón! 🎉</h2>
            <h3>🏆 El jugador <span style={{color: jugador === 'X' ? '#007bff' : '#ff4136'}}>{(jugador == 0) ? 'X' : 'O'}</span> ha ganado la partida 🥳</h3>
        </div>
    );
}