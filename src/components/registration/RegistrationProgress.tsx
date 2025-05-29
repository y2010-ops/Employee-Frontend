import React from 'react';
import { useLocation } from 'react-router-dom';
import { Check } from 'lucide-react';

interface Step {
  name: string;
  path: string;
}

interface RegistrationProgressProps {
  steps: Step[];
}

const RegistrationProgress: React.FC<RegistrationProgressProps> = ({ steps }) => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || '';
  
  const getCurrentStepIndex = () => {
    return steps.findIndex(step => step.path === currentPath);
  };
  
  const currentStepIndex = getCurrentStepIndex();
  
  return (
    <div className="hidden md:block">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.path}>
            {/* Step indicator */}
            <div className="flex flex-col items-center">
              <div 
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 
                  ${index < currentStepIndex 
                    ? 'bg-primary-600 border-primary-600 text-white' 
                    : index === currentStepIndex 
                      ? 'border-primary-600 text-primary-600' 
                      : 'border-gray-300 text-gray-300'
                  }`}
              >
                {index < currentStepIndex ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span 
                className={`mt-2 text-sm ${
                  index <= currentStepIndex ? 'text-gray-900 font-medium' : 'text-gray-500'
                }`}
              >
                {step.name}
              </span>
            </div>
            
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div 
                className={`w-full h-0.5 ${
                  index < currentStepIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RegistrationProgress;