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
    if(!this.head) throw new Error("List is empty")
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of range!");
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current;
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
      this.tail = this.head;
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
      console.log(removed.val)
      return removed.val;
    }
  }

  /** getAt(idx): get val at idx.*/

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of range");
    }
    return this._get(idx).val;
  }


  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of range");
    }
    const newNode = this._get(idx)
    newNode.val = val
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error("Index is out of range!");
    }

    if (idx === 0) {
      // insert at the beginning of the list
      this.unshift(val);
    } else if (idx === this.length) {
      // insert at the end of the list
      this.push(val);
    } else {
      // insert in the middle of the list
      // 1 2 4 5, 2
      //
      const newNode = new Node(val); // 3
      const prev = this._get(idx - 1); // 2
      newNode.next = prev.next; // 3 val 4 next
      prev.next.prev = newNode; // 4 val 3 prev
      prev.next = newNode; // 2 val 3 next
      newNode.prev = prev; // 3 val 2 prev
      this.length++;
    }
  }


  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error("Index is out of range!");
    }
    if (idx === 0) {
      // remove at the beginning of the list
      return this.shift();
    } else if (idx === this.length-1) {
      // remove at the end of the list
      return this.pop();
    } else {
      // insert in the middle of the list
      // 1 2 (3) 4 5, 2
      //
      const temp = this._get(idx);
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      this.length -= 1;
      return temp.val;
    }

  }

}

module.exports = DoublyLinkedList;
