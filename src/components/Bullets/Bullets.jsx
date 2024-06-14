import React from 'react';
import './Bullets.scss';
import { FaCircle, FaRegCircle } from 'react-icons/fa';

const Bullets = ({ active }) => {
  return (
    <div className="bullet">
      {active ? <FaCircle /> : <FaRegCircle className="nonActive" />}
    </div>
  );
};

export default Bullets;
