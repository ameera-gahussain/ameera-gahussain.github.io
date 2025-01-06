import { spinnerSolid, taskAlt } from "../assets";
import { projectPageIcons, projects } from "../constants";
import { GradientLight } from "./designs/Projects";
import Section from "./Section";

const Projects = () => {
  return (
    <Section className="bg-n-3" id="projects">
      <div className="container py-7 lg:py-16 xl:py-20 z-1">
        <h2 className="h2">./Projects</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-8 mb-10">
          {projects.map((item) => {
            const status = item.status === "done" ? "Completed" : "In progress";

            return (
              <div
                className="block relative p-1 bg-no-repeat bg-[length:100%_100%] border border-solid border-n-4 rounded-[2.5rem] sm:max-w-[24rem] transition delay-150 hover:bg-color-4 hover:translate-y-1"
                key={item.id}
              >
                {<GradientLight />}
                <div className="relative flex flex-col min-h-[22rem] p-[2.4rem] pointer-events: auto">
                  <div>
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p className="inline-block body-2 mb-6 text-n-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex grid-cols-2 justify-between mt-auto z-2">
                    <div>
                      <p className="ml-auto font-robotoMono text-xs font-bold text-n-1 uppercase tracking-wider">
                        <img
                          className="inline-block mr-1.5"
                          src={item.status === "done" ? taskAlt : spinnerSolid}
                          width={18}
                          height={18}
                          alt={status}
                        />
                        <span>{status}</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3 z-3">
                      {projectPageIcons.map((item) => (
                        <div key={item.id}>
                          <a
                            href={item.url}
                            target="_blank"
                            className="h-9 w-9 md:h-10 md:w-10 rounded-full transition-colors hover:bg-n-6"
                          >
                            <img
                              src={item.iconUrl}
                              width={20}
                              height={20}
                              alt={item.iconUrl}
                              className="md:h-7 md:w-7 rounded-full transition-colors hover:bg-n-6"
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
