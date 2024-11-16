import React, { useState } from "react";

import { motion } from "framer-motion";
import BlogImg from "../assets/BlogImg.jpg";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { IKImage } from "imagekitio-react";
import { Button } from "@/components/ui/button";
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
      <p className='py-5 leading-8 text-center'>We have a “not to be sold booklet” for adolescent girls teaching them how to better manage their flow. This booklet is distributed to young girls in rural communities and urban slums aged 8-18(both in and out of school) to enable them to understand proper and hygienic ways of managing their periods and care for their body pre and post cycle. We also engage in Community Awareness Campaigns to raise awareness on menstrual hygiene management (MHM) and reduce period stigma in communities. We engage and train our Volunteers to create more awareness in their various communities. You can click below to download the booklet and share with others
      </p>
      
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
