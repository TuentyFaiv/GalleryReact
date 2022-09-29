import type { CardProps } from "../common/typing/proptypes";

const Card = ({ title, photo, text, className }: CardProps) => (
  <article className={className ?? "gallery-card"}>
    <h1>{title}</h1>
    <picture>
      {photo.srcSets?.map((src) => (
        <source
          key={src.mediaQuery}
          media={src.mediaQuery}
          srcSet={src.source}
        />
      ))}
      <img
        src={photo.src}
        alt={photo.alt}
      />
    </picture>
    <p>{text}</p>
  </article>
);

export default Card;
