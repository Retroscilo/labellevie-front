"use client";
import getMedia from "@/lib/strapi/getMedia";
import Image from "next/image";
import parse from "html-react-parser";
import clsx from "clsx";
import styles from "@/styles/card.module.css";
import CTA from "./CTA";
import useWindowDimensions from "@/lib/hooks/useWindowDimensions";
import { useLayoutEffect, useRef, useMemo, useEffect, useState } from "react";

const observerOptions = {
  root: null,
  rootMargin: "-40%",
};

const Card = (props) => {
  const { content, verso, recto, cta } = props.data;
  const versoImg = getMedia(verso);
  const rectoImg = getMedia(recto);
  const { width } = useWindowDimensions();
  const small = width < 900;
  const card = useRef(null);
  const [observer, setObserver] = useState(null);
  useEffect(() => {
    if (!observer) {
      setObserver(new IntersectionObserver(handleIntersection, observerOptions));
    }
  }, [small, observer]);

  function handleIntersection(entries) {
    if (!entries[0].isIntersecting) return;
    card.current.classList.add(styles.flipped);
  }

  useEffect(() => {
    if (!small || !observer) return;
    observer.observe(card.current);
    return () => observer.disconnect();
  }, [small, observer]);

  return (
    <div
      ref={card}
      className={clsx(`${styles.flip}`, {
        [styles.active]: !small,
      })}
    >
      <div className={`relative h-[500px] w-[300px] ${styles.front}`}>
        <Image
          src={rectoImg}
          alt="recto card"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 50vw,
              30vw"
        />
      </div>
      <div className={`relative h-[500px] w-[300px] ${styles.back}`}>
        <Image
          src={versoImg}
          alt="verso card"
          fill
          style={{ objectFit: "contain" }}
          sizes="(max-width: 768px) 80vw,
          (max-width: 1200px) 50vw,
          30vw"
        />
        <div className="absolute top-0 flex flex-col justify-center items-center h-full p-[3rem] gap-4 text-center">
          {parse(content)}
          <CTA {...cta} />
        </div>
      </div>
    </div>
  );
};

export default Card;
