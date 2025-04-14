import { spinnerSolid, taskAlt } from "../assets";
import { work, projectDetails } from "../constants";
import { GradientLight } from "./designs/Work";
import Section from "./Section";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


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
                         <div className="w-full h-25 flex items-center justify-center overflow-hidden rounded-[2.5rem] mb-2 bg-sky-50 p-4">
                         <img
                         src={item.image}
                         alt={item.title}
                         className="max-h-full max-w-full object-contain"
                         />
                         </div>
                           <div><h5 className="h5 mb-5">{item.title}</h5></div>
                    
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
                           <button className="mt-2 underline text-blue-500 hover:text-blue-700" onClick={() => openModal(item)}>
                            More Details
                            </button>

                           </div>
                           
                         </div>

             </div>
             
           </div>
           
              
            );
            
          })}
            </div>
            <AnimatePresence>
  {isModalOpen && selectedProject && (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-n-5 p-6 rounded-lg w-[90%] max-w-xl shadow-lg relative overflow-y-auto max-h-[90vh]"
        initial={{ y: "-20px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "20px", opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-4 text-n-3 hover:text-black text-2xl font-bold"
        >
          &times;
        </button>

        <h3 className="text-n-3 text-xl font-extrabold mb-2">{selectedProject.title}</h3>
        <p className="text-n-2 mb-4">{projectDetails[selectedProject.id]?.summary}</p>

        <h4 className="text-n-3 font-bold">Project Goals / Brief</h4>
        {projectDetails[selectedProject.id]?.goalsIntro && (
  <p className="text-n-2 mb-2">{projectDetails[selectedProject.id].goalsIntro}</p>
)}

<ul className="list-disc list-inside text-n-2 mb-4 space-y-1">
  {projectDetails[selectedProject.id]?.goals.map((goal, index) => (
    <li key={index}>{goal}</li>
  ))}
</ul>

        <h4 className="text-n-3 font-bold">Process</h4>
        <p className="text-n-2 mb-4">{projectDetails[selectedProject.id]?.process}</p>

        <h4 className="text-n-3 font-bold">Tools Used</h4>
        <p className="text-n-2 mb-4">{projectDetails[selectedProject.id]?.tools}</p>

        <h4 className="text-n-3 font-bold">Outcome</h4>

<ul className="list-disc list-inside text-n-2 mb-4 space-y-1">
  {projectDetails[selectedProject.id]?.outcome.map((outcome, index) => (
    <li key={index}>{outcome}</li>
  ))}
</ul>

        {projectDetails[selectedProject.id]?.images && (
          <div className="space-y-4 pt-2">
            {projectDetails[selectedProject.id].images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Project ${selectedProject.id} image ${index + 1}`}
                className="w-full rounded shadow"
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

        </div>
      </div>
    </Section>
  );
  
};

export default Work;
