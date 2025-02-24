// src/components/NavigationPlane.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavigationPlane = () => {
  return (
    <motion.nav
      className="flex space-x-4 mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Link to="/" className="text-white hover:text-gray-400">
        Home
      </Link>
      <Link to="/individual" className="text-white hover:text-gray-400">
        Individual
      </Link>
      <Link to="/documentation" className="text-white hover:text-gray-400">
        Documentation
      </Link>
    </motion.nav>
  );
};

export default NavigationPlane;
