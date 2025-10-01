import React, { useState } from "react";

import { motion } from "framer-motion";
import BlogImg from "../assets/Myflow.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { IKImage } from "imagekitio-react";
import { Button } from "@/components/ui/button";

import image1 from "../assets/French.jpg";
import image2 from "../assets/Hausa.jpg";
import image3 from "../assets/Igbo.jpg";
import image4 from "../assets/Yoruba.jpg";
import image5 from "../assets/English.jpg";
import image6 from "../assets/Neema Magazine.png";
import { Image } from "@nextui-org/react";


const urlEndpoint = "https://ik.imagekit.io/vzma9sfet";
const pdfPath = "/El-neema-data/MAIN%20NEEMA%20BOOKLET_compressed.pdf?updatedAt=1730291543290"; // Update to the correct PDF path

const Magazine = () => {

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
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold">
                Magazine
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className=" font-medium font-Manrope mx-5">
        <p className="py-5 leading-8 text-center">
          Let’s discuss period and how we can empower the girl child. Featuring
          period stories, A publication of El Neema cares initiative
        </p>

              
    
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
                <div className="py-5 relative">
                 <div className="flex justify-center gap-2">
                   <div className="">
                     <p className="text-center">English</p>
                     <Image src={image5} width="250" height="auto" />
                   </div>
                 </div>
                 <div className=" w-full py-2">
                   <a
                      href="../assets/Neema's Menstual Booklet - English.pdf"
                     download="Neema's Menstual Booklet - English.pdf" // Custom filename for download
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <div className="flex justify-center my-">
                       <Button className="">Download Booklet</Button>
                     </div>
                   </a>
                 </div>
               </div>
                <div className="py-5 relative">
                 <div className="flex justify-center gap-2">
                   <div className="">
                     <p className="text-center">French</p>
                     <Image src={image1} width="250" height="auto" />
                   </div>
                 </div>
                 <div className=" w-full py-2">
                   <a
                     href="../assets/Neema's Menstual Booklet - French.pdf"
                     download="Neema's Menstual Booklet - French.pdf" // Custom filename for download
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <div className="flex justify-center my-">
                       <Button className="">Download Booklet</Button>
                     </div>
                   </a>
                 </div>
               </div>
                <div className="py-5 relative ">
                 <div className="flex justify-center gap-2">
                   <div className="">
                     <p className="text-center">Igbo</p>
                     <Image src={image3} width="250" height="auto" />
                   </div>
                 </div>
                 <div className=" w-full py-2">
                   <a
                      href="../assets/NEEMA'S MENSTRUAL BOOKLET - IGBO.pdf"
                     download="Neema's Menstual Booklet - Igbo.pdf" // Custom filename for download
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <div className="flex justify-center my-">
                       <Button className="">Download Booklet</Button>
                     </div>
                   </a>
                 </div>
               </div>
                <div className="py-5 relative">
                 <div className="flex justify-center gap-2">
                   <div className="">
                     <p className="text-center">Yoruba</p>
                     <Image src={image4} width="250" height="auto" />
                   </div>
                 </div>
                 <div className=" w-full py-2">
                   <a
                     href="../assets/Neema's Menstual Booklet - Yoruba.pdf"
                     download="Neema's Menstual Booklet - Yoruba.pdf" // Custom filename for download
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <div className="flex justify-center my-">
                       <Button className="">Download Booklet</Button>
                     </div>
                   </a>
                 </div>
               </div>
               <div className="py-5 relative">
                 <div className="flex justify-center gap-2">
                   <div className="">
                     <p className="text-center">Hausa  </p>
                     <Image src={image2} width="250" height="auto" />
                   </div>
                 </div>
                 <div className=" w-full py-2">
                   <a
                     href="../assets/Neema's Menstual Booklet - Hausa.pdf"
                     download="Neema's Menstual Booklet - Hausa.pdf" // Custom filename for download
                     target="_blank"
                     rel="noopener noreferrer"
                   >
                     <div className="flex justify-center my-">
                       <Button className="">Download Booklet</Button>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
             <div className="py-5 px-10">
               <div className="flex lg:justify-start justify-center">
                 <div className="">
                   <Image src={image6} width="250" height="auto" />
                   <div className="flex justify-center">
                     <a
                       href={`${urlEndpoint}${pdfPath}`}
                       download="MAIN_NEEMA_BOOKLET.pdf" // Custom filename for download
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <div className=" ">
                         <Button className="">Download Booklet</Button>
                       </div>
                     </a>
                   </div>
                 </div>
               </div>
             </div>

      </div>
    </div>
  );
};

export default Magazine;
