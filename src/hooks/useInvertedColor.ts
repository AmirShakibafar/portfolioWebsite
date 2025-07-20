import { useState, useEffect, RefObject } from "react";

export function useInvertedColor(
  elementRef: RefObject<HTMLElement | null>
): boolean {
  const [invert, setInvert] = useState<boolean>(false);

  useEffect(() => {
    const intersectionMap = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(
          "Observer:",
          entry.target,
          "is intersecting:",
          entry.isIntersecting
        );
        intersectionMap.set(entry.target, entry.isIntersecting);
          intersectionMap.set(entry.target, entry.isIntersecting);
        });
        

        const shouldInvertNow = Array.from(intersectionMap.values()).some(
          (isIntersecting) => isIntersecting
        );

        setInvert(shouldInvertNow);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const darkSections = document.querySelectorAll<HTMLElement>(
      '[data-theme="dark"]'
    );

    darkSections.forEach((section) => {
      observer.observe(section);
      intersectionMap.set(section, false);
    });

    return () => {
      darkSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [elementRef]);

  return invert;
}
