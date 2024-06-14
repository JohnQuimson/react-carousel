import './Card.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Card = ({ title, image, prevClick, afterClick }) => {
  return (
    <>
      <button onClick={prevClick}>
        <IoIosArrowBack />
      </button>
      <div className="card">
        <div className="cont-img">
          <img
            src={image || 'https://dummyimage.com/600x400/000/fff'}
            alt="def-img"
          />
        </div>
        <div className="cont-info">
          <h4>{title}</h4>
        </div>
      </div>
      <button onClick={afterClick}>
        <span>
          <IoIosArrowForward />
        </span>
      </button>
    </>
  );
};

export default Card;
