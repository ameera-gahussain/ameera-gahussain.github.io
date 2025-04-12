import Section from "./Section";
import Typewriting from "./Typewriting";

const Hero = () => {
  return (
    <Section
      className="!px-0 !py-10 min-h-screen flex justify-center items-center"
      id="hero"
    >
      <div className="container">
        <div className="max-w-[60rem] mx-auto">
          <h3 className="h3 text-center">
            Hi, I&apos;m&nbsp;<span>Ameera</span>&nbsp;& I&apos;m a
          </h3>
          <div className="text-8xl font-bold text-center">
            <span id="typewriter">
              <Typewriting />
            </span>
            <span id="cursor">|</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
