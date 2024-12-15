import { useState } from "react";
import { motion } from "framer-motion";
const ToggleVisibility = () => {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="h-[250px] w-[250px] flex flex-col items-center justify-center gap-5 border rounded-lg"
        >
          <h1 className="text-3xl font-bold">{visible ? "Hello World" : ""}</h1>
          <button
            onClick={() => setVisible(!visible)}
            className="p-3 rounded-md bg-[#3d3d3dc2]"
          >
            Toggle
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default ToggleVisibility;
