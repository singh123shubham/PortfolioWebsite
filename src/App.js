import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/NavBar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import About from './components/About';
import ProjectDetails from './components/ProjectDetails';
import './App.css';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  const pageTransition = {
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: "-100vw"
    }
  };

  const AnimatedRoutes = () => {
    const location = useLocation();

    return (
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial="out" animate="in" exit="out" variants={pageTransition}><About /></motion.div>} />
          <Route path="/about" element={<motion.div initial="out" animate="in" exit="out" variants={pageTransition}><About /></motion.div>} />
          <Route path="/experience" element={<motion.div initial="out" animate="in" exit="out" variants={pageTransition}><Experience /></motion.div>} />
          <Route path="/projects" element={<motion.div initial="out" animate="in" exit="out" variants={pageTransition}><Projects /></motion.div>} />
          <Route path="/projects/:id" element={<motion.div initial="out" animate="in" exit="out" variants={pageTransition}><ProjectDetails /></motion.div>} />
          <Route path="/education" element={<motion.div initial="out" animate="in" exit="out" variants={pageTransition}><Education /></motion.div>} />
          <Route path="/skills" element={<motion.div initial="out" animate="in" exit="out" variants={pageTransition}><Skills /></motion.div>} />
          <Route path="/hobbies" element={<motion.div initial="out" animate="in" exit="out" variants={pageTransition}><Hobbies /></motion.div>} />
        </Routes>
      </AnimatePresence>
    );
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <AnimatedRoutes />
        
      </div>
    </Router>
  );
};

export default App;
