import Section from "./Section";
import Typewriting from "./Typewriting";

const Hero = () => {
  return (
    <Section
      className="!px-0 !py-10 min-h-screen flex justify-center items-center"
      id="hero"
    >
      <div className="container">
        <div className="max-w-[63rem] mx-auto">
          <div className="flex items-center justify-center mt-2 mb-2">
          <span className="text-xl text-center md:text-3xl">
            Hi, I&apos;m&nbsp;<span>Ameera</span>&nbsp;& I&apos;m a
          </span>
          </div>
          <div className="text-6xl md:text-[5.5rem] font-bold text-center mt-3 mb-3">
            <span id="typewriter">
              <Typewriting />
            </span>
            <span id="cursor">|</span>
          </div>
          <div className="flex items-center justify-center mt-2">
          <button className="text-sm mt-5 p-[0.65rem] border border-solid border-n-4 rounded-[2.5rem] transition delay-150 hover:bg-color-4 hover:translate-y-1">
          <a href="/resources/ameeraFrontEnd.pdf" download> Download My CV
          </a>
            </button>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
