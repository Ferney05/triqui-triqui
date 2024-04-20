// Función para que la computadora realice su movimiento
function hacerMovimientoComputadora() {
    // Obtener las casillas disponibles
    let casillasDisponibles = [];
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === '') {
            casillasDisponibles.push(i);
        }
    }

    // Elegir una casilla aleatoria disponible
    const casillaAleatoria = casillasDisponibles[Math.floor(Math.random() * casillasDisponibles.length)];

    // Realizar el movimiento de la computadora en la casilla elegida
    gameBoard[casillaAleatoria] = currentPlayer.symbol;
    cells[casillaAleatoria].textContent = currentPlayer.symbol;

    // Verificar si hay un ganador o si hay un empate
    const ganador = checkWinner();
    const empate = checkDraw();

    // Mostrar el resultado si hay un ganador o un empate
    if (ganador || empate) {
        mostrarResultado(ganador);
    } else {
        // Cambiar al siguiente jugador
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        updateTurn();
    }
}

// Evento de clic en una casilla del tablero
board.addEventListener('click', (event) => {
    const casillaClickeada = event.target.dataset.index;

    // Verificar si la casilla clickeada está disponible y el juego está activo
    if (gameBoard[casillaClickeada] === '' && gameActive) {
        // Realizar el movimiento del jugador humano en la casilla clickeada
        gameBoard[casillaClickeada] = currentPlayer.symbol;
        cells[casillaClickeada].textContent = currentPlayer.symbol;

        // Verificar si hay un ganador o si hay un empate
        const ganador = checkWinner();
        const empate = checkDraw();

        // Mostrar el resultado si hay un ganador o un empate
        if (ganador || empate) {
            mostrarResultado(ganador);
        } else {
            // Cambiar al siguiente jugador
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            updateTurn();

            // Hacer que la computadora realice su movimiento automáticamente
            hacerMovimientoComputadora();
        }
    }
});
