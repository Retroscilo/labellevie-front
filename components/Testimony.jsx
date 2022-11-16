"use client";
import getMedia from "@/lib/strapi/getMedia";
import parse from "html-react-parser";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Petit_Formal_Script, Raleway } from "@next/font/google";
import clsx from "clsx";

const formal = Petit_Formal_Script({
  weight: "400",
});

const raleway = Raleway();

function Testimony(props) {
  const { content, name, image } = props.data;
  const imageUrl = getMedia(image);
  return (
    <div className="mx-8">
      <div
        className={clsx(
          `grid grid-rows-[repeat(3, min-content)] sm:grid-rows-[repeat(2, min-content)] grid-cols-1 text-center sm:text-left max-w-body mx-auto my-4 gap-6 sm:gap-2 ${raleway.className}`,
          {
            "sm:grid-cols-[200px_1fr]": image.data,
            "sm:grid-cols-[1fr] sm:px-10": !image.data,
          }
        )}
      >
        <div className="row-start-1 flex justify-center sm:justify-start">
          {image.data && (
            <div className="rounded-full overflow-hidden w-fit h-fit">
              <Image src={imageUrl} alt="photo d'Audrey" width={170} height={170} />
            </div>
          )}
        </div>
        <div className="row-start-2 sm:row-start-1 sm:col-start-2 relative px-8 font-[500] flex items-center">
          <span className={`absolute text-[104px] text-highlight ${formal.className} rotate-180 top-[-100px] left-3`}>&quot;</span>
          {parse(content)}
        </div>
        <div className="sm:col-start-2 sm:text-right uppercase font-[500] px-8 text-xs relative">
          {name}
          <span className={`absolute text-[104px] text-highlight ${formal.className} sm:top-[35px] right-[20px] sm:right-[5px] top-[30px]`}>
            &quot;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
