/*
 * Crea un programa que calcule quien gana más partidas al piedra,
 * papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel)
 *   o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 */

function rockPaperScissors(games) {
    let player1Score = 0;
    let player2Score = 0;

    for (const [p1, p2] of games) {
        if (p1 === p2) continue;
        if (
            (p1 === "R" && p2 === "S") || 
            (p1 === "S" && p2 === "P") ||
            (p1 === "P" && p2 === "R")
        ) {
            player1Score++;
        } else {
            player2Score++;
        }
    }

    if (player1Score > player2Score) return "Player 1";
    if (player2Score > player1Score) return "Player 2";
    return "Tie";
}


const matches = [
    ["R","S"],
    ["S","R"],
    ["P","S"]
];
console.log(rockPaperScissors(matches));
