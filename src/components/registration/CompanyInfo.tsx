import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { RegistrationData } from '../../pages/Registration';
import { Building, AtSign, Globe, Users, Upload, FileText } from 'lucide-react';

interface CompanyInfoProps {
  data: RegistrationData;
  updateData: (data: Partial<RegistrationData>) => void;
  onNext: () => void;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ data, updateData, onNext }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      companyName: data.companyName,
      companyEmail: data.companyEmail,
      website: data.website,
      companySize: data.companySize,
      logo: data.logo,
      description: data.description,
    }
  });
  
  const onSubmit = (formData: any) => {
    updateData(formData);
    onNext();
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl font-bold mb-6">Company Information</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="companyName"
                  type="text"
                  {...register('companyName', { required: 'Company name is required' })}
                  className="input-bordered pl-10 w-full"
                  placeholder="Your company name"
                />
              </div>
              {errors.companyName && (
                <p className="mt-1 text-sm text-error-500">{errors.companyName.message}</p>
              )}
            </div>
            
            {/* Company Email */}
            <div>
              <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Company Email*
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AtSign className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="companyEmail"
                  type="email"
                  {...register('companyEmail', { 
                    required: 'Company email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    }
                  })}
                  className="input-bordered pl-10 w-full"
                  placeholder="company@example.com"
                />
              </div>
              {errors.companyEmail && (
                <p className="mt-1 text-sm text-error-500">{errors.companyEmail.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Website */}
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                Company Website
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="website"
                  type="url"
                  {...register('website', {
                    pattern: {
                      value: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+/,
                      message: 'Enter a valid URL',
                    }
                  })}
                  className="input-bordered pl-10 w-full"
                  placeholder="https://yourcompany.com"
                />
              </div>
              {errors.website && (
                <p className="mt-1 text-sm text-error-500">{errors.website.message}</p>
              )}
            </div>
            
            {/* Company Size */}
            <div>
              <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                Company Size
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="companySize"
                  {...register('companySize')}
                  className="input-bordered pl-10 w-full appearance-none"
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1001+">1001+ employees</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Logo Upload */}
          <div>
            <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1">
              Company Logo
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="logo"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none"
                  >
                    <span>Upload a file</span>
                    <input
                      id="logo"
                      type="file"
                      className="sr-only"
                      {...register('logo')}
                      accept="image/*"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 2MB
                </p>
              </div>
            </div>
          </div>
          
          {/* Company Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Company Description
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                <FileText className="h-5 w-5 text-gray-400" />
              </div>
              <textarea
                id="description"
                rows={4}
                {...register('description')}
                className="input-bordered pl-10 w-full"
                placeholder="Tell us about your company..."
              />
            </div>
          </div>
          
          {/* Social login options */}
          <div className="border-t pt-6">
            <p className="text-sm font-medium text-gray-700 mb-4">Or connect with:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                className="btn btn-outline flex items-center justify-center"
                onClick={() => {/* Social login logic */}}
              >
                <img src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png" alt="Google" className="w-5 h-5 mr-2" />
                Continue with Google
              </button>
              <button
                type="button"
                className="btn btn-outline flex items-center justify-center"
                onClick={() => {/* Social login logic */}}
              >
                <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" className="w-5 h-5 mr-2" />
                Continue with LinkedIn
              </button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default CompanyInfo;