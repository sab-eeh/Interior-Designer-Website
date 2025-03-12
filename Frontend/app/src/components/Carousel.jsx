import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import image1 from "../assets/Images/image1.jpg"
import image2 from "../assets/Images/image2.jpg"
import image3 from "../assets/Images/image3.jpg"
import image4 from "../assets/Images/Living Room 1.jpg"

const images = [
  image1 , image2 , image3 , image4 
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const totalImages = images.length;

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div className="flex gap-4 justify-center">
        <AnimatePresence initial={false}>
          {[...Array(3)].map((_, i) => {
            const imgIndex = (index + i) % totalImages;
            return (
              <motion.img
                key={images[imgIndex]}
                src={images[imgIndex]}
                alt={`slide-${imgIndex}`}
                className="w-1/3 rounded-xl object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            );
          })}
        </AnimatePresence>
      </div>
      {/* Navigation */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button onClick={prevSlide} className="p-2 bg-white/70 rounded-full shadow">
          <FaChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-2 bg-white/70 rounded-full shadow">
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;