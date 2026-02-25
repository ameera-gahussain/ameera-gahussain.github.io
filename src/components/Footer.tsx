import Section from "./Section";

const Footer = () => {
  return (
    <Section className="!px-0 !py-10">
      <div className="container block mx-auto text-center">
        <p className="caption text-center">
          Built and designed by Ameera.
        </p>
        <p className="caption mt-1 text-color-2 text-center">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

      </div>
    </Section>
  );
};

export default Footer;
