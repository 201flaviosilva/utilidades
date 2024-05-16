function W(e) {
  return e.every((t) => JSON.stringify(t) === JSON.stringify(e[0]));
}
function X(e = 0, t = 1, n = 2) {
  return t === void 0 && (t = e, e = 0), parseFloat((Math.random() * (t - e) + e).toFixed(n));
}
function o(e, t) {
  return t === void 0 && (t = e, e = 0), Math.round(e + Math.random() * (t - e));
}
function be(e, t) {
  return X(e, t);
}
function z(e) {
  return e[o(e.length)];
}
function H(e, t = 1) {
  const n = [];
  for (let i = 0; i < e.length; i += t)
    n.push(e.slice(i, i + t));
  return n;
}
function Q(e, t, n = !1) {
  const i = Math.max(...e.map((s) => s[t]));
  return n ? i : e.find((s) => s[t] === i);
}
function K(e, t, n = !1) {
  const i = Math.min(...e.map((s) => s[t]));
  return n ? i : e.find((s) => s[t] === i);
}
function U(e = []) {
  for (let t = 0; t < e.length - 1; t++)
    if (e[t] > e[t + 1])
      return !1;
  return !0;
}
function V(e = [], t = 1) {
  for (let n = 0; n < t; n++) {
    let i = e[e.length - 1];
    for (let s = e.length - 2; s >= 0; s--) {
      const r = e[s];
      e[s] = i, i = r;
    }
    e[e.length - 1] = i;
  }
  return e;
}
function Z(e = [], t = 1) {
  for (let n = 0; n < t; n++) {
    let i = e[0];
    for (let s = 1; s < e.length; s++) {
      const r = e[s];
      e[s] = i, i = r;
    }
    e[0] = i;
  }
  return e;
}
function tt(e, t) {
  const n = /* @__PURE__ */ new Set();
  return e.filter((i) => {
    const s = i[t];
    return n.has(s) ? !1 : (n.add(s), !0);
  });
}
function et(e) {
  return JSON.parse(JSON.stringify(e));
}
function nt(e, t = !0) {
  if (t)
    return e.sort(() => Math.random() - 0.5);
  const n = et(e), i = [];
  for (; n.length; ) {
    const s = o(n.length);
    i.push(n[s]), n.splice(s, 1);
  }
  return i;
}
function S(e, t = !1) {
  return t ? e.sort((n, i) => n - i) : [...e].sort((n, i) => n - i);
}
function it(e, t, n = !1) {
  return n ? e.sort((i, s) => i[t] - s[t]) : [...e].sort((i, s) => i[t] - s[t]);
}
function st(e, t = !1) {
  return t ? e.sort((n, i) => i - n) : [...e].sort((n, i) => i - n);
}
function rt(e, t, n = !1) {
  return n ? e.sort((i, s) => s[t] - i[t]) : [...e].sort((i, s) => s[t] - i[t]);
}
const Me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  allEqual: W,
  choice: z,
  chunk: H,
  findBigObject: Q,
  findLowObject: K,
  isSorted: U,
  moveLeft: V,
  moveRight: Z,
  removeDuplicatesObj: tt,
  shuffle: nt,
  sortAscending: S,
  sortAscendingObject: it,
  sortDescending: st,
  sortDescendingObject: rt
}, Symbol.toStringTag, { value: "Module" }));
function y(e) {
  return typeof e == "number" && !isNaN(e);
}
let D = class {
  constructor(t) {
    if (t === void 0)
      throw new Error("Node value cannot be undefined.");
    if (!y(t))
      throw new Error("Node value must be a number.");
    this.value = t, this.left = null, this.right = null;
  }
};
class O {
  constructor(t) {
    this.root = null, this.count = 0, Array.isArray(t) ? t.forEach((n) => this.add(n)) : t !== void 0 && this.add(t);
  }
  /**
   * Add a new value to the Tree
   * 
   * @example 
   * const bst = new BinarySearchTree();
   * bst.add(1);
   * bst.add(100);
   * 
   * @param {number} value - a number to add
   */
  add(t) {
    if (!y(t))
      throw new Error("Node value must be a number.");
    const n = new D(t);
    return this.root === null ? this.root = n : this._insertNode(this.root, n), this.count++, this;
  }
  /**
   * Finds the smallest value in the tree.
   *
   * - If a value is passed it will look for the smallest value from that branch;
   * - If no value is passed, it will start from the root;
   * 
   * @param {number|undefined} [value] - the value to start searching
   * @returns {number|undefined|null} smaller value
   */
  smaller(t) {
    if (!this.root)
      return;
    let n = this.search(t ?? this.root.value);
    if (!n)
      return null;
    do {
      if (n.left === null)
        return n.value;
      n = n.left;
    } while (n);
  }
  /**
   * Finds the largest value in the tree.
   *
   * - If a value is passed it will look for the largest value from that branch;
   * - If no value is passed, it will start from the root;
   * 
   * @param {number} value - the value to start searching
   * @returns {number|undefined|null} largest value
   */
  larger(t) {
    if (!this.root)
      return;
    let n = this.search(t ?? this.root.value);
    if (!n)
      return null;
    do {
      if (n.right === null)
        return n.value;
      n = n.right;
    } while (n);
  }
  /**
   * - Returns `false` if the number does not exist or if there is an error
   * - If the number exists, return its node/true
   * 
   * @param {number} value - the value to find
   * @param {boolean} [returnNode=true] - if the node should be returned
   * @returns {BSTNode|null} if the value is in the Tree
   */
  search(t, n = !0) {
    if (!this.root)
      return;
    if (!y(t))
      throw new Error("Value need to be a number!");
    let i = this.root;
    for (; i; ) {
      if (t === i.value)
        return n ? i : !0;
      i.value > t ? i = i.left : i = i.right;
    }
    return null;
  }
  /**
   * Delete the node with the given value
   * 
   * @param {number} value - the value to delete
   * @param {boolean} [returnNode=false] - if the node should be returned
   * @returns {BSTNode|BinarySearchTree} if the value is in the Tree
   */
  delete(t, n = !1) {
    const i = this.search(t);
    if (!i)
      return n ? i : this;
    const s = this._findParent(i);
    if (i.left === null && i.right === null)
      s ? s.left === i ? s.left = null : s.right = null : this.root = null;
    else if (i.left === null || i.right === null)
      s ? s.left === i ? s.left = i.left || i.right : s.right = i.left || i.right : this.root = i.left || i.right;
    else {
      const r = this.smaller(i.value);
      return this.delete(r), s.left === i ? s.left.value = r : s.right.value = r, n ? i : this;
    }
    return this.count--, n ? i : this;
  }
  /**
   * Returns a string representation of the tree
   * 
   * @returns {string} the string representation
   */
  toString() {
    return JSON.stringify(this, null, 2);
  }
  /**
   * Inserts a new node into the tree
   * 
   * Note 1: This is a recursive function
   * Note 2: This function is used in the add method
   * 
   * @param {BSTNode} node - the node to insert
   * @param {BSTNode} newNode - the new node
   * 
   * @private
   */
  _insertNode(t, n) {
    return n.value === t.value ? this : (n.value < t.value ? t.left === null ? t.left = n : this._insertNode(t.left, n) : t.right === null ? t.right = n : this._insertNode(t.right, n), this);
  }
  /**
   * This function finds the parent of the given node
   * 
   * @param {BSTNode} node - the node to find the parent
   * @returns {BSTNode|null} the parent of the given node
   * 
   * @private
   */
  _findParent({ value: t }) {
    let n = this.root;
    for (; n; )
      if (t > n.value) {
        if (n.right.value === t)
          return n;
        n = n.right;
      } else if (t < n.value) {
        if (n.left.value === t)
          return n;
        n = n.left;
      } else
        return null;
    return null;
  }
}
const ut = new O();
let d = class {
  constructor(t) {
    this.value = t, this.next = null, this.prev = null;
  }
};
class lt {
  constructor(t) {
    this.head = null, this.tail = null, this.size = 0, Array.isArray(t) ? t.forEach((n) => this.push(n)) : t !== void 0 && this.push(t);
  }
  /**
   * Prints the values of the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.print(); // 10,20,30
   * 
   * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
   */
  print() {
    let t = this.head;
    for (; t !== null; )
      console.log(t.value), t = t.next;
    return this;
  }
  /**
   * Clears the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.clear();
   * dll.toArray(); // []
   * 
   * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
   */
  clear() {
    return this.head = null, this.tail = null, this.size = 0, this;
  }
  /**
   * Retrieves the value at the specified index in the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.get(1); // 20
   * 
   * @param {Number} index - The index of the value to retrieve.
   * @param {Boolean} returnNode - Whether to return the Node or the value.
   * @returns {Number|DLLNode} The value at the specified index, or the Node if returnNode is true.
   */
  get(t, n = !1) {
    if (t < 0 || t >= this.size)
      return;
    let i = this.head;
    if (t < this.size / 2)
      for (let s = 0; s < t; s++)
        i = i.next;
    else {
      i = this.tail;
      for (let s = this.size - 1; s > t; s--)
        i = i.prev;
    }
    return n ? i : i.value;
  }
  /**
   * Sets the value at the specified index in the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.set(1, 0); // 0
   * 
   * @param {Number} index - The index of the value to set.
   * @param {Number} value - The new value to set.
   * @returns {Boolean} True if the value was set successfully, false otherwise.
   */
  set(t, n) {
    const i = this.get(t, !0);
    return i ? (i.value = n, !0) : !1;
  }
  /**
   * Adds a new value to the beginning of the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.unshift(0); // 0,10,20,30
   * 
   * @param {Number} value - The value to add.
   * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
   */
  unshift(t) {
    if (!this.head)
      return this.push(t);
    const n = new d(t);
    return n.next = this.head, this.head.prev = n, this.head = n, this.size++, this;
  }
  /**
   * Adds a new value to the end of the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.push(40); // 10,20,30,40
   * 
   * @param {Number} value - The value to add.
   * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
   */
  push(t) {
    const n = new d(t);
    return this.head ? (this.tail.next = n, n.prev = this.tail, this.tail = n) : (this.head = n, this.tail = n), this.size++, this;
  }
  /**
   * Inserts a new value at the specified index in the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.insert(1, 0); // 0,10,20,30
   * 
   * @param {Number} index - The index to insert the value at.
   * @param {Number} value - The value to insert.
   * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
   */
  insert(t, n) {
    if (t === 0)
      return this.unshift(n);
    if (t === this.size)
      return this.push(n);
    if (t < 0 || t > this.size)
      return !1;
    const i = new d(n), s = this.get(t - 1, !0);
    return i.prev = s, i.next = s.next, s.next.prev = i, s.next = i, this.size++, this;
  }
  /**
   * Removes the value at the start of the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.shift(); // 20,30
   * 
   * @returns {Number} The value that was removed.
   */
  shift() {
    if (this.size === 0)
      return;
    const t = this.head;
    return this.size > 1 ? (this.head = this.head.next, this.head.prev = null, t.next = null, this.size--) : this.clear(), t.value;
  }
  /**
   * Removes the value from the end of the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.pop(); // 10,20
   * 
   * @returns {Number} The value that was removed.
   */
  pop() {
    if (this.size === 0)
      return;
    const t = this.tail;
    return this.size > 1 ? (this.tail = this.tail.prev, this.tail.next = null, t.prev = null, this.size--) : this.clear(), t.value;
  }
  /**
   * Removes the value at the given index of the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.remove(1); // 10,30
   * 
   * @param {Number} index - The index of the value to remove.
   * @returns {Number} The value that was removed.
   */
  remove(t) {
    if (t < 0 || t >= this.size)
      return !1;
    if (t === 0)
      return this.shift();
    if (t === this.size - 1)
      return this.pop();
    const n = this.get(t, !0), i = n.prev, s = n.next;
    return i.next = s, s.prev = i, n.prev = null, n.next = null, this.size--, n.value;
  }
  /**
   * Reverses the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.reverse(); // 30,20,10
   * 
   * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
   */
  reverse() {
    if (this.head === null || this.head === this.tail)
      return this;
    let t = this.head;
    this.head = this.tail, this.tail = t;
    let n = null, i = null;
    for (let s = 0; s < this.size; s++)
      i = t.next, t.next = n, n = t, t = i;
    return this;
  }
  /**
   * Sorts the linked list in ascending order.
   * 
   * @example
   * const dll = new DoublyLinkedList([50,20,40,10,30]);
   * dll.sort(); // 10,20,30,40,50
   * 
   * @returns {DoublyLinkedList} The current DoublyLinkedList instance.
   */
  sort() {
    const t = this.toArray();
    return t.sort((n, i) => n - i), this.clear(), t.forEach((n) => this.push(n)), this;
  }
  /**
   * Returns an array representation of the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.toArray(); // [10,20,30]
   * 
   * @returns {Array} The array representation of the linked list.
   */
  toArray() {
    const t = [];
    let n = this.head;
    for (; n !== null; )
      t.push(n.value), n = n.next;
    return t;
  }
}
let g = class {
  constructor(t) {
    this.value = t, this.next = null;
  }
};
class ht {
  constructor(t) {
    this.head = null, this.tail = null, this.size = 0, Array.isArray(t) ? t.forEach((n) => this.push(n)) : t !== void 0 && this.push(t);
  }
  /**
   * Prints the values of the linked list.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push("Apple");
   * ll.push("Banana");
   * ll.push("Cherry");
   * 
   * ll.print(); // Apple, Banana, Cherry
   * 
   * @returns {LinkedList} The current LinkedList instance.
   */
  print() {
    let t = this.head;
    for (; t !== null; )
      console.log(t.value), t = t.next;
    return this;
  }
  /**
   * Clears the linked list, removing all elements.
   * 
   * @returns {LinkedList} The current LinkedList instance.
   */
  clear() {
    return this.head = null, this.tail = null, this.size = 0, this;
  }
  /**
   * Retrieves the value at the specified index in the linked list.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push(10);
   * ll.push(20);
   * ll.push(30);
   * 
   * ll.get(1); // 10
   * 
   * @param {number} index - The index of the value to retrieve.
   * @param {boolean} [returnNode=false] - Specifies whether to return the Node instead of the value.
   * @returns {*} The value at the specified index, or undefined if index is out of bounds.
   */
  get(t, n = !1) {
    if (t < 0 || t >= this.size)
      return;
    let i = this.head;
    for (let s = 0; s < t; s++)
      i = i.next;
    return n ? i : i.value;
  }
  /**
   * Sets the value at the specified index in the linked list.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push(10);
   * ll.push(20);
   * ll.push(30);
   * 
   * ll.set(1, 0); // 0
   * 
   * @param {number} index - The index of the value to set.
   * @param {*} value - The new value to set.
   * @returns {boolean} True if the value was set successfully, false otherwise.
   */
  set(t, n) {
    const i = this.get(t, !0);
    return i ? (i.value = n, !0) : !1;
  }
  /**
   * Adds a new value at the start of the linked list.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push(10);
   * ll.push(20);
   * ll.push(30);
   * 
   * ll.unshift(0); // 0,10,20,30
   * 
   * 
   * @param {*} value - The value to add.
   * @returns {LinkedList} The current LinkedList instance.
   */
  unshift(t) {
    const n = new g(t);
    return n.next = this.head, this.head = n, this.tail || (this.tail = n), this.size++, this;
  }
  /**
   * Adds a new value at the end of the linked list.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push(10); // 10
   * ll.push(20); // 10,20
   * ll.push(30); // 10,20,30
   * 
   * @param {*} value - The value to add.
   * @returns {LinkedList} The current LinkedList instance.
   */
  push(t) {
    const n = new g(t);
    return this.head ? (this.tail.next = n, this.tail = n) : (this.head = n, this.tail = n), this.size++, this;
  }
  /**
   * Adds a new value at the given index of the linked list.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push(10);
   * ll.push(20);
   * ll.push(30);
   * 
   * ll.insert(1,55); // 10,55,20,30
   * 
   * @param {number} index - The index at which to add the value.
   * @param {*} value - The value to add.
   * @returns {boolean} True if the value was added successfully, false otherwise.
   */
  insert(t, n) {
    if (t === 0)
      return this.unshift(n);
    if (t === this.size)
      return this.push(n);
    if (t < 0 || t > this.size)
      return !1;
    const i = new g(n), s = this.get(t - 1, !0);
    return i.next = s.next, s.next = i, this.size++, this;
  }
  /**
   * Removes the value at the start of the linked list.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push(10);
   * ll.push(20);
   * ll.push(30);
   * 
   * ll.shift(); // 20,30
   * 
   * @returns {*} The removed value, or undefined if the list is empty.
   */
  shift() {
    if (!this.size)
      return;
    const t = this.head.value;
    return this.head = this.head.next, this.size--, this.size === 0 && this.clear(), t;
  }
  /**
   * Removes the value from the end of the linked list.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push(10);
   * ll.push(20);
   * ll.push(30);
   * 
   * ll.pop(); // 10,20
   * 
   * @returns {*} The removed value, or undefined if the list is empty.
   */
  pop() {
    if (this.size === 0)
      return;
    let t = this.head, n = this.head;
    for (; n.next !== null; )
      t = n, n = n.next;
    return this.tail = t, this.tail.next = null, this.size--, this.size === 0 && this.clear(), n.value;
  }
  /**
   * Removes the value at the given index of the linked list.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push(10);
   * ll.push(20);
   * ll.push(30);
   * 
   * ll.shift(1); // 10,30
   * 
   * @param {number} index - The index at which to remove the value.
   * @returns {*} The removed value, or undefined if the index is out of bounds.
   */
  remove(t) {
    if (t === 0)
      return this.shift();
    if (t === this.size)
      return this.pop();
    if (t < 0 || t > this.size)
      return;
    const n = this.get(t - 1, !0), i = n.next;
    return n.next = i.next, i.next = null, this.size--, i.value;
  }
  /**
   * Reverses the order of the linked list.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push(10);
   * ll.push(20);
   * ll.push(30);
   * 
   * ll.reverse(); // 30,20,10
   * 
   * @returns {LinkedList} The current LinkedList instance.
   */
  reverse() {
    let t = this.head;
    this.head = this.tail, this.tail = t;
    let n = null, i = null;
    for (let s = 0; s < this.size; s++)
      i = t.next, t.next = n, n = t, t = i;
    return this;
  }
  /**
   * Sorts the linked list in ascending order.
   * 
   * @example
   * const ll = new LinkedList([50,20,40,10,30]);
   * ll.sort(); // 10,20,30,40,50
   * 
   * @returns {LinkedList} The current LinkedList instance.
   */
  sort() {
    const t = this.toArray();
    return t.sort((n, i) => n - i), this.clear(), t.forEach((n) => this.push(n)), this;
  }
  /**
   * Converts the linked list to an array.
   * 
   * @example
   * const ll = new LinkedList();
   * ll.push(10);
   * ll.push(20);
   * ll.push(30);
   * 
   * ll.toArray(); // [10,20,30]
   * 
   * @returns {Array} An array containing the values of the linked list.
   */
  toArray() {
    const t = [];
    let n = this.head;
    for (; n !== null; )
      t.push(n.value), n = n.next;
    return t;
  }
}
let A = class {
  constructor(t) {
    this.value = t, this.next = null;
  }
};
class ot {
  constructor(t) {
    this.first = null, this.last = null, this.size = 0, Array.isArray(t) ? t.forEach((n) => this.enqueue(n)) : t !== void 0 && this.enqueue(t);
  }
  /**
   * Adds a new value to the end of the queue
   * 
   * @example
   * const q = new Queue([10,20]);
   * q.enqueue(30); // [10,20,30]
   * 
   * @param {Number} value - The value to add.
   * @returns {Queue} The current Queue instance.
   */
  enqueue(t) {
    const n = new A(t);
    return this.size === 0 ? (this.first = n, this.last = n) : (this.last.next = n, this.last = n), this.size++, this;
  }
  /**
   * Removes and returns the first value in the queue
   * 
   * @example
   * const q = new Queue([10,20,30]);
   * q.dequeue(); // [20,30]
   * 
   * @returns {Queue} The current Queue instance.
   */
  dequeue(t = !1) {
    let n = this.first;
    if (this.size !== 0)
      return this.size === 1 ? (this.first = null, this.last = null) : (this.first = this.first.next, n.next = null), this.size--, t ? n : n.value;
  }
  /**
   * Returns the first value in the queue
   * 
   * @example
   * const q = new Queue([10,20,30]);
   * q.peek(); // 10
   * 
   * @param {Boolean} returnNode - Whether to return the node or just the value.
   * @returns {*|QueueNode} The value in the first node.
   */
  peek(t = !1) {
    if (this.size !== 0)
      return t ? this.first : this.first.value;
  }
  /**
   * Clears the queue
   * 
   * @example
   * const q = new Queue([10,20,30]);
   * q.clear(); // []
   * 
   */
  clear() {
    return this.first = null, this.last = null, this.size = 0, this;
  }
  /**
   * Prints the values of the queue
   * 
   * @example
   * const q = new Queue([10,20,30]);
   * q.print(); // 10,20,30
   * 
   * @returns {Queue} The current Queue instance.
   */
  print() {
    let t = this.first;
    for (; t; )
      console.log(t.value), t = t.next;
    return this;
  }
  /**
   * Checks if the queue is empty
   * 
   * @example
   * const q = new Queue([10,20,30]);
   * q.isEmpty(); // false
   * 
   * @returns {Boolean} Whether or not the queue is empty.
   */
  isEmpty() {
    return this.size === 0;
  }
  /**
   * Returns a new array of the values in the queue
   * 
   * @example
   * const q = new Queue([10,20,30]);
   * q.toArray(); // [10,20,30]
   * 
   * @returns {Array} An array of the values in the queue.
   */
  toArray() {
    const t = [];
    let n = this.first;
    for (let i = 0; i < this.size; i++)
      t.push(n.value), n = n.next;
    return t;
  }
}
class j {
  constructor(t) {
    this.value = t, this.next = null;
  }
}
class at {
  constructor(t) {
    this.top = null, this.size = 0, Array.isArray(t) ? t.forEach((n) => this.push(n)) : t !== void 0 && this.push(t);
  }
  /**
   * Adds a new value to the top of the stack
   * 
   * @example
   * const s = new Stack([10,20]);
   * s.push(30); // [10,20,30]
   * 
   * @param {Number} value - The value to add.
   * @returns {Stack} The current Stack instance.
   */
  push(t) {
    const n = new j(t);
    return this.size === 0 ? this.top = n : (n.next = this.top, this.top = n), this.size++, this;
  }
  /**
   * Removes the top value from the stack
   * 
   * @example
   * const s = new Stack([10,20,30]);
   * s.pop(); // [10,20]
   * 
   * @param {Boolean} returnNode - Whether to return the node or just the value.
   * @returns {Stack|*} The current Stack instance.
   */
  pop(t = !1) {
    if (this.size === 0)
      return;
    const n = this.top;
    return this.top = n.next, this.size--, t ? n : n.value;
  }
  /**
   * Removes all values from the stack
   * 
   * @example
   * const s = new Stack([10,20,30]);
   * s.clear(); // []
   * 
   * @returns {Stack} The current Stack instance.
   */
  clear() {
    return this.top = null, this.size = 0, this;
  }
  /**
   * Returns the first value in the stack
   * 
   * @example
   * const s = new Stack([10,20,30]);
   * s.peek(); // 10
   * 
   * @param {Boolean} returnNode - Whether to return the node or just the value.
   * @returns {*|StackNode} The value in the first node.
   */
  peek(t = !1) {
    if (this.size !== 0)
      return t ? this.top : this.top.value;
  }
  /**
   * Prints the values in the stack
   * 
   * @example
   * const s = new Stack([10,20,30]);
   * s.print(); // 10,20,30
   * 
   * @returns {Stack} The current Stack instance.
   */
  print() {
    let t = this.top;
    for (; t; )
      console.log(t.value), t = t.next;
    return this;
  }
  /**
   * Checks if the stack is empty
   * 
   * @example
   * const s = new Stack();
   * s.isEmpty(); // true
   * 
   * @returns {Boolean} Whether or not the stack is empty.
   */
  isEmpty() {
    return this.size === 0;
  }
  /**
   * Returns the number of nodes in the stack
   * 
   * @example
   * const s = new Stack([10,20,30]);
   * s.toArray(); // [10,20,30]
   * 
   * @returns {Number} The number of nodes in the stack.
   */
  toArray() {
    const t = [];
    let n = this.top;
    for (let i = 0; i < this.size; i++)
      t.push(n.value), n = n.next;
    return t;
  }
}
const Oe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BSTNode: D,
  BinarySearchTree: O,
  BinarySearchTreeInstance: ut,
  DLLNode: d,
  DoublyLinkedList: lt,
  LLNode: g,
  LinkedList: ht,
  Queue: ot,
  QueueNode: A,
  Stack: at,
  StackNode: j
}, Symbol.toStringTag, { value: "Module" }));
function E(...e) {
  return e.reduce((t, n) => t + n, 0);
}
function ct(...e) {
  return e.length ? E(...e) / e.length : 0;
}
function a(e, t = 0, n = 1) {
  return Math.min(n, Math.max(t, e));
}
function ft(e) {
  return e * (Math.PI / 180);
}
function dt(e = 0, t = 10, n = 5) {
  const i = [], s = (t - e) / (n - 1);
  for (let r = 0; r < n; r++)
    i.push(e + s * r);
  return i;
}
function gt(e = 3, t = 5) {
  if (e <= 1)
    return [0];
  const n = [];
  for (let i = 0; i < e; i++)
    n.push(-t + i * (2 * t) / (e - 1));
  return n;
}
function yt(...e) {
  if (e.length) {
    if (e.length === 1)
      return e[0];
  } else
    return 0;
  let t = e[0];
  for (let n = 1; n < e.length; n++)
    t /= e[n];
  return t;
}
function T(e) {
  return e <= 1 ? e : e * T(e - 1);
}
function mt(e, t, n = { x: 0, y: 0 }) {
  return {
    x: t * Math.cos(e) + n.x,
    y: t * Math.sin(e) + n.y
  };
}
function pt(e, t, n) {
  return a((e - t) / (n - t));
}
function xt(e) {
  if (typeof e != "number" || isNaN(e) || !isFinite(e))
    throw new Error("Input must be a finite number");
  return e % 1 !== 0;
}
function B(e) {
  return e % 2 == 0;
}
function wt(e) {
  return e % 2 == 1;
}
function vt(e, t) {
  return e % t == 0;
}
function bt(e) {
  const t = String(e);
  let n = 0;
  for (let i = 0; i < t.length; i++)
    n += Math.pow(t[i], t.length);
  return n === e;
}
function Mt(e, t, n) {
  return t + (n - t) * e;
}
function Nt(e, t, n, i, s) {
  return (e - t) * (s - i) / (n - t) + i;
}
function zt(...e) {
  const { length: t } = e;
  return t ? (S(e, !0), B(t) ? (e[t / 2 - 1] + e[t / 2]) / 2 : e[(t - 1) / 2]) : 0;
}
function St(...e) {
  if (e.length === 1)
    return e[0];
  const t = {};
  let n = e[0], i = 0;
  for (let s = 0; s < e.length; s++) {
    const r = e[s];
    t[r] ? t[r]++ : t[r] = 1, i < t[r] && (n = r, i = t[r]);
  }
  return n;
}
function Dt(...e) {
  return e.reduce((t, n) => t * n, 1);
}
function p(e) {
  return e === 0 ? 0 : -Math.abs(e);
}
function Ot(e, t) {
  return 100 * e / t;
}
function m(e) {
  return e * (180 / Math.PI);
}
function At(e, t, n = 1, i = []) {
  const s = [];
  for (let r = e; r < t + 1; r += n) {
    let l = !1;
    i.forEach(({ start: u, end: c }) => {
      r >= u && r <= c && (l = !0);
    }), l || s.push(r);
  }
  return s;
}
function jt(e, t = 2) {
  if (typeof e != "number")
    throw new TypeError("The `num` parameter must be a number");
  if (typeof t != "number")
    throw new TypeError("The `maxOfDecimals` parameter must be a number");
  if (t < 0)
    throw new RangeError("The `maxOfDecimals` parameter must be greater than or equal to 0");
  const n = e.toString().indexOf(".") + 1;
  return n > 0 && e.toString().substring(n).length > t ? parseFloat(e.toFixed(t)) : e;
}
function Et(...e) {
  if (e.length) {
    if (e.length === 1)
      return e[0];
  } else
    return 0;
  let t = e[0];
  for (let n = 1; n < e.length; n++) {
    if (typeof e[n] != "number")
      throw new Error(`The element at position ${n} is not a number`);
    t -= e[n];
  }
  return t;
}
const Ae = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  average: ct,
  clamp: a,
  degreesToRadians: ft,
  divideEvenly: dt,
  divideEvenlyWithSpread: gt,
  division: yt,
  factorial: T,
  getPositionWithAngleDistance: mt,
  invertedLerp: pt,
  isDecimal: xt,
  isEven: B,
  isMultipleOf: vt,
  isNarcissisticNumber: bt,
  isOdd: wt,
  isValidNumber: y,
  lerp: Mt,
  map: Nt,
  median: zt,
  mode: St,
  multiplication: Dt,
  negative: p,
  percentage: Ot,
  radiansToDegrees: m,
  range: At,
  roundNumber: jt,
  subtraction: Et,
  sum: E
}, Symbol.toStringTag, { value: "Module" }));
function x(e, t, n, i) {
  return Math.atan2(i - t, n - e);
}
function Tt(e, t) {
  return x(e.x, e.y, t.x, t.y);
}
function F(e, t, n, i) {
  return m(x(e, t, n, i));
}
function Bt(e, t) {
  return F(e.x, e.y, t.x, t.y);
}
function q(e, t) {
  const n = Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x), i = Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y);
  return Math.atan2(i, n);
}
function Ft(e, t, n, i, s, r, l, u) {
  return q(
    { x: e + n / 2, y: t + i / 2, width: n, height: i },
    { x: s + l / 2, y: r + u / 2, width: l, height: u }
  );
}
function qt(e) {
  return Math.PI * e * e;
}
function _t(e, t) {
  return e * t;
}
function Ct(e) {
  return 2 * Math.PI * e;
}
function _(e, t) {
  return 2 * (e + t);
}
function Pt(e) {
  return _(e.x, e.y, e.width, e.height);
}
function w(e, t) {
  return e + t / 2;
}
function v(e, t) {
  return e + t / 2;
}
function C(e, t, n, i) {
  return { x: w(e, n), y: v(t, i) };
}
function It(e) {
  return w(e.x, e.width);
}
function Rt(e) {
  return v(e.y, e.height);
}
function kt(e) {
  return C(e.x, e.y, e.width, e.height);
}
function P(e, t, n, i) {
  return [
    { x: e, y: t },
    { x: e + n, y: t },
    { x: e + n, y: t + i },
    { x: e, y: t + i }
  ];
}
function $t(e) {
  return P(e.x, e.y, e.width, e.height);
}
function b(e, t, n, i) {
  return Math.sqrt((e - n) * (e - n) + (t - i) * (t - i));
}
function Lt(e, t) {
  return b(e.x, e.y, t.x, t.y);
}
function I(e, t) {
  return b(e.x, e.y, t.x, t.y) - (e.radius + t.radius);
}
function Jt(e, t, n, i, s, r) {
  return I(
    { x: e, y: t, radius: n },
    { x: i, y: s, radius: r }
  );
}
function R(e, t) {
  const n = Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x), i = Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y);
  return n * i;
}
function Yt(e, t, n, i, s, r, l, u) {
  return R(
    { x: e + n / 2, y: t + i / 2, width: n, height: i },
    { x: s + l / 2, y: r + u / 2, width: l, height: u }
  );
}
function Gt({
  keys: e = { forward: !1, left: !1, right: !1, reverse: !1 },
  x: t,
  y: n,
  speed: i,
  acceleration: s,
  maxSpeed: r = 1 / 0,
  friction: l = 0,
  rotation: u,
  rotationSpeed: c,
  bounds: f = {
    x: { min: -1 / 0, max: 1 / 0 },
    y: { min: -1 / 0, max: 1 / 0 }
  }
}) {
  e.forward ? i += s : e.reverse && (i -= s);
  const J = Number(e.reverse) + 1;
  if (i > r ? i = r / J : i < -r / 2 && (i = -r / 2), i > 0 ? i -= l : i < 0 && (i += l), Math.abs(i) < l && (i = 0), i) {
    const M = i > 0 ? 1 : -1;
    e.left && (u -= c * M), e.right && (u += c * M);
  }
  const Y = t + Math.sin(u) * i, G = n - Math.cos(u) * i;
  return {
    x: a(Y, f.x.min, f.x.max),
    y: a(G, f.y.min, f.y.max),
    speed: i,
    rotation: u
  };
}
class h {
  constructor(t = 0, n = t) {
    this.x = 0, this.y = 0, this.set(t, n);
  }
  /**
   * Set x and y components of an existing Vector2.
   * 
   * @example new Vector2(1, 2).set(3, 4); // (3, 4)
   * @example new Vector2(1, 2).set({5.-10}); // (5, -10)
   * @example new Vector2(1, 2).set(new Vector2(-100, 55)); // (-100, 5)
   * 
   * @param {number|Vector2} [x=0] - the new X value
   * @param {number} [y=x] - the new Y value
   * @return {Vector2} This Vector2
   * @memberof Vector2
   */
  set(t = 0, n = t) {
    return typeof t == "object" ? (this.x = t.x || 0, this.y = t.y || 0) : (this.x = t || 0, this.y = n || 0), this;
  }
  /**
   * Return a new Vector2 with the same values of this
   * 
   * @example new Vector2(1, 2).clone() // (1, 2)
   * 
   * @returns {Vector2}
   * @memberof Vector2
   */
  clone() {
    return new h(this.x, this.y);
  }
  /**
   * Add the values of this vector 2 with the values of the given vector2
   * 
   * @example new Vector2(1,2).add(new Vector2(10)); // (11, 12)
   * 
   * @param {Vector2} vector - the vector to add
   * @returns {Vector2} This Vector2
   * @memberof Vector2
   */
  add(t) {
    return this.x += t.x, this.y += t.y, this;
  }
  /**
   * Subtracts the values of vector 2 with the values of the given vector2
   * 
   * Normally used to get the distance between two vectors.
   * 
   * @example new Vector2(1,2).subtract(new Vector2(10)); // (-9, -8)
   * @example new Vector2(0).distanceVector(new Vector2(10, 5)); // (10, 5)
   * @example new Vector2(5, 10).distanceVector(new Vector2(10, 5)); // (5, -5)
   * 
   * @param {Vector2} vector - the vector to subtract
   * @returns {Vector2} This Vector2
   * @memberof Vector2
   */
  subtract(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }
  /**
   * Multiplies the values of vector 2 with the given value.
   * 
   * @example new Vector2(1,2).scale(2); // (2, 3)
   * 
   * @param {number} [value=1] value - the value to multiply/scale
   * @returns {Vector2} This Vector2
   * @memberof Vector2
   */
  scale(t = 1) {
    return this.x *= t, this.y *= t, this;
  }
  /**
   * Multiplies the values of vector 2 with the values of the given vector2
   * 
   * @example new Vector2(1,2).multiply(new Vector2(10)); // (10, 20)
   *
   * @param {Vector2} vector2 - the vector to multiply
   * @return {Vector2} This Vector2
   */
  multiply(t) {
    return this.x *= t.x, this.y *= t.y, this;
  }
  /**
   * Divides the values of vector 2 with the values of the given vector2
   * 
   * @example new Vector2(10,5).divide(new Vector2(5)); // (5, 2.5)
   *
   * @param {Vector2} vector2 - the vector to divide
   * @return {Vector2} This Vector2
   */
  divide(t) {
    return this.x /= t.x, this.y /= t.y, this;
  }
  /**
   * Dot product of two vectors.
   * 
   * @example new Vector2(10,5).dot(new Vector2(5)); // 75
   * 
   * @param {Vector2} vector 
   * @returns {number}
   * @memberof Vector2
   */
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  /**
   * Linearly interpolates between current vector and the given vector by time. 
   * 
   * @example new Vector2(5,10).moveTowards(); // (0,0)
   * @example new Vector2(5,10).moveTowards(new Vector2(5, 10)); // (5,10)
   * @example new Vector2(5,10).moveTowards(new Vector2(5, 10), 0.5); // (7.5, 7.5)
   * 
   * @param {Vector2} target - the vector to interpolate
   * @param {number} step - step, distance of the target (between 0, and 1)
   * @returns {Vector2} this vector changed
   * @memberof Vector2
   */
  moveTowards(t = h.zero(), n = 1) {
    n = a(n, 0, 1);
    const s = t.subtract(this).scale(n);
    return this.add(s);
  }
  /**
   * Returns the length of this vector.
   * 
   * @example new Vector2(0).magnitude(); // 0
   * @example new Vector2(1).magnitude(); // 2
   * @example new Vector2(2).magnitude(); // 8
   * @example new Vector2(5, 10).magnitude(); // 125
   * 
   * @returns {number}
   * @memberof Vector2
   */
  magnitude() {
    return this.x * this.x + this.y * this.y;
  }
  /**
   * Returns the squared length of this vector.
   * 
   * @example new Vector2(0).magnitude(); // 0
   * @example new Vector2(1).magnitude(); // 1.4142135623730951
   * @example new Vector2(2).magnitude(); // 2.8284271247461903
   * @example new Vector2(5, 10).magnitude(); // 11.180339887498949
   * 
   * @returns {number}
   * @memberof Vector2
   */
  magnitudeSqr() {
    return Math.sqrt(this.magnitude());
  }
  /**
   * Returns the distance between this vector and a given vector.
   * 
   * @example new Vector2(5, 10).distance(); // 125
   * @example new Vector2(5, 10).distance(new Vector2(100, 20))); // 9125
   * 
   * @param {Vector2} vector - the vector to compare
   * @returns {number}
   * @memberof Vector2
   */
  distance(t = h.zero()) {
    const n = this.x - t.x, i = this.y - t.y;
    return n * n + i * i;
  }
  /**
   * Returns the squared distance between this vector and a given vector.
   * 
   * @example new Vector2(5, 10).distanceSqrt(); // 11.180339887498949
   * @example new Vector2(5, 10).distanceSqrt(new Vector2(100, 20)); // 95.524865872714
   * @example Vector2.zero().distanceSqrt(new Vector2(100, 20)); // 101.9803902718557
   * 
   * @param {Vector2} vector - the vector to compare
   * @returns {number}
   * @memberof Vector2
   */
  distanceSqrt(t) {
    return Math.sqrt(this.distance(t));
  }
  /**
   * Returns this vector with a magnitude of 1.
   * 
   * @example new Vector2(5, 10).normalize()); // (0.4472135954999579, 0.8944271909999159)
   * @example new Vector2(1000, 123).normalize()); // (0.9925202644900105, 0.1220799925322713)
   * @example Vector2.zero().normalize()); // (0, 0)
   * 
   * @returns {Vector2} this vector normalized
   * @memberof Vector2
   */
  normalize() {
    const t = this.distanceSqrt();
    return Math.abs(t) < 1e-9 ? (this.x = 0, this.y = 0) : (this.x /= t, this.y /= t), this;
  }
  /**
   * Calculate the angle between this Vector and the given Vector.
   * 
   * @example new Vector2(5, 10).diferenceAngle(new Vector2(5, 10)); // 0
   * @example new Vector2(1000, 123).diferenceAngle(new Vector2(5, 10)); // -173.52080244507272
   * @example Vector2.zero().diferenceAngle(new Vector2(90, 90)); // 45
   * 
   * @param {Vector2} target - the vector to get the angle
   * @returns {number} 
   * @memberof Vector2
   */
  diferenceAngle(t) {
    return m(Math.atan2(t.y - this.y, t.x - this.x));
  }
  /**
   * Calculate the angle between this Vector and the positive x-axis.
   * 
   * @see {@link https://github.com/photonstorm/phaser/blob/v3.51.0/src/math/Vector2.js#L215}
   * 
   * @returns {number} the result
   * @memberof Vector2
   */
  angle() {
    let t = Math.atan2(this.y, this.x);
    return t < 0 && (t += 2 * Math.PI), m(t);
  }
  /**
   * Return a new vector rotated
   * 
   * @param {number} [radians=0] the radians to rotate
   * @returns {Vector2}
   */
  rotate(t = 0) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x * n - this.y * i, r = this.x * i + this.y * n;
    return this.set(s, r);
  }
  /**
   * Fix the precision to the given decimal places
   * 
   * @example new Vector2(1.234, 5.123456).toPrecision(2) // (1.23, 5.12)
   * 
   * @param {number} precision - the number of decimal places
   * @returns {Vector2}
   * @memberof Vector2
   */
  toPrecision(t = 1) {
    return this.x = Number(this.x.toFixed(t)), this.y = Number(this.y.toFixed(t)), this;
  }
  /**
   * Returns true if the given vector is exactly equal to this vector.
   * 
   * @example new Vector2(5, 10).equals(new Vector2(5, 10)); // true
   * @example new Vector2(10, 5).equals(new Vector2(5, 10)) // false
   * 
   * @param {Vector2} vector - the vector to compare
   * @returns {boolean}
   * @memberof Vector2
   */
  equals(t) {
    return this.x === t.x && this.y === t.y;
  }
  /**
   * Returns a formatted string for this vector.
   * 
   * @returns {string}
   * @memberof Vector2
   */
  toString() {
    return "[" + this.x + "; " + this.y + "]";
  }
  /**
   * Change the values to absolute values
   * 
   * @example new Vector2(-1, 5).absolute() // (1, 5)
   * 
   * @see {@link https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs}
   * @returns {Vector2} this Vector2 updated
   * @memberof Vector2
   */
  absolute() {
    return this.x = Math.abs(this.x), this.y = Math.abs(this.y), this;
  }
  /**
   * Change the values to negative values
   * 
   * @example new Vector2(-1, 5).negative() // (-1, -5)
   * 
   * @returns {Vector2} This Vector2.
   * @memberof Vector2
   */
  negative() {
    return this.x = p(this.x), this.y = p(this.y), this;
  }
  /**
   * Negate the `x` and `y` components of this Vector.
   * 
   * @example new Vector2(-1, 5).negate() // (1, 5)
   *
   * @return {Vector2} this Vector2
   * @memberof Vector2
   */
  negate() {
    return this.x = this.x * -1, this.y = this.y * -1, this;
  }
  /**
   * Invert the X and Y values of this Vector2
   * 
   * @example new Vector2(-1, 5).invert() // (5, -1)
   * 
   * @returns {Vector2} This Vector2.
   * @memberof Vector2
   */
  invert() {
    const t = this.x;
    return this.x = this.y, this.y = t, this;
  }
  /**
   * Shorthand for writing Vector2(0, 0).
   * 
   * @example Vector2.zero()
   * 
   * @returns {Vector2}
   * @memberof Vector2
   */
  static zero() {
    return new h(0);
  }
  /**
   * Shorthand for writing Vector2(1, 1).
   *		* 
  	* 	 * @example Vector2.zero()
  	*
   * @returns {Vector2}
   * @memberof Vector2
   */
  static one() {
    return new h(1);
  }
  /**
  	* Shorthand for writing Vector2(Infinity, Infinity).
  	*
  	* @example Vector2.zero()
  	*
  	* @returns {Vector2}
  	* @memberof Vector2
  	*/
  static positiveInfinity() {
    return new h(1 / 0);
  }
  /**
  	* Shorthand for writing Vector2(-Infinity, -Infinity).
  	*
  	* @example Vector2.zero()
  	*
  	* @returns {Vector2}
  	* @memberof Vector2
  	*/
  static negativeInfinity() {
    return new h(-1 / 0);
  }
  /**
  	* Shorthand for writing Vector2(0, -1).
  	*
  	* @example Vector2.zero()
  	*
  	* @returns {Vector2}
  	* @memberof Vector2
  	*/
  static up() {
    return new h(0, -1);
  }
  /**
  	* Shorthand for writing Vector2(0, 1).
  	*
  	* @example Vector2.zero()
  	*
  	* @returns {Vector2}
  	* @memberof Vector2
  	*/
  static down() {
    return new h(0, 1);
  }
  /**
  	* Shorthand for writing Vector2(-1, 0).
  	*
  	* @example Vector2.zero()
  	*
  	* @returns {Vector2}
  	* @memberof Vector2
  	*/
  static left() {
    return new h(-1, 0);
  }
  /**
  	* Shorthand for writing Vector2(1, 0).
  	*
  	* @example Vector2.zero()
  	*
  	* @returns {Vector2}
  	* @memberof Vector2
  	*/
  static right() {
    return new h(1, 0);
  }
  /**
   * Creates a random vector with random normalized values
   * 
   * @returns {Vector2}
   */
  static random() {
    return new h(Math.random(), Math.random());
  }
}
const je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Vector2: h,
  calcAngleBetweenRectangles: q,
  calcAngleBetweenRectanglesByCoordinates: Ft,
  calcAngleBetweenTwoPoints: x,
  calcAngleBetweenTwoPointsDegrees: F,
  calcAngleBetweenTwoPointsVector2: Tt,
  calcAngleBetweenTwoPointsVector2Degrees: Bt,
  calcCircleArea: qt,
  calcCirclePerimeter: Ct,
  calcDistanceBetweenCircles: I,
  calcDistanceBetweenCirclesByCoordinates: Jt,
  calcDistanceBetweenTwoPointObjects: Lt,
  calcDistanceBetweenTwoPoints: b,
  calcOverlapBetweenRectangles: R,
  calcOverlapBetweenRectanglesByCoordinates: Yt,
  calcRectangleArea: _t,
  calcRectangleCenter: C,
  calcRectangleCenterFromBounds: kt,
  calcRectangleCenterX: w,
  calcRectangleCenterXFromBounds: It,
  calcRectangleCenterY: v,
  calcRectangleCenterYFromBounds: Rt,
  calcRectanglePerimeter: Pt,
  calcRectanglePerimeterByDimensions: _,
  calcRectangleVertices: P,
  calcVerticesFromRectangleBounds: $t,
  topDownCarMovimentation: Gt
}, Symbol.toStringTag, { value: "Module" }));
class Wt {
  constructor() {
    this.events = {};
  }
  /**
   * Start listening the event
   * 
   * @example events.on("eventName", (num1, num2) => { console.log(num1, num2); });
   * 
   * @param {string} event - the event name
   * @param {function} callback - a function callback
   * @returns {void}
   * @memberof EventSystem
   */
  on(t, n) {
    this.has(t) || (this.events[t] = []), this.events[t].push(n);
  }
  /**
   * Dispatch the event to the listeners
   * 
   * @example events.emit("eventName", 1, 2);
   * 
   * @param {string} event - event name
   * @param  {...any} args - all arguments to pass
   * @returns {void}
   * @memberof EventSystem
   */
  emit(t, ...n) {
    this.has(t) && this.events[t].forEach((i) => {
      i(...n);
    });
  }
  /**
   * Remove the listener
   * 
   * @example events.off("eventName");
   * 
   * @param {string} event - event name
   * @returns {void}
   * @memberof EventSystem
   */
  off(t) {
    delete this.events[t];
  }
  /**
   * Listening the event but just only one time
   * 
   * @example events.once("eventName", (num1, num2) => { console.log("testOnceOnce", num1, num2); });
   * 
   * @param {string} event - the event name
   * @param {function} callback - a function callback
   * @returns {void}
   * @memberof EventSystem
   */
  once(t, n) {
    let i = (...s) => {
      n(...s), this.off(t);
    };
    this.on(t, i);
  }
  /**
   * Remove all the events
   * 
   * @example events.clear();
   * @returns {void}
   * @memberof EventSystem
   */
  clear() {
    this.events = {};
  }
  /**
   * Check if the event exists
   * 
   * @param {string} event - th event name
   * @returns {boolean}
   * @memberof EventSystem
   */
  has(t) {
    return this.events[t] !== void 0;
  }
}
const Ee = new Wt();
class Te {
  constructor() {
    this._lastNumber = 0, this._currentNumber = 1, this.sequence = [0];
  }
  /**
   * Return the next number in the fibonacci sequence
   * 
   * @example new Fibonacci().next(); // 1
   * 
   * @returns {number}
   * @memberof Fibonacci
   */
  next() {
    const t = this._currentNumber + this._lastNumber;
    return this._lastNumber = this._currentNumber, this._currentNumber = t, this.sequence.push(t), this._currentNumber;
  }
  /**
   * Return last number in sequence
   * 
   * @example new Fibonacci().current(); // 3
   * 
   * @returns {number}
   * @memberof Fibonacci
   */
  current() {
    return this.sequence[this.sequence.length - 1];
  }
  /**
   * Return the next number in the fibonacci sequence
   * 
   * @example
   * const f = new Fibonacci()
   * f.next(); // 1
   * f.next(); // 2
   * f.before() // 1
   * 
   * @returns {number}
   * @memberof Fibonacci
   */
  before() {
    if (this.sequence.length > 1)
      return this._lastNumber = this._currentNumber - this._lastNumber, this._currentNumber = this._currentNumber - this._lastNumber, this.sequence.pop(), this._currentNumber;
  }
}
function Be(e = 20) {
  const t = [0, 1];
  for (; t.length < e; )
    t.push(t[t.length - 2] + t[t.length - 1]);
  return t;
}
function Fe(e = 100) {
  const t = [0, 1];
  do {
    if (t[t.length - 2] + t[t.length - 1] >= e)
      return t;
    t.push(t[t.length - 2] + t[t.length - 1]);
  } while (t[t.length - 1] < e);
}
function qe(e = 1, t = 100) {
  const n = [];
  let i = 0, s = e;
  for (; s <= t; ) {
    const r = s + i;
    i = s, s = r, n.push(s);
  }
  return n;
}
function N(e = 10) {
  return e <= 1 ? e : N(e - 1) + N(e - 2);
}
function _e(e) {
  for (let t = 1; t < e.length; t++)
    if (e[0] != e[t])
      return !1;
  return !0;
}
function Ce(e) {
  if (typeof e == "string")
    return parseInt(e, 2);
}
function Pe(e = [0.25, 0.5, 0.25]) {
  let t = 0;
  const n = Math.random();
  for (let i = 0; i < e.length; i++)
    if (t += e[i], n <= t)
      return i;
}
function Ie(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
const Re = 1024;
function ke(e) {
  return Number(e).toString(2);
}
function $e() {
  return {
    time: Xt(),
    milliseconds: Ht(),
    seconds: Qt(),
    minutes: Kt(),
    hours: Ut(),
    day: k(),
    weekDay: Vt(),
    week: Zt(),
    month: $(),
    year: L(),
    dateFormatted: te()
  };
}
function Xt() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Ht() {
  return (/* @__PURE__ */ new Date()).getMilliseconds();
}
function Qt() {
  return (/* @__PURE__ */ new Date()).getSeconds();
}
function Kt() {
  return (/* @__PURE__ */ new Date()).getMinutes();
}
function Ut() {
  return (/* @__PURE__ */ new Date()).getHours();
}
function k() {
  return (/* @__PURE__ */ new Date()).getDate();
}
function Vt() {
  return (/* @__PURE__ */ new Date()).getDay() + 1;
}
function Zt() {
  const e = /* @__PURE__ */ new Date(), t = new Date(e.getFullYear(), 0, 1), n = Math.floor((e - t) / (24 * 60 * 60 * 1e3));
  return Math.ceil(n / 7);
}
function $() {
  return (/* @__PURE__ */ new Date()).getMonth() + 1;
}
function L() {
  return (/* @__PURE__ */ new Date()).getFullYear();
}
function te() {
  return k() + "/" + $() + "/" + L();
}
const ee = "utilidades", ne = "1.3.3", ie = "Just simple utils for javascript :)", se = "https://201flaviosilva-labs.github.io/utilidades/", re = "201flaviosilva", ue = "MIT", le = "module", he = "./dist/utilidades.umd.cjs", oe = "./dist/utilidades.js", ae = "./types/main.d.ts", ce = {
  clear: "rm -rf types && rm -rf docs && rm -rf build && rm -rf dist",
  dev: "vite",
  test: "vitest --watch=false",
  "test:dev": "vitest",
  coverage: "vitest run --coverage",
  jsdoc: "jsdoc -c jsdoc.conf.json",
  types: "npx -p typescript tsc src/*.js --declaration --allowJs --emitDeclarationOnly --outDir types",
  compile: "vite build",
  build: "npm run clear && npm run compile && npm run jsdoc && npm run types",
  bump: "npm run build && np --no-cleanup --any-branch"
}, fe = {
  "@vitest/coverage-c8": "^0.31.4",
  "clean-jsdoc-theme": "^4.3.0",
  jsdoc: "^4.0.3",
  np: "^8.0.4",
  typescript: "^5.4.5",
  vite: "^4.5.3",
  vitest: "^0.31.4"
}, de = [
  "README.md",
  "CHANGELOG.md",
  "package.json",
  "dist",
  "types",
  "index.d.ts"
], ge = {
  types: "./types/main.d.ts",
  import: "./dist/utilidades.js",
  require: "./dist/utilidades.umd.cjs"
}, ye = {
  node: ">=16.0.0",
  npm: ">=7.0.0"
}, me = [
  "utils"
], pe = {
  type: "git",
  url: "git+https://github.com/201flaviosilva-labs/utilidades.git"
}, xe = {
  url: "https://github.com/201flaviosilva-labs/utilidades/issues"
}, we = {
  name: ee,
  version: ne,
  description: ie,
  homepage: se,
  author: re,
  license: ue,
  type: le,
  main: he,
  module: oe,
  types: ae,
  scripts: ce,
  devDependencies: fe,
  files: de,
  exports: ge,
  engines: ye,
  keywords: me,
  repository: pe,
  bugs: xe
};
function Le() {
  return we.version;
}
function Je(e) {
  return Object.keys(e).length === 0;
}
function ve(e) {
  try {
    if (!e || typeof e == "object" && Object.keys(e).length == 0)
      return !0;
  } catch {
    return !0;
  }
  return !1;
}
function Ye(e) {
  return !ve(e);
}
function Ge(...e) {
  for (let t = 0; t < e.length; t++)
    if (!e[t])
      return !1;
  return !0;
}
function We(...e) {
  return !!e.find((t) => !!t);
}
function Xe(e, t) {
  return !!e != !!t;
}
function He() {
  return "#" + (Math.random() * 16777215 << 0).toString(16);
}
function Qe() {
  return `0x${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function Ke() {
  return `rgb(${o(255)}, ${o(255)}, ${o(255)})`;
}
function Ue() {
  return `rgba(${o(255)}, ${o(255)}, ${o(255)}, ${Math.random().toFixed(5)})`;
}
function Ve(e = {
  numberCharacters: 12,
  numbers: !0,
  symbols: !0,
  capital: !0,
  small: !0
}) {
  const t = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "y", "Z"], n = ["a", "b", "c", "d", "e", "f", "G", "H", "I", "J", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], s = ["!", '"', "@", "#", "€", "$", "£", "%", "‰", "&", "¶", "/", "(", "[", ")", "]", "=", "≠", "'", "?", "+", "*"];
  let r = [];
  r = e.capital ? [...r, ...t] : [...r], r = e.small ? [...r, ...n] : [...r], r = e.numbers ? [...r, ...i] : [...r], r = e.symbols ? [...r, ...s] : [...r];
  let l = "";
  for (let u = 0; u < e.numberCharacters; u++)
    l += z(r);
  return l;
}
function Ze(e, t = 2) {
  let n = new Array(t).fill(0);
  for (let i = 0; i < e; i++) {
    const s = Math.random(), r = Math.floor(s * t);
    s < 0.5 ? n[r]++ : n[r]--;
  }
  return n;
}
function tn(e) {
  return e.split("").reverse().join("");
}
async function en(e = 1e3) {
  if (typeof e != "number" || e < 0 || isNaN(e))
    throw new Error("Time must be a non-negative number");
  return new Promise((t) => setTimeout(t, e));
}
export {
  Me as Arrays,
  Oe as DataStructures,
  Wt as EventSystem,
  Ee as EventSystemInstance,
  Te as Fibonacci,
  Re as MEGABYTE_IN_KILOBYTES,
  Ae as Maths,
  je as Physics,
  _e as allCharactersSame,
  Ge as and,
  Ce as binary2Decimal,
  Pe as choiceTrend,
  et as clone,
  Ie as compare2Objects,
  ke as decimal2Binary,
  qe as fibonacciCustomSequence,
  Be as fibonacciSequence,
  Fe as fibonacciUntil,
  $e as getDate,
  Le as getVersion,
  ve as isFalsy,
  Je as isObjectEmpty,
  Ye as isTruthy,
  We as or,
  He as randomColor,
  Qe as randomColor0X,
  X as randomFloat,
  o as randomInt,
  be as randomNumber,
  Ue as randomRGBAColor,
  Ke as randomRGBColor,
  Ve as randomString,
  Ze as randomWalk,
  N as recursiveFibonacci,
  tn as reverseString,
  en as sleep,
  Xe as xor
};
