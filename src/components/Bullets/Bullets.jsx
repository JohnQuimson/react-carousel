import React from 'react';
import './Bullets.scss';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

const Bullets = ({ active, index, onClick }) => {
  return (
    <div className="bullet" onClick={() => onClick(index)}>
      {active ? <FaCircle /> : <FaRegCircle className="nonActive" />}
    </div>
  );
};

export default Bullets;
