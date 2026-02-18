/*
 * Crea un función, que dado un año, indique el elemento 
 * y animal correspondiente en el ciclo sexagenario del zodíaco chino.
 * - Info: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos
 *   madera, fuego, tierra, metal, agua y los animales rata, buey, tigre,
 *   conejo, dragón, serpiente, caballo, oveja, mono, gallo, perro, cerdo
 *   (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 */

function chineseZodiac(year) {
    const elements = ["wood", "fire", "earth", "metal", "water"];
    const animals = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
    const baseYear = 1984;
    let diff = year - baseYear;
    if (diff < 0) {
        diff = (60 + (diff % 60)) % 60;
    } else {
        diff = diff % 60;
    }

    const elementIndex = Math.floor(diff / 2) % 5;

    const animalIndex = diff % 12;

    return `${elements[elementIndex]} ${animals[animalIndex]}`;
}

console.log(chineseZodiac(1960));
console.log(chineseZodiac(2004));
console.log(chineseZodiac(2026));