import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FeatureCard from './ui/FeatureCard';
import { Dna, Brain, Binary, Key } from 'lucide-react';

const CoreLogic = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="core-logic" className="section bg-dark-500">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="mb-4">Core Logic & <span className="gradient-text">Mathematical Foundation</span></h2>
          <p className="text-dark-200 max-w-3xl mx-auto text-lg">
            HeliCrypt combines genetic data randomness with AI-powered mutations to create
            a cryptographic system that outperforms traditional methods.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <FeatureCard 
            icon={<Dna className="h-10 w-10 text-accent-500" />}
            title="Genetic Entropy"
            description="DNA sequences from over 1,000 species ensure non-repeating entropy sources with natural randomness."
          />
          
          <FeatureCard 
            icon={<Brain className="h-10 w-10 text-accent-500" />}
            title="AI-Driven Mutation"
            description="LSTM model alters DNA sequences in statistically unpredictable ways for enhanced security."
          />
          
          <FeatureCard 
            icon={<Binary className="h-10 w-10 text-accent-500" />}
            title="Codon Transformation"
            description="DNA triplets mapped to base-4 indices and transformed into bytes using logical bit shifts."
          />
          
          <FeatureCard 
            icon={<Key className="h-10 w-10 text-accent-500" />}
            title="Key Derivation"
            description="HKDF with SHA-256 produces 256-bit keys with AES-GCM encryption for integrity verification."
          />
        </motion.div>

        <motion.div 
          className="mt-16 bg-dark-400 rounded-xl p-8 border border-dark-300"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl mb-4">The HeliCrypt Process</h3>
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-8 md:left-12 w-[2px] bg-accent-500/30 h-full"></div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Step 1: DNA Sequence Extraction",
                  description: "Genetic data is harvested from a diverse pool of species, creating a virtually infinite source of natural entropy."
                },
                {
                  title: "Step 2: AI Mutation Processing",
                  description: "Our proprietary LSTM neural network performs mutations on the DNA sequences, creating patterns that are mathematically unpredictable."
                },
                {
                  title: "Step 3: Quantum-Resistant Encoding",
                  description: "The mutated sequences undergo codon mapping and bit transformation to generate cryptographic primitives."
                },
                {
                  title: "Step 4: Key Derivation & Encryption",
                  description: "The HKDF function with SHA-256 creates a 256-bit key, which is then used with AES-GCM for secure, verified encryption."
                }
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                >
                  <div className="relative flex items-center justify-center mr-6 md:mr-10">
                    <div className="h-6 w-6 md:h-8 md:w-8 bg-dark-600 border-2 border-accent-500 rounded-full z-10"></div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl text-white">{step.title}</h4>
                    <p className="text-dark-100 mt-2">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreLogic;