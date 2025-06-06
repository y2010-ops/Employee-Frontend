import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Home, 
  Building, 
  FileText, 
  Users, 
  Inbox, 
  Calendar,
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface DashboardSidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { logout } = useAuth();
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'Company Profile', href: '/dashboard/profile', icon: Building },
    { name: 'Job Postings', href: '/dashboard/jobs', icon: FileText },
    { name: 'Candidates', href: '/dashboard/candidates', icon: Users },
    { name: 'Applications', href: '/dashboard/applications', icon: Inbox },
    { name: 'Interviews', href: '/dashboard/interviews', icon: Calendar },
  ];
  
  const secondaryNavigation = [
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    { name: 'Help & Support', href: '/dashboard/support', icon: HelpCircle },
  ];
  
  return (
    <>
      {/* Mobile sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            
            <motion.div
              initial={{ translateX: '-100%' }}
              animate={{ translateX: 0 }}
              exit={{ translateX: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-y-0 flex z-40 flex-shrink-0 md:hidden"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary-800">
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <X className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
                
                <div className="flex-shrink-0 flex items-center px-4">
                  <span className="text-white text-xl font-bold">InternConnect</span>
                </div>
                
                <div className="mt-5 flex-1 h-0 overflow-y-auto">
                  <nav className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          `group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                            isActive
                              ? 'bg-primary-900 text-white'
                              : 'text-white hover:bg-primary-700'
                          }`
                        }
                        onClick={() => setSidebarOpen(false)}
                      >
                        <item.icon
                          className="mr-4 flex-shrink-0 h-6 w-6 text-primary-300"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    ))}
                  </nav>
                  
                  <div className="mt-6 pt-6 border-t border-primary-700">
                    <nav className="px-2 space-y-1">
                      {secondaryNavigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:bg-primary-700"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <item.icon
                            className="mr-4 flex-shrink-0 h-6 w-6 text-primary-300"
                            aria-hidden="true"
                          />
                          {item.name}
                        </NavLink>
                      ))}
                      
                      <button
                        onClick={logout}
                        className="w-full group flex items-center px-2 py-2 text-base font-medium rounded-md text-primary-100 hover:bg-primary-700"
                      >
                        <LogOut
                          className="mr-4 flex-shrink-0 h-6 w-6 text-primary-300"
                          aria-hidden="true"
                        />
                        Sign Out
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1">
            <div className="flex items-center h-16 flex-shrink-0 px-4 bg-primary-900">
              <span className="text-white text-xl font-bold">InternConnect</span>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto bg-primary-800">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                        isActive
                          ? 'bg-primary-900 text-white'
                          : 'text-white hover:bg-primary-700'
                      }`
                    }
                  >
                    <item.icon
                      className="mr-3 flex-shrink-0 h-6 w-6 text-primary-300"
                      aria-hidden="true"
                    />
                    {item.name}
                  </NavLink>
                ))}
              </nav>
              
              <div className="mt-auto pt-4 pb-4 border-t border-primary-700">
                <nav className="px-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-primary-100 hover:bg-primary-700"
                    >
                      <item.icon
                        className="mr-3 flex-shrink-0 h-6 w-6 text-primary-300"
                        aria-hidden="true"
                      />
                      {item.name}
                    </NavLink>
                  ))}
                  
                  <button
                    onClick={logout}
                    className="w-full group flex items-center px-2 py-2 text-sm font-medium rounded-md text-primary-100 hover:bg-primary-700"
                  >
                    <LogOut
                      className="mr-3 flex-shrink-0 h-6 w-6 text-primary-300"
                      aria-hidden="true"
                    />
                    Sign Out
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSidebar;