import React, { useState } from "react";

import AboutImg from "../assets/about-page.jpg";
import image1 from "../assets/GalleryImg-1.jpg";
import image2 from "../assets/GalleryImg-2.jpg";
import image3 from "../assets/GalleryImg-3.jpg";
import image4 from "../assets/GalleryImg-4.jpg";
import image5 from "../assets/GalleryImg-5.jpg";
import image6 from "../assets/GalleryImg-6.jpg";
import image7 from "../assets/GalleryImg-7.jpg";
import image8 from "../assets/GalleryImg-8.jpg";
import { Image, Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../sections/styles.css";
import {Link} from "@nextui-org/react"

const galleryImages = [image1, image7, image3, AboutImg, image8, image6, image2];

const initiatives = [
  { name: "Pad a Yarinya (P.A.Y)" , href: "/pad-a-yarinya"},
  { name: "Widows Smile at Christmas (W.S.C)" , href: "/widows-smile"},
  { name: "Pad Scholarship Scheme (P.S.S)" , href: "/schorlarship-scheme"},
  { name: "Pad on the Street (P.O.S)" , href: "/pad-on-the-street"},
  { name: "El Neema Cares period guide",   href: "guide-booklet"},
];

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

const AboutUs = () => {
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
    <motion.div className="relative">
      <motion.div className="relative">
        <div
          className="grid-layout bg-cover bg-center lg:w-full w-full h-80 "
          style={{
            backgroundImage: `
              linear-gradient(to bottom right, rgba(0, 0, 0, .3), rgba(255, 165, 0, 0.3) 80%),
              url(${AboutImg})`,
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
              About Us
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
              <BreadcrumbPage className="font-semibold">About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="lg:mx-10 mx-5 my-7">
        <p className="font-Inter leading-8 my-5">
          <span className="text-3xl font-bold">O</span>ur story dates back to 2000 when our founder had her menstration experience at the age of 12 due to her inability to afford sanitary products, she resorted to using paper which left her bruised and made her dread period. Up until today this is the story of millions of African girls out there as a study by the ActionAid UK shows that 1 in 10 girls living in Africa miss school, sport activities or work due to lack of sanitary products and they resort use of unsanitary items such as rags, paper or even leaves which can lead to infection, bruises and severe reproductive and mental health issues.
        </p>

        <p className="font-Inter leading-8 my-5">
          <span className="text-3xl font-bold">El</span> Neema Cares initiative was founded in 2019 with the indigent girlchild in mind, our main goal is to end period poverty and stigma in Africa by providing sanitary products, education and empowerment to young girls age 8-18 through 5 initiatives,

        </p>
              <div className="w-full ">
                <ul
            
            className="flex flex-col  gap-4"
          >
            {initiatives.map((initiative, index) => (
              <li key={index} className="">
                <Link href={initiative.href} className="w-full bg-gray-200 py-2 px-4 font-semibold text-start shadow-md">
                  {initiative.name}
                </Link>
              </li>
            ))}
          </ul> 
        </div>
      </section>

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
    </motion.div>
  );
};

export default AboutUs;
