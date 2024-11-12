import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="pb-4 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            className="mb-8 flex flex-wrap lg:justify-center  lg:ml-72 "
            key={index}
          >
            {/* Image container */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 2 }}
              className="w-full lg:w-1/4 flex justify-center items-center"
            >
              <img
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </motion.div>

            {/* Project details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 4 }}
              className="w-full max-w-xl lg:w-3/4 lg:ml-8 lg:mt-0 lg:pt-2 flex flex-col justify-center items-center mx-auto py-6 "
            >
              <h3 className="mb-2 font-semibold text-2xl my-4 text-center uppercase">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400 text-center">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap justify-center space-x-2">
                {project.technologies.map((tech, index) => (
                  <span
                    className="rounded  p-2 sm:mb-1 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
