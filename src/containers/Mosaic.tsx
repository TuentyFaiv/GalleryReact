import { useGalleryContext } from "../context/GalleryContext";
import { MosaicProps, SrcSet } from "../utils/types";

import "./styles/Mosaic.css";

const Mosaic = ({ styles, className, itemStyles, pictureStyles }: MosaicProps): JSX.Element => {
  const { photos, selectPhoto } = useGalleryContext();

  return (
    <section
      className={`gallery-mosaic${className ? ` ${className}` : ""}`}
      style={styles}
    >
      {photos?.getAllPhotos().map((photo, index) => (
        <button
          key={photo.value.id}
          onClick={() => selectPhoto(photo)}
          type="button"
          className="gallery-mosaic__item"
          style={itemStyles ? itemStyles(index) : {}}
        >
          <picture className="gallery-mosaic__picture" style={pictureStyles}>
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
