import { arrowRight } from "../assets";
import { about, techSkills } from "../constants";
import Section from "./Section";

const About = () => {
  return (
    <Section className="bg-n-3" id="about">
      <div className="container py-7 lg:py-16 xl:py-20 z-2">
        <div className="container flex justify-center items-center">
          <div className="max-w-[45rem]">
            <h2 className="h2">./About Me</h2>
            <div>
              <p className="p">
                {about.map((item) => (
                  <div className="mb-3 py-3" key={item.id}>
                    {item.text && (
                      <p className="body-2 mt-3 text-n-2">{item.text}</p>
                    )}
                  </div>
                ))}
              </p>
              <div>
                <p className="body-2 mt-3 text-n-2">
                  Here are some technologies I&apos;ve&nbsp;been working with:
                </p>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {techSkills.map((item) => (
                  <div className="flex flex-nowrap" key={item.id}>
                    <img
                      className="body-2 mt-2"
                      src={arrowRight}
                      width={24}
                      height={24}
                      alt={arrowRight}
                    />
                    {item.skill && (
                      <p className="body-2 mt-2 text-n-2">{item.skill}</p>
                    )}
                  </div>
                ))}
              </div>
              <p className="p">
                {about.map((item) => (
                  <div className="mb-2 py-3" key={item.id}>
                    {item.text2 && (
                      <p className="body-2 mt-3 text-n-2">{item.text2}</p>
                    )}
                  </div>
                ))}
              </p>
              <p className="p">
                {about.map((item) => (
                  <div className="mb-3 py-2" key={item.id}>
                    {item.text3 && (
                      <p className="body-2 mt-2 text-n-2">{item.text3}</p>
                    )}
                  </div>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
