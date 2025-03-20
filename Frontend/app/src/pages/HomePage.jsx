import React from "react";
import video from "../assets/Videos/Video3.mp4";
import image5 from "../assets/Images/Kitchen.jpg";
import Carousel from "../components/Carousel";
import {
  FaPencilRuler,
  FaDraftingCompass,
  FaProjectDiagram,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Working with this team was an absolute pleasure. They transformed my vision into a reality with creativity.",
    name: "Sarah M.",
    title: "Homeowner",
  },
  {
    quote:
      "From concept to completion, their expertise was evident. Our office space now reflects innovation and professionalism.",
    name: "James L.",
    title: "Business Owner",
  },
  {
    quote:
      "They delivered beyond our expectations! Every detail was thoughtfully designed, balancing beauty and functionality.",
    name: "Emma R.",
    title: "Interior Client",
  },
  {
    quote:
      "A team that listens and delivers! Project management was seamless, and the outcome was nothing short of spectacular.",
    name: "Daniel W.",
    title: "Commercial Client",
  },
];

const services = [
  {
    title: "Interior Design",
    description:
      "Transforming spaces with aesthetic and functional design tailored to your lifestyle.",
    icon: <FaPencilRuler className="text-5xl text-amber-400" />,
  },
  {
    title: "Architecture",
    description:
      "Creating innovative, sustainable, and structurally sound architectural solutions.",
    icon: <FaDraftingCompass className="text-5xl text-amber-400" />,
  },
  {
    title: "Project Management",
    description:
      "Ensuring seamless execution of projects from concept to completion with efficiency.",
    icon: <FaProjectDiagram className="text-5xl text-amber-400" />,
  },
];

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-black w-full h-[100vh] ">
        {/* <div className="bg-black opacity-10 absolute z-9 w-full h-screen"></div> */}
        <video
          autoPlay
          loop
          muted
          className="absolute object-cover  h-[100vh] w-full "
          src={video}
        ></video>
      </section>

      {/* About Section */}
      <section 
      className="bg-[#121212] w-full justify-center items-center overflow-hidden lg:flex lg:h-[100vh] lg:gap-6 lg:text-left px-14 sm:p-10 sm:text-center sm:space-y-5 max-[640px]:fex-col max-[640px]:space-y-5 max-[640px]:p-6 max-[640px]:text-center ">
        <div className="text-white flex-col lg:space-y-3 lg:w-[40vw] sm:space-y-2 max-[640px]:space-y-2 ">
          <h1 className="font-bold text-2xl text-amber-200">ABOUT US </h1>
          <div className="flex-col lg:space-y-2 ">
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl max-[640px]:text-2xl font-bold ">
              Designing Spaces,
            </h1>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl max-[640px]:text-2xl font-bold">
              Elevating Lifestyles
            </h1>
          </div>
          <p className="lg:text-xl md:text-xl font-normal">
            At Your Interior Design Firm , we transform spaces into stylish,
            functional environments that reflect your personality and lifestyle.
            Our expert team blends creativity with practicality, ensuring every
            design is both beautiful and purposeful. Whether it’s a single-room
            refresh or a complete makeover, we prioritize collaboration,
            quality, and attention to detail.
          </p>
        </div>
        <div className="">
          <Carousel />
        </div>
      </section>

      {/* Headline Section */}
      <section
        className=" overflow-hidden headline-sec z-1 w-full flex lg:h-[80vh] md:h-[70vh] items-center justify-center sm:p-10
       max-[640px]:p-6"
      >
        <div className=" text-white text-center lg:px-40 space-y-3 z-20 ">
          <h1 className="lg:text-5xl md:text-4xl sm:text-3xl max-[640px]:text-2xl   font-bold text-amber-200 ">
            Innovative Spaces Crafted for You
          </h1>
          <p className="lg:text-xl sm:text-lg font-normal">
            We design interiors that blend beauty with functionality, creating
            spaces that inspire and enhance everyday living. From contemporary
            homes to sophisticated corporate spaces, we tailor every detail to
            reflect your unique style and needs. Explore how we can bring your
            vision to life.
          </p>
          <p className="lg:text-xl  sm:text-lg  font-normal">
            View our design portfolio or reach out at [your email/contact] to
            start your journey with us.
          </p>
        </div>
      </section>

      {/* Another Section */}
      <section
        className="bg-[#121212] w-full lg:h-[100vh] lg:flex lg:justify-center items-center gap-6 lg:px-14 lg:py-16 overflow-hidden sm:p-10 sm:space-y-7 max-[640px]:p-6
       "
      >
        <div className="border-1 border-[#ffffff28] p-2 rounded-2xl lg:-ml-20 sm:mx-auto ">
          <img
            src={image5}
            alt="Living Room"
            className="lg:h-auto lg:w-[100%] sm:w-[100vw] rounded-2xl "
          />
        </div>
        <div className="text-white flex-col lg:space-y-3 lg:text-left sm:space-y-1 sm:text-center ">
          <h1 className="font-bold text-2xl sm:text-center text-amber-200">
            BLEINDING AESTHETICS WITH FUNCTIONALITY
          </h1>
          <div className="flex-col lg:space-y-2 sm:text-center ">
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl max-[640px]:2xl sm:inline-block font-bold ">
              Timeless Elegance,
            </h1>
            <h1 className="lg:text-5xl md:text-4xl sm:text-3xl max-[640px]:2xl sm:inline-block font-bold">
              Thoughtful Design
            </h1>
          </div>
          <p className="text-xl font-normal sm:text-lg">
            Our team of visionary architects and interior designers brings
            creativity and precision to every project. We craft spaces that
            seamlessly merge aesthetics with functionality, ensuring a perfect
            balance of comfort and style. Whether it's a modern home, a luxury
            office, or a bespoke commercial space, our expertise in materials,
            lighting, and spatial planning guarantees an outcome that stands the
            test of time.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-[#121212] px-14 py-16 flex-col space-y-8 justify-center items-center ">
        <div className="text-white text-center space-y-4">
          <div>
            <h1 className="font-bold text-2xl text-amber-200">OUR SERVICES</h1>
            <h1 className="text-4xl font-bold">
              Designing Excellence, Building Dreams
            </h1>
          </div>
          <p className="text-xl font-normal ">
            We offer a comprehensive range of services to bring your vision to
            life, ensuring every detail is <br /> meticulously planned and
            executed.
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="mb-4 ">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}

      <section className="our-mission-sec  w-full h-[80vh] flex items-center justify-center ">
        <div className=" text-white text-center px-40 space-y-3">
          <h1 className="text-5xl font-bold text-amber-200 ">Our Mission</h1>
          <p className="text-xl font-normal">
            Our mission is to redefine spaces with innovation, elegance, and
            functionality. We are committed to crafting interiors and
            architectural designs that not only inspire but also enhance
            everyday living. Our approach blends creativity with precision,
            ensuring that every project reflects our clients' unique vision
            while maintaining the highest standards of quality and
            sustainability.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#121212]">
        <div className="container px-6 md:px-12 lg:px-14 flex flex-col lg:flex-row items-center text-white">
          {/* Left: Heading & Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 w-full text-center lg:text-left mt-12 lg:mt-0 lg:pl-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-amber-200">
              What Our Clients Say
            </h2>
            <p className="text-lg mt-4">
              We take pride in delivering top-notch designs that exceed
              expectations. See what our satisfied clients have to say about
              their experience.
            </p>
          </motion.div>
          {/* Right: Carousel */}
          <div className="lg:w-1/2 w-full">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              pagination={{ clickable: true }}
              loop={true}
              className="w-full"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="p-6 mb-3">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-6 rounded-2xl shadow-lg"
                  >
                    <p className="text-gray-700 italic text-lg">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
