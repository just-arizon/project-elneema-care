import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactImg from "../assets/ContactImg.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Image, Button } from "@nextui-org/react";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const contactUs = () => {
  return (
    <motion.div >
      <div
        className="grid-layout bg-cover bg-center lg:w-full w-full h-80 "
        style={{
          backgroundImage: ` url(${ContactImg})`,

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
            Contact Us
          </div>
        </div>
      </div>

      <div className="relative lg:mx- mx-5 my-5 p-3 rounded-md mb-8 bg-gray-100">
        <Breadcrumb className="">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold">
                Contact Us
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <section className="grid grid-cols-2 my-5 mx-5">
        <div className="">
          <Card className="grid grid-cols-2">
            <div className="p-5  grid gap-5 ">
              <p className="flex gap-1">
                <div className="flex items-center">
                  <FaPhoneFlip />
                </div>
                <div>+234 813 628 0417</div>
              </p>
              <p className="flex gap-1">
                <div className="flex items-center">
                  <MdOutlineMailOutline />
                </div>
                <div>elneemacaresinitiative@gmail.com</div>
              </p>
              <p className="flex gap-1">
                <div className="flex items-center">
                  <IoLocationSharp />
                </div>
                <div> 13, Line 3, Police Estate Karsana, Abuja</div>
              </p>
            </div>

            <div className="flex gap-5 justify-between ">
              <small className="flex gap-1">
                <div className="flex items-center px-5">
                  <Link
                    href="https://www.facebook.com/share/p42aqYin7Tx1Yaxg/?mibextid=LQQJ4d"
                    className="text-black bg-white"
                  >
                    <FaFacebookF />
                  </Link>
                </div>
                <div></div>
              </small>
              <small className="flex gap-1">
                <div className="flex items-center">
                  <Link
                    href="https://www.instagram.com/elneema_cares?igsh=MWdiMDZ2MHRqYXljaA=="
                    className="text-black"
                  >
                    <PiInstagramLogoFill />
                  </Link>
                </div>
                <div></div>
              </small>
              <small className="flex gap-1">
                <div className="flex items-center">
                  <Link
                    href="https://www.linkedin.com/company/el-neema-cares-initiative/"
                    className="text-black"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
                <div></div>
              </small>
              <small className="flex gap-1">
                <div className="flex items-center">
                  <Link
                    href="https://www.tiktok.com/@elneema_cares?_t=8qHkgFBycGT&_r=1"
                    className="text-black"
                  >
                    <IoLogoTiktok />
                  </Link>
                </div>
                <div></div>
              </small>
            </div>
          </Card>
        </div>


        <div></div>
      </section>
    </motion.div>
  );
};

export default contactUs;
