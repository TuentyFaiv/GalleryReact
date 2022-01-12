export class Node {
  next: Node | null;
  prev: Node | null;
  value: any;

  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
