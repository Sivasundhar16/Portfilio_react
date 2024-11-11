import {
  RiReactjsLine,
  RiJavascriptLine,
  RiHtml5Fill,
  RiCss3Fill,
} from "react-icons/ri";
import {
  SiC,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";

// Define iconVariants function with customizable duration
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export const Technology = () => {
  return (
    <div className="pb-24 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Technologies
      </motion.h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 text-center">
          {/* Languages */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.0)}
            className="p-4 flex justify-center items-center"
          >
            <SiC className="text-blue-600 text-4xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4 flex justify-center items-center"
          >
            <RiJavascriptLine className="text-yellow-400 text-5xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4 flex justify-center items-center"
          >
            <SiTypescript className="text-blue-500 text-5xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4 flex justify-center items-center"
          >
            <TbBrandNextjs className="text-5xl" />
          </motion.div>

          {/* Frontend */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4 flex justify-center items-center"
          >
            <RiHtml5Fill className="text-orange-500 text-5xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4 flex justify-center items-center"
          >
            <RiCss3Fill className="text-blue-500 text-5xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4 flex justify-center items-center"
          >
            <RiReactjsLine className="text-cyan-400 text-5xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4 flex justify-center items-center"
          >
            <SiTailwindcss className="text-teal-400 text-5xl" />
          </motion.div>

          {/* State Management */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}
            className="p-4 flex justify-center items-center"
          >
            <SiRedux className="text-purple-700 text-5xl" />
          </motion.div>

          {/* Backend */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4 flex justify-center items-center"
          >
            <SiNodedotjs className="text-green-500 text-5xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4 flex justify-center items-center"
          >
            <SiExpress className="text-gray-700 text-5xl" />
          </motion.div>

          {/* Database */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5.3)}
            className="p-4 flex justify-center items-center"
          >
            <SiMongodb className="text-green-600 text-5xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4 flex justify-center items-center"
          >
            <SiPostgresql className="text-blue-600 text-5xl" />
          </motion.div>

          {/* Version Control */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}
            className="p-4 flex justify-center items-center"
          >
            <SiGit className="text-orange-500 text-5xl" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4 flex justify-center items-center"
          >
            <SiGithub className="text-gray-800 text-5xl" />
          </motion.div>

          {/* Testing */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4 flex justify-center items-center"
          >
            <SiPostman className="text-orange-400 text-5xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
