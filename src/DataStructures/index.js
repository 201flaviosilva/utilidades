// https://js-sdsl.org/#/README

import { BinarySearchTree, BinarySearchTreeInstance, Node as BSTNode, } from "./BinarySearchTree.js";
import { Node as DLLNode, DoublyLinkedList, } from "./DoublyLinkedList.js";
import { LinkedList, Node as LLNode, } from "./LinkedList.js";
import { Queue, Node as QueueNode, } from "./Queue.js";
import { Stack, Node as StackNode, } from "./Stack.js";

/**
 * @namespace DataStructures
 * @description Some data structure
 * 
 * @example
 * import { DataStructures } from "utilidades";
 * const { BinarySearchTree, DoublyLinkedList, LinkedList, Queue, Stack } = DataStructures;
 *
 * @property {BinarySearchTree} BinarySearchTree
 * @property {DoublyLinkedList} DoublyLinkedList
 * @property {LinkedList} LinkedList
 * @property {Queue} Queue
 * @property {Stack} Stack
 */
export {
	BinarySearchTree, BinarySearchTreeInstance, BSTNode,
	DLLNode, DoublyLinkedList,
	LinkedList, LLNode,
	Queue, QueueNode,
	Stack, StackNode
};

