"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export function HeroImageLeft() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".text-item", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <>
      <Image
        src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766574532/foto_dummy/lume7_mqybzm.webp"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 text-white flex items-end py-32 px-16">
        <div ref={containerRef} className="space-y-2 uppercase">
          <h1 className="font-cormorant font-normal text-item">
            The Wedding of
          </h1>
          <h1 className="font-cormorant text-5xl text-item">Komang & Surya</h1>
        </div>
      </div>
    </>
  );
}
