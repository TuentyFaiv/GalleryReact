import { Node } from "./Node";

export class DoubleLinkedList {
  head: Node;
  tail: Node;
  length: number;

  constructor(values: any[] = []) {
    const [firstValue, ...otherValues]: any = values;

    this.head = new Node(firstValue);
    this.tail = this.head;
    this.length = 1;

    if (otherValues.length > 0) this.appendItems(otherValues);
  }

  getAllPhotos(): Node[] {
    let count = 0;
    let currentNode = this.head;
    const values: Node[] = [];

    while (count < this.length) {
      values.push(currentNode);
      if (currentNode.next) currentNode = currentNode.next;
      count += 1;
    }

    return values;
  }

  appendItems(items: any[]) {
    items.forEach((item) => {
      this.append(item);
    });
  }

  append(value: any) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;

    return this;
  }

  prepend(value: any) {
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;

    return this;
  }

  insert(value: any, index: number) {
    if (index >= this.length) return this.append(value);
    if (index <= 0) return this.prepend(value);

    const newNode = new Node(value);
    const firstPointer = this.findIndex(index - 1);
    const holdingPointer = firstPointer.next;

    if (holdingPointer) holdingPointer.prev = newNode;
    newNode.next = holdingPointer;
    newNode.prev = firstPointer;
    firstPointer.next = newNode;

    this.length += 1;

    return this;
  }

  remove(index?: number) {
    let indexToRemove: number;

    if (!index || index >= this.length) {
      indexToRemove = this.length - 2;
    } else {
      indexToRemove = index - 1;
    }

    const pointer = this.findIndex(indexToRemove);
    const nodeToRemove = pointer.next;
    const holdingPointer = nodeToRemove?.next || null;

    if (holdingPointer) holdingPointer.prev = pointer;
    pointer.next = holdingPointer;

    if (!holdingPointer) this.tail = pointer;

    this.length -= 1;

    return this;
  }

  findIndex(index: number) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      if (currentNode.next) currentNode = currentNode.next;
      count += 1;
    }

    return currentNode;
  }

  findItem(id: number) {
    let currentNode = this.head;

    while (currentNode.value?.id !== id) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        return null;
      }
    }

    return currentNode;
  }
}
