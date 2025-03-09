import React from "react";

const Navbar = () => {
  return (
    <>
      <header
        className="absolute transform -translate-x-1/2 left-1/2 top-1 flex justify-between items-center text-white 
      bg-[gray]/20 backdrop-blur-sm h-14 px-10 mt-4 w-[90%] rounded-3xl z-10 "
      >
        <div>
          <h1 className=" text-2xl font-bold">Wajeeh.</h1>
        </div>
        <nav className="flex text-md gap-5">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Portfolio</a>
        </nav>
        <div className="-mr-3">
          <button className="border-1 px-5 py-1.5 rounded-3xl cursor-pointer">
            Contact me
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
