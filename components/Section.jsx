"use client";
import parse from "html-react-parser";
import Image from "next/image";
import getMedia from "@/lib/strapi/getMedia";
import { Raleway } from "@next/font/google";
import CTA from "./CTA";
import clsx from "clsx";

const raleway = Raleway();

const Section = (props) => {
  const { title, subtitle, content, image, cta: ctas, image_position } = props.data;
  const imageUrl = getMedia(image);
  return (
    <div
      className={clsx("bg-mauve min-h-[0vh] w-screen grid relative", {
        "md:grid-cols-[1fr_33%]": image_position === "right",
        "md:grid-cols-[33%_1fr]": image_position === "left",
      })}
    >
      <div
        className={clsx("relative h-full max-md:absolute max-md:w-screen max-md:opacity-20", {
          "md:col-start-2": image_position === "right",
          "col-start-1": image_position === "left",
        })}
      >
        <Image fill style={{ objectFit: "cover" }} src={imageUrl} alt="illustration" />
      </div>
      <div
        className={clsx("px-6 sm:px-10 md:px-15 py-12 flex flex-col relative row-start-1 md:max-w-[80%] mx-auto", {
          "col-start-1": image_position === "right",
          "col-start-2": image_position === "left",
        })}
      >
        <div className={`${raleway.className} text-titles mb-16`}>
          <div className="text-3xl font-bold mb-4">{parse(title)}</div>
          <div className="italic ml-20 text-xl">{parse(subtitle)}</div>
        </div>
        <div className="grow">{parse(content)}</div>
        <div className="flex justify-end gap-7 max-sm:flex-col max-sm:items-center mt-16">
          {ctas.map((cta, i) => (
            <CTA key={i} {...cta} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;
