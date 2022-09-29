import type { CSSProperties, ReactNode } from "react";
import type { GalleryCtx } from "./contexts";
import type { CarouselConfig, Photo } from "./types";

export type ChildrenProps = {
  children?: ReactNode;
};

export type CardProps = {
  title: string;
  photo: Photo;
  text: string;
};

export type ModalProps = ChildrenProps & {
  styles?: CSSProperties;
  className?: string;
  onClose: (custom?: unknown) => void;
};

export type CarouselProps = GalleryCtx & {
  styles?: CSSProperties;
  className?: string;
  config?: CarouselConfig;
  onFooter?: (props: any) => ReactNode;
  prevIcon?: string;
  nextIcon?: string;
};

export type CarouselFloatProps = CarouselProps & {
  modalStyles?: CSSProperties;
  modalClassName?: string;
};

export type MosaicProps = {
  styles?: CSSProperties;
  className?: string;
  itemStyles?: (item: number) => CSSProperties;
  pictureStyles?: CSSProperties;
  onHover?: (props: any) => ReactNode;
};

export type SayHelloProps = { name: string };
