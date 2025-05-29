import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Briefcase, Plus, Calendar, MapPin, Users, Edit, ExternalLink, MoreHorizontal, ChevronDown } from 'lucide-react';

const JobPostings: React.FC = () => {
  // Mock job postings data
  const jobPostings = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Summer Internship',
      remote: false,
      applications: 24,
      posted: '2 weeks ago',
      status: 'Active',
    },
    {
      id: 2,
      title: 'UX/UI Design Intern',
      department: 'Design',
      location: 'Remote',
      type: 'Fall Internship',
      remote: true,
      applications: 18,
      posted: '1 week ago',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Data Science Intern',
      department: 'Analytics',
      location: 'New York, NY',
      type: 'Year-round',
      remote: false,
      applications: 15,
      posted: '3 days ago',
      status: 'Active',
    },
    {
      id: 4,
      title: 'Marketing Intern',
      department: 'Marketing',
      location: 'Remote',
      type: 'Fall Internship',
      remote: true,
      applications: 0,
      posted: 'Draft',
      status: 'Draft',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Job Postings</h1>
          <p className="mt-1 text-sm text-gray-600">Manage your internship postings and track applicants</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            to="/dashboard/jobs/create"
            className="btn btn-primary inline-flex items-center"
          >
            <Plus className="h-5 w-5 mr-1" />
            Create New Posting
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white shadow rounded-lg mb-6 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-3 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status-filter"
                className="input-bordered py-1.5"
                defaultValue="all"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div>
              <label htmlFor="type-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                id="type-filter"
                className="input-bordered py-1.5"
                defaultValue="all"
              >
                <option value="all">All Types</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="spring">Spring</option>
                <option value="year-round">Year-round</option>
              </select>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Briefcase className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search job postings..."
              className="input-bordered pl-10 py-1.5"
            />
          </div>
        </div>
      </div>

      {/* Job Postings Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applications
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Posted
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {jobPostings.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-primary-100">
                        <Briefcase className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{job.title}</div>
                        <div className="text-sm text-gray-500">{job.department}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      {job.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                      {job.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1 flex-shrink-0" />
                      {job.status === 'Draft' ? '-' : job.applications}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.posted}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      job.status === 'Active' ? 'bg-success-100 text-success-800' :
                      job.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <Link to={`/dashboard/jobs/${job.id}`} className="text-primary-600 hover:text-primary-900">
                        <Edit className="h-4 w-4" />
                      </Link>
                      {job.status !== 'Draft' && (
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                      <div className="relative group">
                        <button className="text-gray-600 hover:text-gray-900">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            View Applications
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Duplicate
                          </a>
                          <a href="#" className="block px-4 py-2 text-sm text-error-600 hover:bg-gray-100">
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">4</span> of{' '}
                <span className="font-medium">4</span> results
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronDown className="h-5 w-5 rotate-90" />
                </a>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 bg-primary-50 border-primary-500 text-primary-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <ChevronDown className="h-5 w-5 -rotate-90" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobPostings;