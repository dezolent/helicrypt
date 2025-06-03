import React from 'react';
import { motion } from 'framer-motion';
import DnaAnimation from './animations/DnaAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16" id="hero">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-[10%] w-72 h-72 bg-accent-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-[10%] w-80 h-80 bg-secondary-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6">
              <span className="gradient-text">HeliCrypt</span>
              <br />
              <span className="text-white">Next-Generation Cryptography</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-200 mb-8 max-w-xl">
              A revolutionary cryptographic platform harnessing the power of DNA sequences 
              and AI-driven mutation to generate truly unpredictable, high-entropy keys.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#core-logic" className="btn-primary">
                Explore Technology
              </a>
              <a href="#applications" className="btn-secondary">
                See Applications
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <DnaAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;