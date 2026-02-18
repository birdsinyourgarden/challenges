/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function areAnagrams(word1, word2) {
    const w1 = word1.toLowerCase().replace(/\s/g, '');
    const w2 = word2.toLowerCase().replace(/\s/g, '');

    if (w1 === w2) return false;

    if (w1.length !== w2.length) return false;

    const sortString = str => str.split('').sort().join('');

    return sortString(w1) === sortString(w2);
}

console.log(areAnagrams("roma", "amor"));
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("house", "cat"));