import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import CompanyInfo from '../components/registration/CompanyInfo';
import IndustrySelection from '../components/registration/IndustrySelection';
import TeamDetails from '../components/registration/TeamDetails';
import JobPreferences from '../components/registration/JobPreferences';
import RegistrationComplete from '../components/registration/RegistrationComplete';
import RegistrationProgress from '../components/registration/RegistrationProgress';
import { useAuth } from '../context/AuthContext';

export interface RegistrationData {
  companyName: string;
  companyEmail: string;
  website: string;
  companySize: string;
  logo: string;
  description: string;
  industry: string[];
  subIndustries: string[];
  teamMembers: Array<{
    name: string;
    position: string;
    email: string;
  }>;
  locations: string[];
  remote: boolean;
  internshipTypes: string[];
  skillsInterest: string[];
  hiringFrequency: string;
}

const Registration: React.FC = () => {
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    companyName: '',
    companyEmail: '',
    website: '',
    companySize: '',
    logo: '',
    description: '',
    industry: [],
    subIndustries: [],
    teamMembers: [],
    locations: [],
    remote: false,
    internshipTypes: [],
    skillsInterest: [],
    hiringFrequency: '',
  });
  
  const [steps] = useState([
    { name: 'Company Info', path: 'company-info' },
    { name: 'Industry', path: 'industry' },
    { name: 'Team', path: 'team' },
    { name: 'Job Preferences', path: 'preferences' },
    { name: 'Complete', path: 'complete' },
  ]);
  
  const navigate = useNavigate();
  const { isAuthenticated, register } = useAuth();
  
  const updateRegistrationData = (data: Partial<RegistrationData>) => {
    setRegistrationData(prev => ({
      ...prev,
      ...data,
    }));
  };
  
  const goToNextStep = (currentPath: string) => {
    const currentIndex = steps.findIndex(step => step.path === currentPath);
    if (currentIndex < steps.length - 1) {
      navigate(`/register/${steps[currentIndex + 1].path}`);
    }
  };
  
  const goToPreviousStep = (currentPath: string) => {
    const currentIndex = steps.findIndex(step => step.path === currentPath);
    if (currentIndex > 0) {
      navigate(`/register/${steps[currentIndex - 1].path}`);
    }
  };
  
  const handleSubmit = async () => {
    try {
      // This would connect to an actual backend in a real implementation
      await register({
        name: registrationData.companyName,
        email: registrationData.companyEmail,
        company: registrationData.companyName,
        password: 'temporary-password', // In a real app, this would be collected securely
      });
      
      // Navigate to completion
      navigate('/register/complete');
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle error
    }
  };
  
  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/dashboard\" replace />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-center mb-2">Employer Registration</h1>
              <p className="text-gray-600 text-center mb-8">
                Join our platform to connect with top intern talent.
              </p>
              
              <RegistrationProgress steps={steps} />
              
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mt-8">
                <Routes>
                  <Route 
                    path="/" 
                    element={<Navigate to="/register/company-info\" replace />} 
                  />
                  <Route 
                    path="/company-info" 
                    element={
                      <CompanyInfo 
                        data={registrationData} 
                        updateData={updateRegistrationData} 
                        onNext={() => goToNextStep('company-info')} 
                      />
                    } 
                  />
                  <Route 
                    path="/industry" 
                    element={
                      <IndustrySelection 
                        data={registrationData} 
                        updateData={updateRegistrationData} 
                        onNext={() => goToNextStep('industry')} 
                        onBack={() => goToPreviousStep('industry')} 
                      />
                    } 
                  />
                  <Route 
                    path="/team" 
                    element={
                      <TeamDetails 
                        data={registrationData} 
                        updateData={updateRegistrationData} 
                        onNext={() => goToNextStep('team')} 
                        onBack={() => goToPreviousStep('team')} 
                      />
                    } 
                  />
                  <Route 
                    path="/preferences" 
                    element={
                      <JobPreferences 
                        data={registrationData} 
                        updateData={updateRegistrationData} 
                        onSubmit={handleSubmit} 
                        onBack={() => goToPreviousStep('preferences')} 
                      />
                    } 
                  />
                  <Route 
                    path="/complete" 
                    element={<RegistrationComplete />} 
                  />
                </Routes>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Registration;