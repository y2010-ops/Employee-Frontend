import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ProfileData {
  companyName: string;
  companyEmail: string;
  website: string;
  companySize: string;
  logo: string;
  description: string;
  industry: string[];
  subIndustries: string[];
  teamMembers: Array<{
    name: string;
    position: string;
    email: string;
  }>;
  locations: string[];
  remote: boolean;
  internshipTypes: string[];
  skillsInterest: string[];
  hiringFrequency: string;
  verification?: {
    email: boolean;
    linkedin: boolean;
    phone: boolean;
  };
}

interface ProfileContextType {
  profile: ProfileData | null;
  setProfile: (data: ProfileData) => void;
  updateProfile: (data: Partial<ProfileData>) => void;
  clearProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType>({} as ProfileContextType);

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfileState] = useState<ProfileData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('profile');
    if (stored) setProfileState(JSON.parse(stored));
  }, []);

  const setProfile = (data: ProfileData) => {
    setProfileState(data);
    localStorage.setItem('profile', JSON.stringify(data));
  };

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfileState(prev => {
      const updated = { ...prev, ...data } as ProfileData;
      localStorage.setItem('profile', JSON.stringify(updated));
      return updated;
    });
  };

  const clearProfile = () => {
    setProfileState(null);
    localStorage.removeItem('profile');
  };

  return (
    <ProfileContext.Provider value={{ profile, setProfile, updateProfile, clearProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};