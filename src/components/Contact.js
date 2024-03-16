import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <h1>Contact Us</h1>
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p>Please fill out the form below to get in touch with us:</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              value={formData.message} 
              onChange={handleChange} 
            />
          </div>
          <motion.button
            whileHover={{
                className:'btn-submit' ,
                type:"submit",
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.2 }}
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
            Submit
          </motion.button>
        </form>
      </motion.div>
    </>
  );
};

export default Contact;
