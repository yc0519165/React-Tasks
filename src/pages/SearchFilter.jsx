import { motion } from "framer-motion";

const SearchFilter = () => {
  return (
    <>
      <div className="flex flex-1 items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="p-5 border rounded-lg"
        >
          <h1 className="text-4xl font-medium">
            This Logic add on Sideba Inputr
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default SearchFilter;
