import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import projectData from './ProjectData';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <div className='project-container'>
        <ul className="project-list">
          {projectData.map((project, index) => (
            <motion.li
              key={project.id}
              className="project-box"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {project.title}
              </motion.h3>
              <Link
                to={`/projects/${project.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 10px 8px rgb(255,255,255)",
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
            Go Details
          </motion.button>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;
