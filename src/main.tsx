import type { SayHelloProps } from "./common/typing/proptypes";

export { GalleryProvider } from "./context";
export { Card } from "./components";
export { Mosaic, Carousel, CarouselFloat } from "./containers";

export const SayHello = ({ name }: SayHelloProps) => (
  <p>
    {`Hey ${name}, thanks for downloading @tuentyfaiv/gallery-react ❤️`}
    <br />
    See more libraries
    <a href="https://tuentyfaiv.com/packages" target="_blank" rel="noopener noreferrer">
      here
    </a>
  </p>
);
