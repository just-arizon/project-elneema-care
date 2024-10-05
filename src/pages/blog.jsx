import React from "react";
import { motion } from "framer-motion";
import BlogImg from "../assets/BlogImg.jpg";
import BlogPostImg from "../assets/GalleryImg-2.jpg";
import { FaCalendarDays } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { IoChatboxOutline } from "react-icons/io5";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Image, Button, Card, Link, CardHeader, CardBody } from "@nextui-org/react";

const blogCards = [
  {
    img: BlogPostImg,
    tag: "Charity",
    title: "Pay A Yarinya: Through the Pad a Yarinya (P.A.Y) initiative a Menstrual Hygiene Education and Sanitary supply...",
    date: "Oct 5, 2023",
    owner: "El-Neema",
    conversations: 0,
    href: "/pad-a-yarinya",
  },
  {
    img: BlogPostImg,
    tag: "Charity",
    title: "Window's Smile: Through the Widows Smile at Christmas (W.S.C) initiative we have been able to distribute Free...",
    date: "Oct 5, 2023",
    owner: "El-Neema",
    conversations: 0,
    href: "/widows-smile",
  },
  {
    img: BlogPostImg,
    tag: "Charity",
    title: "Smile At Christmas: The Pad Scholarship Scheme (P.S.S) initiative is a School Attendance Support Program targeted at community...",
    date: "Oct 5, 2023",
    owner: "El-Neema",
    conversations: 0,
    href: "/schorlarship-scheme",
  },
];

const Blog = () => {
  return (
    <div className="my-10">
      <motion.div className="relative">
        <div
          className="grid-layout bg-cover bg-center lg:w-full w-full h-80"
          style={{
            backgroundImage: `url(${BlogImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(1.2) contrast(1.0)",
            zIndex: 1, // Ensures the image stays on top
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex justify-center items-center h-full">
            <div className="absolute p-5 z-30 text-white font-Manrope font-semibold text-2xl">
              Blog
            </div>
          </div>
        </div>
      </motion.div>

      <div className="relative lg:mx- mx-5 my-5 bg-gray-100 p-3 rounded-md mb-8">
        <Breadcrumb>
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

      <div className="lg:flex grid grid-cols-1 gap-6 px-5 font-Manrope lg:my-20">
        {blogCards.map((blogCard, index) => (
          <Card
            key={index}
            className="relative bg-cover bg-center lg:w-full w-full h-80"
            style={{
              backgroundImage: `url(${blogCard.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <CardHeader className="relative z-10 text-white p-4 grid gap-5 items-end  h-full">
              <div className="">
                <div className=" my-5">
                  <div className=""><span className="bg-orange-500 px-2 text-sm">{blogCard.tag}</span>
                  </div>
                  <Link href={blogCard.href}>
                    <div className="text-md font-bold text-white">{blogCard.title}</div>
                  </Link>
              </div>

                <div className="grid grid-cols-3 gap-2 text-sm ">
                <div className="flex items-center">
                  <FaCalendarDays className="mr-2" /> {blogCard.date}
                </div>
                <div className="flex items-center">
                  <IoMdPerson className="mr-2" /> {blogCard.owner}
                </div>
                <div className="flex items-center">
                  <IoChatboxOutline className="mr-2" /> {blogCard.conversations}
                </div>
              </div>
              </div>

            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
