import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';
import reactcertification from '../Assets/Reat.jscertificate.webp'
const Education = () => {

  const handleClickCretificationReactjs = () => {
    const githubURL = reactcertification
    window.open(githubURL, '_blank');

  }

  const handleClickCretificationNodejs = ()=> {
    const link = "https://www.udemy.com/certificate/UC-4099eb38-4a0e-4f46-b459-c94162d8d87b/"
    window.open(link,'_blank')

  }
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education Details
      </motion.h1>

      <div className="education-container">
        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Master of Computer Application</h3>
          <p>Swami Vivekanand Subharti University (2020-2022),
            Meerut
          </p>
          <p>Percentage - 72%</p>
        </motion.div>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3>Bachelor Of Computer Application</h3>
          <p>Babu Banarsi Das University(2017-2020), Lucknow</p>
          <p>Percentage - 73%</p>
        </motion.div>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3> XII Standard</h3>
          <p>Central Academy (2016), Gorakhpur</p>
          <p>Percentage - 60%</p>
        </motion.div>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3>X Standard</h3>
          <p>Smt Draupadi Devi Tripathi Intermediate College (2014), Gorakhpur</p>
          <p>Percentage - 80%</p>
        </motion.div>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3>Certificate :- {"Node.Js"}</h3>
          <p>Udemy</p>
          <p>2021</p>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickCretificationNodejs}
            style={{
              backgroundColor: "blueviolet",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            Link
          </motion.button>
        </motion.div>
        <motion.div
          className="education-item"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
           <h3>Certificate :- {"Ract.js"}</h3>
          <p>Namaste React by Akshay Saini</p>
          <p>2021</p>
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickCretificationReactjs}
            style={{
              backgroundColor: "blueviolet",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              outline: "none",
            }}
          >
            Link
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Education;
