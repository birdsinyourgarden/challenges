/** Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color.
 * Haz una función que devuelva una lista con todas las ovejas que sean de color rojo
 * y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
 */

function filtrarOvejas(ovejas) {
    return ovejas.filter(oveja => {
        const nombre = oveja.nombre.toLowerCase();
        const color = oveja.color.toLowerCase();

        return color === 'roja' && nombre.includes('n') && nombre.includes('a');
    });
}

const listaOvejas = [{
    nombre: "Dolly",
    color: "blanca"
},
{
    nombre: "Sheep",
    color: "negra"
},
{
    nombre:"Satán",
    color: "roja"
},
{
    nombre: "Demoni",
    color: "roja"
}];

const ovejasFiltradas = filtrarOvejas(listaOvejas);
console.log(ovejasFiltradas);