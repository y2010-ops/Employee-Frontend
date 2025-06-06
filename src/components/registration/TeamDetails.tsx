import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { RegistrationData } from '../../pages/Registration';
import { UserPlus, X, User, AtSign, ChevronRight } from 'lucide-react';

interface TeamDetailsProps {
  data: RegistrationData;
  updateData: (data: Partial<RegistrationData>) => void;
  onNext: () => void;
  onBack: () => void;
}

interface TeamMemberForm {
  name: string;
  position: string;
  email: string;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({ data, updateData, onNext, onBack }) => {
  const [teamMembers, setTeamMembers] = useState(data.teamMembers || []);
  const [showAddForm, setShowAddForm] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TeamMemberForm>({
    defaultValues: {
      name: '',
      position: '',
      email: '',
    }
  });
  
  const onSubmit = () => {
    updateData({ teamMembers });
    onNext();
  };
  
  const handleAddTeamMember = (member: TeamMemberForm) => {
    setTeamMembers([...teamMembers, member]);
    setShowAddForm(false);
    reset();
  };
  
  const handleRemoveTeamMember = (index: number) => {
    setTeamMembers(teamMembers.filter((_, i) => i !== index));
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-2xl font-bold mb-6">Team Details</h2>
      
      <div className="space-y-6">
        <p className="text-gray-600">
          Add key team members who will be using the platform to manage internships. You can add more team members later.
        </p>
        
        {/* Team Member List */}
        <div className="space-y-4">
          {teamMembers.length > 0 ? (
            <div className="rounded-md border border-gray-200 overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {teamMembers.map((member, index) => (
                  <li key={index} className="p-4 flex items-center justify-between bg-white hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary-100 text-primary-600">
                        <User className="h-5 w-5" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.position}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">{member.email}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveTeamMember(index)}
                        className="text-gray-400 hover:text-error-500"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="text-center py-8 border border-dashed border-gray-300 rounded-md bg-gray-50">
              <User className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No team members</h3>
              <p className="mt-1 text-sm text-gray-500">Start adding your team members who will use the platform.</p>
            </div>
          )}
        </div>
        
        {/* Add Team Member Form */}
        {showAddForm ? (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-50 p-4 rounded-md border border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Add Team Member</h3>
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit(handleAddTeamMember)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name*
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="input-bordered pl-10 w-full"
                    placeholder="Team member name"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                  Position*
                </label>
                <input
                  type="text"
                  id="position"
                  {...register('position', { required: 'Position is required' })}
                  className="input-bordered w-full"
                  placeholder="e.g. HR Manager, Team Lead"
                />
                {errors.position && <p className="mt-1 text-sm text-error-500">{errors.position.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email*
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      }
                    })}
                    className="input-bordered pl-10 w-full"
                    placeholder="member@example.com"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>}
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="btn btn-ghost mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Member
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <button
            type="button"
            onClick={() => setShowAddForm(true)}
            className="btn btn-outline flex items-center w-full justify-center"
          >
            <UserPlus className="h-5 w-5 mr-2" />
            Add Team Member
          </button>
        )}
        
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={onBack}
            className="btn btn-outline"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onSubmit}
            className="btn btn-primary"
          >
            Continue <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamDetails;