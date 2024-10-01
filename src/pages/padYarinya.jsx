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
        <p className='py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem reiciendis ex aut, molestias dolorem molestiae quos aperiam, magnam culpa harum magni similique repudiandae dolor, nemo porro officiis dignissimos provident reprehenderit eum? Odit reiciendis ea eius unde, a sequi debitis consequuntur ipsam ipsum, nam, magnam aperiam voluptatibus beatae fugit tenetur minima. Nobis enim distinctio sequi adipisci quo iste officiis laboriosam eum laudantium culpa laborum explicabo aliquam suscipit soluta ducimus deserunt vel blanditiis sapiente id, repudiandae harum omnis? Natus esse temporibus ducimus harum facere. Molestias, labore numquam expedita blanditiis aliquid iure. Ut minus mollitia asperiores tempore possimus! Eos sequi totam enim optio.</p>
        <p className='py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem reiciendis ex aut, molestias dolorem molestiae quos aperiam, magnam culpa harum magni similique repudiandae dolor, nemo porro officiis dignissimos provident reprehenderit eum? Odit reiciendis ea eius unde, a sequi debitis consequuntur ipsam ipsum, nam, magnam aperiam voluptatibus beatae fugit tenetur minima. Nobis enim distinctio sequi adipisci quo iste officiis laboriosam eum laudantium culpa laborum explicabo aliquam suscipit soluta ducimus deserunt vel blanditiis sapiente id, repudiandae harum omnis? Natus esse temporibus ducimus harum facere. Molestias, labore numquam expedita blanditiis aliquid iure. Ut minus mollitia asperiores tempore possimus! Eos sequi totam enim optio.</p>
      </div>
    </div>
  )
}

export default padYarinya