"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";

export function MenuOverlay({
  opened,
  background,
}: {
  opened: boolean;
  background?: string;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    if (opened) {
      gsap.fromTo(
        overlayRef.current,
        {
          scale: 1,
          opacity: 1,
          top: "16px",
          right: "16px",
          height: "40px",
          width: "112px",
          display: "block",
        },
        {
          duration: 1.5,
          height: "45%",
          width: window.innerWidth > 1024 ? "30%" : "90%",
          ease: "power4.out",
        }
      );
    } else {
      gsap.to(overlayRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power4.in",
        top: "16px",
        right: "16px",
        height: "40px",
        width: "112px",
      });
    }
  }, [opened]);

  return (
    <div
      ref={overlayRef}
      className={clsx(
        "fixed z-40 rounded-[20px] backdrop-blur-sm hidden",
        background || "bg-white/20"
      )}
    >
      <nav className="p-10 text-white space-y-3 text-2xl font-marcellus"></nav>
    </div>
  );
}
