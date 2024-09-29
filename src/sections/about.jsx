import React from "react";
import { Image, Button } from "@nextui-org/react";
import Image1 from "../assets/about1.jpg";
import Image2 from "../assets/about2.jpg";
import { motion } from "framer-motion";
import { SlTrophy } from "react-icons/sl";
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
const aboutUs = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:px-24 py-20 gap- px-5 bg-pink- h-">
      <div className="grid gap- bg-slate- lg:w-10/12">
        <div>
          <h1 className="text-lg text-orange-400 lg:text-start text-center mb-4 ">
            About Us
          </h1>
        </div>
        <div className=" grid lg:gap-1 gap-8 ">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ staggerChildren: 0.5 }} // Staggering the child elements
            className="lg:w-full"
          >
            <motion.h2
              className="lg:text-4xl text-3xl font-semibold lg:text-start text-center font-Inter"
              variants={textVariant}
              custom={0}
            >
              We have impacted 8000 kids across different states in Nigeria
            </motion.h2>
          </motion.div>
          <div className="flex lg:justify-start justify-center">
            <div className="w-12 h-1 lg:mt-1 bg-orange-400"></div>
          </div>

          <p className="text-center lg:text-start  lg:mb-10 font-Montserrat">
          El Neema cares initiative is on a mission to reduce period stigma and curb period poverty in Africa one girl child at a time through our 4 existing initiatives below.
          </p>
          <ul className="mb-5 font-semibold">
            <li className="">Pad a Yarinya (P.A.Y)</li>
            <li className="">Widows Smile at Christmas (W.S.C)
            </li>
            <li className="">Pad Scholarship Scheme (P.S.S)</li>
          </ul>
        </div>
        <div className="my-5
        ">
            <Button className="text-white bg-orange-400">Read More</Button>
        </div>
      </div>


      <div className="bg-neutral- grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          <div className="grid gap-5">
            <div className="lg:w- bg-purple- grid gap-7 ">
              <Image src={Image1} className="lg: h- rounded-xl" />
            </div>
            <div className="bg-orange-400 w-full h-44 rounded-xl grid p-10 lg:p-5 gap-4 text-white  ">
            <div className="flex items-center text-5xl ">
              <SlTrophy />
            </div>
            <div className="font-extrabold">
              <p className="text-2xl">1</p>
              <p className="text-xl">YEAR+ OF LOVE</p>
            </div>
            </div>
            
          </div>

          <div className="lg:w- bg-purple- relative">
            <Image src={Image2} className="h-" />
          </div>
      </div>
    </div>
  );
};

export default aboutUs;
