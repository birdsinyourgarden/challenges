/* En el Polo Norte han montado un panel de luces navideñas 🎄✨ para decorar el taller. Cada luz puede estar encendida con un color o apagada.

El panel se representa como una matriz donde cada celda puede ser:

'.' → luz apagada
'R' → luz roja
'G' → luz verde
Los elfos quieren saber si en el panel existe una línea de 4 luces del mismo color encendidas y alineadas (solo horizontal ↔ o vertical ↕). Las luces apagadas ('.') no cuentan.

hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
])
// true → hay 4 luces rojas en horizontal

hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
])
// true → hay 4 luces verdes en vertical

hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
])
// false → no hay 4 luces del mismo color seguidas
Nota: El tablero puede ser de cualquier tamaño. No hay diagonales. /*

/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
  const rows = board.length;
  if (rows === 0) return false;
  const cols = board[0].length;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols - 4; c++) {
      const cell = board[r][c];
      if (cell !== '.' && cell === board[r][c + 1] && cell === board[r][c + 2] && cell === board[r][c + 3]) {
        return true;
      }
    }
  }

  for (let c = 0; c < rows; c++) {
    for (let r = 0; r <= rows - 4; r++) {
      const cell = board[r][c];
      if (cell !== '.' && cell === board[r + 1][c] && cell === board[r + 2][c] && cell === board[r + 3][c]) {
        return true;
      }
    }
  }

  return false;
}

console.log(hasFourLights([
  ['.', '.', '.', '.', '.'],
  ['R', 'R', 'R', 'R', '.'],
  ['G', 'G', '.', '.', '.']
]));

console.log(hasFourLights([
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.'],
  ['.', 'G', '.', '.']
]));

console.log(hasFourLights([
  ['R', 'G', 'R'],
  ['G', 'R', 'G'],
  ['G', 'R', 'G']
]));

// otra forma de hacerlo 

function hasFourLights(board) {
    if (board.length === 0) return false;

    for (let i = 0; i < board.length; i++) {
        let cadFila = '';
        for (let j = 0; j < board[i].length; j++) {
            cadFila += board[i][j];
        }
        if (cadFila.includes('RRRR') || cadFila.includes('GGGG')) {
            return true;
        }
    }

    const numColumnas = board[0].length;
    for (let col = 0; col < numColumnas; col++) {
        let cadColumna = '';
        for (let fila = 0; fila < board.length; fila++) {
            cadColumna += board[fila][col];
        }
        if (cadColumna.includes('RRRR') || cadColumna.includes('GGGG')) {
            return true;
        }
    }
    return false;
}