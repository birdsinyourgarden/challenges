/*En el taller de Santa, los elfos tienen una lista de regalos que desean 
fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son 
caracteres. Tu tarea es escribir una función que, dada una lista de regalos 
y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // [] */

const gifts = ['tren', 'oso', 'pelota'];
const materials = 'tronesa';

function manufacture(gifts, materials) {
    let craftable = [];
    gifts.forEach((gift) => {
        let count = 0;
        for (let i = 0; i < gift.length; i++) {
            if (materials.includes(gift.at(i))) {
                count++;
            }
        }
        if (gift.length === count) {
            craftable.push(gift);
        }
    });
    console.log(craftable);
}

manufacture(gifts, materials);


// otra forma de hacerlo

const manufacture = (gifts, materials) => {
    const manufacturable =  gifts.filter(g => {
        for (const letter in g) {
            if (!materials.includes(g[letter])) {
                return false;
            }
        }
        return true;
    });
    console.log(manufacturable);
}

// otra forma de hacerlo

function manufacture(gifts, materials) {
    const giftsAble= [];
    gifts.forEach(gift => {
        let condition = true;
        for (let i = 0; i < gift.length; i++) {
            if(!materials.includes(gift[i])){
                condition = false;
                break;
            }
        }
        if(condition){
            giftsAble.push(gift);
        }
    });

    return giftsAble;
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
console.log(manufacture(gifts, materials));









