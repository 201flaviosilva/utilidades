function L(e) {
  return e.every((t) => JSON.stringify(t) === JSON.stringify(e[0]));
}
function J(e = 0, t = 1, n = 2) {
  return t === void 0 && (t = e, e = 0), parseFloat((Math.random() * (t - e) + e).toFixed(n));
}
function h(e, t) {
  return t === void 0 && (t = e, e = 0), Math.round(e + Math.random() * (t - e));
}
function pe(e, t) {
  return J(e, t);
}
function N(e) {
  return e[h(e.length)];
}
function Y(e, t = 1) {
  const n = [];
  for (let i = 0; i < e.length; i += t)
    n.push(e.slice(i, i + t));
  return n;
}
function G(e, t, n = !1) {
  const i = Math.max(...e.map((r) => r[t]));
  return n ? i : e.find((r) => r[t] === i);
}
function W(e, t, n = !1) {
  const i = Math.min(...e.map((r) => r[t]));
  return n ? i : e.find((r) => r[t] === i);
}
function X(e = []) {
  for (let t = 0; t < e.length - 1; t++)
    if (e[t] > e[t + 1])
      return !1;
  return !0;
}
function H(e = [], t = 1) {
  for (let n = 0; n < t; n++) {
    let i = e[e.length - 1];
    for (let r = e.length - 2; r >= 0; r--) {
      const s = e[r];
      e[r] = i, i = s;
    }
    e[e.length - 1] = i;
  }
  return e;
}
function K(e = [], t = 1) {
  for (let n = 0; n < t; n++) {
    let i = e[0];
    for (let r = 1; r < e.length; r++) {
      const s = e[r];
      e[r] = i, i = s;
    }
    e[0] = i;
  }
  return e;
}
function U(e, t) {
  const n = /* @__PURE__ */ new Set();
  return e.filter((i) => {
    const r = i[t];
    return n.has(r) ? !1 : (n.add(r), !0);
  });
}
function Q(e) {
  return JSON.parse(JSON.stringify(e));
}
function V(e, t = !0) {
  if (t)
    return e.sort(() => Math.random() - 0.5);
  const n = Q(e), i = [];
  for (; n.length; ) {
    const r = h(n.length);
    i.push(n[r]), n.splice(r, 1);
  }
  return i;
}
function z(e, t = !1) {
  return t ? e.sort((n, i) => n - i) : [...e].sort((n, i) => n - i);
}
function Z(e, t, n = !1) {
  return n ? e.sort((i, r) => i[t] - r[t]) : [...e].sort((i, r) => i[t] - r[t]);
}
function tt(e, t = !1) {
  return t ? e.sort((n, i) => i - n) : [...e].sort((n, i) => i - n);
}
function et(e, t, n = !1) {
  return n ? e.sort((i, r) => r[t] - i[t]) : [...e].sort((i, r) => r[t] - i[t]);
}
const xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  allEqual: L,
  choice: N,
  chunk: Y,
  findBigObject: G,
  findLowObject: W,
  isSorted: X,
  moveLeft: H,
  moveRight: K,
  removeDuplicatesObj: U,
  shuffle: V,
  sortAscending: z,
  sortAscendingObject: Z,
  sortDescending: tt,
  sortDescendingObject: et
}, Symbol.toStringTag, { value: "Module" }));
let nt = class {
  constructor(t) {
    this.value = t, this.left = null, this.right = null, this.parent = null;
  }
};
class D {
  constructor(t) {
    this.root = null, this.count = 0, t !== void 0 && this.add(t);
  }
  /**
   * Returns the number of nodes in the tree
   * 
   * @example 
   * const bst = new BinarySearchTree();
   * bst.add(1);
   * bst.add(0);
   * bst.add(2);
   * bst.size(); // 3
   * 
   * @returns {number} Number of nodes
   * @memberof BinarySearchTree
   */
  size() {
    return this.count;
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
   * @memberof BinarySearchTree
   */
  add(t) {
    if (typeof t != "number" || isNaN(t)) {
      console.error("Value need to be a number!");
      return;
    }
    const n = new nt(t);
    if (this.root === null) {
      this.count++, this.root = n;
      return;
    }
    let i = this.root;
    for (; i; ) {
      if (t === i.value)
        return;
      if (i.value > t)
        if (i.left === null) {
          n.parent = i, i.left = n, this.count++;
          break;
        } else
          i = i.left;
      else if (i.right === null) {
        n.parent = i, i.right = n, this.count++;
        break;
      } else
        i = i.right;
    }
  }
  /**
   * Finds the smallest value in the tree.
   *
   * - If a value is passed it will look for the smallest value from that branch;
   * - If no value is passed, it will start from the root;
   * 
   * @param {number} value - the value to start searching
   * @returns {number|undefined} smaller value
   * @memberof BinarySearchTree
   */
  smaller(t) {
    if (!this.root)
      return;
    let n = this.search(t || this.root.value);
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
   * @returns {number|undefined} largest value
   * @memberof BinarySearchTree
   */
  larger(t) {
    if (!this.root)
      return;
    let n = this.search(t || this.root.value);
    do {
      if (n.right === null)
        return n.value;
      n = n.right;
    } while (n);
  }
  /**
   * - Returns `false` if the number does not exist or if there is an error
   * - If the number exists, return its node
   * 
   * @param {number} value - the value to find
   * @returns {Node} if the value is in the Tree
   * @memberof BinarySearchTree
   */
  search(t) {
    if (!this.root)
      return;
    if (typeof t != "number")
      throw new Error("Value need to be a number!");
    let n = this.root;
    for (; n; ) {
      if (t === n.value)
        return n;
      if (n.value > t) {
        if (n.left === null)
          return !1;
        n = n.left;
      } else {
        if (n.right === null)
          return !1;
        n = n.right;
      }
    }
  }
  /**
   * Delete the node with the given value
   * 
   * @param {number} value - the value to delete
   * @returns {boolean} if the node was deleted
   * @memberof BinarySearchTree
   */
  delete(t) {
    var i, r;
    const n = this.search(t);
    if (!n)
      return !1;
    if (n.left === null && n.right === null)
      ((i = n.parent.left) == null ? void 0 : i.value) === n.value ? n.parent.left = null : n.parent.right = null;
    else if (n.left !== null && n.right === null || n.left === null && n.right !== null) {
      const s = n.left || n.right;
      s.parent = n.parent, ((r = n.parent.left) == null ? void 0 : r.value) === n.value ? n.parent.left = s : n.parent.right = s;
    } else if (n.left !== null && n.right !== null) {
      const s = this.search(this.larger(n.left.value));
      s.value === n.left.value ? n.left = null : s.parent.right = null, n.value = s.value;
    } else
      throw new Error("Error deleting value");
  }
}
const it = new D();
let d = class {
  /**
   * Creates a new Node instance.
   * @param {*} value - The value to be stored in the node.
   */
  constructor(t) {
    if (!t)
      throw new Error("Node value cannot be undefined.");
    this.value = t, this.next = null, this.prev = null;
  }
};
class rt {
  /**
   * Creates a new DoublyLinkedList instance.
   * 
   * @example
   * new DoublyLinkedList();
   * new DoublyLinkedList("Beep");
   * new DoublyLinkedList([10,20,30]);
   * 
   * @param {Array|*} value - The value to initialize the list with (optional).
   */
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
   * 
   * @memberof DoublyLinkedList
   * @method print
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
   * 
   * @memberof DoublyLinkedList
   * @method clear
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
   * @returns {Number|Node} The value at the specified index, or the Node if returnNode is true.
   * 
   * @memberof DoublyLinkedList
   * @method get
   */
  get(t, n = !1) {
    if (t < 0 || t >= this.size)
      return;
    let i = this.head;
    if (t < this.size / 2)
      for (let r = 0; r < t; r++)
        i = i.next;
    else {
      i = this.tail;
      for (let r = this.size - 1; r > t; r--)
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
   * 
   * @memberof DoublyLinkedList
   * @method set
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
   * 
   * @memberof DoublyLinkedList
   * @method unshift
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
   * 
   * @memberof DoublyLinkedList
   * @method push
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
   * 
   * @memberof DoublyLinkedList
   * @method insert
   */
  insert(t, n) {
    if (t === 0)
      return this.unshift(n);
    if (t === this.size)
      return this.push(n);
    if (t < 0 || t > this.size)
      return !1;
    const i = new d(n), r = this.get(t - 1, !0);
    return i.prev = r, i.next = r.next, r.next.prev = i, r.next = i, this.size++, this;
  }
  /**
   * Removes the value at the start of the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.shift(); // 20,30
   * 
   * @returns {Number} The value that was removed.
   * 
   * @memberof DoublyLinkedList
   * @method shift
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
   * 
   * @memberof DoublyLinkedList
   * @method pop
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
   * 
   * @memberof DoublyLinkedList
   * @method remove
   */
  remove(t) {
    if (t < 0 || t >= this.size)
      return !1;
    if (t === 0)
      return this.shift();
    if (t === this.size - 1)
      return this.pop();
    const n = this.get(t, !0), i = n.prev, r = n.next;
    return i.next = r, r.prev = i, n.prev = null, n.next = null, this.size--, n.value;
  }
  // TODO: Implement reverse()
  reverse() {
  }
  // TODO: Implement sort()
  sort() {
  }
  /**
   * Returns an array representation of the linked list.
   * 
   * @example
   * const dll = new DoublyLinkedList([10,20,30]);
   * dll.toArray(); // [10,20,30]
   * 
   * @returns {Array} The array representation of the linked list.
   * 
   * @memberof DoublyLinkedList
   * @method toArray
   */
  toArray() {
    const t = [];
    let n = this.head;
    for (; n !== null; )
      t.push(n.value), n = n.next;
    return t;
  }
}
class g {
  /**
   * Creates a new Node instance.
   * @param {*} value - The value to be stored in the node.
   */
  constructor(t) {
    this.value = t, this.next = null;
  }
}
class st {
  /**
   * Creates a new LinkedList instance.
   * @param {*} value - The value to initialize the list with (optional).
   */
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
   * 
   * @memberof LinkedList
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
   * 
   * @memberof LinkedList
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
   * 
   * @memberof LinkedList
   */
  get(t, n = !1) {
    if (t < 0 || t >= this.size)
      return;
    let i = this.head;
    for (let r = 0; r < t; r++)
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
   * 
   * @memberof LinkedList
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
   * 
   * @memberof LinkedList
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
   * 
   * @memberof LinkedList
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
   * 
   * @memberof LinkedList
   */
  insert(t, n) {
    if (t === 0)
      return this.unshift(n);
    if (t === this.size)
      return this.push(n);
    if (t < 0 || t > this.size)
      return !1;
    const i = new g(n), r = this.get(t - 1, !0);
    return i.next = r.next, r.next = i, this.size++, this;
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
   * 
   * @memberof LinkedList
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
   * 
   * @memberof LinkedList
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
   * 
   * @memberof LinkedList
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
   * 
   * @memberof LinkedList
   */
  reverse() {
    let t = this.head;
    this.head = this.tail, this.tail = t;
    let n = null, i = null;
    for (let r = 0; r < this.size; r++)
      i = t.next, t.next = n, n = t, t = i;
    return this;
  }
  // TODO: Implement sort()
  sort() {
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
   * 
   * @memberof LinkedList
   */
  toArray() {
    const t = [];
    let n = this.head;
    for (; n !== null; )
      t.push(n.value), n = n.next;
    return t;
  }
}
const be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BinarySearchTree: D,
  BinarySearchTreeInstance: it,
  DLLNode: d,
  DoublyLinkedList: rt,
  LLNode: g,
  LinkedList: st
}, Symbol.toStringTag, { value: "Module" }));
function S(...e) {
  return e.reduce((t, n) => t + n, 0);
}
function ut(...e) {
  return e.length ? S(...e) / e.length : 0;
}
function a(e, t = 0, n = 1) {
  return Math.min(n, Math.max(t, e));
}
function lt(e) {
  return e * (Math.PI / 180);
}
function ot(e = 0, t = 10, n = 5) {
  const i = [], r = (t - e) / (n - 1);
  for (let s = 0; s < n; s++)
    i.push(e + r * s);
  return i;
}
function ht(e = 3, t = 5) {
  if (e <= 1)
    return [0];
  const n = [];
  for (let i = 0; i < e; i++)
    n.push(-t + i * (2 * t) / (e - 1));
  return n;
}
function at(...e) {
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
function O(e) {
  return e <= 1 ? e : e * O(e - 1);
}
function ct(e, t, n = { x: 0, y: 0 }) {
  return {
    x: t * Math.cos(e) + n.x,
    y: t * Math.sin(e) + n.y
  };
}
function ft(e, t, n) {
  return a((e - t) / (n - t));
}
function dt(e) {
  if (typeof e != "number" || isNaN(e) || !isFinite(e))
    throw new Error("Input must be a finite number");
  return e % 1 !== 0;
}
function j(e) {
  return e % 2 == 0;
}
function gt(e) {
  return e % 2 == 1;
}
function mt(e, t) {
  return e % t == 0;
}
function yt(e) {
  const t = String(e);
  let n = 0;
  for (let i = 0; i < t.length; i++)
    n += Math.pow(t[i], t.length);
  return n === e;
}
function pt(e) {
  return typeof e == "number" && !isNaN(e);
}
function xt(e, t, n) {
  return t + (n - t) * e;
}
function wt(e, t, n, i, r) {
  return (e - t) * (r - i) / (n - t) + i;
}
function vt(...e) {
  const { length: t } = e;
  return t ? (z(e, !0), j(t) ? (e[t / 2 - 1] + e[t / 2]) / 2 : e[(t - 1) / 2]) : 0;
}
function bt(...e) {
  if (e.length === 1)
    return e[0];
  const t = {};
  let n = e[0], i = 0;
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    t[s] ? t[s]++ : t[s] = 1, i < t[s] && (n = s, i = t[s]);
  }
  return n;
}
function Mt(...e) {
  return e.reduce((t, n) => t * n, 1);
}
function y(e) {
  return e === 0 ? 0 : -Math.abs(e);
}
function Nt(e, t) {
  return 100 * e / t;
}
function m(e) {
  return e * (180 / Math.PI);
}
function zt(e, t, n = 1, i = []) {
  const r = [];
  for (let s = e; s < t + 1; s += n) {
    let l = !1;
    i.forEach(({ start: u, end: c }) => {
      s >= u && s <= c && (l = !0);
    }), l || r.push(s);
  }
  return r;
}
function Dt(e, t = 2) {
  if (typeof e != "number")
    throw new TypeError("The `num` parameter must be a number");
  if (typeof t != "number")
    throw new TypeError("The `maxOfDecimals` parameter must be a number");
  if (t < 0)
    throw new RangeError("The `maxOfDecimals` parameter must be greater than or equal to 0");
  const n = e.toString().indexOf(".") + 1;
  return n > 0 && e.toString().substring(n).length > t ? parseFloat(e.toFixed(t)) : e;
}
function St(...e) {
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
const Me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  average: ut,
  clamp: a,
  degreesToRadians: lt,
  divideEvenly: ot,
  divideEvenlyWithSpread: ht,
  division: at,
  factorial: O,
  getPositionWithAngleDistance: ct,
  invertedLerp: ft,
  isDecimal: dt,
  isEven: j,
  isMultipleOf: mt,
  isNarcissisticNumber: yt,
  isOdd: gt,
  isValidNumber: pt,
  lerp: xt,
  map: wt,
  median: vt,
  mode: bt,
  multiplication: Mt,
  negative: y,
  percentage: Nt,
  radiansToDegrees: m,
  range: zt,
  roundNumber: Dt,
  subtraction: St,
  sum: S
}, Symbol.toStringTag, { value: "Module" }));
function p(e, t, n, i) {
  return Math.atan2(i - t, n - e);
}
function Ot(e, t) {
  return p(e.x, e.y, t.x, t.y);
}
function T(e, t, n, i) {
  return m(p(e, t, n, i));
}
function jt(e, t) {
  return T(e.x, e.y, t.x, t.y);
}
function B(e, t) {
  const n = Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x), i = Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y);
  return Math.atan2(i, n);
}
function Tt(e, t, n, i, r, s, l, u) {
  return B(
    { x: e + n / 2, y: t + i / 2, width: n, height: i },
    { x: r + l / 2, y: s + u / 2, width: l, height: u }
  );
}
function Bt(e) {
  return Math.PI * e * e;
}
function Et(e, t) {
  return e * t;
}
function Ft(e) {
  return 2 * Math.PI * e;
}
function E(e, t) {
  return 2 * (e + t);
}
function At(e) {
  return E(e.x, e.y, e.width, e.height);
}
function x(e, t) {
  return e + t / 2;
}
function w(e, t) {
  return e + t / 2;
}
function F(e, t, n, i) {
  return { x: x(e, n), y: w(t, i) };
}
function Ct(e) {
  return x(e.x, e.width);
}
function It(e) {
  return w(e.y, e.height);
}
function qt(e) {
  return F(e.x, e.y, e.width, e.height);
}
function A(e, t, n, i) {
  return [
    { x: e, y: t },
    { x: e + n, y: t },
    { x: e + n, y: t + i },
    { x: e, y: t + i }
  ];
}
function Pt(e) {
  return A(e.x, e.y, e.width, e.height);
}
function v(e, t, n, i) {
  return Math.sqrt((e - n) * (e - n) + (t - i) * (t - i));
}
function Rt(e, t) {
  return v(e.x, e.y, t.x, t.y);
}
function C(e, t) {
  return v(e.x, e.y, t.x, t.y) - (e.radius + t.radius);
}
function _t(e, t, n, i, r, s) {
  return C(
    { x: e, y: t, radius: n },
    { x: i, y: r, radius: s }
  );
}
function I(e, t) {
  const n = Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x), i = Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y);
  return n * i;
}
function kt(e, t, n, i, r, s, l, u) {
  return I(
    { x: e + n / 2, y: t + i / 2, width: n, height: i },
    { x: r + l / 2, y: s + u / 2, width: l, height: u }
  );
}
function $t({
  keys: e = { forward: !1, left: !1, right: !1, reverse: !1 },
  x: t,
  y: n,
  speed: i,
  acceleration: r,
  maxSpeed: s = 1 / 0,
  friction: l = 0,
  rotation: u,
  rotationSpeed: c,
  bounds: f = {
    x: { min: -1 / 0, max: 1 / 0 },
    y: { min: -1 / 0, max: 1 / 0 }
  }
}) {
  e.forward ? i += r : e.reverse && (i -= r);
  const _ = Number(e.reverse) + 1;
  if (i > s ? i = s / _ : i < -s / 2 && (i = -s / 2), i > 0 ? i -= l : i < 0 && (i += l), Math.abs(i) < l && (i = 0), i) {
    const b = i > 0 ? 1 : -1;
    e.left && (u -= c * b), e.right && (u += c * b);
  }
  const k = t + Math.sin(u) * i, $ = n - Math.cos(u) * i;
  return {
    x: a(k, f.x.min, f.x.max),
    y: a($, f.y.min, f.y.max),
    speed: i,
    rotation: u
  };
}
class o {
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
    return new o(this.x, this.y);
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
  moveTowards(t = o.zero(), n = 1) {
    n = a(n, 0, 1);
    const r = t.subtract(this).scale(n);
    return this.add(r);
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
  distance(t = o.zero()) {
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
    const n = Math.cos(t), i = Math.sin(t), r = this.x * n - this.y * i, s = this.x * i + this.y * n;
    return this.set(r, s);
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
    return this.x = y(this.x), this.y = y(this.y), this;
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
    return new o(0);
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
    return new o(1);
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
    return new o(1 / 0);
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
    return new o(-1 / 0);
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
    return new o(0, -1);
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
    return new o(0, 1);
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
    return new o(-1, 0);
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
    return new o(1, 0);
  }
  /**
   * Creates a random vector with random normalized values
   * 
   * @returns {Vector2}
   */
  static random() {
    return new o(Math.random(), Math.random());
  }
}
const Ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Vector2: o,
  calcAngleBetweenRectangles: B,
  calcAngleBetweenRectanglesByCoordinates: Tt,
  calcAngleBetweenTwoPoints: p,
  calcAngleBetweenTwoPointsDegrees: T,
  calcAngleBetweenTwoPointsVector2: Ot,
  calcAngleBetweenTwoPointsVector2Degrees: jt,
  calcCircleArea: Bt,
  calcCirclePerimeter: Ft,
  calcDistanceBetweenCircles: C,
  calcDistanceBetweenCirclesByCoordinates: _t,
  calcDistanceBetweenTwoPointObjects: Rt,
  calcDistanceBetweenTwoPoints: v,
  calcOverlapBetweenRectangles: I,
  calcOverlapBetweenRectanglesByCoordinates: kt,
  calcRectangleArea: Et,
  calcRectangleCenter: F,
  calcRectangleCenterFromBounds: qt,
  calcRectangleCenterX: x,
  calcRectangleCenterXFromBounds: Ct,
  calcRectangleCenterY: w,
  calcRectangleCenterYFromBounds: It,
  calcRectanglePerimeter: At,
  calcRectanglePerimeterByDimensions: E,
  calcRectangleVertices: A,
  calcVerticesFromRectangleBounds: Pt,
  topDownCarMovimentation: $t
}, Symbol.toStringTag, { value: "Module" }));
class Lt {
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
    let i = (...r) => {
      n(...r), this.off(t);
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
const ze = new Lt();
class De {
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
function Se(e = 20) {
  const t = [0, 1];
  for (; t.length < e; )
    t.push(t[t.length - 2] + t[t.length - 1]);
  return t;
}
function Oe(e = 100) {
  const t = [0, 1];
  do {
    if (t[t.length - 2] + t[t.length - 1] >= e)
      return t;
    t.push(t[t.length - 2] + t[t.length - 1]);
  } while (t[t.length - 1] < e);
}
function je(e = 1, t = 100) {
  const n = [];
  let i = 0, r = e;
  for (; r <= t; ) {
    const s = r + i;
    i = r, r = s, n.push(r);
  }
  return n;
}
function M(e = 10) {
  return e <= 1 ? e : M(e - 1) + M(e - 2);
}
function Te(e) {
  for (let t = 1; t < e.length; t++)
    if (e[0] != e[t])
      return !1;
  return !0;
}
function Be(e) {
  if (typeof e == "string")
    return parseInt(e, 2);
}
function Ee(e = [0.25, 0.5, 0.25]) {
  let t = 0;
  const n = Math.random();
  for (let i = 0; i < e.length; i++)
    if (t += e[i], n <= t)
      return i;
}
function Fe(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
const Ae = 1024;
function Ce(e) {
  return Number(e).toString(2);
}
function Ie() {
  return {
    time: Jt(),
    milliseconds: Yt(),
    seconds: Gt(),
    minutes: Wt(),
    hours: Xt(),
    day: q(),
    weekDay: Ht(),
    week: Kt(),
    month: P(),
    year: R(),
    dateFormatted: Ut()
  };
}
function Jt() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Yt() {
  return (/* @__PURE__ */ new Date()).getMilliseconds();
}
function Gt() {
  return (/* @__PURE__ */ new Date()).getSeconds();
}
function Wt() {
  return (/* @__PURE__ */ new Date()).getMinutes();
}
function Xt() {
  return (/* @__PURE__ */ new Date()).getHours();
}
function q() {
  return (/* @__PURE__ */ new Date()).getDate();
}
function Ht() {
  return (/* @__PURE__ */ new Date()).getDay() + 1;
}
function Kt() {
  const e = /* @__PURE__ */ new Date(), t = new Date(e.getFullYear(), 0, 1), n = Math.floor((e - t) / (24 * 60 * 60 * 1e3));
  return Math.ceil(n / 7);
}
function P() {
  return (/* @__PURE__ */ new Date()).getMonth() + 1;
}
function R() {
  return (/* @__PURE__ */ new Date()).getFullYear();
}
function Ut() {
  return q() + "/" + P() + "/" + R();
}
const Qt = "utilidades", Vt = "1.3.2", Zt = "Just simple utils for javascript :)", te = "https://201flaviosilva-labs.github.io/utilidades/", ee = "201flaviosilva", ne = "MIT", ie = "module", re = "./dist/utilidades.umd.cjs", se = "./dist/utilidades.js", ue = "./types/main.d.ts", le = {
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
}, oe = {
  "@vitest/coverage-c8": "^0.31.4",
  "clean-jsdoc-theme": "^4.3.0",
  jsdoc: "^4.0.3",
  np: "^8.0.4",
  typescript: "^5.4.5",
  vite: "^4.5.3",
  vitest: "^0.31.4"
}, he = [
  "README.md",
  "CHANGELOG.md",
  "package.json",
  "dist",
  "types",
  "index.d.ts"
], ae = {
  types: "./types/main.d.ts",
  import: "./dist/utilidades.js",
  require: "./dist/utilidades.umd.cjs"
}, ce = {
  node: ">=16.0.0",
  npm: ">=7.0.0"
}, fe = [
  "utils"
], de = {
  type: "git",
  url: "git+https://github.com/201flaviosilva-labs/utilidades.git"
}, ge = {
  url: "https://github.com/201flaviosilva-labs/utilidades/issues"
}, me = {
  name: Qt,
  version: Vt,
  description: Zt,
  homepage: te,
  author: ee,
  license: ne,
  type: ie,
  main: re,
  module: se,
  types: ue,
  scripts: le,
  devDependencies: oe,
  files: he,
  exports: ae,
  engines: ce,
  keywords: fe,
  repository: de,
  bugs: ge
};
function qe() {
  return me.version;
}
function Pe(e) {
  return Object.keys(e).length === 0;
}
function ye(e) {
  try {
    if (!e || typeof e == "object" && Object.keys(e).length == 0)
      return !0;
  } catch {
    return !0;
  }
  return !1;
}
function Re(e) {
  return !ye(e);
}
function _e(...e) {
  for (let t = 0; t < e.length; t++)
    if (!e[t])
      return !1;
  return !0;
}
function ke(...e) {
  return !!e.find((t) => !!t);
}
function $e(e, t) {
  return !!e != !!t;
}
function Le() {
  return "#" + (Math.random() * 16777215 << 0).toString(16);
}
function Je() {
  return `0x${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function Ye() {
  return `rgb(${h(255)}, ${h(255)}, ${h(255)})`;
}
function Ge() {
  return `rgba(${h(255)}, ${h(255)}, ${h(255)}, ${Math.random().toFixed(5)})`;
}
function We(e = {
  numberCharacters: 12,
  numbers: !0,
  symbols: !0,
  capital: !0,
  small: !0
}) {
  const t = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "y", "Z"], n = ["a", "b", "c", "d", "e", "f", "G", "H", "I", "J", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], r = ["!", '"', "@", "#", "€", "$", "£", "%", "‰", "&", "¶", "/", "(", "[", ")", "]", "=", "≠", "'", "?", "+", "*"];
  let s = [];
  s = e.capital ? [...s, ...t] : [...s], s = e.small ? [...s, ...n] : [...s], s = e.numbers ? [...s, ...i] : [...s], s = e.symbols ? [...s, ...r] : [...s];
  let l = "";
  for (let u = 0; u < e.numberCharacters; u++)
    l += N(s);
  return l;
}
function Xe(e, t = 2) {
  let n = new Array(t).fill(0);
  for (let i = 0; i < e; i++) {
    const r = Math.random(), s = Math.floor(r * t);
    r < 0.5 ? n[s]++ : n[s]--;
  }
  return n;
}
function He(e) {
  return e.split("").reverse().join("");
}
async function Ke(e = 1e3) {
  if (typeof e != "number" || e < 0 || isNaN(e))
    throw new Error("Time must be a non-negative number");
  return new Promise((t) => setTimeout(t, e));
}
export {
  xe as Arrays,
  be as DataStructures,
  Lt as EventSystem,
  ze as EventSystemInstance,
  De as Fibonacci,
  Ae as MEGABYTE_IN_KILOBYTES,
  Me as Maths,
  Ne as Physics,
  Te as allCharactersSame,
  _e as and,
  Be as binary2Decimal,
  Ee as choiceTrend,
  Q as clone,
  Fe as compare2Objects,
  Ce as decimal2Binary,
  je as fibonacciCustomSequence,
  Se as fibonacciSequence,
  Oe as fibonacciUntil,
  Ie as getDate,
  qe as getVersion,
  ye as isFalsy,
  Pe as isObjectEmpty,
  Re as isTruthy,
  ke as or,
  Le as randomColor,
  Je as randomColor0X,
  J as randomFloat,
  h as randomInt,
  pe as randomNumber,
  Ge as randomRGBAColor,
  Ye as randomRGBColor,
  We as randomString,
  Xe as randomWalk,
  M as recursiveFibonacci,
  He as reverseString,
  Ke as sleep,
  $e as xor
};
