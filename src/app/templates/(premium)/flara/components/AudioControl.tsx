"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Volume2, VolumeOff } from "lucide-react";

type Props = {
  visible: boolean;
  playing: boolean;
  toggle: () => void;
};

export function AudioControl({ visible, playing, toggle }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!ref.current || !visible) return;

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
  }, [visible]);

  if (!visible) return null;

  return (
    <button
      ref={ref}
      onClick={toggle}
      aria-label="Toggle audio"
      className="
        fixed bottom-4 right-4 z-50
        w-10 h-10 rounded-full
        bg-white/20 backdrop-blur-sm
        flex items-center justify-center
        text-white
      "
    >
      {playing ? <Volume2 size={18} /> : <VolumeOff size={18} />}
    </button>
  );
}
