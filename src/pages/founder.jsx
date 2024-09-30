import React from "react";
import { Image, Card } from "@nextui-org/react";
import FounderImg from "../assets/founder.jpg"
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
                <BreadcrumbPage>Founder</BreadcrumbPage>
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
            className=" text-2xl font-bold lg:text-center text-center font-Inter p-5"
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
          <Card className="font-Manrope leading-7 lg:p-12 p-9 bg-gray-100 shadow-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, itaque! Molestias velit cumque mollitia recusandae eligendi ad quo rem cum aliquam voluptatum facilis quas quis asperiores earum non veritatis magni quod aut id fuga, minus, accusantium numquam hic! Et minima molestiae delectus dolorum non doloremque, illo modi atque dolores, odit tempore, autem esse eos. Facilis cum consectetur delectus, alias obcaecati cupiditate eos molestiae reiciendis dolor consequatur perspiciatis molestias dolorem minima inventore amet, fugit vero, suscipit nihil quibusdam ullam qui quisquam. Dolorum asperiores ad dolorem ducimus rem ut aspernatur saepe odio numquam sequi vel ipsam repudiandae ab obcaecati cupiditate sint explicabo minus ipsa dignissimos aut in aliquid, eligendi cum autem. Magni ipsa repellat eum veniam, inventore doloribus adipisci expedita laboriosam odit, nam quidem rerum nulla quod optio molestiae exercitationem provident deleniti est tenetur at error laborum ad. Itaque necessitatibus earum aperiam consectetur fugiat voluptates saepe ratione aliquam enim quia, a minus fugit nostrum qui sit officia repudiandae eaque et. Molestiae, tempora. Eveniet sunt ipsum aliquam numquam vitae magnam sint maxime, exercitationem asperiores voluptas, accusantium mollitia! Exercitationem, ullam. Vero, quis deleniti omnis cum earum commodi molestiae! Animi, pariatur, sapiente tempore enim fugit commodi eligendi alias repellendus eum blanditiis quod porro omnis rerum!</Card>
      </div>
    </section>
  );
};

export default founder;
