import { motion } from "framer-motion";

const FetchApi = () => {
  const posts = [
    {
      title: "laudantium voluptate suscipit sunt enim enim",
      description:
        " potential customers through your Business Profile on Google Search and Maps through posts. You can create and share announcements",
    },
  ];
  return (
    <>
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="w-[400px] rounded-md border p-5"
        >
          <div className="flex flex-col items-start gap-5">
            <h3 className="text-xl font-medium">{posts[0].title}</h3>
            <p>{posts[0].description}</p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FetchApi;
