import React, { useState } from "react";
// import Landing from "../assets/landing[2].jpg";
import { Button, Link, Card, CardBody, CardHeader } from "@nextui-org/react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import LandingImg1 from "../assets/landing[1].jpg";
import LandingImg2 from "../assets/landing[2].jpg";
import LandingImg3 from "../assets/landing[3].jpg";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Snippet} from "@nextui-org/react";
import { AiFillBank } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
//
// required parameter to fetch images
const urlEndpoint = " https://ik.imagekit.io/vzma9sfet/";
import {  IKVideo  } from "imagekitio-react";

// import required modules
import { Autoplay } from "swiper/modules";

const Landing = () => {
  const [showVideo, setShowVideo] = useState(false);
  // Animation variants for the text paragraphs
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

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <section className="bg-blue- relative">
      <div className="h-svh max-h-[550px] relative">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          loop={true}
          effect={"coverflow"}
          className="mySwiper"
        >
          <SwiperSlide
            className="grid-layout bg-cover bg-center lg:w-full w-full h-full absolute"
            style={{
              backgroundImage: `
          
          url(${LandingImg1})`,

              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(.8) contrast(1)", // Adjust these values as needed
              zIndex: -1,
            }}
          >
            {" "}
            {/* Apply an overlay to reduce brightness */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </SwiperSlide>
          <SwiperSlide
            className="grid-layout bg-cover bg-center lg:w-full w-full h-full absolute"
            style={{
              backgroundImage: `url(${LandingImg2})`,

              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(.8) contrast(1)", // Adjust these values as needed
              zIndex: -1,
            }}
          >
            {" "}
            {/* Apply an overlay to reduce brightness */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </SwiperSlide>
          <SwiperSlide
            className="grid-layout bg-cover bg-center lg:w-full w-full h-full absolute"
            style={{
              backgroundImage: `url(${LandingImg3})`,

              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(.8) contrast(1)", // Adjust these values as needed
              zIndex: -1,
            }}
          >
            {" "}
            {/* Apply an overlay to reduce brightness */}
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="landing flex flex-col lg:justify- items- pt-28 lg:px-20 px-5 z-10 w-full h- absolute top-0">
        <div className="flex flex-col justify-center ">
          <motion.h1
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ staggerChildren: 0.5 }} // Staggering the child elements
            className="text-white lg:text-7xl md:text-5xl text-4xl  font-semibold lg:text-start text-center lg:w-4/5 md:w-full font-Inter"
          >
            <motion.div
              variants={textVariant}
              custom={0}
              className="text-orange-400 font-extrabold lg:w-2/3"
            >
              Ending Period Poverty In Africa
            </motion.div>
            <motion.div variants={textVariant} custom={1} className="lg:w-4/5">
              One Girl At At Time
            </motion.div>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={textVariant}
            custom={2}
            className="text-white lg:text-start text-center py-3 lg:w-3/5 font-Montserrat"
          >
            The Watch Word: We give not because we have enough but because we
            know how it feels not to have.
          </motion.p>

          <div className="flex lg:justify-start justify-center pt-3 gap-4">
            <Button
              as={Link}
              href={"#"}
              className="bg-orange-500 text-white rounded-full font-bold px-8"
              size="lg"
              onPress={onOpen}
            >
              Donate
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Account Details</ModalHeader>
              <ModalBody>
                <p> 
                 <span className="bold">Naira Account :</span>
                 <span className=""> El-Neema cares initiative </span>
                </p>
                <Snippet symbol={<AiFillBank />} variant="flat" color="warning"
                hideCopyButton
                >Guaranty Trust Bank</Snippet>
                <Snippet symbol="#"> 0826233968</Snippet>
                <p>
                 <span className="bold">USD Account :</span>
                 <span className=""> El-Neema cares initiative </span>
                </p>
                <Snippet symbol="#"> 0837099221</Snippet>

              </ModalBody>
              <ModalFooter>
               Thanks for your Support
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
            <div className="">
              <div
                className="bg-white text-white rounded-full animate-pulseBorder border-transparent w-12 h-12 flex justify-center"
                size=""
              >
                <Button
                  className="bg-transparent"
                  size="lg"
                  onClick={() => setShowVideo(true)}
                >
                  <FaPlay className="text-orange-500" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* YouTube iframe with close button */}
      {showVideo && (
        <div className="absolute top-0 flex justify-center items-center bg- bg-opacity- z-50 overflow-hidden w-full h-">
          <div className="relative gap-5 grid">
            <div className="flex justify-center">
              <button
                onClick={() => setShowVideo(false)}
                className=" text-white bg-white bg-opacity-20 backdrop-blur-lg border border-white border-opacity-20 rounded-full w-10 h-10 z-50 flex justify-center items-center text-lg"
              >
                <IoMdClose />
              </button>
            </div>
            <div className="px-5 ">
              <IKVideo
                urlEndpoint={urlEndpoint}
                path="/El-neema-data/el-neema-video.mp4"
                width="640"
                height="1138"
                autoPlay
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Landing;
