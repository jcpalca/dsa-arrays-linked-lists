/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) this.head = newNode;

    if (this.tail !== null) this.tail.next = newNode;

    this.tail = newNode;

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) {
      return undefined;
    }
    else {
      let current = this.head;

      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return current.val;
      }

      while (current !== null) {
        const lastNode = this.tail;

        if (current.next === lastNode) {
          current.next = null;
          this.tail = current;
          this.length--;
          return lastNode.val;
        }

        current = current.next;
      }
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) {
      return undefined;
    }
    else {
      const firstNode = this.head;

      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return firstNode.val;
      }

      this.head = this.head.next;

      this.length--;
      return firstNode.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (idx === count) {
        return current.val;
      } else {
        count++;
        current = current.next;
      }
    }
    throw new Error();
  }
  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (count === idx) {
        current.val = val;
        return current.val;
      } else {
        count++;
        current = current.next;
      }
    }
    throw new Error();
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    let current = this.head;
    let count = 0;
    let oldNext
    // let newNodeNext
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++
      return;
    }
    while (current !== null) {
      if(idx === this.length){
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return
      }
      if (count === idx - 1) {
        // 5 , 15
        // idx 1 we want val 10
        // newNodeNext = current.next
        oldNext = current.next
        current.next = newNode;
        newNode.next = oldNext;
        this.length++;
        return;
      }
      count++;
      current = current.next;
    }
    throw new Error();
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx<0 || idx===this.length){
      throw new Error()
    }
    let current = this.head;
    let count = 0;
    let removedItem
    if(this.length===1){
      this.head = null
      this.tail = null
      this.length--
      return current
    }
    while(current !==null){
      if(idx === 0){
        removedItem = current
        this.head = current.next
        this.length --
        return removedItem.val
      }
      if(count===idx-1){
        removedItem = current.next.val
        current.next=current.next.next
        this.length--;
        return removedItem
      }
      count++
      current=current.next
    }
    throw new Error()
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0
    let current = this.head;
    let sumCounter = 0;
    while(current !==null){
      sumCounter+=current.val
      current= current.next
    }
  return sumCounter / this.length
  }
}

module.exports = LinkedList;
