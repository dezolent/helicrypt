import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, BarChart2 } from 'lucide-react';

const TestingSummary = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testingPoints = [
    "Monobit Test",
    "Runs Test",
    "Serial Test",
    "Entropy Test",
    "Birthdays Test",
    "Rank Test",
    "Bitstream Test",
    "Parking Lot Test",
    "2D/3D Spheres Test",
    "RGB Bitdist Test"
  ];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="testing" className="section bg-dark-600">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Testing & <span className="gradient-text">Validation</span></h2>
          <p className="text-dark-200 max-w-3xl mx-auto text-lg">
            HeliCrypt has undergone rigorous cryptographic testing, passing stringent standards
            including NIST STS and Dieharder test suites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-500 rounded-xl p-8 border border-dark-300"
          >
            <div className="flex items-center mb-6">
              <BarChart2 className="h-8 w-8 text-accent-500 mr-4" />
              <h3 className="text-2xl">Statistical Tests Passed</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {testingPoints.map((test, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-success-500 mr-2 flex-shrink-0" />
                  <span>{test}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-dark-500 rounded-xl p-8 border border-dark-300 h-full flex flex-col">
              <h3 className="text-2xl mb-4">Performance Metrics</h3>
              <p className="text-dark-200 mb-6">
                HeliCrypt's performance is exceptional even before whitening or additional entropy
                smoothing, making it highly competitive in the cryptographic field.
              </p>
              
              <div className="space-y-6 flex-grow">
                {[
                  { label: "Entropy Quality", value: 98, colorClass: "bg-accent-500" },
                  { label: "Randomness Score", value: 96, colorClass: "bg-secondary-500" },
                  { label: "Quantum Resistance", value: 94, colorClass: "bg-success-500" },
                ].map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{metric.label}</span>
                      <span className={metric.colorClass.replace('bg-', 'text-')}>{metric.value}%</span>
                    </div>
                    <motion.div 
                      className="h-2 bg-dark-400 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                    >
                      <motion.div 
                        className={`h-full ${metric.colorClass}`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${metric.value}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-dark-300">
                <p className="text-sm text-dark-200 italic">
                  "HeliCrypt achieved these results with raw output, before applying any 
                  additional entropy extraction or post-processing techniques."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestingSummary;