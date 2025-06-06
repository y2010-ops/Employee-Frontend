import React, { useState } from 'react';
import { useProfile } from '../../context/ProfileContext';
import { Edit, CheckCircle, Mail, Linkedin } from 'lucide-react';
import type { ProfileData } from '../../context/ProfileContext';

const CompanyProfile: React.FC = () => {
  const { profile, updateProfile } = useProfile();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<ProfileData>(profile as ProfileData);

  if (!profile) {
    return <div className="p-8 text-center text-gray-500">No profile data found.</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateProfile(form);
    setEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Profile Completion Bar */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-gray-900">Profile Completion</span>
          <span className="text-primary-700 font-semibold">75% Complete</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>

      {/* Company Verification */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-4 font-semibold text-gray-900">Company Verification</div>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Linkedin className="h-5 w-5 text-blue-600" />
            <span>LinkedIn Verification</span>
            <button className="ml-2 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm" disabled>
              Connect
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary-600" />
            <span>Business Email Verification</span>
            <span className="ml-2 px-3 py-1 bg-gray-100 text-gray-600 rounded text-sm flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-500" /> Verified
            </span>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold text-gray-900">Company Information</div>
          <button onClick={() => setEditing(!editing)} className="btn btn-outline flex items-center gap-2">
            <Edit className="h-4 w-4" /> {editing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              name="companyName"
              value={form.companyName || ''}
              onChange={handleChange}
              className="input-bordered w-full"
              disabled={!editing}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
            <input
              name="industry"
              value={form.industry || ''}
              onChange={handleChange}
              className="input-bordered w-full"
              disabled={!editing}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Company Description</label>
          <textarea
            name="description"
            value={form.description || ''}
            onChange={handleChange}
            className="input-bordered w-full"
            rows={3}
            disabled={!editing}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Technology Stack</label>
          <input
            name="skillsInterest"
            value={Array.isArray(form.skillsInterest) ? form.skillsInterest.join(', ') : form.skillsInterest || ''}
            onChange={e => setForm({ ...form, skillsInterest: e.target.value.split(',').map((s: string) => s.trim()) })}
            className="input-bordered w-full"
            disabled={!editing}
            placeholder="e.g. React, Node.js, Python"
          />
        </div>
        {editing && (
          <div className="flex justify-end">
            <button onClick={handleSave} className="btn btn-primary px-8 py-2">Save</button>
          </div>
        )}
      </div>

      {/* Team Members */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="font-semibold text-gray-900">Team Members</div>
          {editing && (
            <button
              className="btn btn-primary"
              onClick={() => setForm({ ...form, teamMembers: [...(form.teamMembers || []), { name: '', position: '', email: '' }] })}
            >
              Add Member
            </button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(form.teamMembers || []).map((member: ProfileData['teamMembers'][number], idx: number) => (
            <div key={idx} className="bg-gray-50 rounded p-4 flex flex-col gap-2">
              <input
                className="input-bordered"
                placeholder="Name"
                value={member.name}
                disabled={!editing}
                onChange={e => {
                  const updated = [...form.teamMembers];
                  updated[idx].name = e.target.value;
                  setForm({ ...form, teamMembers: updated });
                }}
              />
              <input
                className="input-bordered"
                placeholder="Position"
                value={member.position}
                disabled={!editing}
                onChange={e => {
                  const updated = [...form.teamMembers];
                  updated[idx].position = e.target.value;
                  setForm({ ...form, teamMembers: updated });
                }}
              />
              <input
                className="input-bordered"
                placeholder="Email"
                value={member.email}
                disabled={!editing}
                onChange={e => {
                  const updated = [...form.teamMembers];
                  updated[idx].email = e.target.value;
                  setForm({ ...form, teamMembers: updated });
                }}
              />
              {editing && (
                <button
                  className="text-red-500 text-xs mt-2 self-end"
                  onClick={() => {
                    const updated = [...form.teamMembers];
                    updated.splice(idx, 1);
                    setForm({ ...form, teamMembers: updated });
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;