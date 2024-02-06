"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Item from "./Item";
import { itemData } from "./data";
const SlideZoomPictures = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scalingValue = useTransform(
    scrollYProgress,
    [0.7, 0.9, 1],
    [1, 4, 4.5]
  );

  return (
    <div className="relative h-[200vh]">
      <div className="sticky top-0 left-0 w-full overflow-hidden h-[100vh] pt-[100px] bg-red-500">
        <div ref={ref} className="w-screen h-[100vh] flex-center">
          <div className="relative w-[90%] ">
            <div className="relative w-full aspect-[452.34/245.771] opacity-1">
              {/* w-[450px] h-[245px] */}
              <Image src="/layout.png" fill alt="layout" />
            </div>
            {itemData.map((item, index) => (
              <Item {...item} key={index} />
            ))}
          </div>
          {/* <motion.div
        style={{ scale: scalingValue }}
        className="grid grid-cols-3 gap-6   w-[80%] h-screen overflow-hidden   scale-[2] "
      >
       
        <motion.div className="relative flex justify-start col-span-2 w-[31vw] h-[30vh]">
          <Image
            fill
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className="relative w-[26vw] h-[25vh]">
          <Image
            className=" "
            fill
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className="relative w-[26vw] h-[25vh]">
          <Image
            className=" "
            fill
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className="relative w-[31vw] h-[30vh]">
          <Image
            className=" "
            fill
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className="relative w-[20vw] h-[30vh] flex justify-end">
          <Image
            className=" "
            fill
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className="relative w-[19vw] h-[30vh]">
          <Image
            className=""
            fill
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
      </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default SlideZoomPictures;
