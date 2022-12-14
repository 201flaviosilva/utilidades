/**
 * @class Node
 * @classdesc Create a node for BinarySearchTree
 */
export class Node {
    constructor(value: any);
    value: any;
    left: any;
    right: any;
    parent: any;
}
/**
 * @class BinarySearchTree
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
 * @constructor
 */
export class BinarySearchTree {
    constructor(startValue: any);
    root: Node;
    count: number;
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
    size(): number;
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
    add(value: number): void;
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
    smaller(value: number): number | undefined;
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
    larger(value: number): number | undefined;
    /**
     * - Returns `false` if the number does not exist or if there is an error
     * - If the number exists, return its node
     *
     * @param {number} value - the value to find
     * @returns {Node} if the value is in the Tree
     * @memberof BinarySearchTree
     */
    search(value: number): Node;
    /**
     * Delete the node with the given value
     *
     * @param {number} value - the value to delete
     * @returns {boolean} if the node was deleted
     * @memberof BinarySearchTree
     */
    delete(value: number): boolean;
}
/**
 *
 * @example
 * BinarySearchTreeInstance.add(1);
 * BinarySearchTreeInstance.add(0);
 * BinarySearchTreeInstance.delete(0);
 */
export const BinarySearchTreeInstance: BinarySearchTree;
