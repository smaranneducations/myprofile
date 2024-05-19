import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css'; // Custom styles if needed

const CarouselComponent = ({ items, onItemClick }) => {
  return (
    <div className="w-full h-full mx-auto bg-gray-200">
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
            style={{ width: '100%', height: '50vh'}} // Ensure each item takes the full height of the viewport
          >
            <div className="w-full h-[100%] bg-blue-900">
              <img 
                src={item.image} 
                alt={item.text} 
                className="w-full h-[100%] object-cover" 
              />
              <div className="absolute bottom-0 left-0 right-0 h-[30%] w-full bg-gray-300 bg-opacity-70 text-black text-center flex items-start justify-left p-4">
                <p className="text-lg font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
