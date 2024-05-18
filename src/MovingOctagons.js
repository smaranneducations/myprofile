import React, { useState, useEffect } from 'react';
import Octagon from './Octagon';
import boardroom from './backgroundpics/boardroom.jpg'; // Import the background image

const OCTAGON_SIZE = 100; // Size of the octagon

const getRandomPosition = (maxWidth, maxHeight) => {
  const top = Math.random() * (maxHeight - OCTAGON_SIZE);
  const left = Math.random() * (maxWidth - OCTAGON_SIZE);
  return { top, left, velocityX: Math.random() * 4 - 2, velocityY: Math.random() * 4 - 2 };
};

const checkCollision = (pos1, pos2) => {
  return (
    Math.abs(pos1.top - pos2.top) < OCTAGON_SIZE &&
    Math.abs(pos1.left - pos2.left) < OCTAGON_SIZE
  );
};

const bounceOffEdges = (position, maxWidth, maxHeight) => {
  if (position.top <= 0 || position.top >= maxHeight - OCTAGON_SIZE) {
    position.velocityY *= -1;
    position.top = Math.max(0, Math.min(position.top, maxHeight - OCTAGON_SIZE));
  }
  if (position.left <= 0 || position.left >= maxWidth - OCTAGON_SIZE) {
    position.velocityX *= -1;
    position.left = Math.max(0, Math.min(position.left, maxWidth - OCTAGON_SIZE));
  }
  return position;
};

const updatePosition = (position, maxWidth, maxHeight) => {
  position.top += position.velocityY;
  position.left += position.velocityX;
  return bounceOffEdges(position, maxWidth, maxHeight);
};

const handleCollisions = (positions) => {
  for (let i = 0; i < positions.length; i++) {
    for (let j = i + 1; j < positions.length; j++) {
      if (checkCollision(positions[i], positions[j])) {
        [positions[i].velocityX, positions[j].velocityX] = [positions[j].velocityX, positions[i].velocityX];
        [positions[i].velocityY, positions[j].velocityY] = [positions[j].velocityY, positions[i].velocityY];
      }
    }
  }
  return positions;
};

const MovingOctagons = () => {
  const maxWidth = window.innerWidth * 0.495; // 49.5% of window width
  const maxHeight = window.innerHeight * 0.99; // 99% of window height

  const initialPositions = [
    { ...getRandomPosition(maxWidth, maxHeight), text: 'ICT Invoicing', color: '#B39EB5' }, // Light purple
    { ...getRandomPosition(maxWidth, maxHeight), text: 'AR/AP Aging', color: '#FF6961' }, // Light red
    { ...getRandomPosition(maxWidth, maxHeight), text: 'Internal Audit & Controls', color: '#FDFD96' }, // Light yellow
    { ...getRandomPosition(maxWidth, maxHeight), text: 'ITSM Analytics', color: '#CFCFC4' }, // Light grey
    { ...getRandomPosition(maxWidth, maxHeight), text: 'Financial Consolidation', color: '#FFB347' }, // Light orange
    { ...getRandomPosition(maxWidth, maxHeight), text: 'ESG Reporting', color: '#FF6961' }, // Light red
    { ...getRandomPosition(maxWidth, maxHeight), text: 'Management Reporting', color: '#77DD77' }, // Light green
  ];

  const [positions, setPositions] = useState(initialPositions);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) => {
        let newPositions = prevPositions.map((position) => updatePosition(position, maxWidth, maxHeight));
        newPositions = handleCollisions(newPositions);
        return [...newPositions];
      });
    }, 50); // Update positions every 50 milliseconds

    return () => clearInterval(interval);
  }, [maxWidth, maxHeight]);

  return (
    <div
      className="relative h-[99%] w-[49.5%] border-4 overflow-hidden"
      style={{ 
        backgroundImage: `url(${boardroom})`, 
        backgroundSize: 'cover',  // Ensures the image covers the entire area of the container
        backgroundPosition: 'center',  // Centers the image in the container
        backgroundRepeat: 'no-repeat',  // Prevents the image from repeating
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.3)',  // 3D effect
        borderColor: 'rgba(0, 0, 0, 0.5)'  // Darker border color for effect
      }}
    >
      {positions.map((position, index) => (
        <Octagon key={index} position={position} />
      ))}
    </div>
  );
};

export default MovingOctagons;
