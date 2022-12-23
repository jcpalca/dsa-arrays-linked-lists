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
    this.length++;
  }


  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): remove last item & return its value */

  pop() {
    if (!this.head) {
      return null;
    } else {
      let removed = this.tail;
      if (this.tail.prev) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        this.head = null;
        this.tail = null;
      }
      removed.prev = null;
      this.length--;
      return removed.val;
    }
  }

  /** shift(): remove first item & return its value */

  shift() {
    if (!this.head) {
      return null;
    } else {
      let removed = this.head;
      if (this.head.next) {
        this.head = this.head.next;
        this.head.prev = null;
      } else {
        this.head = null;
        this.tail = null;
      }
      removed.next = null;
      this.length--;
      return removed.val;
    }
  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of range");
    }
    let current;
    let midPoint = Math.floor(this.length / 2);
    if (idx <= midPoint) {
      current = this.head;
      let start = 0;
      while (idx > start) {
        current = current.next;
        start++;
      }
    }
    if (idx >= midPoint) {
      current = this.tail;
      let start = this.length - 1;
      while (idx < start) {
        current = current.prev;
        start--;
      }
    }
    return current.val;
  }


  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of range");
    }
    let current;
    let midPoint = Math.floor(this.length / 2);
    if (idx <= midPoint) {
      current = this.head;
      let start = 0;
      while (idx > start) {
        current = current.next;
        start++;
      }
    }
    if (idx >= midPoint) {
      current = this.tail;
      let start = this.length - 1;
      while (idx < start) {
        current = current.prev;
        start--;
      }
    }
    current.val = val;
    return current.val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index is out of range!");
    }

    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    if (idx === 0) {
      // insert at the beginning of the list
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (idx === this.length) {
      // insert at the end of the list
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      // insert in the middle of the list
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      newNode.prev = current;
      current.next.prev = newNode;
      current.next = newNode;
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of range!");
    }

    if (this.length === 0) {
      return null;
    }

    let removedVal;
    if (idx === 0) {
      // remove the head node
      removedVal = this.head.val;
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (idx === this.length - 1) {
      // remove the tail node
      removedVal = this.tail.val;
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      // remove a node from the middle of the list
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      removedVal = current.val;
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }

    this.length--;
    return removedVal;
  }

}

module.exports = DoublyLinkedList;
