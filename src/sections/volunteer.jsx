import React from "react";
import {motion} from "framer-motion";
import { Button } from "@/components/ui/button";
import {Link} from "@nextui-org/react"

const volunteer = () => {
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
  return (
    <div className="lg:my-28 my-16">
    
      <div>
        <h1 className="text-lg text-orange-400 lg:text-center text-center mb-4 ">
          Online Blog
        </h1>
      </div>
      <div className="grid lg:gap-1 gap-3">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ staggerChildren: 0.5 }}
          className="lg:w-full"
        >
          <motion.h2
            className="lg:text-4xl text-2xl font-semibold lg:text-center text-center font-Inter"
            variants={textVariant}
            custom={0}
          >
            Get In Touch
          </motion.h2>
        </motion.div>
        <div className="flex lg:justify-center justify-center">
          <div className="w-12 h-1 mt-1 bg-orange-400"></div>
        </div>

        <div className="w-full flex justify-center lg:py-8 py-5 px-5">
          <p className="text-center lg:text-center text-md mb-3 lg:px-12 lg:w-6/12">
            <p className="">We talked about Stakeholders galvanizing support to stop female students from using rags, tissue papers durngmenstral flow</p>

           <p className="font-bold my-5">It&apos;s a Must Read!!</p>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
      <Button asChild>
  <Link href="https://thewhistler.ng/stakeholders-galvanize-support-to-stop-female-students-from-using-rags-tissue-papers-during-menstrual-flow/ ">Read More</Link>
</Button>
      </div>
    </div>
  );
};

export default volunteer;
