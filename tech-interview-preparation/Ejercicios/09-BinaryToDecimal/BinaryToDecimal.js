function BinaryToDecimal(binary, base) {
  // Your code here: O(N)
  let total = 0;
  for (let p = binary.length - 1; p >= 0; p--) {
    const num = hexaNumber(binary[p]);

    total += num * Math.pow(base, binary.length - 1 - p);
  }

  return total;
}

function hexaNumber(n) {
  const dicc = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  return dicc[n] ? dicc[n] : n;
}

/**
 * Deberia iterar a travez del string
 * Parsear el string.
 */

// primero:
// funcion pasar binario a BinaryToDecimal

// "101" = 101

// teoria fundamental de la numeracion
// da valor a los numeros segun su posicion
// sistema decimal: Base = 10 --> 0 1 2 3 4 5 6..9
// 210
// 211 = 200 + 10 + 1 =
//        2 * 10^2   +  1*10^1   + 1*10^0    =

//sistema Hexadecimal = Base = 16= 0..9  a  b  c  d  e  f
//                                      10 11 12 13 14 15

//sistema Binario: Base = 2
// 001  = 1*2^2  + 0*2^1  + N*2^I =
// 012
// 210

// dos:
// agregarle la base  a la funcin para que funcione con todas las bases

// Tres:
// para el hexadecimal, agregar un diccionario con los simbolos
// podemos hacer una funcion para que reconozca que simbolo se le esta pasando

module.exports = BinaryToDecimal;
