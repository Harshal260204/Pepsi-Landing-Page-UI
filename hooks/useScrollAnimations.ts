"use client";

import { useEffect } from "react";
import type { RefObject } from "react";

export function useScrollAnimations(
  mainRef: RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    const mainElement = mainRef.current;
    if (!mainElement) return;

    let locoScroll: { destroy: () => void } | null = null;
    let isMounted = true;

    const init = async () => {
      const { initLocomotiveScroll, initScrollAnimations } = await import(
        "@/lib/gsap-locomotive"
      );

      if (!isMounted) return;

      locoScroll = initLocomotiveScroll(mainElement);
      initScrollAnimations();
    };

    init();

    return () => {
      isMounted = false;

      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        locoScroll?.destroy();
      });
    };
  }, [mainRef]);
}
