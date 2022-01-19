import { MouseEventHandler, ReactNode } from "react";
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
  onHover?: (props: any) => ReactNode;
};

export type ModalProps = ChildrenProp & {
  styles?: React.CSSProperties;
  className?: string;
  onClose: MouseEventHandler<HTMLElement>
};

export type CarouselConfig = {
  navigation?: "center" | "start" | "end" | "hidden";
  modal?: boolean
};

export type CarouselProps = GalleryCtx & {
  styles?: React.CSSProperties;
  className?: string;
  config?: CarouselConfig;
  onFooter?: (props: any) => ReactNode;
  prevIcon?: string;
  nextIcon?: string;
};

export type CarouselFloatProps = CarouselProps & {
  modalStyles?: React.CSSProperties;
  modalClassName?: string;
};

export type WithContext = ChildrenProp & CarouselFloatProps;
