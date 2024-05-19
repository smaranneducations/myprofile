import React from 'react';
import carImage from './backgroundpics/car.jpg';
import './MovingCar.css';

const MovingCar = () => {
  return (
    <div className="car-container">
      <img src={carImage} alt="Car" className="car" />
    </div>
  );
};

export default MovingCar;
