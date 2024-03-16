import React from 'react';
import { motion } from 'framer-motion';
import "./Experience.css";

const Experience = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Experience
      </motion.h1>
      <div className='experience'>
        <div className='experience-section'>
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I have No Company Experience, I have only self and on My Personal Projects Experience.
          </motion.h3>
          <motion.h3
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            "Looking for an innovative and challenging environment that can fully utilize my skill sets."
          </motion.h3>
          <motion.p
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            Hire Me
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Experience;
