import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  
  // Check if on landing page
  const isLandingPage = location.pathname === '/';
  
  // Toggle scroll state for transparent header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isLandingPage && !isScrolled 
          ? 'bg-transparent text-white' 
          : 'bg-white text-gray-900 shadow-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">InternConnect</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                isLandingPage && !isScrolled ? 'hover:text-white/80' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/employers" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                isLandingPage && !isScrolled ? 'hover:text-white/80' : ''
              }`}
            >
              For Employers
            </Link>
            <Link 
              to="/about" 
              className={`font-medium hover:text-primary-500 transition-colors ${
                isLandingPage && !isScrolled ? 'hover:text-white/80' : ''
              }`}
            >
              About Us
            </Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center font-medium">
                  My Account <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1">
                    <Link to="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Dashboard
                    </Link>
                    <Link to="/dashboard/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Company Profile
                    </Link>
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link 
                  to="/login" 
                  className={`font-medium hover:text-primary-500 transition-colors ${
                    isLandingPage && !isScrolled ? 'hover:text-white/80' : ''
                  }`}
                >
                  Log In
                </Link>
                <Link 
                  to="/register" 
                  className={`btn btn-sm ${
                    isLandingPage && !isScrolled 
                      ? 'btn-accent' 
                      : 'btn-primary'
                  }`}
                >
                  Register
                </Link>
              </div>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6\" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6\" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/employers" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              For Employers
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link 
                  to="/dashboard/profile" 
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Company Profile
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="space-y-2 pt-2">
                <Link 
                  to="/login" 
                  className="block w-full px-3 py-2 text-center rounded-md text-base font-medium border border-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link 
                  to="/register" 
                  className="block w-full px-3 py-2 text-center rounded-md text-base font-medium bg-primary-600 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;