"use client";
import CTA from "./CTA";
import parse from "html-react-parser";

const MiniSection = (props) => {
  const { content, cta } = props.data;
  return (
    <div className={"mx-12"}>
      <div className="mx-auto mb-12 mt-24 max-w-body p-12 border-8 border-mauve flex gap-6 max-md:flex-col max-md:text-center justify-between items-center px-28">
        <span className={`font-title text-xl font-bold text-titles`}>{parse(content)}</span>
        <div className={"width-fit"}>
          <CTA {...cta} />
        </div>
      </div>
    </div>
  );
};

export default MiniSection;
