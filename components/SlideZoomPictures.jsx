"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    <motion.div
      ref={ref}
      className=" w-full flex justify-center overflow-hidden "
    >
      <motion.div
      
        style={{ scale: scalingValue }}
        className="grid grid-cols-3 gap-6   w-[80%] h-screen overflow-hidden   scale-[2] "
      >
        <motion.div className=" flex justify-end items-end row-span-2">
          <img
            className="w-[19vw] h-[40vh]"
            src="https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className=" flex justify-start col-span-2">
          <img
            className=" w-[31vw] h-[30vh] "
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className="">
          <img
            className=" w-[26vw] h-[25vh]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className="">
          <img
            className=" w-[26vw] h-[25vh]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className="">
          <img
            className=" w-[31vw] h-[30vh]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className=" flex justify-end">
          <img
            className=" w-[20vw] h-[30vh]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
        <motion.div className="">
          <img
            className="w-[19vw] h-[30vh]"
            src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
            alt=""
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SlideZoomPictures;

// 'use client'
// import React from "react";
// import { motion, useViewportScroll, useTransform } from "framer-motion";

// const SlideZoomPictures = () => {
//   const { scrollYProgress } = useViewportScroll();
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

//   return (
//     <motion.div style={{scale:scale}} className="w-full flex justify-center">
//       <motion.div className="grid grid-cols-3 gap-6 w-[80%]">
//         <motion.div className="flex justify-end items-end row-span-2">
//           <img
//             className="w-[19vw] h-[40vh]"
//             src="https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className="flex justify-start col-span-2">
//           <img
//             className="w-[31vw] h-[30vh]"
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className="">
//           <motion.img
//             style={{ scale: scale }}
//             className="w-[26vw] h-[25vh]"
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className="">
//           <img
//             className="w-[26vw] h-[25vh]"
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className="">
//           <img
//             className="w-[31vw] h-[30vh]"
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className="flex justify-end">
//           <img
//             className="w-[20vw] h-[30vh]"
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className="">
//           <img
//             className="w-[19vw] h-[30vh]"
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SlideZoomPictures;
// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// const SlideZoomPictures = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end end"],
//   });
//   const scalingValue = useTransform(
//     scrollYProgress,
//     [0, 0.25, 0.5, 0.75, 1],
//     [1, 2, 3, 4, 5]
//   );

//   return (
//     <motion.div
//       ref={ref}
//       className="  flex justify-center mt-24 w-full h-screen overflow-hidden"
//     >
//       <motion.div
//         // style={{
//         //   scale: scalingValue,
//         // }}
//         className="container flex justify-center mx-auto h-screen overflow-hidden relative scale-[2]"
//       >
//         <motion.div className=" absolute top-[26%] left-[20%] ">
//           <img
//             className="w-[19vw] h-[40vh]"
//             src="https://images.unsplash.com/photo-1682687221248-3116ba6ab483?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className=" absolute left-[50%] top-[40%] ">
//           <img
//             className=" w-[31vw] h-[30vh] "
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] ">
//           <img
//             src="https://i.pinimg.com/236x/8c/8d/2e/8c8d2e491e42867aca85ae18bdd22eb9.jpg"
//             alt=""
//             className="w-[26vw] h-[25vh] object-contain"
//           />
//         </motion.div>

//         <motion.div className="">
//           <img
//             className=" w-[26vw] h-[25vh]"
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className="">
//           <img
//             className=" w-[31vw] h-[30vh]"
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className=" ">
//           <img
//             className=" w-[20vw] h-[30vh]"
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//         <motion.div className="">
//           <img
//             className="w-[19vw] h-[30vh]"
//             src="https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
//             alt=""
//           />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default SlideZoomPictures;
