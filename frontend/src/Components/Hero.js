import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="px-28 w-full h-[91.5vh] flex bg-[#D9C0A2]">
      <div className="w-[50%] h-full flex flex-col justify-center gap-8 text-white">
        <h1 className="text-[6vw] font-mono leading-[6vw] tracking-wide ">Book store for you</h1>
        <Link to="/books" className="w-fit border-[2px] border-white px-[2vw] py-[1vh] rounded-md hover:bg-[#fff] hover:text-[#D9C0A2] hover:border-[#f3b468] transition ">View Books</Link>
      </div>
      <div className="w-[50%] h-full flex justify-end py-[1%] ">
        <div className="w-[70%] h-full rounded-md overflow-hidden shadow-xl ">
          <img
            src="https://plus.unsplash.com/premium_photo-1677187301439-bc2201360443?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="book"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
