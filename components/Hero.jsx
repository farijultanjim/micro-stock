import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Hero = () => {
  return (
    <div className="relative flexCenter">
      <div className="absolute text-center z-10 sm:space-y-9 px-8 sm:px-44 lg:px-64">
        <h1 className="font-bold text-sm sm:bold-20 lg:bold-36 text-white">
        Unleash your creativity with captivating visuals.
        </h1>
        <p className="text-white regular-16">Explore top-notch free stock photos, royalty-free images, and videos from talented creators on our AI-driven platform. </p>
        <div className="relative bg-white rounded-full h-[30px] lg:h-[60px] w-full p-[18px] lg:p-[28px] flex items-center mt-2">
          <button>
            <SearchIcon style={{ color: '#090017' }} />
          </button>
          <input
            type="text"
            placeholder="Search for free photos"
            className="bg-transparent border-none outline-none w-full placeholder-[#090017] focus:placeholder-transparent placeholder:regular-16 sm:placeholder:regular-18 text-[#090017] ml-3"
          />
        </div>
      </div>
      <img
        src="/heroBg2.png"
        alt="hero"
        className=" "
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div> */}
    </div>
  );
};

export default Hero;
