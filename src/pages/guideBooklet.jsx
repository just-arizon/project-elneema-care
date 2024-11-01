import React, { useState } from "react";

import { motion } from "framer-motion";
import BlogImg from "../assets/BlogImg.jpg";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { IKImage } from "imagekitio-react";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../sections/styles.css";
import image9 from "../assets/P.A.Y9.jpg";
import image5 from "../assets/P.A.Y5.jpg";
import image7 from "../assets/P.A.Y4.jpg";
import image8 from "../assets/P.A.Y8.jpg";
import { Image } from "@nextui-org/react";



const galleryImages = [ image5, image7,  image8, image9];

// ImageKit URL endpoint
const urlEndpoint = "https://ik.imagekit.io/vzma9sfet";
const pdfPath = "/El-neema-data/MAIN%20NEEMA%20BOOKLET_compressed.pdf?updatedAt=1730291543290"; // Update to the correct PDF path

const GuideBooklet = () => {
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
            backgroundImage: `url(${BlogImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.2) contrast(1.0)", 
            zIndex: -1,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 "></div>
          <div className="flex justify-center items-center h-full">
            <div className="absolute p-5 z-30 text-white font-Manrope font-semibold text-2xl ">
              Guide Booklet
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
            <BreadcrumbItem><BreadcrumbPage className="font-semibold">Guide Booklet</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="font-medium font-Manrope mx-5">
      <p className='py-5 leading-8'>We have a “not to be sold booklet” for adolescent girls teaching them how to better manage their flow. This booklet is distributed to young girls in rural communities and urban slums aged 8-18(both in and out of school) to enable them to understand proper and hygienic ways of managing their periods and care for their body pre and post cycle. We also engage in Community Awareness Campaigns to raise awareness on menstrual hygiene management (MHM) and reduce period stigma in communities. We engage and train our Volunteers to create more awareness in their various communities. You can click below to download the booklet and share with others
      </p>

      <section className="my-6">
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
              Pad On The Street Gallery
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

        <div className='py-5 relative'>
          <div className="flex justify-center">
            <IKImage
             urlEndpoint={urlEndpoint}
             path="/El-neema-data/Neema Ebook.png"
            width="400"
            height="400"
             />
          </div>
          
              
              <div className="absolute w-full bottom-10 ">
            <a
              href={`${urlEndpoint}${pdfPath}`}
              download="MAIN_NEEMA_BOOKLET.pdf" // Custom filename for download
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center my-">
                <Button className="">
                  Download Booklet
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default GuideBooklet;
