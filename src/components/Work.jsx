import { work } from "../constants";
import Section from "./Section";
import { useState } from "react";
import { WorkModal } from "./WorkModal";


const Work = () => {

  const [selectedProject, setSelectedProject] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = (project) => {
  setSelectedProject(project);
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
  setSelectedProject(null);
};

  return (
    <Section className="bg-n-3" id="work">
      <div className="container py-7 lg:py-16 xl:py-20 z-1">
        <h2 className="h2">./Work</h2>
        <div className="flex flex-row justify-center h-full mt-8 mb-10">
            <div className="flex flex-wrap flex-col items-center md:flex-row md:justify-evenly">
          {work.map((item) => {
                    
                      return (
                       
                       <div
                       className="block relative p-1 mb-6 bg-no-repeat bg-[length:100%_100%] border border-solid border-n-4 rounded-[2.5rem] transition delay-150 hover:bg-color-4 hover:translate-y-1 overflow-hidden"
                       key={item.id}
                     >
                       
                       <div className="w-full max-w-[28rem] md:max-w-[30rem] lg:max-w-[33rem] xl:max-w-[35rem] h-[37rem] p-[2.3rem] flex flex-col justify-between overflow-hidden pointer-events-auto">
                         <div className="flex flex-col h-full">
                         <div className="w-full h-[25rem] flex items-center justify-center overflow-hidden rounded-[2.5rem] mb-2 bg-white p-4">
                         <img
                         src={item.image}
                         alt={item.title}
                         className="max-h-full max-w-full object-contain"
                         />
                         </div>
                           <div><h5 className="h5 mt-2 mb-4">{item.title}</h5></div>
                    
                           <div className="flex flex-wrap gap-2 mb-4">
                            {item.skills.split(", ").map((skill, index) => (
                              <span key={index} className="inline-block border border-solid border-n-1 rounded-full px-3 py-1 text-sm text-n-2">
                                {skill}
                                </span>
                              ))}
                              </div>
                           <div><p className="body-2 text-n-2">
                             <b>Project Overview: </b>{item.details}
                           </p>
                           <button className="mt-2 underline text-n-2 hover:text-blue-600" onClick={() => openModal(item)}>
                            View Project
                            </button>

                           </div>
                           
                         </div>
                         </div>
                         </div>
                         );
                         })}
                         </div>
                         <WorkModal
                         isModalOpen={isModalOpen}
                         selectedProject={selectedProject}
                         closeModal={closeModal}
                         />

                                              </div>
                                              </div>
                                              </Section>
                                              );
                                            };

export default Work;
