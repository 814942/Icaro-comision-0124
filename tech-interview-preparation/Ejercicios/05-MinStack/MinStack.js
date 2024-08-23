//Node.prototype.
class Node {
  // Your code here:
  constructor(value) {
    (this.value = value), (this.puntero = null), (this.min = 0);
  }
}

class MinStack {
  // Your code here:
  constructor() {
    this.head = null;
  }

  agregar(val) {
    const newNode = new Node(val);
    // newNode --> value === val, puntero === null, min === 0
    if (!this.head) {
      this.head = newNode;
      this.head.min = val;
    } else {
      /*
      {9 -- 3 / 3} #
      {3 -- 2 / 3}
      {8 -- 1 / 7}
      {7 -- n / 7}
    */
      if (this.head.min > val) {
        newNode.min = val;
      } else {
        newNode.min = this.head.min;
      }

      newNode.puntero = this.head;
      this.head = newNode;
    }
    return "Nodo agregado";
  }

  desagregar() {
    if (this.head) {
      const refHead = this.head;
      this.head = refHead.puntero;
      return refHead;
    }
    return "No hay nada";
  }

  min() {
    return this.head.min;
  }
}

// 1 --> 2 --> 3 --> 4 --> push/ pop
// Deberia construir un node, deberia tener un constructor con value y un next
// value deberia tener un valor y el next en nulo
// Crear dentro de la clase minStack dos metodos: push & pop

module.exports = {
  Node,
  MinStack,
};
