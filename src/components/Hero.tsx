import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1545486332-9e0999c535b2?auto=format&fit=crop&q=80"
          alt="Modern building with glass windows"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 container mx-auto px-6 h-[calc(100vh-80px)] flex flex-col justify-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Modern Solutions for<br />Modern Architecture
        </h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Premium aluminum and glass solutions for your residential and commercial needs.
          Expert craftsmanship with modern aesthetics.
        </p>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <Link 
            to="/contact" 
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Get Free Quote
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="text-white w-8 h-8" />
      </motion.div>
    </header>
  );
}