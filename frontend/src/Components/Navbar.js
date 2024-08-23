import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-28 w-full h-[8.5vh] border-b-4 border-white text-white bg-[#A3A49E] font-mono">
      <Link to="/" className="text-[1.5vw] cursor-pointer ">
        BookStore
      </Link>
      <div className="flex items-center gap-20 ">
        <Link to="/" className="cursor-pointer text-[1.1vw] ">
          HOME
        </Link>
        <Link to="/books" className="cursor-pointer text-[1.1vw] ">
          BOOKS
        </Link>
        <Link to="/addbooks" className="cursor-pointer text-[1.1vw] ">
          ADD BOOKS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
