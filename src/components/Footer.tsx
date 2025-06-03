import React from 'react';
import { motion } from 'framer-motion';
import { Shield as ShieldLock, Mail, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-600 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <ShieldLock className="h-7 w-7 text-accent-500" />
              <span className="text-xl font-heading font-bold">HeliCrypt</span>
            </div>
            <p className="text-dark-200 mb-6">
              Next-generation cryptographic platform combining DNA sequences and AI for unmatched security.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Mail className="h-5 w-5" />, href: "#" },
                { icon: <Github className="h-5 w-5" />, href: "#" },
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Linkedin className="h-5 w-5" />, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-dark-500 flex items-center justify-center text-dark-100 hover:bg-accent-500 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Technology</h4>
            <ul className="space-y-4">
              {[
                { name: 'Core Logic', href: '#core-logic' },
                { name: 'Testing', href: '#testing' },
                { name: 'Innovation', href: '#innovation' },
                { name: 'Documentation', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-dark-200 hover:text-accent-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Applications</h4>
            <ul className="space-y-4">
              {[
                { name: 'Government', href: '#applications' },
                { name: 'Military', href: '#applications' },
                { name: 'Financial', href: '#applications' },
                { name: 'Enterprise', href: '#applications' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-dark-200 hover:text-accent-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About', href: '#creator' },
                { name: 'Team', href: '#' },
                { name: 'Careers', href: '#' },
                { name: 'Contact', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-dark-200 hover:text-accent-500 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-400 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-200 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HeliCrypt. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-dark-200 hover:text-accent-500 text-sm">Privacy Policy</a>
            <a href="#" className="text-dark-200 hover:text-accent-500 text-sm">Terms of Service</a>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent-500 text-white flex items-center justify-center shadow-lg hover:bg-accent-600 transition-colors duration-300"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;