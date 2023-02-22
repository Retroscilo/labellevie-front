"use client";
import s from "@/styles/navbar.module.css";
import { usePopper } from "react-popper";
import { useState } from "react";

function MenuElement(props) {
  const [hover, setHover] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
    modifiers: [
      {
        name: "offset",
        options: { offset: [0, 20] },
      },
    ],
  });

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="h-full flex items-center cursor-pointer">
      <div
        ref={setReferenceElement}
        className={`
      relative 
      before:bg-highlight
      ${hover && "text-highlight"}
      h-fit
      ${s.element}
      ${hover && s.hovered}
      `}
      >
        {props.data.attributes.name}
      </div>
      {props.data.attributes.submenu && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className={`z-50 opacity-100 transition-all ${!hover && "opacity-0 pointer-events-none"}`}
        >
          <div className={`bg-white w-fit h-fit p-6 shadow-lg translate-none visible ${!hover && "-translate-y-4"} transition-all`}>
            {props.data.attributes.submenu.map((submenu, i) => (
              <div key={i}>{submenu.name}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuElement;
