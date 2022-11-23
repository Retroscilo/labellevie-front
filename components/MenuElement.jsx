"use client";
import s from "@/styles/navbar.module.css";
import { usePopper } from "react-popper";
import { useState } from "react";

function MenuElement(props) {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <>
      <div
        ref={setReferenceElement}
        className={`
      relative 
      cursor-pointer
      before:bg-highlight
      hover:text-highlight
      ${s.element}
      `}
      >
        {props.data.attributes.name}
      </div>
      <div ref={setPopperElement} style={styles.popper} {...attributes.popper} className="bg-white w-10 h-10">
        Popper element
      </div>
    </>
  );
}

export default MenuElement;
