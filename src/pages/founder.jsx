import React from "react";
import { Image, Card, CardBody } from "@nextui-org/react";
import FounderImg from "../assets/founder.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // Stagger the animation
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
};

const founder = () => {
  return (
    <section className="lg:px-20 px-5 lg:py-16 py-7">
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ staggerChildren: 0.5 }} // Staggering the child elements
        className="lg:w-full lg:py-5 py-3"
      >
        <motion.h2
          className="lg:text-4xl text-2xl font-bold lg:text-center text-center font-Inter"
          variants={textVariant}
          custom={0}
        >
          Our Founder
        </motion.h2>
      </motion.div>
      <div className="bg-gray-100 p-3 rounded-md mb-8">
        <Breadcrumb className="">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold">Founder</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="">
        <div className="flex justify-center">
          <Image src={FounderImg} className="w-96"></Image>
        </div>
      </div>

      <div className="">
        <motion.h2
          className=" text-2xl font-bold lg:text-center text-center font-Manrope p-5"
          variants={textVariant}
          custom={0}
        >
          Mrs Mabel Adojo
        </motion.h2>

        <div className="flex justify-center gap-5 mb-5 text-xl text-white">
          <span className="bg-orange-400 p-2 rounded-md">
            <PiInstagramLogoDuotone />
          </span>
          <span className="bg-orange-400 p-2 rounded-md">
            <FaFacebookF />
          </span>
          <span className="bg-orange-400 p-2 rounded-md">
            <FaLinkedin />
          </span>
        </div>
        <Card className="font-Manrope font-medium lg:p-12 p-4  shadow-md">
       
          <p className="leading-8 my-2">
            During my National Youth Service Corp in 2019, I was posted to a
            rural community (Babban Saura) in Kaduna State, where young girls
            didn’t have adequate menstrual knowledge and also lack access to
            sanitary products they resort to using rags, leaves and all sorts of
            unsanitary items or even end up missing school. It was a pain in my
            heart and that pained stayed till it became a passion. This passion
            lingered till I was done with my service and on next my birthday I
            thought what better way is there to appreciate God for life and to
            give back to the society, than to organize an outreach/sensitization
            for the young girls in that community? That pain in my heart gave birth to the Initiative we have today which we are now celebrating its 5 years in existence. <span className="font-semibold">“THE PAD A YARINYA”</span> initiative, Yarinya being the term for the girl child in Hausa language.  Although it has now come under the umbrella of the NGO, El Neema Cares Initiative, it is an initiative on its own. The initiative popularly known as P.A.Y, focuses on visiting schools and communities and sensitizing the girl child and gifting them with menstrual hygiene products. 
            
          </p>
          <p className=" my-2">
          In November, 2023, we launched a booklet <span className="inline font-semibold">‘’ NEEMA’S MENSTRUAL BOOKLET’’</span> a not to be sold booklet for school age girls and out of school girls to help enlighten them on the basics of menstruation. This initiative that started in the Northern part of Nigeria is fast growing and spreading to other parts of the country seeing that not only girls in the North need this knowledge and products. 
          </p>
          <p className=" my-2">
          I look forward to a society where menstrual hygiene kits would be available at no cost at all, for the school girls or at a very reduced price which they can afford in order to help them manage their monthly flow. We would continue to do our best and hope that soon more individuals and other cooperate bodies, including the Government would join us in the fight against period poverty and end period stigmatization. Change is possible with targeted policies and investments. Cheers to seeing every girl child manage her menstruation with dignity, safety and confidence.
          </p>
          <p className=" my-2">
          I am grateful to God for how far we have come and to all those who have been a part of this mission, vision, supporting and urging us on.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default founder;
