function MaxValue(shares) {
  // Your code here:
  // O(N)
  // deberia iterar a travez del array shares
  // deberia restar cada indice siguiente menos el actual --> 1 - 0 / 2 - 0 / ...
  // pushear esa restar a un nuevo array --> [1,2,3,5,8]
  // deberia hacer una segunda iteracion
  // encontrar el numero mayor y retornarlo
  let max = 0;
  let min = shares[0];
  let memo = 0;

  for (let i = 1; i < shares.length; i++) {
    // [ 20, 4, 3, 2, 5, 11]
    //min = shares[i]
    if (shares[i] < min) {
      memo = i;
      min = shares[i];
    }
  }

  for (let i = memo + 1; i < shares.length; i++) {
    if (shares[i] > max) max = shares[i];
  }

  return max - min;
}

/**
 * Se nos presenta un arreglo de enteros, estos representan el valor de una
 * acción con el pasar del tiempo. ¿El objetivo del ejercicio? Encontrar cuál
 * es la máxima ganancia posible de comprar a un horario y vender a otro
 * después.
 */

/**
 * entero, desordenados, repetidos, no negativo, retornar un numero entero o cero
 * [ 4, 3, 2, 5, 11] --> 9
 * [ -1, -2 , 1, 7, ] + [ -1 , 2 , 8] + [ 3 , 9] + [ 6]
 * [ -1, -2, 1, 7, -1, 2, 8, 3, 9, 6]
 */

module.exports = MaxValue;
