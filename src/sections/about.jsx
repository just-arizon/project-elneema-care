import React from "react";
import { Image, Button, Card } from "@nextui-org/react";
import Image1 from "../assets/about1.jpg";
import Image2 from "../assets/about2.jpg";
import { motion } from "framer-motion";
import { SlTrophy } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

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

const initiatives = [
  { name: "Pad a Yarinya (P.A.Y)" },
  { name: "Widows Smile at Christmas (W.S.C)" },
  { name: "Pad Scholarship Scheme (P.S.S)" },
  { name: "El Neema Cares period guide" },
];

const AboutUs = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:px-24 px-5 py-20 gap-5 ">
      <div className="grid gap-5 bg- lg:w-10/12">
        <div>
          <h1 className="text-lg text-orange-400 lg:text-start text-center mb-4">
            About Us
          </h1>
        </div>
        <div className="grid lg:gap-1 gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ staggerChildren: 0.5 }}
            className="lg:w-full"
          >
            <motion.h2
              className="lg:text-4xl text-2xl font-semibold lg:text-start text-center font-Inter"
              variants={textVariant}
              custom={0}
            >
              We have impacted 8000 kids across different states in Nigeria
            </motion.h2>
          </motion.div>
          <div className="flex lg:justify-start justify-center">
            <div className="w-12 h-1 lg:mt-1 bg-orange-400 mb-3"></div>
          </div>

          <p className="text-center lg:text-start lg:mb-10 pt- font-Manrope">
            El Neema cares initiative is on a mission to reduce period stigma
            and curb period poverty in Africa one girl child at a time through
            our 4 existing initiatives below.
          </p>

          <div className="w-full ">
            <ul
            
              className="flex flex-col  gap-4"
            >
              {initiatives.map((initiative, index) => (
                <li key={index} className="">
                  <Card className="w-full bg-gray-200 py-2 px-4 font-semibold text-start shadow-md">
                    {initiative.name}
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="my-5">
          <Button className="text-white bg-orange-400">Read More</Button>
        </div>
      </div>

      <div className="bg- grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="grid gap-0">
          <div className="lg:w-full  grid gap-2 mt-10">
            <Image src={Image1} className="lg:h-auto rounded-xl" />
          </div>
          <div className="bg-orange-400 w-full h- rounded-xl grid p-10 lg:p-5 gap-4 text-white">
            <div className="flex items-center text-5xl">
              <SlTrophy />
            </div>
            <div className="font-extrabold">
              <p className="text-2xl">1</p>
              <p className="text-xl">YEAR+ OF LOVE</p>
            </div>
          </div>
        </div>

        <div className="lg:w-full  relative">
          <Image src={Image2} className="h-auto rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;