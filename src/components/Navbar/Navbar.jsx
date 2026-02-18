import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import LoginModal from './LoginPage'; 
import { StoreIcon } from '../../assets/storeIcon'; 

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // State for login modal
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for mobile menu

  // Function to open the login modal
  const handleLoginOpen = () => {
    setIsLoginOpen(true);
  };

  // Function to close the login modal
  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-lg">
      {/* Navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <StoreIcon /> {/* Replace with your logo component */}
            <h1 className="cursor-pointer text-2xl font-bold text-gray-800">
              Business Directory
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-6 ml-auto">
            <a href="#home" className="cursor-pointer hover:text-blue-500">Home</a>
            <a href="#about" className="cursor-pointer hover:text-blue-500">About Us</a>
          </div>

          {/* User Icon Button (Desktop) */}
          <div className="hidden md:flex items-center ml-4">
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={handleLoginOpen}
            >
              <FaUserCircle className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6 text-gray-600" />
              ) : (
                <HiMenu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-start space-y-2 p-4">
            <a href="#home" className="cursor-pointer hover:text-blue-500">Home</a>
            <a href="#about" className="cursor-pointer hover:text-blue-500">About Us</a>
            <button
              className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
              onClick={handleLoginOpen}
            >
              <FaUserCircle className="h-5 w-5 text-gray-600" />
              <span className="text-gray-800">Login</span>
            </button>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {isLoginOpen && <LoginModal onClose={handleLoginClose} />}
    </nav>
  );
};

export default Navbar;
