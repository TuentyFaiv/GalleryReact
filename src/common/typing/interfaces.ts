import type { Node } from "../structures";
import type { Alignment } from "./types";

export interface LinkedList<T> {
  head: Node<T>;
  tail: Node<T>;
  length: number;
}

export interface ID {
  id: number;
}

export interface Photo extends ID {
  src: string;
  alt: string;
  srcSets?: PhotoResponsive[];
}

export interface PhotoResponsive {
  mediaQuery: string;
  source: string;
}

export interface CarouselConfig {
  navigation?: Alignment;
  modal?: boolean;
}

