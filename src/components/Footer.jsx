import Section from "./Section";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10">
      <div className="container block ">
        <p className="caption text-color-2 text-center">
          Built and designed by Ameera.
        </p>
        <p className="caption mt-1 text-color-2 text-center">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

        {/*<ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-3 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={20} height={20} alt={item.title} />
            </a>
          ))}
        </ul>*/}
      </div>
    </Section>
  );
};

export default Footer;
