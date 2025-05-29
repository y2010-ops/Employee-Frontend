import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Users, 
  Mail, 
  Calendar, 
  TrendingUp, 
  ArrowRight, 
  ArrowUpRight 
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const activityData = [
  { name: 'Jan', applications: 40 },
  { name: 'Feb', applications: 30 },
  { name: 'Mar', applications: 60 },
  { name: 'Apr', applications: 35 },
  { name: 'May', applications: 50 },
  { name: 'Jun', applications: 75 },
];

const DashboardHome: React.FC = () => {
  // Mock data for the dashboard
  const stats = [
    { name: 'Active Postings', value: 4, icon: Briefcase, color: 'bg-primary-500' },
    { name: 'Applicants', value: 42, icon: Users, color: 'bg-secondary-500' },
    { name: 'Unread Messages', value: 8, icon: Mail, color: 'bg-accent-500' },
    { name: 'Scheduled Interviews', value: 6, icon: Calendar, color: 'bg-success-500' },
  ];

  const recentApplicants = [
    { id: 1, name: 'Emily Chen', position: 'Frontend Developer Intern', date: '2 days ago', avatar: 'EC' },
    { id: 2, name: 'Jamal Williams', position: 'Data Science Intern', date: '3 days ago', avatar: 'JW' },
    { id: 3, name: 'Sofia Rodriguez', position: 'UX/UI Design Intern', date: '5 days ago', avatar: 'SR' },
    { id: 4, name: 'Alex Johnson', position: 'Backend Developer Intern', date: '1 week ago', avatar: 'AJ' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-600">Welcome back! Here's an overview of your recruitment activities.</p>
      </div>

      {/* Stats Grid */}
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 p-3 rounded-md ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd>
                      <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-3">
              <div className="text-sm">
                <Link to={`/dashboard/${stat.name.toLowerCase().replace(/\s+/g, '-')}`} className="font-medium text-primary-700 hover:text-primary-900 flex items-center">
                  View all <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Activity Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow rounded-lg p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Application Activity</h2>
            <div className="flex items-center space-x-2">
              <span className="flex items-center text-sm font-medium text-success-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>12% increase</span>
              </span>
            </div>
          </div>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={activityData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="applications" fill="#6366F1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Recent Applicants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <div className="p-5">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Applicants</h2>
            <div className="space-y-4">
              {recentApplicants.map((applicant) => (
                <div key={applicant.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-semibold">
                      {applicant.avatar}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{applicant.name}</p>
                      <p className="text-xs text-gray-500">{applicant.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500 mr-4">{applicant.date}</span>
                    <button className="text-primary-600 hover:text-primary-800">
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 px-5 py-3">
            <div className="text-sm">
              <Link to="/dashboard/applications" className="font-medium text-primary-700 hover:text-primary-900 flex items-center">
                View all applications <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link to="/dashboard/jobs/new" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
            <Briefcase className="h-8 w-8 text-primary-600 mb-3" />
            <h3 className="text-base font-semibold text-gray-900 mb-1">Post New Job</h3>
            <p className="text-sm text-gray-500">Create a new internship posting to attract candidates.</p>
          </Link>
          
          <Link to="/dashboard/candidates" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
            <Users className="h-8 w-8 text-secondary-600 mb-3" />
            <h3 className="text-base font-semibold text-gray-900 mb-1">Browse Candidates</h3>
            <p className="text-sm text-gray-500">Discover and connect with potential interns.</p>
          </Link>
          
          <Link to="/dashboard/profile" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
            <Building className="h-8 w-8 text-accent-500 mb-3" />
            <h3 className="text-base font-semibold text-gray-900 mb-1">Complete Profile</h3>
            <p className="text-sm text-gray-500">Enhance your company profile to attract better candidates.</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardHome;