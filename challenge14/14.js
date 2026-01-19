/* ¡El GPS del trineo se ha vuelto loco! 😱 Papá Noel tiene los tramos de su viaje, pero están todos desordenados.

Tu misión es reconstruir la ruta completa desde el origen hasta el destino final.

Ten en cuenta: El primer elemento del array es siempre el primer tramo del viaje. A partir de ahí, debes ir conectando los destinos con los siguientes orígenes.

revealSantaRoute([
  ['MEX', 'CAN'],
  ['UK', 'GER'],
  ['CAN', 'UK']
])
// → ['MEX', 'CAN', 'UK', 'GER']

revealSantaRoute([
  ['USA', 'BRA'],
  ['JPN', 'PHL'],
  ['BRA', 'UAE'],
  ['UAE', 'JPN'],
  ['CMX', 'HKN']
])
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

revealSantaRoute([
  ['STA', 'HYD'],
  ['ESP', 'CHN']
])
// → ['STA', 'HYD']
🔎 A tener en cuenta:

No hay rutas duplicadas ni ciclos en el camino de Papá Noel.
Puede haber tramos que no pertenezcan a la ruta; estos deben ignorarse. /*

/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
  const rutaMap=new Map(routes); 
  let actual=routes[0][0];       
  const ruta=[actual];

  while (rutaMap.has(actual)) {
    actual=rutaMap.get(actual);
    ruta.push(actual);
  }
  return ruta;
}

// otra forma de hacerlo
function revealSantaRoute(routes) {
  const ruta = [...routes[0]];
  let encontrado = true;

  while (encontrado) {
    encontrado = false;
    const ultimaCiudad = ruta[ruta.length - 1];

    for (let i = 1; i < routes.length; i++) {
      if (routes[i][0] === ultimaCiudad) {
        ruta.push(routes[i][1]);
        routes.splice(i, 1);
        encontrado = true;
        break;
      }
    }
  }

  return ruta;
}