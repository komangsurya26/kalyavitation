"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ScrollWrite({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const textRef = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const spans = textRef.current?.querySelectorAll("span");
    if (!spans) return;
    gsap.to(spans, {
      opacity: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        end: "bottom 50%", // jarak end scroll
        scrub: true,
      },
    });
  }, []);

  return (
    <h1 ref={textRef} className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ opacity: 0 }}>
          {word}{" "}
        </span>
      ))}
    </h1>
  );
}
