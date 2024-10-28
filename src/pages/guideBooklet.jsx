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
const GuideBooklet = () => {
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
            Guide Booklet
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
              <BreadcrumbPage className="font-semibold">Guide Booklet</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="font-medium font-Manrope mx-5">
        <p className='py-5 leading-8'>We have a “not to be sold booklet” for adolescent girls teaching them how to better manage their flow. This booklet is distributed to young girls in rural communities and urban slums aged 8-18(both in and out of school) to enable them to understand proper and hygienic ways of managing their periods and care for their body pre and post cycle. We also engage in Community Awareness Campaigns to raise awareness on menstrual hygiene management (MHM) and reduce period stigma in communities. We engage and train our Volunteers to create more awareness in their various communities. You can click below to download the booklet and share with others
        </p>
        <p className='py-5'></p>
      </div>
    </div>
  )
}

export default GuideBooklet