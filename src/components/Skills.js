import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';
import html from '../Assets/html.png';
import css from '../Assets/css.png';
import react from '../Assets/react.png';
import sql from '../Assets/sql.png';
import redux from '../Assets/redux.png';
import js from '../Assets/js.png';
import bootstrap from '../Assets/bootstrap.png';
import tailwind from '../Assets/tailwind.png';
import mongo from '../Assets/mongo.png';
import nodejs from '../Assets/nodejs.png';

const Skills = () => {
  const skills = [
    { src: html },
    { src: css },
    { src: js },
    { src: react },
    { src: redux },
    { src: sql },
    { src: bootstrap },
    { src: tailwind },
    { src: mongo },
    { src: nodejs }
  ];

  return (
    <>
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Skills
      </motion.h1>
      <motion.div
        className="container-skill"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="circle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={skill.src} alt={`Skill ${index}`} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
