"use client";
import parse from "html-react-parser";
import Image from "next/image";
import { Raleway } from "@next/font/google";
import Check from "/public/check.jpg";
import Close from "/public/close.jpg";
import getMedia from "@/lib/strapi/getMedia";

const raleway = Raleway();

function Procons(props) {
  const { pros_title, pros1, pros2, pros3, cons_title, cons1, cons2, cons3, illustration_left, illustration_right } = props.data;
  const imageRightUrl = getMedia(illustration_right);
  const imageLefttUrl = getMedia(illustration_left);
  return (
    <div className="grid md:grid-rows-1 md:grid-cols-[1fr_2px_1fr] p-12 gap-10 max-w-body mx-auto">
      <div className="relative flex flex-col gap-8 p-6">
        <div className={`${raleway.className} text-titles text-center text-lg font-medium mb-8`}>{parse(pros_title)}</div>
        {[pros1, pros2, pros3].map((pro, i) => (
          <Row key={i} pros content={pro} />
        ))}
      </div>
      <div className="bg-highlight w-full h-[2px] md:h-full relative" />
      <div className="relative flex flex-col gap-8 p-6">
        <div className={`${raleway.className} text-titles text-center font-medium text-lg`}>{parse(cons_title)}</div>
        {[cons1, cons2, cons3].map((con, i) => (
          <Row key={i} content={con} />
        ))}
      </div>
    </div>
  );
}

function Row({ pros, content }) {
  return (
    <div className="flex items-start gap-2">
      <Image width={25} height={25} src={pros ? Check : Close} alt="check" style={{ marginTop: "4px" }} />
      <span>{parse(content)}</span>
    </div>
  );
}

export default Procons;
