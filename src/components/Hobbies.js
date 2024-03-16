import React from 'react';
import { motion } from 'framer-motion';
import './Hobbies.css';
import { GiCricketBat } from 'react-icons/gi';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { MdCardTravel } from 'react-icons/md';
import { FaSearchengin } from 'react-icons/fa';
import Contact from './Contact';

const Hobbies = () => {
  return (
    <>
    <motion.div
      className='container-hobbie'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hobbies
      </motion.h1>
      <div className='hobbie'>
        <motion.div
          className='circle'
          initial={{ x: -100, y: -100 }}
          animate={{ x: 0, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <GiCricketBat style={{ color: 'blueviolet', fontSize: '3.5rem' }} />
        </motion.div>
        <motion.div
          className='circle'
          initial={{ x: 100, y: -100 }}
          animate={{ x: 0, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <BiSolidMoviePlay style={{ color: 'blueviolet', fontSize: '3.5rem' }} />
        </motion.div>
        <motion.div
          className='circle'
          initial={{ x: -100, y: 100 }}
          animate={{ x: 0, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <MdCardTravel style={{ color: 'blueviolet', fontSize: '3.5rem' }} />
        </motion.div>
        <motion.div
          className='circle'
          initial={{ x: 100, y: 100 }}
          animate={{ x: 0, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaSearchengin style={{ color: 'blueviolet', fontSize: '3.5rem' }} />
        </motion.div>
      </div>
    </motion.div>

    <Contact/>
    </>
  );
};

export default Hobbies;
