
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, CartItem } from '@/lib/data';
import { BookOpen, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  cartItems: CartItem[];
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItems, onCartClick }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-semibold" : "text-dark";
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <Link to="/" className="text-2xl font-heading font-bold text-primary">BookCart</Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/home" className={`${isActive('/home')} font-medium hover:text-primary transition-colors`}>Home</Link>
          <Link to="/browse" className={`${isActive('/browse')} font-medium hover:text-primary transition-colors`}>Browse</Link>
          <Link to="/categories" className={`${isActive('/categories')} font-medium hover:text-primary transition-colors`}>Categories</Link>
          <Link to="/about" className={`${isActive('/about')} font-medium hover:text-primary transition-colors`}>About</Link>
        </div>
        
        <button 
          onClick={onCartClick}
          className="relative p-2"
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
