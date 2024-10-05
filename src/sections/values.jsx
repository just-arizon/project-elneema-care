import React from 'react'
import { motion } from "framer-motion";
import { GiStigmata } from "react-icons/gi";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { ImPower } from "react-icons/im";
import { CgPathExclude } from "react-icons/cg";
import { Card, CardHeader, CardBody} from "@nextui-org/react"
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


      const cards = [
        {
        icon: <GiStigmata />,
        title: "Advocacy",
         body:" We actively work to challenge societal norms, policies, and practices that perpetuate period poverty and menstrual stigma"
        },
        {
        icon:<TiGroup />,    
        title: "Collaborations",
         body:"We believe in building strong partnerships with government agencies, NGOs, and communities to achieve our goals."
        },
        {
        icon:<CgPathExclude />,    
        title: "Compassion",
         body:"We approach our mission with empathy and care, understanding the challenges individuals face and providing support with respect and kindness."
        },
        {
        icon:<ImPower />,    
        title: "Empowerment",
         body:"We believe in empowering individuals especially women and girls through education and awareness, giving them the tools to manage their menstrual health confidently and enable them make informed choices about their health and well-being."
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

    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-6 justify-center lg:px-20 px-5 my-10">
            {cards.map((card, index) => (
                <Card className="lg:p-10 px-5 py-10" key={index}>

                    <CardHeader className='text-2xl font-Inter font-semibold text-center flex gap-2 grid justify-center'>
                        <span className="flex justify-center bg- text-4xl">
                            {card.icon}
                        </span>             
                        <span className="">
                            {card.title}
                        </span>             
                        </CardHeader>
                    <CardBody className='leading-8 text-center'>{card.body}</CardBody>
                </Card>
            ))}
        </div>

  </div>
  </section>
  )
}

export default values