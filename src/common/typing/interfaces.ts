import type { Node } from "../structures";

export interface LinkedList<T> {
  head: Node<T>;
  tail: Node<T>;
  length: number;
}
