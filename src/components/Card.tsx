import "./styles/Card.css";

type PropsCard = {
  title: string;
  img: string;
  text: string;
};

const Card = ({ title, img, text }: PropsCard): JSX.Element => (
  <article>
    <h1>{title}</h1>
    <img src={img} alt="" />
    <p>{text}</p>
  </article>
);

export default Card;
