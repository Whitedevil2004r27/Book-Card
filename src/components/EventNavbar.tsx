
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Home, User, Settings, BookOpen, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const EventNavbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-semibold bg-primary/10" : "text-gray-600 dark:text-gray-300";
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md py-4 px-6 sticky top-0 z-30 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleBack}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="Go back"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
          </button>
          <div className="flex items-center space-x-2">
            <Calendar className="h-8 w-8 text-primary" />
            <Link to="/" className="text-2xl font-heading font-bold text-primary">EventHub</Link>
          </div>
        </div>

        <div className="hidden md:flex space-x-2">
          <Link 
            to="/" 
            className={`${isActive('/')} px-4 py-2 rounded-lg font-medium hover:text-primary transition-colors flex items-center space-x-2`}
          >
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link 
            to="/events" 
            className={`${isActive('/events')} px-4 py-2 rounded-lg font-medium hover:text-primary transition-colors flex items-center space-x-2`}
          >
            <Calendar className="h-4 w-4" />
            <span>Events</span>
          </Link>
          <Link 
            to="/bookings" 
            className={`${isActive('/bookings')} px-4 py-2 rounded-lg font-medium hover:text-primary transition-colors flex items-center space-x-2`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Bookings</span>
          </Link>
          <Link 
            to="/profile" 
            className={`${isActive('/profile')} px-4 py-2 rounded-lg font-medium hover:text-primary transition-colors flex items-center space-x-2`}
          >
            <User className="h-4 w-4" />
            <span>Profile</span>
          </Link>
          <Link 
            to="/settings" 
            className={`${isActive('/settings')} px-4 py-2 rounded-lg font-medium hover:text-primary transition-colors flex items-center space-x-2`}
          >
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default EventNavbar;
