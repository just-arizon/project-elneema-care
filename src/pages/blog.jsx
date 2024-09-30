import React from 'react'
import { motion } from "framer-motion";
import BlogImg from "../assets/BlogImg.jpg";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
const blog = () => {
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
              Blog
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
              <BreadcrumbPage className="font-semibold">Blog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
}

export default blog