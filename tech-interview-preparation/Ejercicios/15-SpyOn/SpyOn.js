function spyOn(fn) {
  // Your code here:
  var count = 0;
  var cache = {
    result: {},
    argumt: {},
  };

  const spy = (...args) => {
    const valueReturned = fn(...args);

    for (const a of args) {
      cache[a] = true;
    }

    result[valueReturned] = true;

    count++;
    return valueReturned;
  };

  spy.getCallCount = () => {
    // Devuelve la cantidad de veces que el spy fue llamado
    return count;
  };

  spy.wasCalledWith = (val) => {
    // Devuelve true si la función fue alguna vez llamada con ese valor, else false
    return cache.argumt.hasOwnProperty(val);
  };

  spy.returned = (val) => {
    // Devuelve true si alguna vez devolvió ese valor.
    return cache.result.hasOwnProperty(val);
  };

  return spy;
}

/**
 * function adder(n1, n2) { return n1 + n2; }
 * spy(adder)
 * c=0
 *
 * function getCallCount(){
 * r c++
 * }
 *
 * function wasCalledWith(val){}
 *
 * function returned(val) {}
 *
 * return (...args) => {
 *  return fn(...args)
 *  }
 */

module.exports = spyOn;
