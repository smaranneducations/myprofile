import React from 'react';
import StepBox from './StepBox';

const steps = [
  "Collect", "Calculate", "Augment", "Consolidate", "Adjust", "Validate", "Publish"
];

const ProcessFlow = () => {
  const numberOfSteps = steps.length;
  const margin = 4; // Margin between boxes (in pixels)
  const containerPadding = 32; // px (equivalent to `px-4` on both sides)
  const stepWidthPercentage = `calc((100% - ${(numberOfSteps - 1) * margin * 2}px - ${containerPadding}px) / ${numberOfSteps})`;

  return (
    <div className="relative w-[55vw] h-[10vh] bg-blue-500 mx-auto flex items-center px-4 ">
      {steps.map((step, index) => (
        <div key={index} className="h-full" style={{ width: stepWidthPercentage, margin: `0 ${margin}px` }}>
          <StepBox step={step} />
        </div>
      ))}
      <div className="absolute right-0 top-0 h-full w-8" style={{ right: '-2vw' }}>
        <div className="absolute right-0 top-0 h-0 w-0 border-t-[5vh] border-t-transparent border-l-[2vw] border-l-blue-500 border-b-[5vh] border-b-transparent"></div>
      </div>
    </div>
  );
};

export default ProcessFlow;
