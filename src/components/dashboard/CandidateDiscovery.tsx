import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, UserPlus, ChevronDown } from 'lucide-react';

const CandidateDiscovery: React.FC = () => {
  // Mock candidate data
  const candidates = [
    {
      id: 1,
      name: 'Sarah Johnson',
      university: 'Stanford University',
      major: 'Computer Science',
      skills: ['React', 'TypeScript', 'Node.js'],
      matchScore: 95,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      name: 'Michael Chen',
      university: 'MIT',
      major: 'Software Engineering',
      skills: ['Python', 'Machine Learning', 'Data Science'],
      matchScore: 88,
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      university: 'UC Berkeley',
      major: 'UX Design',
      skills: ['UI/UX', 'Figma', 'User Research'],
      matchScore: 92,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Candidate Discovery</h1>
        <p className="mt-1 text-sm text-gray-600">Find and connect with potential candidates for your internship positions.</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow rounded-lg mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search candidates by name, skills, or university..."
                  className="input-bordered pl-10 w-full"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="btn btn-outline flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
              <button className="btn btn-outline flex items-center">
                <Star className="h-4 w-4 mr-2" />
                Saved
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="p-4 bg-gray-50 flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            Computer Science
            <button className="ml-1 text-primary-600 hover:text-primary-800">×</button>
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            React
            <button className="ml-1 text-primary-600 hover:text-primary-800">×</button>
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            {'Match Score > 85%'}
            <button className="ml-1 text-primary-600 hover:text-primary-800">×</button>
          </span>
        </div>
      </div>

      {/* Candidate Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
                    <p className="text-sm text-gray-500">{candidate.university}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                    {candidate.matchScore}% Match
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700">{candidate.major}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {candidate.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center">
                <button className="btn btn-primary btn-sm">
                  <UserPlus className="h-4 w-4 mr-1" />
                  Connect
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <ChevronDown className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CandidateDiscovery;