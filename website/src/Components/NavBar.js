import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logos/luminescence_logo.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Texas Luminescence Logo"
              className="h-10 w-10 object-contain"
            />
            <Link to="/" className="text-xl font-bold text-gray-800">
              Texas Luminescence
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                to="/projects"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/recruitment"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Recruitment
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                FAQs
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
