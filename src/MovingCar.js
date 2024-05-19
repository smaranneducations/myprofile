import React, { useEffect, useRef } from 'react';
import carImage from './backgroundpics/car.jpg';
import './MovingCar.css';

const MovingCar = () => {
  const carRef = useRef(null);

  useEffect(() => {
    const car = carRef.current;

    const resetAnimation = () => {
      car.style.animation = 'none';
      void car.offsetHeight; // Trigger reflow
      car.style.animation = 'drive 10s linear infinite'; // Reapply the animation
    };

    resetAnimation();
  }, []);

  return (
    <div className="fixed bottom-0 left-0 w-full overflow-hidden">
      <img src={carImage} alt="Car" className="car" ref={carRef} />
    </div>
  );
};

export default MovingCar;
