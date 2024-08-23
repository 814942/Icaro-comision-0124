function SolveGraph(graph, start, end) {
  // Your code here:
  //start = a / end = d / return true
  let queue = [start];
  let visitted = {};

  while (queue.length) {
    let init = queue.shift();
    if (!visitted[init] && init !== undefined) {
      visitted[init] = true;
      for (const vtx of graph[init]) {
        if (vtx === end) {
          return true;
        } else {
          queue.push(vtx);
        }
      }
    }
  }
  return false;
}

// Solucion recursiva
function SolveGraph(graph, start, end, cache = {}) {
  // a: true

  if (cache[start]) return false;
  cache[start] = true;

  // e: ["a", "d"]
  graph[start].forEach((ele) => {
    if (ele === end) {
      return true;
    } else if (SolveGraph(graph, ele[0], end, cache)) {
      return false;
    }
  });
  return true;
}

/**
 * Escribe una función que determine si existe un path entre dos vertices de un graph.
 * {
 *  a: ["b"]
 *  b: ["c"]
 *  c: ["a", "e"]
 *  f: []
 *  e: ["a","d"]
 * }
 * deberia comprobar si el start y el end estan "conectado"
 * si lo estan retorno true, sino false
 * deberia iterar.
 * deberia guardarme las keys {a: true, b: true, c: true}
 */

module.exports = SolveGraph;
