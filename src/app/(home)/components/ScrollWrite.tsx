"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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

  useGSAP(
    () => {
      gsap.to("span", {
        opacity: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "bottom 50%", // jarak end scroll
          scrub: true,
        },
      });
    },
    { scope: textRef }
  );

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
