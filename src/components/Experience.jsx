import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <div className="pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 2 }}
        className="my-20 text-center text-4xl "
      >
        Experience
      </motion.h2>
      <div className="flex flex-col items-center justify-center  ">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between w-full"
          >
            {/* Year Section - Left side */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 2 }}
              className="w-full lg:w-1/4 text-center lg:text-left mb-4 lg:mb-0 lg:ml-96"
            >
              <p className="text-sm text-stone-400">{experience.year}</p>
            </motion.div>

            {/* Details Section - Right side */}
            <div className="w-full max-w-xl lg:w-3/4 text-center lg:text-left lg:mr-60">
              <motion.h3
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 2 }}
                className="mb-2 font-semibold"
              >
                {experience.role}
              </motion.h3>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 2 }}
                className="mb-2"
              >
                {experience.company}
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 2 }}
                className="mb-4"
              >
                {experience.description}
              </motion.p>
              <div className="flex flex-wrap">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -200 }}
                    transition={{ duration: 2 }}
                    className="mr-2 mt-4 py-2 rounded px-2 text-sm font-medium text-white bg-emerald-600"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
