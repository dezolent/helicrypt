import React from 'react';
import { motion } from 'framer-motion';

const DnaAnimation = () => {
  // Create DNA strand with helixes
  const numSteps = 10;
  const steps = Array.from({ length: numSteps });

  return (
    <div className="relative h-96 w-96">
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: 360 }}
        transition={{ 
          repeat: Infinity, 
          duration: 15,
          ease: "linear"
        }}
      >
        <div className="relative h-full w-full">
          {steps.map((_, index) => {
            const yPosition = (index / numSteps) * 100;
            const leftShift = Math.sin((index / numSteps) * Math.PI * 2) * 40 + 50;
            const rightShift = Math.sin((index / numSteps) * Math.PI * 2 + Math.PI) * 40 + 50;
            
            return (
              <React.Fragment key={index}>
                {/* Left side of DNA */}
                <motion.div
                  className="absolute h-4 w-4 rounded-full bg-accent-500"
                  style={{ 
                    left: `${leftShift}%`, 
                    top: `${yPosition}%`,
                  }}
                  animate={{ 
                    backgroundColor: [
                      '#6E44FF', // accent-500
                      '#33FFC8', // secondary-400
                      '#6E44FF'  // accent-500
                    ],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
                
                {/* Right side of DNA */}
                <motion.div
                  className="absolute h-4 w-4 rounded-full bg-secondary-400"
                  style={{ 
                    left: `${rightShift}%`, 
                    top: `${yPosition}%` 
                  }}
                  animate={{ 
                    backgroundColor: [
                      '#33FFC8', // secondary-400
                      '#6E44FF', // accent-500
                      '#33FFC8'  // secondary-400
                    ],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                />
                
                {/* Connecting line */}
                <div 
                  className="absolute h-[2px] bg-dark-300"
                  style={{ 
                    left: `${leftShift}%`, 
                    top: `${yPosition}%`, 
                    width: `${rightShift - leftShift}%`,
                    transform: 'translateY(8px)'
                  }}
                />
              </React.Fragment>
            );
          })}
        </div>
      </motion.div>
      
      {/* Binary stream effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from({ length: 5 }).map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute text-xs text-accent-500/60 font-mono"
            initial={{ opacity: 0, y: -100 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [-100, 100]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: idx * 0.4,
              ease: "linear"
            }}
            style={{
              left: `${30 + idx * 10}%`,
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DnaAnimation;