const botonend_play = document.getElementById('botonend_play');
const input_name_playerone = document.getElementById('name_playerone');
const input_name_playertwo = document.getElementById('name_playertwo');
const name_player1 = document.getElementById('name__player1');
const name_player2 = document.getElementById('name__player2');
const show_winner = document.getElementById('show_winner');
const turno = document.getElementById('turno');
const palpita = document.getElementById('palpita');
const reboot_play = document.getElementById('reboot_play');
const new_play = document.getElementById('new_play');
const player1_money = document.getElementById('player1_money');
const player2_money = document.getElementById('player2_money');
const apuesta__ = document.getElementById('apuesta__');
const input__apuestas = document.getElementById('input__apuestas');
const apostar_boton = document.getElementById('apostar_boton');

export function ShowNamesPlayers() {
    botonend_play.addEventListener('click', () => {
        name_player1.innerHTML = `${input_name_playerone.value}`;
        name_player2.innerHTML = `${input_name_playertwo.value}`;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let currentPlayer;

    const symbol_x1 = document.getElementById('symbol-x1');
    const symbol_x2 = document.getElementById('symbol-x2');
    const symbol_o1 = document.getElementById('symbol-o1');
    const symbol_o2 = document.getElementById('symbol-o2');

    const points_player1 = document.getElementById('points_player1');
    const points_player2 = document.getElementById('points_player2');

    let player1 = { name: '', symbol: '', color: '#326ebd', money: 0 };
    let player2 = { name: '', symbol: '', color: '#e61154f1', money: 0 };

    symbol_x1.addEventListener('click', function () {
        player1.symbol = 'X';
        player2.symbol = 'O';
        player1.name = input_name_playerone.value;
        player2.name = input_name_playertwo.value;
        currentPlayer = player1;
        updateTurn();
    });

    symbol_o1.addEventListener('click', function () {
        player1.symbol = 'O';
        player2.symbol = 'X';
        player1.name = input_name_playerone.value;
        player2.name = input_name_playertwo.value;
        currentPlayer = player1;
        updateTurn();
    });

    const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    function checkWinner() {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
            }
        }

        return null;
    }

    function checkDraw() {
        return !gameBoard.includes('');
    }

    function handleClick(index) {
        if (!gameActive || gameBoard[index] !== '') {
            return;
        }

        gameBoard[index] = currentPlayer.symbol;
        cells[index].textContent = currentPlayer.symbol;

        const winner = checkWinner();
        let points = 1;

        if (winner) {
            if (player1.symbol === winner) {
                show_winner.style.display = 'block';
                points_player1.textContent = `${parseInt(points_player1.textContent) + points}`;
                show_winner.innerText = `Ha ganado ${player1.name}, símbolo ${player1.symbol}.`;
                show_winner.classList.add('win');
                player1.money += parseInt(input__apuestas.value);
                player2.money -= parseInt(input__apuestas.value);
            } else {
                show_winner.style.display = 'block';
                points_player2.textContent = `${parseInt(points_player2.textContent) + points}`;
                show_winner.innerText = `Ha ganado ${player2.name}, símbolo ${player2.symbol}.`;
                show_winner.classList.add('win');
                player1.money -= parseInt(input__apuestas.value);
                player2.money += parseInt(input__apuestas.value);
            }

            gameActive = false;
        } else if (checkDraw()) {
            show_winner.style.display = 'block';
            show_winner.innerHTML = `Es un empate.`;
            show_winner.classList.add('tie');
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            updateTurn();
        }
        displayMoney();
    }

    cells.forEach((cell, index) => {
        cell.addEventListener('click', () => handleClick(index));
    });

    function updateTurn() {
        turno.innerText = `Es tu turno, ${currentPlayer.name}`;
        palpita.classList.add('color_text');
    }

    function displayMoney() {
        player1_money.innerText = `Dinero: $${player1.money}`;
        player2_money.innerText = `Dinero: $${player2.money}`;
    }

    reboot_play.addEventListener('click', () => {
        show_winner.style.display = 'none';
        currentPlayer = player1;
        gameBoard = ['', '', '', '', '', '', '', '', ''];
        gameActive = true;
        updateTurn();

        cells.forEach(cell => {
            cell.textContent = '';
        });
    });

    function refreshPage() {
        location.reload();
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const contenido = cell.innerText.trim();

            if (contenido === player1.symbol) {
                cell.style.color = player1.color;
            } else if (contenido === player2.symbol) {
                cell.style.color = player2.color;
            }
        });
    });

    new_play.addEventListener('click', refreshPage);
});

let winner = '';

let player1 = { name: '', symbol: '', color: '#326ebd', money: 0 };
let player2 = { name: '', symbol: '', color: '#e61154f1', money: 0 };

apostar_boton.addEventListener('click', () => {
    const valor_apuesta = parseInt(input__apuestas.value);

    if (!isNaN(valor_apuesta)) {
        player1_money.style.display = 'block';
        player2_money.style.display = 'block';
        apuesta__.style.display = 'block';

        apuesta__.innerText = `Apuesta: $${valor_apuesta}`;

        if (player1.symbol === winner) {
            player1.money += valor_apuesta;
            player2.money -= valor_apuesta; 
        } else {
            player1.money -= valor_apuesta;
            player2.money += valor_apuesta; 
        }

        player1_money.innerText = `$${player1.money}`;
        player2_money.innerText = `$${player2.money}`;

        player1_money.style.color = player1.money >= 0 ? '#228049' : '#d80000';
        player2_money.style.color = player2.money >= 0 ? '#228049' : '#d80000';
    } else {
        console.error("La apuesta no es un número válido");
    }
});
