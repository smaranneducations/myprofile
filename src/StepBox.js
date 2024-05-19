import React from 'react';

const StepBox = ({ step }) => {
  return (
    <div className="flex items-center justify-center h-full p-2 bg-green-100 border-2 border-green-300 rounded-md">
      <span 
        className="text-gray-800 font-medium"
        style={{ fontSize: '2.5vh', fontFamily: 'Roboto, sans-serif' }}
      >
        {step}
      </span>
    </div>
  );
};

export default StepBox;
