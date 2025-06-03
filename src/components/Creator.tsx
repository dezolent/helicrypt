import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Mail, Github, Linkedin } from 'lucide-react';

const Creator = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="creator" className="section bg-dark-500">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">The <span className="gradient-text">Creator</span></h2>
          <p className="text-dark-200 max-w-3xl mx-auto text-lg">
            Meet the innovator behind HeliCrypt, combining military experience with
            cryptographic expertise to develop this revolutionary platform.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-dark-400 rounded-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center md:border-r border-dark-300">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="mb-6"
                >
                  <div className="w-40 h-40 mx-auto rounded-full bg-accent-500/10 flex items-center justify-center mb-6">
                    <User className="h-20 w-20 text-accent-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Dakota Spencer</h3>
                  <p className="text-dark-200 mt-2">U.S. Air Force Veteran & Cybersecurity Innovator</p>
                </motion.div>
                
                <div className="flex space-x-4 mt-4">
                  {[
                    { icon: <Mail className="h-5 w-5" />, href: "#" },
                    { icon: <Github className="h-5 w-5" />, href: "#" },
                    { icon: <Linkedin className="h-5 w-5" />, href: "#" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-dark-500 flex items-center justify-center text-dark-100 hover:bg-accent-500 hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              <div className="p-8 md:p-12 col-span-1 md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h4 className="text-xl font-semibold mb-4">About Dakota</h4>
                  <div className="space-y-4 text-dark-100">
                    <p>
                      Dakota Spencer combines his military background with expertise in cryptography and 
                      artificial intelligence to create innovative security solutions for the modern world.
                    </p>
                    <p>
                      During his service in the U.S. Air Force, Dakota developed a deep understanding of 
                      cybersecurity challenges faced by government and military operations. This experience 
                      inspired him to explore new approaches to data protection that go beyond traditional 
                      cryptographic methods.
                    </p>
                    <p>
                      HeliCrypt represents the culmination of years of research into the intersection of 
                      biology, machine learning, and cryptography. By drawing on diverse fields of science, 
                      Dakota has created a truly innovative approach to encryption that addresses many of 
                      the vulnerabilities in current systems.
                    </p>
                  </div>
                  
                  <motion.div
                    className="mt-8 p-4 bg-dark-500 rounded-lg border border-dark-300"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <p className="italic text-dark-200">
                      "My goal with HeliCrypt is to fundamentally change how we approach data security. 
                      By looking to nature's complexity and combining it with advanced AI, we can create
                      cryptographic systems that are inherently resistant to the threats of tomorrow."
                    </p>
                    <p className="mt-2 font-semibold text-right">— Dakota Spencer</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Creator;