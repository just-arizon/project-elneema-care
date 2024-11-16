import React, { useState } from "react";

import { motion } from "framer-motion";
import BlogImg from "../assets/Myflow.png";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { IKImage } from "imagekitio-react";
import { Button } from "@/components/ui/button";
import image9 from "../assets/P.A.Y9.jpg";
import image5 from "../assets/P.A.Y5.jpg";
import image7 from "../assets/P.A.Y4.jpg";
import image8 from "../assets/P.A.Y8.jpg";
import { Image, Card } from "@nextui-org/react";



const galleryImages = [ image5, image7,  image8, image9];
// ImageKit URL endpoint
const urlEndpoint = "https://ik.imagekit.io/vzma9sfet";
const pdfPath = "/El-neema-data/My%20Flow%20and%20I%20-%20A%20Publication%20of%20El%20Neema%20Cares%20Initiative.pdf?updatedAt=1731454876972"; // Update to the correct PDF path

const Magazine = () => {
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
             Magazine Booklet
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
            <BreadcrumbItem><BreadcrumbPage className="font-semibold">Magazine</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className=" font-medium font-Manrope mx-5">
      <p className='py-5 leading-8 text-center'>
      Let’s discuss period and how we can empower the girl child.
Featuring period stories,
A publication of El Neema cares initiative
      </p>
      
      <div className='py-5 relative'>
          <div className="flex justify-center">
            <IKImage
             urlEndpoint={urlEndpoint}
             path="/El-neema-data/Neema Magazine.png"
            width="400"
            height="400"
             />
             <Card className="">

             </Card>
          </div>
          
              
              <div className=" w-full  ">
            <a
              href={`${urlEndpoint}${pdfPath}`}
              download="MAIN_NEEMA_BOOKLET.pdf" // Custom filename for download
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center my-">
                <Button className="">
                  Download Magazine
                </Button>
              </div>
            </a>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Magazine;
