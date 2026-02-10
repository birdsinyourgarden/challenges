/*
 * Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección
 * del producto.
 * - El programa retornará el nombre del producto y un array con el dinero
 *   de vuelta (con el menor número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe,
 *   deberá indicarse con un mensaje y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas
 *   de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 */


function vendingMachine(coinsArray, selection) {
    const products = [
        { name: "water", price: 100 },
        { name: "cocacola", price: 150 },
        { name: "chips", price: 120 },
    ];

    const validCoins = [5, 10, 50, 100, 200];

    for (let coin of coinsArray) {
        if (!validCoins.includes(coin)) {
            return { message: "Invalid coin, returning all money", change: coinsArray };
        }
    }

    const product = products[selection];
    if (!product) {
        return { message: "Product does not exist, returning all money", change: coinsArray };
    }

    const totalMoney = coinsArray.reduce((acc, val) => acc + val, 0);

    if (totalMoney < product.price) {
        return { mesage: "Not enough mony, returning all money", change: coinsArray };
    }

    let remainingChange = totalMoney - product.price;
    const change = [];
    const sortedCoins = [...validCoins].sort((a, b) => b - a);

    for (let coin of sortedCoins) {
        while (remainingChange >= coin) {
            change.push(coin);
            remainingChange -= coin;
        }
    }

    return { product: product.name, change }
}

console.log(vendingMachine([200, 50, 10], 2));
