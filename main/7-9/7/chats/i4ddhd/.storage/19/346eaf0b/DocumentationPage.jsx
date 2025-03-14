// src/components/DocumentationPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import NavigationPlane from './NavigationPlane';

const DocumentationPage = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <NavigationPlane />
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Documentation
      </motion.h1>
      <motion.p
        className="text-lg"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Comprehensive guides and resources for MUN participants.
      </motion.p>
    </motion.div>
  );
};

export default DocumentationPage;
