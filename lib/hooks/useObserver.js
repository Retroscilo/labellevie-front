"use client";
import { useEffect, useState } from "react";

export function useObserver() {
  const [observer, setObserver] = useState(null);
  useEffect(() => {
    setObserver(new IntersectionObserver());
  });
}
