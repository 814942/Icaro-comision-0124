// Encontrar el indice de la primera aparición de un string (needle) dentro de otro (haystack).

// Es decir, el objetivo del ejercicio es determinar si el primer string,
// needle, esta dentro del segundo, haystack, y en dicho caso, devolver el indice
// en el que esto ocurre.

// Itero a travez de hasystack
// Necesito 3 var
// Necesito iterear mientras haystack la longitud sea menor a la var search
// Comparar si el indice actual de haystack es igual al primer indice de neddle
// y ademas si la longitud de neddle es menor a la ver count
// si es true > incrementar mi var count, var search y guardar en el cache el indice supuesto
// deberia comprobar que el cache este vacio
// si no no lo es reiniciar count y cache
// Si no encuentra match return - 1

function FindNeedle(haystack, needle) {
  // Your code here:
  let cache;
  let x = 0;
  let p = 0;

  while (haystack.length > x) {
    if (haystack[x] === needle[p]) {
      if (cache === undefined) cache = x;

      p++;
    } else {
      // reiniciamos las varables
      p = 0;
      cache = undefined;
    }
    if (needle.length <= p) return cache;
    x++;
  }
  return -1;
}

findeTheNeddle("avion", "aver un pajaro, no es un avion");

module.exports = FindNeedle;
