import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <div className=" bg-white border-[2px] rounded-full h-[30px] lg:h-[48px] w-full p-[12px] lg:p-[28px] flex items-center ">
      <button>
        <SearchIcon style={{ color: "#090017a" }} />
      </button>
      <input
        type="text"
        placeholder="Search images"
        className="bg-transparent border-none outline-none w-full placeholder-[#090017] focus:placeholder-transparent placeholder:regular-16 sm:placeholder:regular-18 text-[#090017] ml-3"
      />
    </div>
  );
};

export default Searchbar;
