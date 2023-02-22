"use client";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import CTA from "./CTA";
import useRegex from "@/lib/hooks/useRegex";

function Footer({ pages }) {
  return (
    <div className="bg-mauve grid grid-rows-3 grid-cols-1 p-16 text-titles">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-highlight w-full h-[1.5px] my-6" />
        {pages.map((page, i) => {
          return (
            <React.Fragment key={page.id}>
              <div>{page.attributes.name}</div>
              {i < pages.length - 1 && <div className="bg-highlight h-[5px] w-[5px] mx-auto rounded-full" />}
            </React.Fragment>
          );
        })}
        <div className="bg-highlight w-full h-[1.5px] my-6" />
      </div>
      <FooterForm />
    </div>
  );
}

function FooterForm({}) {
  const {
    value: email,
    isValid: emailValid,
    props: emailInputProps,
  } = useRegex(new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/), "l'email n'est pas valide");
  const { value: firstName, isValid: firstNameValid, props: firstNameInputProps } = useRegex(new RegExp(/[A-Za-zÀ-ÖØ-öø-ÿ]{3,}/));

  function handleSubmit() {
    const valid = emailValid && firstNameValid;
    if (!valid) return;
    else console.log("send");
  }

  return (
    <form className="flex gap-6 flex-col" autoComplete="false">
      <p className="font-semibold">Recevez mes conseils :</p>
      <TextField {...firstNameInputProps} variant="filled" label="prénom" />
      <TextField {...emailInputProps} variant="filled" label="email" />
      <CTA onClick={handleSubmit} content={"S'inscrire"} type={"primary"} size={"M"} className="mx-auto" />
    </form>
  );
}

export default Footer;
