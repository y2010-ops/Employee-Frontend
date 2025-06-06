import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import RegistrationProgress from '../components/registration/RegistrationProgress';
import CompanyInfo from '../components/registration/CompanyInfo';
import IndustrySelection from '../components/registration/IndustrySelection';
import TeamDetails from '../components/registration/TeamDetails';
import JobPreferences from '../components/registration/JobPreferences';
import RegistrationComplete from '../components/registration/RegistrationComplete';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../context/ProfileContext';

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
  const location = useLocation();
  const { isAuthenticated, register, logout } = useAuth();
  const { setProfile } = useProfile();

  // Clear any existing authentication when starting registration
  useEffect(() => {
    if (isAuthenticated) {
      logout();
    }
  }, []);

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
      await register({
        name: registrationData.companyName,
        email: registrationData.companyEmail,
        company: registrationData.companyName,
        password: 'temporary-password',
      });
      setProfile({ ...registrationData });
      navigate('/register/complete');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  // Only redirect to dashboard if we're on the complete page and authenticated
  const currentPath = location.pathname.split('/').pop() || '';
  if (isAuthenticated && currentPath !== 'complete') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <span className="font-bold text-lg text-primary-700">EmployerHub</span>
          <span className="text-gray-400 text-sm">Registration</span>
        </div>
      </header>
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-center mb-2">Complete Your Company Profile</h1>
            <p className="text-gray-600 text-center mb-8">
              Set up your company to start posting internships and connecting with talent.
            </p>
            <div className="mb-8">
              <RegistrationProgress steps={steps} />
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 border">
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/register/company-info" replace />}
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
          </div>
        </div>
      </main>
      <footer className="border-t py-4 text-center text-gray-400 text-sm bg-white">&copy; 2025 EmployerHub. All rights reserved.</footer>
    </div>
  );
};

export default Registration;