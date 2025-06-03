import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="card h-full flex flex-col"
      variants={cardVariants}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl mb-2 text-white">{title}</h3>
      <p className="text-dark-200 flex-grow">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;