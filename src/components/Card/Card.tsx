import "./Card.css";
import rocket from "../../assets/svgs/rocket.svg";

type CardProps = {
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  publishedAt: string;
};

const Card: React.FC<CardProps> = ({
  title,
  url,
  imageUrl,
  newsSite,
  publishedAt,
}) => {
  const updateDate = (unformattedDate: string): string => {
    const dateArr = unformattedDate.split("-");
    return `${dateArr[2]}/${dateArr[1]}/${dateArr[0]}`;
  };

  return (
    <div className="card">
      <img className="card__image" src={imageUrl} alt={title} />
      <div className="card__info">
        <p className="card__info-source">{newsSite}</p>
        <h2 className="card__info-title">{title}</h2>
        <p className="card__info-date">
          {updateDate(publishedAt.slice(0, 10))}
        </p>
      </div>
      <a href={url} className="card__rocket" target="_blank" rel="noreferrer">
        <img src={rocket} alt="" />
      </a>
    </div>
  );
};

export default Card;
