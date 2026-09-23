"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { MenuOverlay } from "./MenuOverlay";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";

export function HamburgerMenu({
  visible,
  background,
}: {
  visible: boolean;
  background?: string;
}) {
  const menuRef = useRef<HTMLButtonElement>(null);
  const menuLinesRef = useRef<HTMLDivElement>(null);
  const closeLabelRef = useRef<HTMLSpanElement>(null);
  const [opened, setOpened] = useState(false);
  const [closing, setClosing] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useGSAP(
    () => {
      if (!visible) return;

      gsap.fromTo(
        menuRef.current,
        { opacity: 0, scale: 0.3 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          delay: 1,
          ease: "power3.out",
        }
      );
    },
    { scope: menuRef, dependencies: [visible] }
  );

  useGSAP(
    () => {
      if (!hasClicked || !menuLinesRef.current) return;

      const lines = menuLinesRef.current.children;

      if (opened) {
        gsap.set(closeLabelRef.current, { autoAlpha: 0, y: -14 });
        gsap
          .timeline()
          .to(lines, {
            y: 20,
            opacity: 0,
            duration: 0.35,
            stagger: 0.06,
            ease: "power2.in",
          })
          .to(
            closeLabelRef.current,
            { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" },
            ">-0.1"
          );
        return;
      }

      gsap.to(closeLabelRef.current, { autoAlpha: 0, y: 14, duration: 0.25 });
      gsap.fromTo(
        lines,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: "power3.out",
        }
      );
    },
    { scope: menuRef, dependencies: [opened, hasClicked] }
  );

  useGSAP(
    () => {
      if (closing) {
        gsap.to(closeLabelRef.current, {
          autoAlpha: 0,
          y: 14,
          duration: 0.25,
          ease: "power2.in",
        });
      }
    },
    { scope: menuRef, dependencies: [closing] }
  );

  if (!visible) return null;

  return (
    <>
      <button
        ref={menuRef}
        aria-label={opened ? "Close menu" : "Open menu"}
        className={clsx(
          "fixed top-4 right-4 z-100 w-28 h-10 rounded-full flex items-center justify-center backdrop-blur-sm",
          background || "bg-white/20"
        )}
        onClick={() => {
          setHasClicked(true);
          if (opened) {
            setClosing(true);
          } else {
            setOpened(true);
          }
        }}
      >
        <span className="sr-only">Menu</span>
        <span className="flex flex-col items-center justify-center gap-1 overflow-hidden">
          <span ref={menuLinesRef} className="flex flex-col items-center gap-1">
            <span className="h-[2px] w-6 rounded bg-white" />
            <span className="h-[2px] w-10 rounded bg-white" />
            <span className="h-[2px] w-6 rounded bg-white" />
          </span>
        </span>
        <span
          ref={closeLabelRef}
          className="invisible absolute text-white font-marcellus text-sm uppercase tracking-[0.22em]"
        >
          Close
        </span>
      </button>

      <MenuOverlay
        opened={opened}
        closing={closing}
        background={background}
        onClose={() => {
          setOpened(false);
          setClosing(false);
        }}
        onRequestClose={() => setClosing(true)}
      />
    </>
  );
}
