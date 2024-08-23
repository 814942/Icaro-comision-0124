const hasBalancedBrackets = (string) => {
  //  Tenemos un diccionario para chequear las opening brackets con sus closing brackets
  const validBrackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  // creamos un arreglo donde vamos a ir guardando los openBrackets
  const openBrackets = [];
  // iteramos sobre el string
  for (let i = 0; i < string.length; i += 1) {
    // si existe la propiedad significa que es un opening bracket entonces lo guardamos
    if (validBrackets[string[i]]) {
      openBrackets.push(string[i]);
    } else {
      let lasthChar = openBrackets.pop();
      if (validBrackets[lasthChar] !== string[i]) return false;
    }
  }
  // una vez que terminamos de recorrer
  // chequeamos que no haya quedado nada en el arreglo
  return !openBrackets.length;
};

module.exports = HasBalancedBrackets;
