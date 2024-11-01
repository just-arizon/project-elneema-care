import React, { useState } from "react";

import { motion } from "framer-motion";
import padYarinyaImg from "../assets/padYarinyaImg.jpg";


import image1 from "../assets/P.A.Y2.jpg";
import image2 from "../assets/P.A.Y1.jpg";
import image3 from "../assets/P.A.Y3.jpg";
import image4 from "../assets/P.A.Y7.jpg";
import image5 from "../assets/P.A.Y5.jpg";
import image6 from "../assets/P.A.Y6.jpg";
import image7 from "../assets/P.A.Y4.jpg";
import image8 from "../assets/P.A.Y8.jpg";
import image9 from "../assets/P.A.Y9.jpg";
import image10 from "../assets/P.A.Y10.jpg";
import image11 from "../assets/P.A.Y11.jpg";
import image12 from "../assets/P.A.Y12.jpg";
import image13 from "../assets/P.A.Y13.jpg";
import image14 from "../assets/P.A.Y14.jpg";
import image15 from "../assets/P.A.Y15.jpg";
import image16 from "../assets/P.A.Y16.jpg";
import image17 from "../assets/P.A.Y17.jpg";
import image18 from "../assets/P.A.Y18.jpg";
import image19 from "../assets/P.A.Y19.jpg";
import image20 from "../assets/P.A.Y20.jpg";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
import { Image, Button } from "@nextui-org/react";


  import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../sections/styles.css";

  const galleryImages = [ image5, image7,  image8, image9, image1, image3, image4,  image6, image2, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, image20];


const padYarinya = () => {
  const [isOpen, setIsOpen] = useState(false); // Modal state
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track which image is opened

  const openImagePreview = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
         <motion.div className="relative">
        <div
          className="grid-layout bg-cover bg-center lg:w-full w-full h-80 "
          style={{
            backgroundImage: `
              
              url(${padYarinyaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.2) contrast(1.0)", // Adjust these values as needed
            zIndex: -1,
          }}
        >
          {" "}
          {/* Apply an overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black opacity-60 "></div>
          <div className="flex justify-center items-center h-full">
            <div className="absolute p-5  z-30 text-white font-Manrope font-semibold text-2xl ">
              P.A.Y
            </div>
          </div>
        </div>
      </motion.div> 

      <div className="relative lg:mx- mx-5 my-5 bg-gray-100 p-3 rounded-md mb-8">
        <Breadcrumb className="">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold">Pad A Yarinya</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="font-medium font-Manrope mx-5">
        <p className='py-5 leading-8'>Through the Pad a Yarinya (P.A.Y) initiative a Menstrual Hygiene Education and Sanitary supply program targeted at young girls in rural communities and urban slums age 8-18(both in and out of school) who are unable to afford period supplies and lack Menstrual Hygiene Education. Through the help of our donors, sponsors and volunteers we have been able to distribute Free Sanitary Pads and period guide pamphlets which have led to reduced school Absenteeism and curb of period stigma. We have been running this program for 5 years now.
        </p>
        <p className='py-5'></p>
      </div>


      <section className="">
      <div className="grid lg:gap-1 gap-8 mb-16">
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ staggerChildren: 0.5 }} // Staggering the child elements
            className="lg:w-full"
          >
            <motion.h2
              className="lg:text-4xl text-2xl font-bold lg:text-center text-center font-Inter"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Pad Yarinya Gallery
            </motion.h2>
          </motion.div>
          <div className="flex lg:justify-center justify-center">
            <div className="w-12 h-1 lg:mt-2 bg-orange-400"></div>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-4 gap-4 p-4 lg:px-20">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`cursor-pointer grid-cols-2`}
              onClick={() => openImagePreview(index)}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className=" "
              />
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 "
          onClick={closeModal}
        >
          <div
            className="relative bg-transparent overflow-hidden mt-"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Swiper for Image Sliding */}
            <Swiper
              initialSlide={currentImageIndex}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={5}
              slidesPerView={1}
              className="w-full lg:w-full h-full "
            >
              {galleryImages.map((image, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                  <Image src={image} alt={`Preview ${index}`} className="w-full   rounded-none" />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Close button */}
            <Button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg z-50"
              onClick={closeModal}
            >
              ✕
            </Button>
          </div>
        </div>
      )}
      </section>
    </div>
  )
}

export default padYarinya