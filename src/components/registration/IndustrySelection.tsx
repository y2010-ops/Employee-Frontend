import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { RegistrationData } from '../../pages/Registration';
import { ChevronRight } from 'lucide-react';

interface IndustrySelectionProps {
  data: RegistrationData;
  updateData: (data: Partial<RegistrationData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const industryOptions = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'Manufacturing',
  'Retail',
  'Media & Entertainment',
  'Professional Services',
  'Hospitality',
  'Construction',
  'Real Estate',
  'Transportation',
  'Energy',
  'Agriculture',
  'Government',
  'Non-profit',
];

const subIndustryMapping: Record<string, string[]> = {
  'Technology': [
    'Software Development',
    'IT Services',
    'Hardware',
    'Cloud Computing',
    'Artificial Intelligence',
    'Cybersecurity',
    'Data Analytics',
    'Telecommunications',
  ],
  'Healthcare': [
    'Hospitals',
    'Pharmaceuticals',
    'Medical Devices',
    'Biotechnology',
    'Health Insurance',
    'Digital Health',
    'Mental Health Services',
  ],
  'Finance': [
    'Banking',
    'Investment Management',
    'Insurance',
    'Financial Technology',
    'Accounting',
    'Wealth Management',
    'Cryptocurrency',
  ],
  // Add mappings for other industries as needed
};

const IndustrySelection: React.FC<IndustrySelectionProps> = ({ data, updateData, onNext, onBack }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      industry: data.industry,
      subIndustries: data.subIndustries,
    }
  });
  
  const selectedIndustries = watch('industry', []);
  
  const onSubmit = (formData: any) => {
    updateData(formData);
    onNext();
  };
  
  // Get all available sub-industries based on selected industries
  const getAvailableSubIndustries = () => {
    let subIndustries: string[] = [];
    selectedIndustries.forEach(industry => {
      if (subIndustryMapping[industry]) {
        subIndustries = [...subIndustries, ...subIndustryMapping[industry]];
      }
    });
    return subIndustries;
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl font-bold mb-6">Industry Selection</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          {/* Industry Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Primary Industries* (up to 3)
            </label>
            <p className="text-sm text-gray-500 mb-4">
              Choose the main industries your company operates in.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {industryOptions.map((industry) => (
                <label
                  key={industry}
                  className="relative flex items-center p-4 rounded-md border border-gray-300 hover:border-primary-500 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={industry}
                    {...register('industry', { 
                      required: 'Please select at least one industry',
                      validate: {
                        maxThree: (value) => 
                          !value || value.length <= 3 || 'You can select up to 3 industries'
                      }
                    })}
                    className="form-checkbox h-5 w-5 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-gray-700">{industry}</span>
                </label>
              ))}
            </div>
            
            {errors.industry && (
              <p className="mt-2 text-sm text-error-500">{errors.industry.message}</p>
            )}
          </div>
          
          {/* Sub-Industry Selection */}
          {selectedIndustries.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Specific Focus Areas
              </label>
              <p className="text-sm text-gray-500 mb-4">
                Choose the specific areas within your selected industries.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {getAvailableSubIndustries().map((subIndustry) => (
                  <label
                    key={subIndustry}
                    className="relative flex items-center p-4 rounded-md border border-gray-300 hover:border-primary-500 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={subIndustry}
                      {...register('subIndustries')}
                      className="form-checkbox h-5 w-5 text-primary-600 rounded focus:ring-primary-500"
                    />
                    <span className="ml-3 text-gray-700">{subIndustry}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={onBack}
              className="btn btn-outline"
            >
              Back
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Continue <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default IndustrySelection;