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

export const SayHello = ({ name }: { name: string }): JSX.Element => (
  <p>
    {`Hey ${name}, thanks for downloading @tuentyfaiv/gallery-react ❤️`}
    <br />
    See more libraries
    <a href="https://tuentyfaiv.com/packages" target="_blank" rel="noopener noreferrer">
      here
    </a>
  </p>
);
