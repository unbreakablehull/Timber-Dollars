import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../config/theme';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: theme.colors.secondary }}>
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Minimal Links */}
          <div className="flex gap-8 text-sm">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} Timber Dollar Holdings LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
