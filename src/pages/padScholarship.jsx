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
const padScholarship = () => {
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
              Scholarship Scheme
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
              <BreadcrumbPage className="font-semibold">Scholarship</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="font-medium font-Manrope mx-5">
        <p className='py-5 leading-8'>The Pad Scholarship Scheme (P.S.S) initiative is a School Attendance Support Program targeted at community secondary schools focusing on young girls age 8-18 which we have been running for 9 months and countiing. Through the help of our donors, sponsors and volunteers we have been able to award pad scholarship to girls by giving a year supply of sanitary products to one girl every month and also covering her tuition fees pay for a year this way indigent girls are eased the financial burden which enable them focus on their studies and maximizing their full potentials. This program has helped us raise young girls who become advocates for women across different communities enabling them to become a catalyst for change and an influencer to other young girls.

        </p>
        <p className='py-5'></p>
      </div>
    </div>
  )
}

export default padScholarship