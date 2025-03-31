import { motion } from "motion/react";
const Animation = () => {
  return (
    <div className="flex flex-col-reverse justify-around bg-gray-200">
      <div className="h-screen w-screen">
        <motion.div
          className="box relative"
          animate={{
            x: [0, 800, 800, 0, 0],
            y: [0, 0, 400, 400, 0],
            rotate: [0, -180, 180, 0, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        ></motion.div>
        <motion.div
          className="circle"
          animate={{
            x: [0, 800],
          }}
          transition={{
            duration: 4,
            type: "spring",
            bounce: 0.3,
            repeat: Infinity,
          }}
        ></motion.div>
      </div>
      <div className="h-screen w-screen flex justify-center ">
      <motion.div
        initial={{ scale: 1.2, opacity: 0.5 }}
        whileHover={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        className=" bg-blue-800 h-[500px] w-[500px] flex justify-center items-center text-5xl font-bold text-center rounded-b-full text-red-500"
      >
        Hover Me!
        <br />
        Tap Me!
      </motion.div>
      </div>
    </div>
  );
};

export default Animation;
