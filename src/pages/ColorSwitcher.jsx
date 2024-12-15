import { useState } from "react";
import { motion } from "framer-motion";

const ColorSwitcher = () => {
  const [bgColor, setBgColor] = useState("white");

  const colors = ["red", "blue", "green", "yellow", "purple"];

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="flex flex-col items-center border p-10 rounded-lg"
      >
        <div
          className={`w-64 h-64 rounded-md`}
          style={{ backgroundColor: bgColor }}
        ></div>
        <div className="mt-4 flex space-x-4">
          {colors.map((color) => (
            <button
              key={color}
              className={`px-4 py-2 border font-semibold text-white rounded-md`}
              onClick={() => setBgColor(color)}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ColorSwitcher;
