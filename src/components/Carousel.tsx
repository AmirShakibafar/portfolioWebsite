"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";

type CarouselProps = {
  images: string[];
  projectName?: string;
};

// Scroll-only carousel with two external nav buttons (Prev / Next).
// - Native horizontal scrolling + scroll-snap for smooth UX
// - Buttons scroll by exactly one "page" (the container's clientWidth)
// - Buttons disable at bounds and keyboard arrow support is included

export default function CarouselWithButtons({
  images,
  projectName = "",
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateButtons = useCallback(() => {
    const c = containerRef.current;
    if (!c) return;
    const { scrollLeft, scrollWidth, clientWidth } = c;
    // small epsilon for rounding issues
    const eps = 2;
    setCanPrev(scrollLeft > eps);
    setCanNext(scrollLeft + clientWidth + eps < scrollWidth);
  }, []);

  useEffect(() => {
    updateButtons();
    const c = containerRef.current;
    if (!c) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => updateButtons());
    };

    const onResize = () => {
      // re-evaluate bounds on resize
      requestAnimationFrame(() => updateButtons());
    };

    c.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // keyboard left/right support while focusing the container or its descendants
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollByPage("next");
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollByPage("prev");
      }
    };
    c.addEventListener("keydown", onKey as any);

    // initial check after images loaded (in case images change layout)
    const t = setTimeout(updateButtons, 60);

    return () => {
      clearTimeout(t);
      c.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      c.removeEventListener("keydown", onKey as any);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [updateButtons]);

  // scrolls by one visible page (clientWidth)
  const scrollByPage = (dir: "next" | "prev") => {
    const c = containerRef.current;
    if (!c) return;
    const page = c.clientWidth;
    const delta = dir === "next" ? page : -page;
    c.scrollBy({ left: delta, behavior: "smooth" });

    // optimistic update of buttons (the scroll listener will correct if needed)
    setTimeout(updateButtons, 160);
  };

  return (
    <div className="relative w-full" style={{ direction: "ltr" }}>
      {/* Prev button */}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollByPage("prev")}
        className={`absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-opacity bg-white/90 backdrop-blur-sm ${
          canPrev ? "opacity-100" : "opacity-40 pointer-events-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 rotate-180"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.879a1 1 0 111.516-1.302l5 5.889a1 1 0 010 1.294l-5 5.889a1 1 0 01-1.516-1.302z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Next button */}
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollByPage("next")}
        className={`absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-opacity bg-white/90 backdrop-blur-sm ${
          canNext ? "opacity-100" : "opacity-40 pointer-events-none"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.879a1 1 0 111.516-1.302l5 5.889a1 1 0 010 1.294l-5 5.889a1 1 0 01-1.516-1.302z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* scroll container */}
      <div
        ref={containerRef}
        tabIndex={0}
        aria-label="Project images"
        className="w-full grid grid-flow-col auto-cols-[100%] gap-0 snap-x snap-mandatory overflow-x-auto overflow-y-hidden touch-pan-x scrollbar-thin"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="snap-start min-w-[100%] w-full flex-none box-border relative"
            role="group"
            aria-roledescription="slide"
            aria-label={`${projectName} image ${i + 1}`}
          >
            <div className="rounded-lg overflow-hidden aspect-[16/9] w-full h-full p-4 box-border">
              <Image
                src={src}
                alt={`${projectName} image ${i + 1}`}
                width={1200}
                height={675}
                className="w-full h-full object-cover block"
                onLoadingComplete={() => {
                  // after image loads, re-check bounds (small timeout helps layout settle)
                  setTimeout(updateButtons, 40);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
