import Section from "./Section";
import Typewriting from "./Typewriting";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <Section
      className="!px-0 min-h-screen flex justify-center items-center"
      id="hero"
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mt-2 mb-2">
          <span className="text-lg text-center sm:text-xl md:text-3xl">
            Hi, I&apos;m&nbsp;<span>Ameera</span>&nbsp;& I&apos;m a
          </span>
          </div>
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mt-3 mb-3">
            <span id="typewriter">
              <Typewriting />
            </span>
            <span id="cursor">|</span>
          </div>
          <div className="flex items-center justify-center mt-4 md:mt-6">
          <Button asChild className="text-sm mt-5">
          <a href="/resources/ameeraCVFrontend.pdf" download> Download My CV
          </a>
            </Button>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
