import { WorkImages } from "./designs/WorkImgBlock";
import { projectDetails } from "../constants";
import type { WorkModalTypes } from "@/lib/work-modal-types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const Section = (props: WorkModalTypes) => {
  if (!props.text && !props.bullets?.length && !props.images?.length && !props.title) return null;

  return (
    <div className="mb-6">
      {props.title && <h4 className="text-n-3 font-bold">{props.title}</h4>}
      {props.text && <p className="text-n-2">{props.text}</p>}
      {props.link && (
        <a
          href={props.link}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-n-2 underline hover:text-blue-600 mt-2"
        >
          {props.linkLabel} <span className="text-n-3">&rarr;</span>
        </a>
      )}
      {props.bullets && props.bullets.length > 0 && (
        <ul className="list-disc list-inside text-n-2 space-y-1 mb-2">
          {props.bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      {props.images && props.images.length > 0 && <WorkImages images={props.images} altPrefix={props.altPrefix} />}
    </div>
  );
};

type Project = {
  id: string;
  title: string;
  tasks: string;
  skills: string;
  details: string;
  image: string;
};

type WorkModalProps = {
  isModalOpen: boolean;
  selectedProject: Project | null;
  closeModal: () => void;
};

export const WorkModal = ({ isModalOpen, selectedProject, closeModal }: WorkModalProps) => {
  const data = selectedProject ? projectDetails[Number(selectedProject.id) as keyof typeof projectDetails] : null;
  const summary = data?.summary as { text?: string; images?: string[]; downloadUrl?: string; downloadUrlLabel?: string } | undefined;

  return (
    <Dialog open={isModalOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        {data && (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold">{data.title}</DialogTitle>
            </DialogHeader>

            <Section text={summary?.text} images={summary?.images} link={summary?.downloadUrl} linkLabel={summary?.downloadUrlLabel} altPrefix="Summary" />
            <Section title="Project Goals / Brief" text={data.goalsIntro} bullets={data.goals} altPrefix="Goals" />
            <Section title="Process" text={data.process?.text} images={data.process?.images} altPrefix="Process" />
            <Section title="Tools Used" text={data.tools} altPrefix="Tools" />
            <Section title="Outcome" bullets={data.outcome} altPrefix="Outcome" />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
