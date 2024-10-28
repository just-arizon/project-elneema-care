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
const PadOnStreet = () => {
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
            Pad on the Street (P.O.S)
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
              <BreadcrumbPage className="font-semibold">Pad on the Street</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="font-medium font-Manrope mx-5">
        <p className='py-5 leading-8'>This initiative was created specifically for out of school girls especially those hawking or out of school due to certain circumstances. We use the Pad on the Street (P.O.S) to meet these girls where they are and make sure they are not forgotten in our fight against period poverty.

        </p>
        <p className='py-5'></p>
      </div>
    </div>
  )
}

export default PadOnStreet