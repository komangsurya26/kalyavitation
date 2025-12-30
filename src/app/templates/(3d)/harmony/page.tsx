"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HarmonyPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);
  const thirdRef = useRef<HTMLDivElement>(null);

  const secondImageRef = useRef<HTMLDivElement>(null);
  const thirdImageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: secondRef.current,
      scroller: containerRef.current,
      start: "top center",
      onEnter: () => { gsap.to(firstRef.current, { opacity: 0, duration: 0.6, ease: "power1.out" }); },
      onLeaveBack: () => { gsap.to(firstRef.current, { opacity: 1, duration: 1, ease: "power1.out" }); },
    });

    gsap.set(secondImageRef.current, { scale: 2, opacity: 0.6 });
    gsap.set(thirdImageRef.current, { scale: 2, opacity: 0.6 });

    ScrollTrigger.create({
      trigger: secondRef.current,
      scroller: containerRef.current,
      start: "top center",
      onEnter: () => { gsap.to(secondImageRef.current, { scale: 1, opacity: 1, duration: 2, ease: "power2.out", }); },
      onLeaveBack: () => { gsap.to(secondImageRef.current, { scale: 2, opacity: 0, duration: 1, ease: "power2.out", }); },
    });

    ScrollTrigger.create({
      trigger: secondRef.current,
      scroller: containerRef.current,
      start: "top center",
      onEnter: () => { gsap.to(thirdImageRef.current, { scale: 0.9, y: 180, opacity: 1, duration: 2, ease: "power2.out", }); },
      onLeaveBack: () => { gsap.to(thirdImageRef.current, { scale: 2, opacity: 0, duration: 1, ease: "power2.out", }); },
    });

    ScrollTrigger.create({
      trigger: thirdRef.current,
      scroller: containerRef.current,
      start: "top center",
      onEnter: () => { gsap.to(secondImageRef.current, { scale: 2, opacity: 0, duration: 1, ease: "power2.out", }); },
      onLeaveBack: () => { gsap.to(secondImageRef.current, { scale: 1, opacity: 1, duration: 2, ease: "power2.out", }); },
    });
    ScrollTrigger.create({
      trigger: thirdRef.current,
      scroller: containerRef.current,
      start: "top center",
      onEnter: () => { gsap.to(thirdImageRef.current, { scale: 3, opacity: 0, duration: 2, ease: "power2.out", }); },
      onLeaveBack: () => { gsap.to(thirdImageRef.current, { scale: 0.9, y: 180, opacity: 1, duration: 2, ease: "power2.out", }); },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory relative scroll-smooth overscroll-y-contain snap-always"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="h-auto relative">
        <div className="h-screen snap-start snap-always relative flex items-center justify-center">
          <div ref={firstRef} className="fixed inset-0 -z-1">
            <Image
              src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766717209/foto_dummy/herofix_ept8qg.jpg"
              alt="hero"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div ref={secondRef} className="h-screen snap-start snap-always relative flex items-center justify-center">
          <div ref={secondImageRef} className="fixed inset-0 -z-2">
            <Image
              src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766717287/foto_dummy/hero2fix_rgymyd.webp"
              alt="hero"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
          <div ref={thirdImageRef} className="fixed inset-0 -z-2">
            <Image
              src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766717090/foto_dummy/couplefix_sctjqq.webp"
              alt="hero"
              width={1920}
              height={1080}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div
          ref={thirdRef}
          className="h-screen snap-start snap-always relative flex items-center justify-center"
        >
          haii
        </div>
      </div>
    </div >
  );
}
