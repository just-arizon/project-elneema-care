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
import { Image } from "@nextui-org/react";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from "@nextui-org/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
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

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                      <Input type="text" id="first-name" name="first-name" className="mt-1" required />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                      <Input type="text" id="last-name" name="last-name" className="mt-1" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" id="email" name="email" className="mt-1" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <Input type="tel" id="phone" name="phone" className="mt-1" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <Textarea id="message" name="message" rows={4} className="mt-1" required />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>13, Line 3, Police Estate Karsana, Abuja</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span>+ (234) 813 628 0417</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span>elneemacaresinitiative@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <span>Monday - Friday: 9am - 5pm</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Map of our location"
                    layout="fill"
                    className="rounded-md"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  This is where an interactive map would be integrated. You can use services like Google Maps, Mapbox, or OpenStreetMap to add a real map here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

    </motion.div>
  );
};

export default contactUs;
