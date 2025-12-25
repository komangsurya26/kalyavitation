"use client";

import { Volume2, VolumeOff } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";

type Props = {
  visible: boolean;
  playing: boolean;
  toggle: () => void;
  background?: string;
};

export function AudioControl({ visible, playing, toggle, background }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      if (!visible) return;

      gsap.fromTo(
        ref.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 1,
          ease: "power3.out",
        }
      );
    },
    { scope: ref, dependencies: [visible] }
  );

  if (!visible) return null;

  return (
    <button
      ref={ref}
      onClick={toggle}
      aria-label="Toggle audio"
      className={clsx(
        "fixed bottom-4 right-4 z-50 w-10 h-10 rounded-full flex items-center justify-center text-white backdrop-blur-sm",
        background || "bg-white/20"
      )}
    >
      {playing ? <Volume2 size={18} /> : <VolumeOff size={18} />}
    </button>
  );
}
