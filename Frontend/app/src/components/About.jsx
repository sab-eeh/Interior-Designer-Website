import React from "react";
import image1 from "./Images/Dining.jpg";
import image2 from "./Images/Living Room 1.jpg";
import image7 from "./Images/Living Room 2.jpg";
import image3 from "./Images/image1.jpg";
import image4 from "./Images/image2.jpg";
import image5 from "./Images/image3.jpg";

const About = () => {
  return (
    <>
      <div className="bg-black w-full h-[100vh] flex justify-center items-center gap-6 px-14 py-16 overflow-hidden">
        <div className="text-white flex-col space-y-5 ">
          <h1 className="font-bold text-2xl text-amber-200">ABOUT US </h1>
          <div className="flex-col space-y-2">
            <h1 className="text-5xl font-bold ">Designing Spaces,</h1>
            <h1 className="text-5xl font-bold">Elevating Lifestyles</h1>
          </div>
          <p className="text-xl font-normal">
            At Your Interior Design Firm , we transform spaces into stylish,
            functional environments that reflect your personality and lifestyle.
            Our expert team blends creativity with practicality, ensuring every
            design is both beautiful and purposeful. Whether it’s a single-room
            refresh or a complete makeover, we prioritize collaboration,
            quality, and attention to detail.
          </p>
          <p className="text-xl font-semibold">
            Let’s bring your vision to life and create a space you’ll love.
          </p>
          {/* <button className="bg-white text-black px-6 py-1 rounded-3xl text-xl font-semibold cursor-pointer">
            Contact
          </button> */}
        </div>
        <div className="flex gap-2" >
          <img
            className="w-60 rounded-2xl"
            src={image1}
            alt="image"
          />
          <div className="flex-col items center justify-center space-y-3">
            <div className="flex justify-between gap-2">
              <img
                src={image7}
                className="w-74 rounded-2xl "
                alt="image"
              />
              <img src={image3} className="w-[34%] rounded-2xl" alt="image" />
            </div>
            <div className="flex justify-between gap-2">
              <img src={image4} className="w-37 h-auto rounded-2xl" alt="image" />
              <img src={image5} className="w-38 h-auto rounded-2xl" alt="image" />
              <img src={image2} className="w-37 h-auto rounded-2xl" alt="image" />
            </div>
          </div>
          {/* <img className="w-[300px] max-w-[500px] block" src={image2} alt="image" /> */}
        </div>
      </div>
    </>
  );
};

export default About;
