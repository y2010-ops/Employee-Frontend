import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const RegistrationComplete: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-8"
    >
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-success-50">
        <CheckCircle className="h-10 w-10 text-success-500" />
      </div>
      
      <h2 className="mt-6 text-3xl font-bold text-gray-900">Registration Complete!</h2>
      
      <p className="mt-2 text-lg text-gray-600">
        Thank you for registering your company with InternConnect.
      </p>
      
      <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-medium text-gray-900 mb-3">What's Next?</h3>
        <ul className="space-y-3 text-left">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 text-primary-500">✓</span>
            <span className="ml-2 text-gray-600">Complete your company profile to attract top talent</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 text-primary-500">✓</span>
            <span className="ml-2 text-gray-600">Create your first internship posting</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 text-primary-500">✓</span>
            <span className="ml-2 text-gray-600">Invite team members to collaborate</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 text-primary-500">✓</span>
            <span className="ml-2 text-gray-600">Start discovering qualified candidates</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-8">
        <Link to="/dashboard" className="btn btn-primary px-8 py-3">
          Go to Dashboard
        </Link>
      </div>
    </motion.div>
  );
};

export default RegistrationComplete;