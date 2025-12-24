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
        src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766570846/foto_dummy/ARP_6898-1-scaled-6846fd3134490_pddppc.webp"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 text-white flex items-end py-32 px-16">
        <div ref={containerRef} className="space-y-2 uppercase">
          <h1 className="font-poppins font-normal text-item">The Wedding of</h1>
          <h1 className="font-playfair-display text-5xl text-item">
            Komang & Surya
          </h1>
          <p className="font-sans text-item uppercase">
            Sabtu, 06 Januari 2025
          </p>
        </div>
      </div>
    </>
  );
}
