import React from 'react'
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa6";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

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
const framework = () => {
    const cards = [
        {
        icon: <FaRocket />,
        title: "Mission",
         body:"Our mission is to eradicate period poverty and empower individuals through education, access, and advocacy. We strive to create a world where menstruation is met with dignity, equality, and respect. By providing access to menstrual hygiene products and raising awareness on menstrual health, we aim to break the stigma surrounding menstruation, ensuring that no one is held back due to lack of resources or knowledge."
        },
        {
        icon:<RiLightbulbFlashFill />,    
        title: "Vision",
         body:"We envision a world where menstrual health and knowledge is prioritized, period poverty is eliminated, and all individuals regardless of their gender or socioeconomic status have equal access to the resources and knowledge they need to manage menstruation with dignity. Through advocacy, education, and community support, we aim to foster a future where menstruation is understood, respected, and no longer a barrier to anyone's health, education, or opportunities."
        },
    ]
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
            className="lg:text-4xl text-3xl font-semibold lg:text-center text-center font-Inter"
            variants={textVariant}
            custom={0}
          >
            Strategic Framework
          </motion.h2>
        </motion.div>
        <div className="flex lg:justify-center justify-center">
          <div className="w-12 h-1 lg:mt-2 bg-orange-400"></div>
        </div>

      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-6 justify-center lg:px-20 px-5">
            {cards.map((card, index) => (
                <Card className="lg:p-10 px-5 py-10" key={index}>

                    <CardHeader className='text-xl font-Inter font-semibold text-center flex gap-2'>
                        <span className="">
                            {card.icon}
                        </span>
                        <span className="">{card.title}</span>
                        
                        </CardHeader>
                    <CardBody className='leading-8'>{card.body}</CardBody>
                </Card>
            ))}
        </div>
    </section>
  )
}

export default framework