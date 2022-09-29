export type ID = {
  id: number;
};

export type Photo = ID & {
  src: string;
  alt: string;
  srcSets?: PhotoResponsive[];
};

export type PhotoResponsive = {
  mediaQuery: string;
  source: string;
};

export type CarouselConfig = {
  navigation?: "center" | "start" | "end" | "hidden";
  modal?: boolean;
};
