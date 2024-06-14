import './Card.scss';
import blogImage from '../../assets/image.png';
import { FaInfo, FaLongArrowAltRight } from 'react-icons/fa';

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="cont-img">
          <img src={blogImage} alt="img-600x400" />
        </div>
        <div className="cont-info">
          <h4>Titolo del Post</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
