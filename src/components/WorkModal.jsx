import { AnimatePresence, motion } from "framer-motion";
import { WorkImages } from "./designs/WorkImgBlock";
import { projectDetails } from "../constants";

const Section = ({ title, text, bullets, images, altPrefix, link, linkLabel }) => {
  if (!text && !bullets?.length && !images?.length && !link) return null;

  return (
    <div className="mb-6">
      {title && <h4 className="text-n-3 font-bold">{title}</h4>}
      {text && <p className="text-n-2 mb-2">{text}</p>}
      {link && (
        <a
          href={link}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-500 underline hover:text-blue-700 mt-2"
        >
          {linkLabel || "Download PDF"}
        </a>
      )}
      {bullets?.length > 0 && (
        <ul className="list-disc list-inside text-n-2 space-y-1 mb-2">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {images?.length > 0 && <WorkImages images={images} altPrefix={altPrefix} />}
    </div>
  );
};

export const WorkModal = ({ isModalOpen, selectedProject, closeModal }) => {
  const data = selectedProject ? projectDetails[selectedProject.id] : null;

  if (!isModalOpen || !selectedProject || !data) return null;

  return (
    <AnimatePresence>
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

          <h3 className="text-n-3 text-xl font-extrabold mb-4">{data.title}</h3>

          <Section text={data.summary?.text} images={data.summary?.images} link={data.summary?.downloadUrl} linkLabel={data.summary?.downloadUrlLabel} altPrefix="Summary" />
          <Section title="Project Goals / Brief" text={data.goalsIntro} bullets={data.goals} altPrefix="Goals" />
          <Section title="Process" text={data.process?.text} images={data.process?.images} altPrefix="Process" />
          <Section title="Tools Used" text={data.tools} altPrefix="Tools" />
          <Section title="Outcome" bullets={data.outcome} altPrefix="Outcome" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
