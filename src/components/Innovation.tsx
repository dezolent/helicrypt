import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lock, ShieldAlert, LineChart, Zap } from 'lucide-react';

const Innovation = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="innovation" className="section bg-dark-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-64 w-64 bg-accent-500/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 bg-secondary-500/5 rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Innovation & <span className="gradient-text">Competitive Edge</span></h2>
          <p className="text-dark-200 max-w-3xl mx-auto text-lg">
            HeliCrypt represents a fundamental shift in cryptographic thinking, moving away from deterministic
            mathematics to unpredictable biological and AI-driven randomness.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-dark-400 rounded-xl p-8"
          >
            <h3 className="text-2xl mb-6">Traditional Cryptography Limitations</h3>
            <ul className="space-y-4">
              {[
                "Relies on deterministic mathematical problems",
                "Potentially vulnerable to quantum computing attacks",
                "Susceptible to side-channel attacks",
                "Key generation often uses predictable entropy sources",
                "Fundamentally limited by computational assumptions"
              ].map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <ShieldAlert className="h-5 w-5 text-error-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-dark-400 rounded-xl p-8"
          >
            <h3 className="text-2xl mb-6">HeliCrypt Advantages</h3>
            <ul className="space-y-4">
              {[
                "One-time-use, non-replicable keys from DNA + AI randomness",
                "Resistant to quantum computing threats",
                "Mitigates side-channel vulnerabilities",
                "Natural sequence rotation for unpredictable entropy",
                "Modular architecture adaptable to various security contexts"
              ].map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <Zap className="h-5 w-5 text-success-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12"
        >
          <h3 className="text-2xl text-center mb-10">Key Differentiators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="h-10 w-10 text-accent-500" />,
                title: "Post-Quantum Security",
                description: "Designed to withstand attacks from both classical and quantum computers."
              },
              {
                icon: <LineChart className="h-10 w-10 text-accent-500" />,
                title: "Adaptive Entropy",
                description: "System continuously evolves its entropy sources, adapting to potential threats."
              },
              {
                icon: <Zap className="h-10 w-10 text-accent-500" />,
                title: "Biological Randomness",
                description: "Leverages the inherent randomness in biological systems that exceeds computational sources."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="card"
                variants={cardVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)" }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h4 className="text-xl mb-2">{feature.title}</h4>
                <p className="text-dark-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Innovation;