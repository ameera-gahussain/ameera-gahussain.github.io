import Section from "./Section";
import { socials } from "../constants";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <Section
      className="bg-n-3 py-7 lg:py-16 xl:py-20 z-1"
      customPaddings=""
      id="sayhi"
    >
      <div className="container py-7 lg:py-16 xl:py-20 z-2 mx-auto">
        <div className="container flex justify-center items-center">
          <div className="max-w-[45rem] mb-6 h-full w-full">
            <h2 className="text-5xl lg:text-7xl text-center">./Got a project in mind or just want to say hi? Reach out to me at</h2>
            <div className="flex justify-center items-center pt-17">
              <ul className="flex gap-5 flex-wrap">
                {socials.map((item) => (
                  <li key={item.id}>
                    <Button asChild variant="neutral" size="icon" className="size-14 bg-main">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={item.iconUrl}
                          width={32}
                          height={32}
                          alt={item.title}
                          className="size-8"
                        />
                      </a>
                    </Button>
                  </li>
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
