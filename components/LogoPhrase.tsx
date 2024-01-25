import React from "react";

const LogoPhrase = () => {
  return (
    <div className="flex items-center justify-between relative">
      {/* Pseudo-element with red gradient */}
     <div  className=" w-[800px] h-[800px] rounded-[400px] absolute bottom-[-220px] left-[-320px] bg-gradient-to-b from-rose-500 via-rose-500 to-dusty-rose-300 "></div>

      <div className="w-[70%] ">
        <h1 className="pt-16 leading-[42.67px] font-extrabold text-heading text-white text-center relative z-10">
         
            Idea PJ
        </h1>
      </div>

      <div className="w-[30%] relative flex items-center justify-start z-10">
        <p className="w-[65%] leading-[42.67px] text-medium font-semibold text-white relative z-10">
          Create affordable products without compromising the quality.
        </p>
      </div>
    </div>
  );
};

export default LogoPhrase;
