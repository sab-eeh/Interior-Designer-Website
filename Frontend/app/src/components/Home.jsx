import React from "react";
import video from "./Videos/Video3.MP4";

const Home = () => {
  return (
    <>
      <div className="bg-black w-full h-[100vh] ">
        {/* <div className="bg-black opacity-10 absolute z-9 w-full h-screen"></div> */}
        <video
          autoPlay
          loop
          muted
          className="absolute object-cover h-[100vh] w-full "
          src={video}
        ></video>
      </div>
    </>
  );
};

export default Home;
