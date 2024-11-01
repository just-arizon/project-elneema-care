import React from "react";
import { motion } from "framer-motion";
import { FaDraftingCompass } from "react-icons/fa";
import { RiLightbulbFlashFill, RiShieldFlashFill } from "react-icons/ri";
import { TiGroup } from "react-icons/ti";
import { CgPathExclude } from "react-icons/cg";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const Values = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const cardVariants = {
    offscreen: { 
      opacity: 0, // Make it invisible initially
      y: 0,       // Keep it in its position
     },
    onscreen: {
      opacity: 1,
      y: -18,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const cards = [
    {
      icon: <FaDraftingCompass />,
      title: "Advocacy",
      body: "We actively work to challenge societal norms, policies, and practices that perpetuate period poverty and menstrual stigma.",
    },
    {
      icon: <TiGroup />,
      title: "Collaborations",
      body: "We believe in building strong partnerships with government agencies, NGOs, and communities to achieve our goals.",
    },
    {
      icon: <CgPathExclude />,
      title: "Compassion",
      body: "We approach our mission with empathy and care, understanding the challenges individuals face and providing support with respect and kindness.",
    },
    {
      icon: <RiShieldFlashFill />,
      title: "Empowerment",
      body: "We believe in empowering individuals, especially women and girls, through education and awareness.",
    },
  ];

  return (
    <section className="grid lg:grid-cols-1 md:grid-cols-1 lg:gap-10 lg:w-full lg:my-32">
      <div className="grid lg:gap-1 gap-8 my-12">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ staggerChildren: 0.5 }}
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

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 justify-center lg:px-20 px-5 lg:my-12 my-5">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
            >
              <Card className="lg:p-10 px-5 py-10">
                <CardHeader className="text-xl font-Inter font-semibold text-center flex gap-2 grid justify-center">
                  <div className="flex justify-center">
                    <span className="flex justify-center items-center text-4xl bg-orange-400 w-20 h-20 rounded-full text-white">
                      {card.icon}
                    </span>
                  </div>
                  <span>{card.title}</span>
                </CardHeader>
                <CardBody className="leading-8 text-center">
                  {card.body}
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
