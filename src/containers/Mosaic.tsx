import { useState } from "react";
import { useGalleryContext } from "../context/GalleryContext";
import { MosaicProps, SrcSet } from "../utils/types";

import "./styles/Mosaic.css";

const Mosaic = ({ styles, className, itemStyles, ...props }: MosaicProps): JSX.Element => {
  const { photos, selectPhoto } = useGalleryContext();
  const [hover, setHover] = useState<number | null>(null);

  const handleHover = (id: number | null) => {
    setHover(id);
  };

  return (
    <section
      className={className ?? "gallery-mosaic"}
      style={styles}
    >
      {photos?.getAllPhotos().map((photo, index) => (
        <button
          key={photo.value.id}
          onClick={() => selectPhoto(photo)}
          onMouseEnter={() => handleHover(photo.value.id)}
          onMouseLeave={() => handleHover(null)}
          onFocus={() => handleHover(photo.value.id)}
          type="button"
          className="gallery-mosaic__item"
          style={itemStyles ? itemStyles(index) : {}}
        >
          {(props.onHover && photo.value.id === hover) ? props.onHover(photo.value) : null }
          <picture className="gallery-mosaic__picture" style={props.pictureStyles}>
            {photo.value.srcSets?.map((src: SrcSet) => (
              <source
                key={src.mediaQuery}
                media={src.mediaQuery}
                srcSet={src.source}
              />
            ))}
            <img
              className="gallery-mosaic__image"
              src={photo.value.src}
              alt={photo.value.alt}
            />
          </picture>
        </button>
      ))}
    </section>
  );
};

export default Mosaic;
