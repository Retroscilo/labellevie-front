"use client";
import parse from "html-react-parser";
import { Raleway } from "@next/font/google";
import { useEffect, useState } from "react";
import clsx from "clsx";

const raleway = Raleway({
  weight: "400",
});

function Bullet(props) {
  const { title, point1, point2, point3 } = props.data;
  return (
    <div className="mx-12 mb-[50px]">
      <div className="bg-mauve sm:px-16 px-8 py-8 text-xl max-w-body mx-auto">
        {parse(title)}
        <div className="h-[2px] w-[200px] bg-highlight absolute left-0 translate-y-[10px]" />
        <div className="grid my-10 grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
          {[point1, point2, point3].map((point, i) => (
            <Point key={i} content={point} index={i} />
          ))}
        </div>
        <div className="h-[5px] w-[300px] bg-highlight absolute right-0 translate-y-[50px]" />
      </div>
    </div>
  );
}

function Point({ content, index }) {
  return (
    <div
      className={clsx("relative w-[150px] md:justify-self-center text-lg", {
        "justify-self-start": index % 2 === 0,
        "justify-self-end": index % 2 !== 0,
      })}
    >
      <div className="flex items-center justify-center w-fit h-32 text-center">
        <div className="rounded-full bg-pink w-28 h-28 absolute -translate-2/4" />
        <div className="absolute rounded-full bg-white w-24 h-24 -translate-2/4" />
        <div className="relative -rotate-3 font-[600]">{content}</div>
      </div>
    </div>
  );
}

export default Bullet;
