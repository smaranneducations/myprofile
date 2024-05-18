import React from 'react';

const StepBox = ({ step }) => {
  return (
    <div className="flex items-center justify-center  h-full p-2 bg-blue-100 border-2 border-blue-300 rounded-md">
      <span className="text-gray-800 font-medium text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{step}</span>
    </div>
  );
};

export default StepBox;
