/*
 * Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra
 * que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */

function abs(n) {
    return n < 0 ? -n : n;
}

function mcd(a, b) {
    a = abs(a);
    b = abs(b);

    if (a === 0) return b;
    if (b === 0) return a;

    while (a !== b) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a
        }
    }
    return a;
}

function mcm(a, b) {
    a = abs(a);
    b = abs(b);

    if (a === 0 || b === 0) return 0;

    let multiplication = a * b;

    return multiplication / mcd(a, b);
}

console.log(mcd(12, 18));
console.log(mcm(12, 18));