/*
 * Crea una función que sea capaz de leer el número representado por el ábaco.
 * - El ábaco se representa por un array con 7 elementos.
 * - Cada elemento tendrá 9 "O" (aunque habitualmente tiene 10 para realizar
 *   operaciones) para las cuentas y una secuencia de "---" para el alambre.
 * - El primer elemento del array representa los millones, y el último las unidades.
 * - El número en cada elemento se representa por las cuentas que están a
 *   la izquierda del alambre.
 *
 * Ejemplo de array y resultado:
 * ["O---OOOOOOOO",
 *  "OOO---OOOOOO",
 *  "---OOOOOOOOO",
 *  "OO---OOOOOOO",
 *  "OOOOOOO---OO",
 *  "OOOOOOOOO---",
 *  "---OOOOOOOOO"]
 *
 *  Resultado: 1.302.790
 */

function leerAbaco(abaco) {
    const numero = abaco.map(e => e.indexOf("---")).join("");
    
    let numeroFormateado = "";
    let contador = 0;
    
    for (let i = numero.length - 1; i >= 0; i--) {
        if (contador === 3) {
            numeroFormateado = "." + numeroFormateado;
            contador = 0;
        }
        numeroFormateado = numero[i] + numeroFormateado;
        contador++;
    }
    
    return numeroFormateado;
}

console.log(leerAbaco([
    "O---OOOOOOOO",
    "OOO---OOOOOO",
    "---OOOOOOOOO",
    "OO---OOOOOOO",
    "OOOOOOO---OO",
    "OOOOOOOOO---",
    "---OOOOOOOOO"
]));