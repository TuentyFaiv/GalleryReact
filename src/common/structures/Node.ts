export default class Node<T> {
  next: Node<T> | null;
  prev: Node<T> | null;
  value: T;

  constructor(value: T) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
