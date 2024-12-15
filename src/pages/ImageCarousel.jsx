import { useState } from "react";
import { motion } from "framer-motion";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://media.istockphoto.com/id/687245076/photo/great-gray-owl-strix-nebulosa-rare-bird-in-flight.webp?a=1&b=1&s=612x612&w=0&k=20&c=F23KNaN41JCU-cUvUDa_q1znAP5UEjCr1erprSz2LtQ=",
    "https://media.istockphoto.com/id/185262775/photo/rufous-hummingbird-male-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cKALkI1TOXq_orpxC5rA7vZgAtks4xiYKZPqOsL-cW0=",
    "https://media.istockphoto.com/id/486596655/photo/snowy-owl-yawning-smiling-in-snow.webp?a=1&b=1&s=612x612&w=0&k=20&c=uDNa7TTcriQioVvp_pQwkX2_7FdJ-NBoxb59awiGGgQ=",
  ];

  const goToPreveous = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="p-10 flex items-center justify-center gap-5 border rounded-lg"
        >
          <div
            onClick={goToPreveous}
            className="h-11 w-11 rounded-full border flex items-center justify-center cursor-pointer"
          >
            <p className="text-xl transition-[0.5s] hover:translate-x-[-5px]">
              <i className="bx bx-left-arrow"></i>
            </p>
          </div>
          <div className="relative h-64 w-96 border rounded-lg">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="h-[254px] w-96 rounded-lg object-cover transition-[0.6s] grayscale hover:grayscale-0"
            />
            <div className="absolute bottom-10 left-40 flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-gray-800" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          </div>
          <div
            onClick={goToNext}
            className="h-11 w-11 rounded-full border flex items-center justify-center cursor-pointer"
          >
            <p className="text-xl transition-[0.5s] hover:translate-x-[5px]">
              <i className="bx bx-right-arrow"></i>
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ImageCarousel;
