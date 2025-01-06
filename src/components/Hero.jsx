import Section from "./Section";
import Typewriting from "./Typewriting";

const Hero = () => {
  return (
    <Section
      className="!px-0 !py-10 min-h-screen flex justify-center items-center"
      id="hero"
    >
      <div className="container">
        <div className="max-w-[62rem] mx-auto">
          <h5 className="h5 text-center">
            Hi, I&apos;m&nbsp;<span>Espe</span>&nbsp;& I&apos;m a
          </h5>
          <h1 className="h1 text-center">
            Web&nbsp;
            <span id="typewriter">
              <Typewriting />
            </span>
            <span id="cursor">|</span>
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
