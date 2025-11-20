/*
 * Crea una función que simule las condiciones climáticas (temperatura y probabilidad de lluvia)
 * de un lugar ficticio al pasar un número concreto de días según estas reglas:
 * - La temperatura inicial y el % de probabilidad de lluvia lo define el usuario.
 * - Cada día que pasa:
 *   - 10% de posibilidades de que la temperatura aumente o disminuya 2 grados.
 *   - Si la temperatura supera los 25 grados, la probabilidad de lluvia al día
 *     siguiente aumenta en un 20%.
 *   - Si la temperatura baja de 5 grados, la probabilidad de lluvia al día
 *     siguiente disminuya en un 20%.
 *   - Si llueve (100%), la temperatura del día siguiente disminuye en 1 grado.
 * - La función recibe el número de días de la predicción y muestra la temperatura
 *   y si llueve durante todos esos días.
 * - También mostrará la temperatura máxima y mínima de ese periodo y cuántos días va a llover.
 */

// Valores de prueba: 

/* Temperatura inicial: 20°C
Probabilidad de lluvia inicial: 30%
Días a simular: 7 */

// Salida esperada: 
/* Día 1: Temp=20.0°C, Prob. Lluvia=30%, Llueve=No
Día 2: Temp=20.0°C, Prob. Lluvia=30%, Llueve=Sí
Día 3: Temp=19.0°C, Prob. Lluvia=30%, Llueve=No
Día 4: Temp=19.0°C, Prob. Lluvia=30%, Llueve=No
Día 5: Temp=19.0°C, Prob. Lluvia=30%, Llueve=Sí
Día 6: Temp=18.0°C, Prob. Lluvia=30%, Llueve=No
Día 7: Temp=18.0°C, Prob. Lluvia=30%, Llueve=No

Temperatura máxima: 20°C, mínima: 18°C
Días que va a llover: 2 */