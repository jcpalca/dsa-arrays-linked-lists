/** Node: node for a doubly linked list. */

class Node {
  val = null;
  next = null;
  prev = null;
  constructor(val) {
    this.val = val;
  }
}

class DoublyLinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** get(idx) returns a node at the given index */

  _get(idx) {
    let count = 0;
    while (this.head) {
      if (count === idx) return this.head;
      count++;
      this.head = this.head.next;
    }
    throw new Error("Out of range");
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
  }


  /** unshift(val): add new value to start of list. */

  unshift(val) {

  }

  /** pop(): remove last item & return its value */

  pop() {

  }

  /** shift(): remove first item & return its value */

  shift() {

  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** return average (mean) of list values. */

  average() {

  }
}

module.exports = DoublyLinkedList;
