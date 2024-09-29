import React from 'react'
import { motion } from 'framer-motion'
import Landing from "../sections/landing";

const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }} // Start slightly below the view
    animate={{ opacity: 1, y: 0 }} // Animate to its original position
    exit={{ opacity: 0, y: -50 }} // Exit to slightly above the view
    transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
    className="w-full font-Manrope "
    >
      <Landing />
     
    </motion.div>
  );
  
}

export default Home