import React from "react";

const LogoPhrase = () => {
  return (
    <div className="flex items-center justify-center relative">
      {/* Pseudo-element with red gradient */}
     

      <div className="w-[50%] ">
        <h1 className="pt-16 leading-[42.67px] font-extrabold text-heading text-white relative z-10">
         
            Idea PJ
        </h1>
      </div>

      <div className="w-[30%] relative z-10">
        <p className="w-[65%] leading-[42.67px] text-medium font-semibold text-white relative z-10">
          Create affordable products without compromising the quality.
        </p>
      </div>
    </div>
  );
};

export default LogoPhrase;
