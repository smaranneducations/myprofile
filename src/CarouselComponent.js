import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css'; // Custom styles if needed

const CarouselComponent = ({ items, onItemClick }) => {
  return (
    <div className="w-[98%] h-[40vh] mx-auto bg-gray-200">
      <Carousel
        showArrows
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="carousel"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => onItemClick(item)}
            style={{ width: '100%', height: '40vh' }} // Ensure each item takes the full size of the parent container
          >
            <img 
              src={item.image} 
              alt={item.text} 
              className="object-cover w-full h-full" 
              style={{ maxWidth: '100%', maxHeight: '100%' }} // Maintain aspect ratio
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2">
              <p className="text-lg font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
