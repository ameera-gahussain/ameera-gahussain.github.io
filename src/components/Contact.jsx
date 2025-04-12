import Section from "./Section";
import { socials } from "../constants";

const Contact = () => {
  return (
    <Section
      className="bg-n-3 py-7 lg:py-16 xl:py-20 z-1"
      customPaddings
      id="sayhi"
    >
      <div className="container py-7 lg:py-16 xl:py-20 z-2">
        <div className="container flex justify-center items-center">
          <div className="max-w-[45rem] mb-8 h-full w-full">
            <h2 className="h2 text-center">./Drop me a message</h2>
            <div className="flex justify-center items-center mt-5">
              <ul className="flex gap-5 flex-wrap">
                {socials.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center bg-n-3 rounded-full transition-colors hover:bg-n-6"
                  >
                    <img
                      src={item.iconUrl}
                      width={30}
                      height={30}
                      alt={item.title}
                      className="text-center md:h-10 md:w-10"
                    />
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
