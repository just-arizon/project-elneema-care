import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, Skeleton, Avatar } from "@nextui-org/react";
import { ImQuotesLeft } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";

const Testimonials = () => {
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

  const supporters = [
    {
      avatar: "https://images.unsplash.com/broken",
      name: "Magdalene Azurunwa",
      // occupation: "Medical Doctor",
      feedback: `I am glad to support the initiative because I know how discomforting it can be to use anything other that a sanitary pad or any sanitary hygiene kits. I'll keep doing my bit and hope that soon, we will get more people to join in advocating for these young school age girls.`,
    },
    {
      avatar: "https://images.unsplash.com/broken",
      name: "Onyinyechukwu  Nwokwu",
      // occupation: "Nurse",
      feedback: `ElNeema Cares Initiative opened my eyes to the fact that period poverty was a thing, especially in certain parts of Nigeria. Listening to the burden behind the initiative spurred me to contribute towards easing this burden. A truly remarkable and thoughtful endeavour it is!
`,
    },
    {
      avatar: "https://images.unsplash.com/broken",
      name: "Clement Illiambe",
      // occupation: "Social Worker",
      feedback: `I choose to support ElNeema Cares because your initiative addresses a critical need that often goes unspoken. Your tireless efforts to provide menstrual products and education to those in need resonate deeply with me.
`,
    },
  ];

  const cardVariants = {
    offscreen: {
      opacity: 0, // Make it invisible initially
      y: 0, // Keep it in its position
    },
    onscreen: {
      opacity: 1,
      y: -18,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 9000); // Simulating a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="lg:my-28 my-16 mx-5">
      <div>
        <h1 className="text-lg text-orange-400 lg:text-center text-center mb-4 ">
          TESTIMONIALS
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
            Our Supporters Voice
          </motion.h2>
        </motion.div>
        <div className="flex lg:justify-center justify-center">
          <div className="w-12 h-1 mt-1 bg-orange-400"></div>
        </div>

        <div className="w-full flex justify-center lg:py-8 py-5 px-5">
          <p className="text-center lg:text-center text-md mb-8 lg:px-12 lg:w-6/12">
            We caught up with a few of our supporters, and they had this to
            share with us!
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-10 flex-wrap">
        {supporters.map((supporter, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <Card className="w-full max-w-[400px] min-h-[350px] space-y-5 p-8" radius="lg">
              {loading ? (
                <>
                  <div className="flex gap-5">
                    <div>
                      <Skeleton className="rounded-full h-16 w-16" />
                    </div>
                    {/* Avatar Skeleton */}
                    <div className="space-y-1 w-full">
                      <Skeleton className="h-5 w-full rounded-lg" />{" "}
                      {/* Name Skeleton */}
                      <Skeleton className="h-4 w-3/4 rounded-lg" />{" "}
                      {/* Occupation Skeleton */}
                    </div>
                  </div>
                  <Skeleton className="h-16 w-full rounded-lg" />{" "}
                  {/* Feedback Skeleton */}
                </>
              ) : (
                <>
                  <div className="flex gap-2">
                    <div className="">
                      <Avatar
                        src={supporter.avatar}
                        alt={supporter.name}
                        size="lg"
                        showFallback
                      />
                    </div>
                    <div className="space-y-1 w-full flex">
                      <h3 className="text-lg font-bold flex items-center justify-between pr-8">
                        {supporter.name}
                      </h3>
                      <span className="">
                      <ImQuotesLeft className="text-3xl" />
                      </span>
                      <p className="text-sm text-orange-400">
                        {supporter.occupation}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm leading-7">{supporter.feedback}</p>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
