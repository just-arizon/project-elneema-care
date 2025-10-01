import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogImg from "../assets/BlogImg.jpg";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Image } from "@nextui-org/react";
import { Button } from "@/components/ui/button";

// ImageKit URL endpoint
const urlEndpoint = "https://ik.imagekit.io/vzma9sfet";
const pdfPath = "/El-neema-data/My%20Flow%20and%20I%20-%20A%20Publication%20of%20El%20Neema%20Cares%20Initiative.pdf?updatedAt=1731454876972";

// Import images
import image1 from "../assets/debate-one.jpg";
import image2 from "../assets/debate-two.jpg";
import image3 from "../assets/debate-three.jpg";
import image6 from "../assets/debate-four.jpg";
import image7 from "../assets/debate-five.jpg";
// import image8 from "../assets/debate-8.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../sections/styles.css";



const galleryImages = [image1, image7, image3, image6, image2];

const Gallery = () => {
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
          className="grid-layout bg-cover bg-center lg:w-full w-full h-80"
          style={{
            backgroundImage: `url(${BlogImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.2) contrast(1.0)",
            zIndex: -1,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex justify-center items-center h-full">
            <div className="absolute p-5 z-30 text-white font-Manrope font-semibold text-2xl">
              Debate Competition
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative lg:mx-5 mx-5 my-5 bg-gray-100 p-3 rounded-md mb-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink href="/blog">Blog</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage className="font-semibold">Gallery</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="font-medium font-Manrope mx-5">
        <p className='py-5 leading-8 text-center'>
          Kids who won the debate competition
        </p>
      </div>

      <section className="grid my-7">
        <div>
          <h1 className="text-lg text-orange-400 lg:text-center text-center mb-2 font-Manrope">
            OUTREACH
          </h1>
        </div>
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
              Photo Gallery
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
              className={`${
                index === 0 || index === 3 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              } cursor-pointer`}
              onClick={() => openImagePreview(index)}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </div>
      </section>

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

    </div>
  );
};

export default Gallery;