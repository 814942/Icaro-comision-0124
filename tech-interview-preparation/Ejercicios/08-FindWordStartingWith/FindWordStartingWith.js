function FindWordStartingWith(book, query) {
  // Your code here:
}

function buildTrie(str) {
  let trie = {};

  for (let p = 0; p < array.length; p++) {
    let puntero = trie;
    let x = p;

    while (str[p] !== " " && str[p]) {
      puntero[str[p]] = puntero[str[p]] || { indx: [] };
      puntero[str[p]].indx.push(x);
      puntero = puntero[str[p]];
      p++;
    }
  }
  return trie;
}

module.exports = FindWordStartingWith;
