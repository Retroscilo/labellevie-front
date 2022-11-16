import clsx from "clsx";

const CTA = (props) => {
  const { content, type, size } = props;
  return (
    <div
      className={clsx("flex items-center justify-center cursor-pointer text-lg", {
        "bg-highlight": type === "primary",
        "text-white": type === "primary",
        "bg-white": type === "secondary",
        "text-highlight": type === "secondary",
        "w-CTA-L": size === "L",
        "h-CTA-L": size === "L",
      })}
    >
      {content}
    </div>
  );
};

export default CTA;
