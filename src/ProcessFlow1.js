import React from 'react';
import StepBox from './StepBox';



const steps1 = [
  "No analytics", "Descriptive", "Diagnostic", "Predictive", "Prescriptive"
];

const ProcessFlow = () => {
  const numberOfSteps = steps1.length;
  const margin = 4; // Margin between boxes (in pixels)
  const containerPadding = 32; // px (equivalent to `px-4` on both sides)
  const stepWidthPercentage = `calc((100% - ${(numberOfSteps - 1) * margin}px - ${containerPadding}px) / ${numberOfSteps})`;

  return (
    <div className="relative w-[57.5vw] h-[10vh] bg-green-300 mx-1 flex items-center justify-between px-4">
      {steps1.map((step, index) => (
        <div key={index} className="items-center justify-between h-[4vh]" style={{ flexBasis: stepWidthPercentage, margin: `0 ${margin / 2}px` }}>
          <StepBox step={step} />
        </div>
      ))}
      <div className="absolute right-0 top-0 h-full w-8" style={{ right: '-2vw' }}>
        <div className="absolute right-0 top-0 h-0 w-0 border-t-[5vh] border-t-transparent border-l-[2vw] border-l-green-300 border-b-[5vh] border-b-transparent"></div>
      </div>
    </div>
  );
};

export default ProcessFlow;
