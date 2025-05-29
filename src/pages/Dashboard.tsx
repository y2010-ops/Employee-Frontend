import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardHome from '../components/dashboard/DashboardHome';
import CompanyProfile from '../components/dashboard/CompanyProfile';
import JobPostings from '../components/dashboard/JobPostings';
import CandidateDiscovery from '../components/dashboard/CandidateDiscovery';
import ApplicationReview from '../components/dashboard/ApplicationReview';
import InterviewManagement from '../components/dashboard/InterviewManagement';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth();
  
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar for navigation */}
      <DashboardSidebar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      
      {/* Main content area */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <DashboardHeader setSidebarOpen={setSidebarOpen} user={user} />
        
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <Routes>
                <Route path="/" element={<DashboardHome />} />
                <Route path="/profile/*" element={<CompanyProfile />} />
                <Route path="/jobs/*" element={<JobPostings />} />
                <Route path="/candidates" element={<CandidateDiscovery />} />
                <Route path="/applications/*" element={<ApplicationReview />} />
                <Route path="/interviews" element={<InterviewManagement />} />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;