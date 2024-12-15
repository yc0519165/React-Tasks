import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-1">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className=""
        >
          <div className="flex flex-col items-center justify-center gap-10">
            <img
              src="./react.svg"
              alt=""
              className="logo react transition-[0.9s] h-32 w-32"
            />
            <h1 className="text-3xl font-medium">Welcome to React Tasks</h1>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
