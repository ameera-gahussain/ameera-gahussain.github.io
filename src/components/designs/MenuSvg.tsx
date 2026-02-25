interface MenuSvgProps {
  openNavigation: boolean;
}

const MenuSvg = ({ openNavigation }: MenuSvgProps) => {
  return (
    <svg
      className="overflow-visible"
      width="20"
      height="12"
      viewBox="0 0 20 12"
    >
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "0"}
        width="20"
        height="2"
        rx="1"
        fill="currentColor"
        transform={openNavigation ? "rotate(45)" : "rotate(0)"}
      />
      <rect
        className="transition-all origin-center"
        y={openNavigation ? "5" : "10"}
        width="20"
        height="2"
        rx="1"
        fill="currentColor"
        transform={openNavigation ? "rotate(-45)" : "rotate(0)"}
      />
    </svg>
  );
};

export default MenuSvg;
