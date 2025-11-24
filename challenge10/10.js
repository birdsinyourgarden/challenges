/*
 * Crea una función que imprima los 30 próximos años bisiestos
 * siguientes a 2025.
 */

// Salida esperada: 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 
// 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096, 2104, 2108, 
// 2112, 2116, 2120, 2124, 2128, 2132, 2136, 2140, 2144, 2148

function imprimirAniosBisiestos() {
    let contador = 0;
    let anio = 2026; 
    let resultado = [];
    
    while (contador < 30) {
        if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
            resultado.push(anio);
            contador++;
        }
        anio++;
    }
    
    console.log(resultado.join(', '));
}

imprimirAniosBisiestos();