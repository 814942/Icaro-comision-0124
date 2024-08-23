function curry(fn) {
  // Your code here:

  return function curryFn(...args) {
    if (args.length === fn.length) return fn(...args);
    return (...nextArgs) => curryFn(...args, ...nextArgs);
  };
}

function calcAllFour(var1, var2, var3, var4) {
  return var1 + var2 - var3 * var4;
}

const curriedDoSomething = curry(calcAllFour); //argumentos -> []
const firstReturn = curriedDoSomething(1); // argumentos -> [1]
const secondReturn = firstReturn(2); // argumentos -> [1, 2]
const thirdReturn = secondReturn(3); // argumentos -> [1, 2, 3]
const fourthReturn = thirdReturn(4);

/**
 * Mas clousures... shit!
 */

module.exports = curry;
