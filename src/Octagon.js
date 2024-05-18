import React, { useState, useEffect, useRef } from 'react';
import octagonfootball from './backgroundpics/octagonfootball.jpg';

const Octagon = ({ position }) => {
  const [fontSize, setFontSize] = useState(16); // Start with a default font size
  const textRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      if (textRef.current) {
        const maxHeight = 100; // Octagon height
        const maxWidth = 100; // Octagon width calculated from clip-path geometry
        let newSize = fontSize;

        while (textRef.current.scrollHeight > maxHeight || textRef.current.scrollWidth > maxWidth) {
          newSize--;
          textRef.current.style.fontSize = `${newSize}px`;
          if (newSize <= 8) break; // Stop resizing if the text is too small
        }

        while (textRef.current.scrollHeight < maxHeight && textRef.current.scrollWidth < maxWidth && newSize < 16) {
          newSize++;
          textRef.current.style.fontSize = `${newSize}px`;
        }
      }
    };

    adjustFontSize();
  }, [position.text, fontSize]);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: '100px',
        height: '100px',
        backgroundImage: `url(${octagonfootball})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      <div
        ref={textRef}
        style={{
          textAlign: 'center',
          color: 'white',
          padding: '5px',
          overflow: 'hidden',
          fontSize: `${fontSize}px`, // Initial font size
          width: '100%', // Ensures the div fills the octagon
          height: '100%', // Ensures the div fills the octagon
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold', // Make the text bold
        }}
      >
        {position.text}
      </div>
    </div>
  );
};

export default Octagon;
