import { useEffect } from "react";
import { withContext } from "../hoc/withContext";
import { CarouselProps, SrcSet } from "../utils/types";

import "./styles/Carousel.css";

const Carousel = ({ photos, activePhoto, selectPhoto, ...props }: CarouselProps): JSX.Element => {
  const allPhotos = photos?.getAllPhotos();

  useEffect(() => {
    if (!props.config?.modal && photos) {
      selectPhoto(photos.head);
    }
  }, [props.config?.modal, photos, selectPhoto]);

  return (
    <section
      className={`gallery-carousel${props.className ? ` ${props.className}` : ""}`}
      style={props.styles}
      data-modal={props.config?.modal}
      data-navigation={props.config?.navigation}
    >
      <div className="gallery-carousel__container">
        <button
          type="button"
          className="gallery-carousel__button"
          data-action="prev"
          data-icon={!!props.prevIcon}
          onClick={() => {
            if (activePhoto && photos) {
              selectPhoto(activePhoto.prev || photos.tail);
            }
          }}
        >
          {props.prevIcon ? (
            <img src={props.prevIcon} alt="" className="gallery-carousel__button-icon" />
          ) : null}
        </button>
        <div className="gallery-carousel__content">
          <picture className="gallery-carousel__picture">
            {activePhoto?.value.srcSets?.map((src: SrcSet) => (
              <source
                key={src.mediaQuery}
                media={src.mediaQuery}
                srcSet={src.source}
              />
            ))}
            <img
              className="gallery-carousel__image"
              src={activePhoto?.value.src}
              alt={activePhoto?.value.alt}
            />
          </picture>
          {(props.onFooter && activePhoto) ? props.onFooter(activePhoto.value) : null}
        </div>
        <button
          type="button"
          className="gallery-carousel__button"
          data-action="next"
          data-icon={!!props.nextIcon}
          onClick={() => {
            if (activePhoto && photos) {
              selectPhoto(activePhoto.next || photos.head);
            }
          }}
        >
          {props.nextIcon ? (
            <img src={props.nextIcon} alt="" className="gallery-carousel__button-icon" />
          ) : null}
        </button>
      </div>
      <div
        className="gallery-carousel__navigation"
        data-navigation={props.config?.navigation}
      >
        {allPhotos?.map((photo) => (
          <button
            key={photo.value.id}
            type="button"
            className="gallery-carousel__dot"
            data-active={photo.value.id === activePhoto?.value.id}
            onClick={() => {
              if (activePhoto) selectPhoto(photo);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default withContext(Carousel);
