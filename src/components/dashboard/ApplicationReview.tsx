import React from 'react';
import { motion } from 'framer-motion';
import { Inbox, Star, Clock, CheckCircle, X, ThumbsUp, ThumbsDown, MessageCircle } from 'lucide-react';

const ApplicationReview: React.FC = () => {
  // Mock applications data
  const applications = [
    {
      id: 1,
      candidate: {
        name: 'Alex Thompson',
        role: 'Frontend Developer Intern',
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      status: 'new',
      date: '2 days ago',
      rating: 4.5,
    },
    {
      id: 2,
      candidate: {
        name: 'Maria Garcia',
        role: 'UX Design Intern',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      status: 'reviewed',
      date: '1 week ago',
      rating: 4.0,
    },
    {
      id: 3,
      candidate: {
        name: 'James Wilson',
        role: 'Data Science Intern',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      status: 'interviewing',
      date: '3 days ago',
      rating: 4.8,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Application Review</h1>
        <p className="mt-1 text-sm text-gray-600">Review and manage internship applications.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Application List */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Applications</h2>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                12 New
              </span>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {applications.map((application) => (
              <div
                key={application.id}
                className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={application.candidate.image}
                      alt={application.candidate.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{application.candidate.name}</p>
                      <p className="text-sm text-gray-500">{application.candidate.role}</p>
                    </div>
                  </div>
                  {application.status === 'new' && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      New
                    </span>
                  )}
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {application.date}
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    {application.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Details */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <img
                  src={applications[0].candidate.image}
                  alt={applications[0].candidate.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-semibold text-gray-900">{applications[0].candidate.name}</h2>
                  <p className="text-gray-500">{applications[0].candidate.role}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="btn btn-outline btn-sm">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Message
                </button>
                <button className="btn btn-primary btn-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Schedule Interview
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Quick Actions</h3>
                  <div className="flex space-x-2">
                    <button className="btn btn-success btn-sm flex-1">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      Approve
                    </button>
                    <button className="btn btn-error btn-sm flex-1">
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      Reject
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Skills Match</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>React.js</span>
                        <span>90%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-success-500 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm">
                        <span>TypeScript</span>
                        <span>85%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-success-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Application Notes</h3>
                <textarea
                  className="input-bordered w-full h-32"
                  placeholder="Add notes about this candidate..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ApplicationReview;