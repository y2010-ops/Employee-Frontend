import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, Users, Plus, ChevronRight, Star } from 'lucide-react';

const InterviewManagement: React.FC = () => {
  // Mock interview data
  const interviews = [
    {
      id: 1,
      candidate: {
        name: 'David Kim',
        role: 'Frontend Developer Intern',
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '2024-03-15',
      time: '10:00 AM',
      type: 'Technical Interview',
      interviewers: ['John Smith', 'Sarah Chen'],
      status: 'scheduled',
    },
    {
      id: 2,
      candidate: {
        name: 'Emma Wilson',
        role: 'UX Design Intern',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '2024-03-16',
      time: '2:00 PM',
      type: 'Portfolio Review',
      interviewers: ['Michael Brown'],
      status: 'scheduled',
    },
    {
      id: 3,
      candidate: {
        name: 'James Rodriguez',
        role: 'Data Science Intern',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      },
      date: '2024-03-14',
      time: '11:30 AM',
      type: 'Technical Interview',
      interviewers: ['Lisa Wang', 'Robert Johnson'],
      status: 'completed',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Interview Management</h1>
        <p className="mt-1 text-sm text-gray-600">Schedule and manage candidate interviews.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Interviews */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-medium text-gray-900">Upcoming Interviews</h2>
              <button className="btn btn-primary btn-sm">
                <Plus className="h-4 w-4 mr-1" />
                Schedule Interview
              </button>
            </div>

            <div className="divide-y divide-gray-200">
              {interviews.map((interview) => (
                <div key={interview.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={interview.candidate.image}
                        alt={interview.candidate.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{interview.candidate.name}</h3>
                        <p className="text-sm text-gray-500">{interview.candidate.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {interview.status === 'scheduled' ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                          Scheduled
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
                          Completed
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      {interview.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {interview.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Video className="h-4 w-4 mr-2" />
                      {interview.type}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      {interview.interviewers.join(', ')}
                    </div>
                  </div>

                  {interview.status === 'scheduled' && (
                    <div className="mt-4 flex justify-end space-x-2">
                      <button className="btn btn-outline btn-sm">Reschedule</button>
                      <button className="btn btn-primary btn-sm">Join Meeting</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interview Stats and Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Interview Statistics</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Scheduled Interviews</span>
                  <span className="font-medium">8</span>
                </div>
                <div className="mt-1 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-primary-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Completed This Week</span>
                  <span className="font-medium">5</span>
                </div>
                <div className="mt-1 h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-success-500 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Average Rating</span>
                  <span className="font-medium flex items-center">
                    4.5
                    <Star className="h-4 w-4 text-yellow-400 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-2">
              <button className="btn btn-outline w-full justify-between">
                View Calendar
                <ChevronRight className="h-4 w-4" />
              </button>
              <button className="btn btn-outline w-full justify-between">
                Feedback Templates
                <ChevronRight className="h-4 w-4" />
              </button>
              <button className="btn btn-outline w-full justify-between">
                Interview Guidelines
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InterviewManagement;