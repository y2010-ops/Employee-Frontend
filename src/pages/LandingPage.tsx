import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Award, CheckCircle } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <span className="font-bold text-lg text-primary-700">EmployerHub</span>
          <nav className="space-x-6">
            <Link to="/register" className="text-primary-700 font-medium hover:underline">Register</Link>
            <Link to="/login" className="text-gray-700 font-medium hover:underline">Login</Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-2xl text-center mt-16 mb-10">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Complete Your Profile &amp; Find Top Talent</h1>
          <p className="text-lg text-gray-600 mb-6">Connect with qualified interns and build your future workforce. Streamline your hiring process with EmployerHub.</p>
          <div className="flex justify-center gap-4 mb-8">
            <Link to="/register" className="bg-primary-700 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-primary-800 transition">Get Started</Link>
            <Link to="/login" className="bg-white border border-primary-700 text-primary-700 px-6 py-3 rounded-md font-semibold hover:bg-primary-50 transition">Login</Link>
            <Link to="/dashboard" className="bg-secondary-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-secondary-700 transition">Dashboard</Link>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3 mb-4">
            <div className="bg-primary-600 h-3 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <div className="text-sm text-gray-500 mb-2">75% of employers complete their profile in under 5 minutes</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-16">
          <div className="bg-white border rounded-lg shadow p-6 flex items-center gap-4">
            <Briefcase className="h-8 w-8 text-primary-600" />
            <div>
              <div className="font-semibold text-gray-900">Company Verification</div>
              <div className="text-gray-500 text-sm">Build trust with verified company credentials.</div>
            </div>
          </div>
          <div className="bg-white border rounded-lg shadow p-6 flex items-center gap-4">
            <Users className="h-8 w-8 text-primary-600" />
            <div>
              <div className="font-semibold text-gray-900">Social Integration</div>
              <div className="text-gray-500 text-sm">Connect LinkedIn and Google for easy onboarding.</div>
            </div>
          </div>
          <div className="bg-white border rounded-lg shadow p-6 flex items-center gap-4">
            <Award className="h-8 w-8 text-primary-600" />
            <div>
              <div className="font-semibold text-gray-900">Team Profiles</div>
              <div className="text-gray-500 text-sm">Showcase your team to attract top talent.</div>
            </div>
          </div>
          <div className="bg-white border rounded-lg shadow p-6 flex items-center gap-4">
            <CheckCircle className="h-8 w-8 text-primary-600" />
            <div>
              <div className="font-semibold text-gray-900">Work Culture</div>
              <div className="text-gray-500 text-sm">Highlight your company's unique environment.</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-4 text-center text-gray-400 text-sm bg-white">&copy; 2025 EmployerHub. All rights reserved.</footer>
    </div>
  );
};

export default LandingPage;