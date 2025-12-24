"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export function HeroImageLeft() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll(".text-item");

    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.3,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Image
        src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1764900863/invitations/4/gsrxwz5ffpjwzklqtkw8.webp"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 text-white flex items-end py-32 px-16">
        <div ref={containerRef} className="space-y-2 uppercase">
          <h1 className="font-marcellus font-normal text-item">
            The Wedding of
          </h1>
          <h1 className="font-marcellus text-5xl text-item">Komang & Surya</h1>
        </div>
      </div>
    </>
  );
}
