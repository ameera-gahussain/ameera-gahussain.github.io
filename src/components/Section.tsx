import type { ReactNode } from "react";

interface SectionProps {
  className?: string;
  id?: string;
  customPaddings?: string;
  children?: ReactNode;
}

const Section = ({ className, id, customPaddings, children }: SectionProps) => (
  <div
    id={id}
    className={`relative ${customPaddings || `py-10 lg:py-16 xl:py-20`} ${
      className || ""
    }`}
  >
    {children}
    <div className="hidden absolute top-0 left-5 w-0.25 h-full pointer-events-none md:block lg:left-7.5 xl:left-10" />
    <div className="hidden absolute top-0 right-5 w-0.25 h-full pointer-events-none md:block lg:right-7.5 xl:right-10" />
  </div>
);

export default Section;
