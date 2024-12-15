import { useState } from "react";
import { motion } from "framer-motion";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="border p-7 rounded-lg flex flex-col gap-5 items-center justify-center"
        >
          <h1 className="text-2xl">Counteing : {count}</h1>
          <div className="flex gap-5">
            <button
              onClick={() => setCount(count + 1)}
              className="p-2 bg-[#333333] rounded-lg transition-[0.5s] hover:bg-[#5cf85c9a]"
            >
              Increment
            </button>
            <button
              onClick={() => setCount(count - 1)}
              className="p-2 bg-[#333333] rounded-lg transition-[0.5s] hover:bg-[#f85c5c9a]"
            >
              Decrement
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default CounterApp;
