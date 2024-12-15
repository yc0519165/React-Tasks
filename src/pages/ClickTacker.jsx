import { useState } from "react";
import { motion } from "framer-motion";

const ClickTracker = () => {
  const [count, setCount] = useState(0); // State to track the click count

  const handleClick = () => {
    setCount(count + 1); // Increment the count on button click
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="p-5 border flex flex-col items-center rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Click Counter</h1>
        <p className="text-lg mb-4">You have clicked the button:</p>
        <p className="text-4xl font-bold text-[#636262] mb-6">{count} times</p>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-[#636262] text-white font-semibold rounded-lg shadow-md"
        >
          Click Me!
        </button>
      </motion.div>
    </div>
  );
};

export default ClickTracker;
