import GalleryProvider from "./context/GalleryContext";
import Mosaic from "./containers/Mosaic";
import Carousel from "./containers/Carousel";
import CarouselFloat from "./containers/CarouselFloat";
import Card from "./components/Card";

export {
  GalleryProvider,
  Carousel,
  CarouselFloat,
  Mosaic,
  Card
};

export function sayHello(name: string): string {
  return `Hey ${name}, thanks for downloading this library ❤️`;
}
