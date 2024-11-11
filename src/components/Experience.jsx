import { EXPERIENCES } from "../constants";

export const Experience = () => {
  return (
    <div className="pb-4 bg-orange-950">
      <div className="my-20 text-center text-4xl">Experience</div>
      <div className="flex flex-col items-center justify-center bg-gray-900 ">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between w-full"
          >
            {/* Year Section - Left side */}
            <div className="w-full lg:w-1/4 text-center lg:text-left mb-4 lg:mb-0 lg:ml-96">
              <p className="text-sm text-stone-400">{experience.year}</p>
            </div>

            {/* Details Section - Right side */}
            <div className="w-full max-w-xl lg:w-3/4 text-center lg:text-left lg:mr-60">
              <h3 className="mb-2 font-semibold">{experience.role}</h3>
              <p className="mb-2">{experience.company}</p>
              <p className="mb-4">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-4 py-2 rounded  px-2 text-sm font-medium text-white bg-emerald-600"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
