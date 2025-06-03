import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Building2, Shield, Cpu, Database, 
  ArrowRight, Server, Plane, BarChart4 
} from 'lucide-react';

const Applications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectors = [
    { 
      icon: <Building2 className="h-8 w-8 text-accent-500" />, 
      title: "Government", 
      description: "SCIF systems and multi-layer virtual compartments for classified information",
      examples: ["Secure document storage", "Inter-agency communications", "Classified data access"]
    },
    { 
      icon: <Plane className="h-8 w-8 text-accent-500" />, 
      title: "Military", 
      description: "Aircraft and infrastructure command systems requiring maximum security",
      examples: ["Command & control networks", "Field communications", "Weapons systems"]
    },
    { 
      icon: <BarChart4 className="h-8 w-8 text-accent-500" />, 
      title: "Financial", 
      description: "Banking and blockchain applications demanding tamper-proof transactions",
      examples: ["Inter-bank transfers", "High-value transaction encryption", "Identity verification"]
    },
    { 
      icon: <Server className="h-8 w-8 text-accent-500" />, 
      title: "Enterprise", 
      description: "Cross-agency secure communications and data protection systems",
      examples: ["Intellectual property protection", "Secure cloud storage", "Remote access systems"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="applications" className="section bg-dark-600">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Strategic <span className="gradient-text">Applications</span></h2>
          <p className="text-dark-200 max-w-3xl mx-auto text-lg">
            HeliCrypt is designed for high-security environments where data protection
            is mission-critical and traditional encryption is insufficient.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-dark-500 rounded-xl p-8 border border-dark-300 hover:border-accent-500/30 transition-colors duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4">{sector.icon}</div>
                <h3 className="text-2xl">{sector.title}</h3>
              </div>
              <p className="text-dark-200 mb-6">{sector.description}</p>
              <div className="space-y-3">
                {sector.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-accent-500 mr-3" />
                    <span>{example}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-dark-500 to-dark-400 rounded-xl p-8 border border-dark-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl mb-4">Why HeliCrypt for Critical Infrastructure?</h3>
              <p className="text-dark-200 mb-6">
                Critical infrastructure demands the highest level of security. HeliCrypt's unique approach
                provides unmatched protection against both current and emerging threats.
              </p>
              <div className="space-y-4">
                {[
                  { 
                    icon: <Shield className="h-5 w-5 text-accent-500" />, 
                    text: "Protection against state-level threat actors" 
                  },
                  { 
                    icon: <Cpu className="h-5 w-5 text-accent-500" />, 
                    text: "Defense against quantum computing advances" 
                  },
                  { 
                    icon: <Database className="h-5 w-5 text-accent-500" />, 
                    text: "Safeguarding of mission-critical data" 
                  }
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="mr-3 mt-1">{point.icon}</div>
                    <span>{point.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-36 h-36 rounded-full bg-accent-500/10 flex items-center justify-center mb-4">
                  <Shield className="h-16 w-16 text-accent-500" />
                </div>
                <p className="text-sm text-dark-200">
                  Protecting your most sensitive data with next-generation encryption
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Applications;