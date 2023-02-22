import clsx from "clsx";
import PropTypes from "prop-types";

const CTA = ({ content, type = "M", size = "M", ...props }) => {
  return (
    <div
      {...props}
      role={"button"}
      className={clsx(`flex items-center justify-center cursor-pointer text-lg ${props.className}`, {
        "bg-highlight": type === "primary",
        "text-white": type === "primary",
        "bg-white": type === "secondary",
        "text-highlight": type === "secondary",
        "w-CTA-L": size === "L",
        "h-CTA-L": size === "L",
        "w-CTA-M": size === "M",
        "h-CTA-M": size === "M",
      })}
    >
      {content}
    </div>
  );
};

CTA.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["S", "M", "L"]),
  className: PropTypes.string,
};

export default CTA;
