import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { RegistrationData } from '../../pages/Registration';
import { MapPin, Globe, ChevronRight } from 'lucide-react';

interface JobPreferencesProps {
  data: RegistrationData;
  updateData: (data: Partial<RegistrationData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const JobPreferences: React.FC<JobPreferencesProps> = ({ data, updateData, onSubmit, onBack }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      locations: data.locations || [],
      remote: data.remote || false,
      internshipTypes: data.internshipTypes || [],
      skillsInterest: data.skillsInterest || [],
      hiringFrequency: data.hiringFrequency || '',
    }
  });
  
  const remote = watch('remote');
  
  const onFormSubmit = (formData: any) => {
    updateData(formData);
    onSubmit();
  };
  
  const internshipTypeOptions = [
    'Summer Internship',
    'Fall Internship',
    'Spring Internship',
    'Year-round Internship',
    'Project-based Internship',
    'Co-op Program',
    'Apprenticeship',
  ];
  
  const skillOptions = [
    'Software Development',
    'Web Development',
    'Mobile Development',
    'Data Science',
    'UI/UX Design',
    'Product Management',
    'Marketing',
    'Sales',
    'Customer Success',
    'Business Development',
    'Finance',
    'Human Resources',
    'Operations',
    'Research',
    'Engineering',
  ];
  
  const frequencyOptions = [
    'Multiple times per year',
    'Once a year',
    'Every few years',
    'As needed',
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl font-bold mb-6">Job Posting Preferences</h2>
      
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="space-y-6">
          {/* Locations */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="locations" className="block text-sm font-medium text-gray-700">
                Office Locations
              </label>
              <div className="flex items-center">
                <input
                  id="remote"
                  type="checkbox"
                  {...register('remote')}
                  className="form-checkbox h-4 w-4 text-primary-600 rounded focus:ring-primary-500"
                />
                <label htmlFor="remote" className="ml-2 text-sm text-gray-700">
                  Remote positions available
                </label>
              </div>
            </div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {remote ? <Globe className="h-5 w-5 text-gray-400" /> : <MapPin className="h-5 w-5 text-gray-400" />}
              </div>
              <input
                type="text"
                id="locations"
                {...register('locations')}
                className="input-bordered pl-10 w-full"
                placeholder="Add locations (separate with commas)"
                disabled={remote}
              />
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {remote 
                ? 'You\'ve selected remote positions. You can still add specific locations if you have regional restrictions.'
                : 'Enter the cities or regions where your offices are located.'}
            </p>
          </div>
          
          {/* Internship Types */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Internship Types
            </label>
            <p className="text-sm text-gray-500 mb-4">
              Select the types of internships your company typically offers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {internshipTypeOptions.map((type) => (
                <label
                  key={type}
                  className="relative flex items-center p-3 rounded-md border border-gray-300 hover:border-primary-500 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={type}
                    {...register('internshipTypes')}
                    className="form-checkbox h-4 w-4 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-sm text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Skills Interest */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Skills of Interest
            </label>
            <p className="text-sm text-gray-500 mb-4">
              Select the skills you typically look for in interns.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {skillOptions.map((skill) => (
                <label
                  key={skill}
                  className="relative flex items-center p-3 rounded-md border border-gray-300 hover:border-primary-500 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={skill}
                    {...register('skillsInterest')}
                    className="form-checkbox h-4 w-4 text-primary-600 rounded focus:ring-primary-500"
                  />
                  <span className="ml-3 text-sm text-gray-700">{skill}</span>
                </label>
              ))}
            </div>
          </div>
          
          {/* Hiring Frequency */}
          <div>
            <label htmlFor="hiringFrequency" className="block text-sm font-medium text-gray-700 mb-1">
              How often do you typically hire interns?
            </label>
            
            <select
              id="hiringFrequency"
              {...register('hiringFrequency')}
              className="input-bordered w-full"
            >
              <option value="">Select hiring frequency</option>
              {frequencyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          
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
              Complete Registration <ChevronRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default JobPreferences;