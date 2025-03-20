import React from "react";
import image3 from "../assets/Images/AboutImages/image3.jpg";

const AboutPage = () => {
  return (
    <>
      <section className="about-section w-full h-[100vh]">
        <div className="p-20">
          <h1 className="lg:text-4xl text-white font-bold">ABOUT US</h1>
          <p className="lg:text-2xl text-white font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam,
            sapiente.
          </p>
        </div>
      </section>

      <section className="bg-[#121212]">
        <div className="lg:flex justify-center items-center lg:px-14 lg:py-16 ">
          <div>
            <img src={image3} className="w-[35vw]" alt="" />
          </div>
          <div>
            <div className="text-white bg-black lg:px-12 lg:py-14 lg:w-[500px] space-y-5 -ml-10">
              <h1 className="lg:text-4xl font-bold ">
                INNOVATIVE IDEAS STYLISH DESIGNS
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, iusto quia eaque sapiente cumque, est ducimus
                provident quaerat maiores beatae, asperiores ipsum? Quia
                repudiandae vitae quidem voluptate, esse animi. Doloribus.
              </p>
              <button className="cursor-pointer bg-white text-black font-semibold border-0 rounded-3xl px-6 py-2 ">
                See More
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#121212] lg:px-14 lg:py-16 flex items-center gap-4 ">
        <div className="space-y-4 ">
          <h1 className="lg:text-4xl md:text-3xl sm:text-2xl max-[640px]:text-2xl font-bold text-amber-200">WHY CHOOSE US</h1>
          <p className="lg:text-lg md:text-xl font-normal text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            similique facilis natus dicta voluptatibus odit maxime itaque
            aperiam repellendus repudiandae. Voluptas vero veniam sint!
          </p>
          <button className="text-black bg-white font-semibold px-7 py-2 rounded-2xl cursor-pointer">View All</button>
        </div>
        <div>
          <div className="flex gap-5">
            <div className="flex mb-4  bg-black px-8 py-10 rounded-xl">
              <div></div>
              <div className="space-y-2">
                <h1 className="text-amber-200 font-semibold text-3xl">Fast Building</h1>
                <p className="text-white text-md " >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae fugiat architecto, neque tenetur ratione voluptatum
                  iste.
                </p>
              </div>
            </div>
            <div className="flex mb-4 bg-black px-8 py-10 rounded-xl">
              <div></div>
              <div className="space-y-2">
                <h1 className="text-amber-200 font-semibold text-3xl">Fast Building</h1>
                <p className="text-white text-md " >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae fugiat architecto, neque tenetur ratione voluptatum
                  iste.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5">
          <div className="flex bg-black px-8 py-10 rounded-xl">
              <div></div>
              <div className="space-y-2">
                <h1 className="text-amber-200 font-semibold text-3xl">Fast Building</h1>
                <p className="text-white text-md " >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae fugiat architecto, neque tenetur ratione voluptatum
                  iste.
                </p>
              </div>
            </div>
            <div className="flex bg-black px-8 py-10 rounded-xl">
              <div></div>
              <div className="space-y-2">
                <h1 className="text-amber-200 font-semibold text-3xl">Fast Building</h1>
                <p className="text-white text-md " >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae fugiat architecto, neque tenetur ratione voluptatum
                  iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
