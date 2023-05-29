function J(e) {
  return e.every((t) => JSON.stringify(t) === JSON.stringify(e[0]));
}
function Y(e = 0, t = 1, n = 2) {
  return t === void 0 && (t = e, e = 0), parseFloat((Math.random() * (t - e) + e).toFixed(n));
}
function h(e, t) {
  return t === void 0 && (t = e, e = 0), Math.round(e + Math.random() * (t - e));
}
function ge(e, t) {
  return Y(e, t);
}
function N(e) {
  return e[h(e.length)];
}
function L(e, t = 1) {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push(e.slice(r, r + t));
  return n;
}
function W(e, t, n = !1) {
  const r = Math.max(...e.map((i) => i[t]));
  return n ? r : e.find((i) => i[t] === r);
}
function G(e, t, n = !1) {
  const r = Math.min(...e.map((i) => i[t]));
  return n ? r : e.find((i) => i[t] === r);
}
function X(e = []) {
  for (let t = 0; t < e.length - 1; t++)
    if (e[t] > e[t + 1])
      return !1;
  return !0;
}
function H(e = [], t = 1) {
  for (let n = 0; n < t; n++) {
    let r = e[e.length - 1];
    for (let i = e.length - 2; i >= 0; i--) {
      const s = e[i];
      e[i] = r, r = s;
    }
    e[e.length - 1] = r;
  }
  return e;
}
function K(e = [], t = 1) {
  for (let n = 0; n < t; n++) {
    let r = e[0];
    for (let i = 1; i < e.length; i++) {
      const s = e[i];
      e[i] = r, r = s;
    }
    e[0] = r;
  }
  return e;
}
function U(e, t) {
  const n = /* @__PURE__ */ new Set();
  return e.filter((r) => {
    const i = r[t];
    return n.has(i) ? !1 : (n.add(i), !0);
  });
}
function Q(e) {
  return JSON.parse(JSON.stringify(e));
}
function V(e, t = !0) {
  if (t)
    return e.sort(() => Math.random() - 0.5);
  const n = Q(e), r = [];
  for (; n.length; ) {
    const i = h(n.length);
    r.push(n[i]), n.splice(i, 1);
  }
  return r;
}
function D(e, t = !1) {
  return t ? e.sort((n, r) => n - r) : [...e].sort((n, r) => n - r);
}
function Z(e, t, n = !1) {
  return n ? e.sort((r, i) => r[t] - i[t]) : [...e].sort((r, i) => r[t] - i[t]);
}
function tt(e, t = !1) {
  return t ? e.sort((n, r) => r - n) : [...e].sort((n, r) => r - n);
}
function et(e, t, n = !1) {
  return n ? e.sort((r, i) => i[t] - r[t]) : [...e].sort((r, i) => i[t] - r[t]);
}
const me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  allEqual: J,
  choice: N,
  chunk: L,
  findBigObject: W,
  findLowObject: G,
  isSorted: X,
  moveLeft: H,
  moveRight: K,
  removeDuplicatesObj: U,
  shuffle: V,
  sortAscending: D,
  sortAscendingObject: Z,
  sortDescending: tt,
  sortDescendingObject: et
}, Symbol.toStringTag, { value: "Module" }));
let nt = class {
  constructor(t) {
    this.value = t, this.left = null, this.right = null, this.parent = null;
  }
};
class S {
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
    let r = this.root;
    for (; r; ) {
      if (t === r.value)
        return;
      if (r.value > t)
        if (r.left === null) {
          n.parent = r, r.left = n, this.count++;
          break;
        } else
          r = r.left;
      else if (r.right === null) {
        n.parent = r, r.right = n, this.count++;
        break;
      } else
        r = r.right;
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
    var r, i;
    const n = this.search(t);
    if (!n)
      return !1;
    if (n.left === null && n.right === null)
      ((r = n.parent.left) == null ? void 0 : r.value) === n.value ? n.parent.left = null : n.parent.right = null;
    else if (n.left !== null && n.right === null || n.left === null && n.right !== null) {
      const s = n.left || n.right;
      s.parent = n.parent, ((i = n.parent.left) == null ? void 0 : i.value) === n.value ? n.parent.left = s : n.parent.right = s;
    } else if (n.left !== null && n.right !== null) {
      const s = this.search(this.larger(n.left.value));
      s.value === n.left.value ? n.left = null : s.parent.right = null, n.value = s.value;
    } else
      throw new Error("Error deleting value");
  }
}
const rt = new S();
class g {
  /**
   * Creates a new Node instance.
   * @param {*} value - The value to be stored in the node.
   */
  constructor(t) {
    this.value = t, this.next = null;
  }
}
class it {
  /**
   * Creates a new LinkedList instance.
   * @param {*} value - The value to initialize the list with (optional).
   */
  constructor(t) {
    if (t !== void 0) {
      const n = new g(t);
      this.head = n, this.tail = n, this.size = 1;
    } else
      this.head = null, this.tail = null, this.size = 0;
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
    let r = 0, i = this.head;
    for (; i !== null; ) {
      if (r === t)
        return n ? i : i.value;
      i = i.next, r++;
    }
    return i;
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
    const r = this.get(t, !0);
    return r ? (r.value = n, !0) : !1;
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
    const r = new g(n), i = this.get(t - 1, !0);
    return r.next = i.next, i.next = r, this.size++, this;
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
    if (!this.size)
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
    const n = this.get(t - 1, !0), r = n.next;
    return n.next = r.next, r.next = null, this.size--, r.value;
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
    let n = null, r = null;
    for (let i = 0; i < this.size; i++)
      r = t.next, t.next = n, n = t, t = r;
    return this;
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
const xe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BinarySearchTree: S,
  BinarySearchTreeInstance: rt,
  LinkedList: it
}, Symbol.toStringTag, { value: "Module" }));
function O(...e) {
  return e.reduce((t, n) => t + n, 0);
}
function st(...e) {
  return e.length ? O(...e) / e.length : 0;
}
function a(e, t = 0, n = 1) {
  return Math.min(n, Math.max(t, e));
}
function ut(e) {
  return e * (Math.PI / 180);
}
function ot(e = 0, t = 10, n = 5) {
  const r = [], i = (t - e) / (n - 1);
  for (let s = 0; s < n; s++)
    r.push(e + i * s);
  return r;
}
function lt(e = 3, t = 5) {
  if (e <= 1)
    return [0];
  const n = [];
  for (let r = 0; r < e; r++)
    n.push(-t + r * (2 * t) / (e - 1));
  return n;
}
function ht(...e) {
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
function j(e) {
  return e <= 1 ? e : e * j(e - 1);
}
function ct(e, t, n = { x: 0, y: 0 }) {
  return {
    x: t * Math.cos(e) + n.x,
    y: t * Math.sin(e) + n.y
  };
}
function at(e, t, n) {
  return a((e - t) / (n - t));
}
function B(e) {
  return e % 2 == 0;
}
function ft(e) {
  return e % 2 == 1;
}
function dt(e, t) {
  return e % t == 0;
}
function gt(e) {
  const t = String(e);
  let n = 0;
  for (let r = 0; r < t.length; r++)
    n += Math.pow(t[r], t.length);
  return n === e;
}
function mt(e) {
  return typeof e == "number" && !isNaN(e);
}
function yt(e, t, n) {
  return t + (n - t) * e;
}
function xt(e, t, n, r, i) {
  return (e - t) * (i - r) / (n - t) + r;
}
function pt(...e) {
  const { length: t } = e;
  return t ? (D(e, !0), B(t) ? (e[t / 2 - 1] + e[t / 2]) / 2 : e[(t - 1) / 2]) : 0;
}
function wt(...e) {
  if (e.length === 1)
    return e[0];
  const t = {};
  let n = e[0], r = 0;
  for (let i = 0; i < e.length; i++) {
    const s = e[i];
    t[s] ? t[s]++ : t[s] = 1, r < t[s] && (n = s, r = t[s]);
  }
  return n;
}
function bt(...e) {
  return e.reduce((t, n) => t * n, 1);
}
function y(e) {
  return e === 0 ? 0 : -Math.abs(e);
}
function vt(e, t) {
  return 100 * e / t;
}
function m(e) {
  return e * (180 / Math.PI);
}
function Mt(e, t, n = 1, r = []) {
  const i = [];
  for (let s = e; s < t + 1; s += n) {
    let o = !1;
    r.forEach(({ start: u, end: f }) => {
      s >= u && s <= f && (o = !0);
    }), o || i.push(s);
  }
  return i;
}
function Nt(e, t = 2) {
  if (typeof e != "number")
    throw new TypeError("The `num` parameter must be a number");
  if (typeof t != "number")
    throw new TypeError("The `maxOfDecimals` parameter must be a number");
  if (t < 0)
    throw new RangeError("The `maxOfDecimals` parameter must be greater than or equal to 0");
  const n = e.toString().indexOf(".") + 1;
  return n > 0 && e.toString().substring(n).length > t ? parseFloat(e.toFixed(t)) : e;
}
function Dt(...e) {
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
const pe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  average: st,
  clamp: a,
  degreesToRadians: ut,
  divideEvenly: ot,
  divideEvenlyWithSpread: lt,
  division: ht,
  factorial: j,
  getPositionWithAngleDistance: ct,
  invertedLerp: at,
  isEven: B,
  isMultipleOf: dt,
  isNarcissisticNumber: gt,
  isOdd: ft,
  isValidNumber: mt,
  lerp: yt,
  map: xt,
  median: pt,
  mode: wt,
  multiplication: bt,
  negative: y,
  percentage: vt,
  radiansToDegrees: m,
  range: Mt,
  roundNumber: Nt,
  subtraction: Dt,
  sum: O
}, Symbol.toStringTag, { value: "Module" }));
function x(e, t, n, r) {
  return Math.atan2(r - t, n - e);
}
function St(e, t) {
  return x(e.x, e.y, t.x, t.y);
}
function T(e, t, n, r) {
  return m(x(e, t, n, r));
}
function Ot(e, t) {
  return T(e.x, e.y, t.x, t.y);
}
function z(e, t) {
  const n = Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x), r = Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y);
  return Math.atan2(r, n);
}
function jt(e, t, n, r, i, s, o, u) {
  return z(
    { x: e + n / 2, y: t + r / 2, width: n, height: r },
    { x: i + o / 2, y: s + u / 2, width: o, height: u }
  );
}
function Bt(e) {
  return Math.PI * e * e;
}
function Tt(e, t) {
  return e * t;
}
function zt(e) {
  return 2 * Math.PI * e;
}
function F(e, t) {
  return 2 * (e + t);
}
function Ft(e) {
  return F(e.x, e.y, e.width, e.height);
}
function p(e, t) {
  return e + t / 2;
}
function w(e, t) {
  return e + t / 2;
}
function C(e, t, n, r) {
  return { x: p(e, n), y: w(t, r) };
}
function Ct(e) {
  return p(e.x, e.width);
}
function qt(e) {
  return w(e.y, e.height);
}
function Et(e) {
  return C(e.x, e.y, e.width, e.height);
}
function q(e, t, n, r) {
  return [
    { x: e, y: t },
    { x: e + n, y: t },
    { x: e + n, y: t + r },
    { x: e, y: t + r }
  ];
}
function It(e) {
  return q(e.x, e.y, e.width, e.height);
}
function b(e, t, n, r) {
  return Math.sqrt((e - n) * (e - n) + (t - r) * (t - r));
}
function Pt(e, t) {
  return b(e.x, e.y, t.x, t.y);
}
function E(e, t) {
  return b(e.x, e.y, t.x, t.y) - (e.radius + t.radius);
}
function Rt(e, t, n, r, i, s) {
  return E(
    { x: e, y: t, radius: n },
    { x: r, y: i, radius: s }
  );
}
function I(e, t) {
  const n = Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x), r = Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y);
  return n * r;
}
function _t(e, t, n, r, i, s, o, u) {
  return I(
    { x: e + n / 2, y: t + r / 2, width: n, height: r },
    { x: i + o / 2, y: s + u / 2, width: o, height: u }
  );
}
function At({
  keys: e = { forward: !1, left: !1, right: !1, reverse: !1 },
  x: t,
  y: n,
  speed: r,
  acceleration: i,
  maxSpeed: s = 1 / 0,
  friction: o = 0,
  rotation: u,
  rotationSpeed: f,
  bounds: d = {
    x: { min: -1 / 0, max: 1 / 0 },
    y: { min: -1 / 0, max: 1 / 0 }
  }
}) {
  e.forward ? r += i : e.reverse && (r -= i);
  const A = Number(e.reverse) + 1;
  if (r > s ? r = s / A : r < -s / 2 && (r = -s / 2), r > 0 ? r -= o : r < 0 && (r += o), Math.abs(r) < o && (r = 0), r) {
    const v = r > 0 ? 1 : -1;
    e.left && (u -= f * v), e.right && (u += f * v);
  }
  const k = t + Math.sin(u) * r, $ = n - Math.cos(u) * r;
  return {
    x: a(k, d.x.min, d.x.max),
    y: a($, d.y.min, d.y.max),
    speed: r,
    rotation: u
  };
}
class l {
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
    return new l(this.x, this.y);
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
  moveTowards(t = l.zero(), n = 1) {
    n = a(n, 0, 1);
    const i = t.subtract(this).scale(n);
    return this.add(i);
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
  distance(t = l.zero()) {
    const n = this.x - t.x, r = this.y - t.y;
    return n * n + r * r;
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
    const n = Math.cos(t), r = Math.sin(t), i = this.x * n - this.y * r, s = this.x * r + this.y * n;
    return this.set(i, s);
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
    return new l(0);
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
    return new l(1);
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
    return new l(1 / 0);
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
    return new l(-1 / 0);
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
    return new l(0, -1);
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
    return new l(0, 1);
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
    return new l(-1, 0);
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
    return new l(1, 0);
  }
  /**
   * Creates a random vector with random normalized values
   * 
   * @returns {Vector2}
   */
  static random() {
    return new l(Math.random(), Math.random());
  }
}
const we = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Vector2: l,
  calcAngleBetweenRectangles: z,
  calcAngleBetweenRectanglesByCoordinates: jt,
  calcAngleBetweenTwoPoints: x,
  calcAngleBetweenTwoPointsDegrees: T,
  calcAngleBetweenTwoPointsVector2: St,
  calcAngleBetweenTwoPointsVector2Degrees: Ot,
  calcCircleArea: Bt,
  calcCirclePerimeter: zt,
  calcDistanceBetweenCircles: E,
  calcDistanceBetweenCirclesByCoordinates: Rt,
  calcDistanceBetweenTwoPointObjects: Pt,
  calcDistanceBetweenTwoPoints: b,
  calcOverlapBetweenRectangles: I,
  calcOverlapBetweenRectanglesByCoordinates: _t,
  calcRectangleArea: Tt,
  calcRectangleCenter: C,
  calcRectangleCenterFromBounds: Et,
  calcRectangleCenterX: p,
  calcRectangleCenterXFromBounds: Ct,
  calcRectangleCenterY: w,
  calcRectangleCenterYFromBounds: qt,
  calcRectanglePerimeter: Ft,
  calcRectanglePerimeterByDimensions: F,
  calcRectangleVertices: q,
  calcVerticesFromRectangleBounds: It,
  topDownCarMovimentation: At
}, Symbol.toStringTag, { value: "Module" }));
class kt {
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
    this.has(t) && this.events[t].forEach((r) => {
      r(...n);
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
    let r = (...i) => {
      n(...i), this.off(t);
    };
    this.on(t, r);
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
const be = new kt();
class ve {
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
function Me(e = 20) {
  const t = [0, 1];
  for (; t.length < e; )
    t.push(t[t.length - 2] + t[t.length - 1]);
  return t;
}
function Ne(e = 100) {
  const t = [0, 1];
  do {
    if (t[t.length - 2] + t[t.length - 1] >= e)
      return t;
    t.push(t[t.length - 2] + t[t.length - 1]);
  } while (t[t.length - 1] < e);
}
function De(e = 1, t = 100) {
  const n = [];
  let r = 0, i = e;
  for (; i <= t; ) {
    const s = i + r;
    r = i, i = s, n.push(i);
  }
  return n;
}
function M(e = 10) {
  return e <= 1 ? e : M(e - 1) + M(e - 2);
}
function Se(e) {
  for (let t = 1; t < e.length; t++)
    if (e[0] != e[t])
      return !1;
  return !0;
}
function Oe(e) {
  if (typeof e == "string")
    return parseInt(e, 2);
}
function je(e = [0.25, 0.5, 0.25]) {
  let t = 0;
  const n = Math.random();
  for (let r = 0; r < e.length; r++)
    if (t += e[r], n <= t)
      return r;
}
function Be(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
const Te = 1024;
function ze(e) {
  return Number(e).toString(2);
}
function Fe() {
  return {
    time: $t(),
    milliseconds: Jt(),
    seconds: Yt(),
    minutes: Lt(),
    hours: Wt(),
    day: P(),
    weekDay: Gt(),
    week: Xt(),
    month: R(),
    year: _(),
    dateFormatted: Ht()
  };
}
function $t() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Jt() {
  return (/* @__PURE__ */ new Date()).getMilliseconds();
}
function Yt() {
  return (/* @__PURE__ */ new Date()).getSeconds();
}
function Lt() {
  return (/* @__PURE__ */ new Date()).getMinutes();
}
function Wt() {
  return (/* @__PURE__ */ new Date()).getHours();
}
function P() {
  return (/* @__PURE__ */ new Date()).getDate();
}
function Gt() {
  return (/* @__PURE__ */ new Date()).getDay() + 1;
}
function Xt() {
  const e = /* @__PURE__ */ new Date(), t = new Date(e.getFullYear(), 0, 1), n = Math.floor((e - t) / (24 * 60 * 60 * 1e3));
  return Math.ceil(n / 7);
}
function R() {
  return (/* @__PURE__ */ new Date()).getMonth() + 1;
}
function _() {
  return (/* @__PURE__ */ new Date()).getFullYear();
}
function Ht() {
  return P() + "/" + R() + "/" + _();
}
const Kt = "utilidades", Ut = "1.3.2", Qt = "Just simple utils for javascript :)", Vt = "https://201flaviosilva-labs.github.io/utilidades/", Zt = "201flaviosilva", te = "MIT", ee = "module", ne = "./dist/counter.umd.cjs", re = "./dist/counter.js", ie = "./types/main.d.ts", se = {
  clear: "rm -rf types && rm -rf docs && rm -rf build && rm -rf dist",
  dev: "vite",
  test: "vitest --watch=false",
  "test:dev": "vitest",
  jsdoc: "jsdoc -c jsdoc.conf.json",
  types: "npx -p typescript tsc src/*.js --declaration --allowJs --emitDeclarationOnly --outDir types",
  compile: "vite build",
  build: "npm run clear && npm run compile && npm run jsdoc && npm run types",
  bump: "npm run build && np --no-cleanup --any-branch"
}, ue = {
  "@vitest/coverage-c8": "^0.31.1",
  "clean-jsdoc-theme": "^4.2.6",
  jsdoc: "^4.0.2",
  np: "^7.6.3",
  typescript: "^4.9.5",
  vite: "^4.0.4",
  vitest: "^0.31.1"
}, oe = [
  "README.md",
  "CHANGELOG.md",
  "package.json",
  "dist",
  "types",
  "index.d.ts"
], le = {
  types: "./types/main.d.ts",
  import: "./dist/counter.js",
  require: "./dist/counter.umd.cjs"
}, he = [
  "utils"
], ce = {
  type: "git",
  url: "git+https://github.com/201flaviosilva-labs/utilidades.git"
}, ae = {
  url: "https://github.com/201flaviosilva-labs/utilidades/issues"
}, fe = {
  name: Kt,
  version: Ut,
  description: Qt,
  homepage: Vt,
  author: Zt,
  license: te,
  type: ee,
  main: ne,
  module: re,
  types: ie,
  scripts: se,
  devDependencies: ue,
  files: oe,
  exports: le,
  keywords: he,
  repository: ce,
  bugs: ae
};
function Ce() {
  return fe.version;
}
function qe(e) {
  return Object.keys(e).length === 0;
}
function de(e) {
  try {
    if (!e || typeof e == "object" && Object.keys(e).length == 0)
      return !0;
  } catch {
    return !0;
  }
  return !1;
}
function Ee(e) {
  return !de(e);
}
function Ie(...e) {
  for (let t = 0; t < e.length; t++)
    if (!e[t])
      return !1;
  return !0;
}
function Pe(...e) {
  return !!e.find((t) => !!t);
}
function Re(e, t) {
  return !!e != !!t;
}
function _e() {
  return "#" + (Math.random() * 16777215 << 0).toString(16);
}
function Ae() {
  return `0x${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function ke() {
  return `rgb(${h(255)}, ${h(255)}, ${h(255)})`;
}
function $e() {
  return `rgba(${h(255)}, ${h(255)}, ${h(255)}, ${Math.random().toFixed(5)})`;
}
function Je(e = {
  numberCharacters: 12,
  numbers: !0,
  symbols: !0,
  capital: !0,
  small: !0
}) {
  const t = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "y", "Z"], n = ["a", "b", "c", "d", "e", "f", "G", "H", "I", "J", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], r = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], i = ["!", '"', "@", "#", "€", "$", "£", "%", "‰", "&", "¶", "/", "(", "[", ")", "]", "=", "≠", "'", "?", "+", "*"];
  let s = [];
  s = e.capital ? [...s, ...t] : [...s], s = e.small ? [...s, ...n] : [...s], s = e.numbers ? [...s, ...r] : [...s], s = e.symbols ? [...s, ...i] : [...s];
  let o = "";
  for (let u = 0; u < e.numberCharacters; u++)
    o += N(s);
  return o;
}
function c() {
  return [Math.random() < 0.5 ? -1 : 1];
}
function Ye() {
  return Math.random() < 0.5 ? [...c(), 0] : [0, ...c()];
}
function Le() {
  const e = Math.random();
  return e < 0.333 ? [...c(), 0, 0] : e < 0.666 ? [0, ...c(), 0] : [0, 0, ...c()];
}
function We(e) {
  return e.split("").reverse().join("");
}
export {
  me as Arrays,
  xe as DataStructures,
  kt as EventSystem,
  be as EventSystemInstance,
  ve as Fibonacci,
  Te as MEGABYTE_IN_KILOBYTES,
  pe as Maths,
  we as Physics,
  Se as allCharactersSame,
  Ie as and,
  Oe as binary2Decimal,
  je as choiceTrend,
  Q as clone,
  Be as compare2Objects,
  ze as decimal2Binary,
  De as fibonacciCustomSequence,
  Me as fibonacciSequence,
  Ne as fibonacciUntil,
  Fe as getDate,
  Ce as getVersion,
  de as isFalsy,
  qe as isObjectEmpty,
  Ee as isTruthy,
  Pe as or,
  _e as randomColor,
  Ae as randomColor0X,
  Y as randomFloat,
  h as randomInt,
  ge as randomNumber,
  $e as randomRGBAColor,
  ke as randomRGBColor,
  Je as randomString,
  c as randomWalk1D,
  Ye as randomWalk2D,
  Le as randomWalk3D,
  M as recursiveFibonacci,
  We as reverseString,
  Re as xor
};
