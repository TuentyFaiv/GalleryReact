import { MouseEventHandler } from "react";
import { DoubleLinkedList, Node } from "./structures";

export enum Keys {
  escape = "Escape"
}

export type GalleryCtx = {
  photos: DoubleLinkedList | null;
  activePhoto: Node | null;
  selectPhoto: (node: Node | null, id?: number) => void;
};

export type Photo = {
  id: number;
  src: string;
  alt: string;
  srcSets?: SrcSet[];
};

export type SrcSet = {
  mediaQuery: string;
  source: string;
};

export type ChildrenProp = {
  children?: React.ReactNode;
};

export type GalleyCtxProps = ChildrenProp & {
  photos: Photo[]
};

export type MosaicProps = {
  styles?: React.CSSProperties;
  className?: string;
  itemStyles?: (item: number) => React.CSSProperties;
  pictureStyles?: React.CSSProperties;
};

export type ModalProps = ChildrenProp & {
  styles?: React.CSSProperties;
  className?: string;
  onClose: MouseEventHandler<HTMLElement>
};

export type CarouselConfig = {
  navigation?: "center" | "start" | "end";
  modal?: boolean
};

export type CarouselProps = GalleryCtx & {
  styles?: React.CSSProperties;
  className?: string;
  config?: CarouselConfig
};

export type CarouselFloatProps = CarouselProps & {
  modalStyles?: React.CSSProperties;
  modalClassName?: string;
};

export type WithContext = ChildrenProp & CarouselFloatProps;
