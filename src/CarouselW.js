import React, { useEffect, useRef } from 'react';
import './CarouselW.css'; // Import custom CSS for patterns and styling

const CarouselW = ({ words }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animation;

    const startAnimation = () => {
      animation = container.animate(
        [
          { transform: 'translateX(0)' },
          { transform: `translateX(-${container.scrollWidth / 2}px)` }
        ],
        {
          duration: 100000, // Adjust duration as needed
          iterations: Infinity,
          easing: 'linear'
        }
      );
    };

    startAnimation();

    return () => {
      if (animation) {
        animation.cancel();
      }
    };
  }, [words]);

  return (
    <div className="relative overflow-hidden" style={{ height: '80%', width: '100%' }}>
      <div
        ref={containerRef}
        className="absolute flex items-center"
        style={{ whiteSpace: 'nowrap' }}
      >
        {words.map((word, index) => (
          <div
            key={index}
            className="pattern-bg mx-[1vw] flex items-center justify-center"
            style={{
              height: '60%',
              width: `${word.length * 1.2}vw`, // Adjust multiplier as needed
              marginRight: '2vw',
            }}
          >
            <span className="text-center text-grey font-normal text-3xl font-helvetica">{word}</span>
          </div>
        ))}
        {words.map((word, index) => (
          <div
            key={index + words.length}
            className="pattern-bg mx-[1vw] flex items-center justify-center"
            style={{
              height: '60%',
              width: `${word.length * 1.2}vw`, // Adjust multiplier as needed
              marginRight: '2vw'
            }}
          >
            <span className="text-center text-grey font-normal text-3xl font-helvetica">{word}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselW;
