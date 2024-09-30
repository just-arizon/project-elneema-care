import React from 'react'
import { motion } from "framer-motion";

const values = () => {
    const textVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.3, // Stagger the animation
            duration: 0.6,
            ease: "easeInOut",
          },
        }),
      };
  return (
    <section className="grid lg:grid-cols-1 md:grid-cols-1  lg:gap-10 lg:w-full lg:my-32">
      
    <div className="grid lg:gap-1 gap-8 my-12">
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ staggerChildren: 0.5 }} // Staggering the child elements
      className="lg:w-full"
    >
      <motion.h2
        className="lg:text-4xl text-2xl font-semibold lg:text-center text-center font-Inter"
        variants={textVariant}
        custom={0}
      >
        Core Values
      </motion.h2>
    </motion.div>
    <div className="flex lg:justify-center justify-center">
      <div className="w-12 h-1 lg:mt-2 bg-orange-400"></div>
    </div>

  </div>
  </section>
  )
}

export default values