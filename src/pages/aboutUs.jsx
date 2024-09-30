import React from "react";
import AboutImg from "../assets/about-page.jpg";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const aboutUs = () => {
  return (
    <motion.div className="relative">
      <motion.div className="relative">
          <div
            className="grid-layout bg-cover bg-center lg:w-full w-full h-80 "
            style={{
              backgroundImage: `
              linear-gradient(to bottom right, rgba(0, 0, 0, .3), rgba(255, 165, 0, 0.3) 80%),
              url(${AboutImg})`,
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
                About
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
                <BreadcrumbPage className="font-semibold">About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
      </div>

      <section className="lg:mx-10 mx-5 my-7">
        <p className="font-Inter leading-8 my-5">
        <span className="text-3xl font-bold">S</span>ince 5 years of being in existence we have carried out outreach in 11 states and 18 local governments across Nigeria visiting over 20 schools and communities and impacted over 8500 girls age 8-18(both in and out of school) living in rural areas and urban slums. Addressing SDG 1,2,3,4,5,10,12,17. El-Neema Cares initiative was founded in 2019 and our main goal is to end period poverty and stigma in Africa by providing sanitary products and education to young girls age 8-18 through 4 initiatives Pad a Yarinya (P.A.Y), Widows Smile at Christmas (W.S.C), Pad Scholarship Scheme (P.S.S) and El Neema Cares period guide.
        </p>
      
        <p className="font-Inter leading-8 my-5">
        <span className="text-3xl font-bold">M</span>ajor issues we tackle is lack of sanitary and hygienic menstrual supplies such as pads, tampons, hot water bottles or tubes, Lack of adequate information on how to handle their menstrual hygiene pre and post cycle, Lack of support system when dealing with mental or health issues associated with periods such as mood swings, menstrual cramps, irregular or heavy periods.
        </p>
        <p className="font-Inter leading-8 my-5">
        <span className="text-3xl font-bold">O</span>ur story dates back to 1998 when our founder started her period due to her inability to afford sanitary products. She resorted to using paper which left her bruised and made her dread period.

        </p>
        <p className="font-Inter leading-8 my-5">
        <span className="text-3xl font-bold">U</span>p until today this is the story of millions of African girls out there as studies by the UK Action Aid shows that 1 in 10 girls living in Africa miss school, sport activities or work due to lack of sanitary products and they resort use of unsanitary items such as rags, paper or even leaves which leads to infection, bruises and severe reproductive and mental health issues.
        No girlchild deserves to go through this and this is why we care, this is why we pad our girlchild to enable them lead a normal life and contribute to the society even when they are on their period
        </p>
        </section>
    </motion.div>
  );
};

export default aboutUs;
