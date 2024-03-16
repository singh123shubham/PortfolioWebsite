import React from "react";
import { motion } from "framer-motion";
import image from "../Assets/img.png";
import "./About.css";
import { ReactTyped } from "react-typed";
import { IoIosMailUnread } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import resume from '../Assets/shubhamsinghResume(01).pdf'

const About = () => {

 

  const handleClickResumeDownlode = () => {
    const resumeURL = resume;
    window.open(resumeURL, '_blank');
  };

  const handleClickGitHub = () => {
    const githubURL = "https://github.com/singh123shubham"
    window.open(githubURL, '_blank');

  }

  const handleClickHireMe = () => {
    const phoneNumber = "+1234567890";
    window.open(`tel:${phoneNumber}`);
  };

  const handleClickMail = () => {
    const emailAddress = "singhshubhamgkp98@.com";
    const subject = "Interview Schedule (React Developer)";
    const body = " ";

    const mailToLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailToLink);
  }

  const handleClickLinkedIn = () => {
    const linkedInURL = "https://www.linkedin.com/in/shubhamsingh12345/"
    window.open(linkedInURL,'_blank')
  }

  const handleClickleetCode = () => {
    const  leetCodeURL = "https://leetcode.com/singhshubham123/"
    window.open(leetCodeURL,"_blank")
  }



  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me!!
      </motion.h1>
      <motion.div
        className="container-about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="container-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="into">
            I'm a{" "}
            <ReactTyped
              strings={[
                "Shubham Singh",
                "React.js Developer",
                "Frontend Developer",
              ]}
              typeSpeed={300}
              loop
              backSpeed={200}
              cursorChar=">"
              showCursor={true}
            />
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Hi there! 👋 I'm SHUBHAM SINGH, a seasoned React developer passionate
            about crafting dynamic web applications. With expertise in
            component-based architecture, state management, and responsive
            design, I thrive on turning innovative ideas into polished digital
            experiences. Let's build something amazing together!
          </motion.p>

          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickResumeDownlode}
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
            Resume
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
            whileTap={{ scale: 0.9, rotate: 5 }}
            transition={{ duration: 0.2 }}
            onClick={handleClickHireMe}
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
            Hire me !!
          </motion.button>

          <div className="social-icon">
            <motion.div
              className="circle"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClickMail}
            >
              <IoIosMailUnread style={{ color: "red", fontSize: "3rem" }} />
            </motion.div>
            <motion.div
              className="circle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClickleetCode}
            >
              <SiLeetcode style={{ color: "black", fontSize: "3rem" }} />
            </motion.div>
            <motion.div
              className="circle"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClickGitHub} 
              
            >
              <FaGithub style={{ color: "black", fontSize: "3rem" }} />
            </motion.div>
            <motion.div
              className="circle"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleClickLinkedIn}
            >
              <FaLinkedin style={{ color: "blue", fontSize: "3rem" }} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="container-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={image} alt="image" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;
