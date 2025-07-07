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
import { Image, Card } from "@nextui-org/react";

// const galleryImages = [image5, image7, image8, image9];
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

        <div className="flex gap-3 lg:flex-row flex-col">
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
                  <Button className="">Download Magazine</Button>
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
                  <Button className="">Download Magazine</Button>
                </div>
              </a>
            </div>
          </div>
           <div className="py-5 relative">
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
                  <Button className="">Download Magazine</Button>
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
                  <Button className="">Download Magazine</Button>
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
                  <Button className="">Download Magazine</Button>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="py-5">
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
                    <Button className="">Download Magazine</Button>
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
