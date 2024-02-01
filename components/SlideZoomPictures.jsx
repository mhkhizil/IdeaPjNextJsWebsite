"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
const SlideZoomPictures = () => {
  const ref = useRef(null);
  const {scrollYProgress}=useScroll({
    target:ref,
    offset:['0 1','1.331']
  });
  return (
//     <div ref={ref}    className=" w-full flex justify-center ">
//     <div className="grid grid-cols-3 gap-6   w-[80%]   ">
//       <motion.div  style={{scale:scrollYProgress}}  className=" flex justify-end items-end row-span-2">
//         <img
//           className=" w-[240px] h-[420px]"
//           src="https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
//           alt=""
//         />
//       </motion.div>
//       <motion.div  style={{scale:scrollYProgress}} className=" flex justify-start col-span-2">
//         <img
//           className=" w-[600px] h-[300px]"
//           src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//           alt=""
//         />
//       </motion.div>
//       <motion.div style={{scale:scrollYProgress}} className="">
//         <img
//           className=" w-[480px] h-[250px]"
//           src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//           alt=""
//         />
//       </motion.div>
//       <motion.div style={{scale:scrollYProgress}} className="">
//         <img
//           className=" w-[480px] h-[250px]"
//           src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//           alt=""
//         />
//       </motion.div>
//       <motion.div style={{scale:scrollYProgress}} className="">
//         <img
//           className=" w-[600px] h-[300px]"
//           src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//           alt=""
//         />
//       </motion.div>
//       <motion.div style={{scale:scrollYProgress}} className="">
//         <img
//           className=" w-[360px] h-[300px]"
//           src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//           alt=""
//         />
//       </motion.div>
//       <motion.div style={{scale:scrollYProgress}} className="">
//         <img
//           className=" w-[300px] h-[300px]"
//           src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//           alt=""
//         />
//       </motion.div>
//     </div>
//   </div>
    <div ref={ref}    className=" w-full flex justify-center ">
      <div className="grid grid-cols-3 gap-6   w-[80%]   ">
        <div   className=" flex justify-end items-end row-span-2">
          <img
            className=" w-[240px] h-[420px]"
            src="https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <div   className=" flex justify-start col-span-2">
          <img
            className=" w-[600px] h-[300px]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <div  className="">
          <img
            className=" w-[480px] h-[250px]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <div  className="">
          <img
            className=" w-[480px] h-[250px]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <div  className="">
          <img
            className=" w-[600px] h-[300px]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <div className="">
          <img
            className=" w-[360px] h-[300px]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
        <div  className="">
          <img
            className=" w-[300px] h-[300px]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SlideZoomPictures;
