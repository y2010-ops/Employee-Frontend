import React from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { Building, Users, Image, Edit, FileText, Briefcase, Globe } from 'lucide-react';

const CompanyProfile: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="py-4">
        <h1 className="text-2xl font-semibold text-gray-900">Company Profile</h1>
        <p className="mt-1 text-sm text-gray-600">Manage how your company appears to potential candidates.</p>
      </div>
      
      {/* Company Profile Header */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-6">
        <div className="h-40 bg-gradient-to-r from-primary-600 to-primary-800 relative">
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
            <Edit className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        <div className="p-6 sm:flex sm:items-center sm:justify-between">
          <div className="sm:flex sm:space-x-5">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  className="h-24 w-24 rounded-full border-4 border-white -mt-12 bg-white shadow-md object-cover"
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Company logo"
                />
                <button className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
                  <Edit className="h-3 w-3 text-gray-600" />
                </button>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 sm:pt-1">
              <p className="text-sm font-medium text-gray-600">Company Profile</p>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl">Tech Innovations Inc.</p>
              <p className="text-sm text-gray-500 flex items-center">
                <Globe className="h-4 w-4 mr-1" />
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                  www.techinnovations.com
                </a>
              </p>
            </div>
          </div>
          <div className="mt-5 sm:mt-0 flex justify-start sm:justify-end space-x-2">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Users className="h-4 w-4 mr-1" />
              Add Team Member
            </button>
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Eye className="h-4 w-4 mr-1" />
              Preview Profile
            </button>
          </div>
        </div>
      </div>
      
      {/* Profile Navigation */}
      <Tabs defaultValue="company-info" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="company-info" className="inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium">
            <Building className="mr-2 h-5 w-5" />
            Company Info
          </TabsTrigger>
          <TabsTrigger value="team" className="inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium">
            <Users className="mr-2 h-5 w-5" />
            Team Members
          </TabsTrigger>
          <TabsTrigger value="media" className="inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium">
            <Image className="mr-2 h-5 w-5" />
            Media Gallery
          </TabsTrigger>
          <TabsTrigger value="programs" className="inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium">
            <Briefcase className="mr-2 h-5 w-5" />
            Internship Programs
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="company-info">
          <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
            <div className="px-6 py-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Company Information</h3>
              <p className="mt-1 text-sm text-gray-500">This information will be displayed publicly to potential candidates.</p>
            </div>
            <div className="px-6 py-5">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                    Company name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company-name"
                      id="company-name"
                      className="input-bordered w-full"
                      defaultValue="Tech Innovations Inc."
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-3">
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
                    Industry
                  </label>
                  <div className="mt-1">
                    <select
                      id="industry"
                      name="industry"
                      className="input-bordered w-full"
                      defaultValue="Technology"
                    >
                      <option>Technology</option>
                      <option>Healthcare</option>
                      <option>Finance</option>
                      <option>Education</option>
                      <option>Manufacturing</option>
                    </select>
                  </div>
                </div>
                
                <div className="sm:col-span-6">
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                    Website
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="website"
                      id="website"
                      className="input-bordered w-full"
                      defaultValue="https://www.techinnovations.com"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-6">
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                    About
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={4}
                      className="input-bordered w-full"
                      defaultValue="Tech Innovations Inc. is a leading technology company focused on creating cutting-edge solutions for businesses and consumers. Founded in 2010, we've grown to a team of 150+ passionate professionals dedicated to innovation."
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Brief description of your company.</p>
                </div>
                
                <div className="sm:col-span-6">
                  <label className="block text-sm font-medium text-gray-700">Company Logo</label>
                  <div className="mt-1 flex items-center">
                    <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <img
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="Current company logo"
                      />
                    </span>
                    <button
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 flex justify-end">
              <button
                type="button"
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="team">
          <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
            <div className="px-6 py-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Team Members</h3>
              <p className="mt-1 text-sm text-gray-500">Add team members who will represent your company to interns.</p>
            </div>
            <div className="px-6 py-5">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: 'Sarah Johnson', role: 'HR Director', image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
                  { name: 'David Chen', role: 'Lead Developer', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
                  { name: 'Priya Patel', role: 'Product Manager', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
                ].map((member, index) => (
                  <div key={index} className="bg-white overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow">
                    <div className="p-5">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-16 w-16">
                          <img className="h-16 w-16 rounded-full object-cover" src={member.image} alt={member.name} />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                          <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end space-x-2">
                        <button className="text-primary-600 hover:text-primary-800">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-error-500 hover:text-error-700">
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Add new team member card */}
                <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <button className="w-full h-full p-5 flex flex-col items-center justify-center">
                    <Users className="h-10 w-10 text-gray-400 mb-2" />
                    <span className="text-gray-600 font-medium">Add Team Member</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="media">
          <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
            <div className="px-6 py-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Media Gallery</h3>
              <p className="mt-1 text-sm text-gray-500">Share photos and videos that showcase your company culture and work environment.</p>
            </div>
            <div className="px-6 py-5">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {[
                  'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                  'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                ].map((image, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={image} 
                      alt={`Company image ${index + 1}`} 
                      className="h-40 w-full object-cover rounded-lg shadow-sm"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg flex items-center justify-center">
                      <div className="hidden group-hover:flex space-x-2">
                        <button className="bg-white p-1.5 rounded-full shadow-md">
                          <Edit className="h-4 w-4 text-gray-600" />
                        </button>
                        <button className="bg-white p-1.5 rounded-full shadow-md">
                          <X className="h-4 w-4 text-error-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Add new media card */}
                <div className="h-40 bg-gray-50 border border-dashed border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <button className="w-full h-full flex flex-col items-center justify-center">
                    <Image className="h-8 w-8 text-gray-400 mb-2" />
                    <span className="text-gray-600 font-medium">Add Media</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="programs">
          <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
            <div className="px-6 py-5">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Internship Programs</h3>
              <p className="mt-1 text-sm text-gray-500">Describe the internship programs your company offers.</p>
            </div>
            <div className="px-6 py-5">
              <div className="space-y-6">
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Summer Engineering Internship</h4>
                      <p className="text-sm text-gray-500 mt-1">10-12 week program for engineering students</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-800">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-error-500 hover:text-error-700">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700">Our engineering internship program offers hands-on experience working alongside senior engineers on real-world projects. Interns participate in code reviews, design discussions, and product development.</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Software Engineering
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Full Stack
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      Frontend
                    </span>
                  </div>
                </div>
                
                <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">UX/UI Design Internship</h4>
                      <p className="text-sm text-gray-500 mt-1">6-month program for design students</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-primary-600 hover:text-primary-800">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-error-500 hover:text-error-700">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-700">Our design internship program provides opportunities to work on user research, interface design, and usability testing for our products. Interns collaborate with product managers and developers to create intuitive user experiences.</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                      UX Design
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                      UI Design
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                      Product Design
                    </span>
                  </div>
                </div>
                
                {/* Add new program button */}
                <button className="w-full py-4 border border-dashed border-gray-300 rounded-lg flex items-center justify-center text-primary-600 hover:text-primary-800 hover:bg-gray-50 transition-colors">
                  <Briefcase className="h-5 w-5 mr-2" />
                  <span className="font-medium">Add New Internship Program</span>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default CompanyProfile;