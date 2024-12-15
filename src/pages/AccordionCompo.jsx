import { useState } from "react";
import { motion } from "framer-motion";

const AccordionCompo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const sections = [
    {
      id: 1,
      title: "Section 1",
      content: "This is section 1 content.",
    },
    {
      id: 2,
      title: "Section 2",
      content: "This is section 2 content.",
    },
    {
      id: 3,
      title: "Section 3",
      content: "This is section 3 content.",
    },
  ];

  const toggeleFunc = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="border p-10 rounded-lg"
        >
          {sections.map((section, index) => (
            <div key={index}>
              {/* Section Title */}
              <button
                className="text-[#fff] rounded-md transition-[0.5s] hover:bg-[#3d3d3dcb] text-center w-64 h-16 border font-medium "
                onClick={() => toggeleFunc(index)}
              >
                {section.title}
              </button>

              {/* Section Content */}
              {activeIndex === index && (
                <div className="px-4 py-4 text-[#000] m-2 rounded-md bg-gray-50">
                  <p className="text-lg text-center font-medium">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AccordionCompo;
