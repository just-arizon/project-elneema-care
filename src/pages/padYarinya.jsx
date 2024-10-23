import React from 'react'
import { motion } from "framer-motion";
import padYarinyaImg from "../assets/padYarinyaImg.jpg";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

const padYarinya = () => {
  return (
    <div>
         <motion.div className="relative">
        <div
          className="grid-layout bg-cover bg-center lg:w-full w-full h-80 "
          style={{
            backgroundImage: `
              
              url(${padYarinyaImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.2) contrast(1.0)", // Adjust these values as needed
            zIndex: -1,
          }}
        >
          {" "}
          {/* Apply an overlay to reduce brightness */}
          <div className="absolute inset-0 bg-black opacity-60 "></div>
          <div className="flex justify-center items-center h-full">
            <div className="absolute p-5  z-30 text-white font-Manrope font-semibold text-2xl ">
              P.A.Y
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
              <BreadcrumbPage className="font-semibold">Pad A Yarinya</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="font-medium font-Manrope mx-5">
        <p className='py-5 leading-8'>Through the Pad a Yarinya (P.A.Y) initiative a Menstrual Hygiene Education and Sanitary supply program targeted at young girls in rural communities and urban slums age 8-18(both in and out of school) who are unable to afford period supplies and lack Menstrual Hygiene Education. Through the help of our donors, sponsors and volunteers we have been able to distribute Free Sanitary Pads and period guide pamphlets which have led to reduced school Absenteeism and curb of period stigma. We have been running this program for 5 years now.
        </p>
        <p className='py-5'></p>
      </div>
    </div>
  )
}

export default padYarinya