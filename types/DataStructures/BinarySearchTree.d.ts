/**
 * @class
 * @name BSTNode
 * @classdesc Create a node for BinarySearchTree
 *
 * @param {number} value - The value to be stored in the node
 *
 * @property {number} value - The value stored in the node
 * @property {BSTNode|null} left - The left node in the tree
 * @property {BSTNode|null} right - The right node in the tree
 */
export class Node {
    constructor(value: any);
    value: any;
    left: any;
    right: any;
}
/**
 * @class
 * @name BinarySearchTree
 * @classdesc
 * Starts a Binary Search Tree algorithm
 *
 * Online example {@link https://8jn8z1.csb.app/}
 *
 * @see{@link https://en.wikipedia.org/wiki/Binary_search_tree}
 *
 *
 * @example
 * const bst = new BinarySearchTree();
 * bst.add(1);
 * bst.add(0);
 * bst.delete(0);
 *
 * @param {number[]|number} [value] - The value to start the tree
 *
 * @property {BSTNode|null} root - The root node of the tree
 * @property {number} count - The number of nodes in the tree
 */
export class BinarySearchTree {
    constructor(value: any);
    root: any;
    count: number;
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
    add(value: number): this;
    /**
     * Finds the smallest value in the tree.
     *
     * - If a value is passed it will look for the smallest value from that branch;
     * - If no value is passed, it will start from the root;
     *
     * @param {number|undefined} [value] - the value to start searching
     * @returns {number|undefined|null} smaller value
     */
    smaller(value?: number | undefined): number | undefined | null;
    /**
     * Finds the largest value in the tree.
     *
     * - If a value is passed it will look for the largest value from that branch;
     * - If no value is passed, it will start from the root;
     *
     * @param {number} value - the value to start searching
     * @returns {number|undefined|null} largest value
     */
    larger(value: number): number | undefined | null;
    /**
     * - Returns `false` if the number does not exist or if there is an error
     * - If the number exists, return its node/true
     *
     * @param {number} value - the value to find
     * @param {boolean} [returnNode=true] - if the node should be returned
     * @returns {BSTNode|null} if the value is in the Tree
     */
    search(value: number, returnNode?: boolean): BSTNode | null;
    /**
     * Delete the node with the given value
     *
     * @param {number} value - the value to delete
     * @param {boolean} [returnNode=false] - if the node should be returned
     * @returns {BSTNode|BinarySearchTree} if the value is in the Tree
     */
    delete(value: number, returnNode?: boolean): BSTNode | BinarySearchTree;
    /**
     * Returns a string representation of the tree
     *
     * @returns {string} the string representation
     */
    toString(): string;
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
    private _insertNode;
    /**
     * This function finds the parent of the given node
     *
     * @param {BSTNode} node - the node to find the parent
     * @returns {BSTNode|null} the parent of the given node
     *
     * @private
     */
    private _findParent;
}
/**
 *
 * @example
 * BinarySearchTreeInstance.add(1);
 * BinarySearchTreeInstance.add(0);
 * BinarySearchTreeInstance.delete(0);
 */
export const BinarySearchTreeInstance: BinarySearchTree;
