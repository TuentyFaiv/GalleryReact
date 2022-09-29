import type { DoubleLinkedList, Node } from "../structures";
import type { CarouselFloatProps, ChildrenProps } from "./proptypes";
import type { Photo } from "./types";

export type GalleryCtx<T extends Photo = Photo> = {
  photos: DoubleLinkedList<T> | null;
  activePhoto: Node<T> | null;
  selectPhoto: (node: Node<T> | null, id?: number) => void;
};
export type GalleyCtxProps = ChildrenProps & {
  photos: Photo[]
};

export type WithContext = ChildrenProps & CarouselFloatProps;
