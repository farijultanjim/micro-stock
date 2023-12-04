import React from "react";
import Image from "next/image";

import HeroBg from "@/public/heroBg2.png";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <div className="relative flexCenter">
      <div className="absolute  z-10 mx-auto w-full max-w-xl space-y-2 px-5">
        <h1 className="font-bold text-base sm:bold-20 lg:bold-36 text-white">
        Unleash your creativity with captivating visuals.
        </h1>
        <p className="text-white text-xs sm:regular-16">Explore top-notch free stock photos, royalty-free images, and videos from talented creators on our AI-driven platform. </p>
        <Searchbar/>
        <div className="hidden sm:flex sm:items-center sm:space-x-3 text-white pt-3">
          <p>Trending:</p>
          <p className="bg-[#e7e1e11c] rounded-full px-2 py-1">Friends</p>
          <p className="bg-[#e7e1e11c] rounded-full px-2 py-1">Friendship</p>
          <p className="bg-[#e7e1e11c] rounded-full px-2 py-1">Soccer</p>
          <p className="bg-[#e7e1e11c] rounded-full px-2 py-1">Brazil</p>
          <p className="bg-[#e7e1e11c] rounded-full px-2 py-1">Food</p>
        </div>
      </div>
      <Image src={HeroBg} alt="heroBg" height={1440} width={1440}/>
      
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div> */}
    </div>
  );
};

export default Hero;
