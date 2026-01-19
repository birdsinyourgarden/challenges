/* En el taller de Santa, los elfos están guardando regalos 🎁 en un almacén vertical. Los regalos se dejan caer uno a uno por una columna y se van apilando.

El almacén es una matriz con # regalos y . espacios vacíos. Debes crear una función dropGifts que reciba el estado del almacén y un array con las columnas donde se dejan caer los regalos.

Reglas de la caída:

El regalo cae por la columna indicada desde arriba.
Se coloca en la celda vacía (.) más baja de esa columna.
Si la columna está llena, el regalo se ignora.
dropGifts(
  [
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['#', '#', '.']
  ],
  [0]
)
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

/* dropGifts(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#']
  ],
  [0, 2]
) */
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/

/*dropGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
  ],
  [0, 1, 2]
)*/
/*
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#']
]
*/

/* dropGifts(
  [
    ['#', '#'],
    ['#', '#']
  ],
  [0, 0]
)*/
/*
[
  ['#', '#']
  ['#', '#']
] */


  /**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
  for (let i = 0; i < drops.length; i++) {
    let col = drops[i];

    for (let row = warehouse.length - 1; row >= 0; row--) {
      if (warehouse[row][col] === '.') {
        warehouse[row][col] ='#';
        break;
      }
    }
  }
  return warehouse;
}


let result1 = dropGifts(
  [
    ['.', '.', '.'],
    ['.', '#', '.'],
    ['#', '#', '.']
  ],
  [0]
);
console.log(result1);


let result2 = dropGifts(
  [
    ['.', '.', '.'],
    ['#', '#', '.'],
    ['#', '#', '#']
  ],
  [0, 2]
);
console.log(result2);

let result3 = dropGifts(
  [
    ['.', '.', '.'],
    ['.', '.', '.'],
    ['.', '.', '.']
  ],
  [0, 1, 2]
);

console.log(result3);

let result4 = dropGifts(
  [
    ['#', '#'],
    ['#', '#']
  ],
  [0, 0]
);

console.log(result4);