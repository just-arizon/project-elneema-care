import React, { useState } from "react";

import { motion } from "framer-motion";
import BlogImg from "../assets/BlogImg.jpg";
import image1 from "../assets/P.S.S2.jpg";
import image2 from "../assets/P.S.S1.jpg";
import image3 from "../assets/P.S.S3.jpg";
import image4 from "../assets/P.S.S7.jpg";
import image5 from "../assets/P.S.S7.jpg";
import image6 from "../assets/P.S.S6.jpg";
import image7 from "../assets/P.S.S4.jpg";
import image8 from "../assets/P.S.S5.jpg";
import { Image, Button } from "@nextui-org/react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

  const galleryImages = [image1, image7, image3, image4, image8, image8, image6, image2];
const padScholarship = () => {

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
              
              url(${BlogImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.2) contrast(1.0)", // Adjust these values as needed
            zIndex: -1,
          }}
        >
          {" "}
          {/* Apply an overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <div className="flex justify-center items-center h-full">
            <div className="absolute p-5  z-30 text-white font-Manrope font-semibold text-2xl ">
              Scholarship Scheme
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
              <BreadcrumbPage className="font-semibold">Scholarship</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="font-medium font-Manrope mx-5">
        <p className='py-5 leading-8'>The Pad Scholarship Scheme (P.S.S) initiative is a School Attendance Support Program targeted at community secondary schools focusing on young girls age 8-18 which we have been running for 9 months and countiing. Through the help of our donors, sponsors and volunteers we have been able to award pad scholarship to girls by giving a year supply of sanitary products to one girl every month and also covering her tuition fees pay for a year this way indigent girls are eased the financial burden which enable them focus on their studies and maximizing their full potentials. This program has helped us raise young girls who become advocates for women across different communities enabling them to become a catalyst for change and an influencer to other young girls.

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
              Pad Scholarship Scheme  Gallery
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

export default padScholarship