"use client";

import { useRef } from "react";
import { useScrollAnimations } from "@/hooks/useScrollAnimations";

export default function MainScrollContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainRef = useRef<HTMLDivElement>(null);

  useScrollAnimations(mainRef);

  return <div id="main" ref={mainRef}>{children}</div>;
}
