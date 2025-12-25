"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MenuOverlay } from "./MenuOverlay";
import clsx from "clsx";

export function HamburgerMenu({
  visible,
  background,
}: {
  visible: boolean;
  background?: string;
}) {
  const menuRef = useRef<HTMLButtonElement>(null);
  const [opened, setOpened] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  useEffect(() => {
    if (!menuRef.current || !visible) return;

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
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <button
        ref={menuRef}
        aria-label="Open menu"
        className={clsx(
          "fixed top-4 right-4 z-100 w-28 h-10 rounded-full flex flex-col backdrop-blur-sm items-center justify-center gap-1",
          hasClicked ? "bg-transparent" : background || "bg-white/20"
        )}
        onClick={() => {
          setHasClicked(true);
          setOpened(!opened);
        }}
      >
        <span className="w-6 h-[2px] bg-white rounded" />
        <span className="w-10 h-[2px] bg-white rounded" />
        <span className="w-6 h-[2px] bg-white rounded" />
      </button>

      <MenuOverlay opened={opened} background={background} />
    </>
  );
}
