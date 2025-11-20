/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

// Ejemplos de uso:

// Triángulo con base 5 y altura 3
calcularArea({ tipo: "triangulo", base: 5, altura: 3 });  // Imprime: Área del triangulo: 7.5

// Cuadrado con lado 4
calcularArea({ tipo: "cuadrado", lado: 4 });              // Imprime: Área del cuadrado: 16

// Rectángulo con base 6 y altura 2
calcularArea({ tipo: "rectangulo", base: 6, altura: 2 }); // Imprime: Área del rectangulo: 12