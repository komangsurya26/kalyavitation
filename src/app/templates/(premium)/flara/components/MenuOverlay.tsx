"use client";

import { useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";

export function MenuOverlay({
  opened,
  closing,
  background,
  onClose,
  onRequestClose,
}: {
  opened: boolean;
  closing: boolean;
  background?: string;
  onClose: () => void;
  onRequestClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (opened && menuContentRef.current) {
        const items =
          menuContentRef.current.querySelectorAll("[data-menu-item]");

        gsap.set(items, {
          autoAlpha: 0,
          y: 14,
        });

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
            onComplete: () => {
              gsap.to(items, {
                autoAlpha: 1,
                y: 0,
                duration: 0.3,
                stagger: {
                  each: 0.05,
                  from: "start",
                },
                ease: "power2.out",
              });
            },
          },
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
    },
    { scope: overlayRef, dependencies: [opened] },
  );

  useGSAP(
    () => {
      if (!closing || !menuContentRef.current) return;

      gsap.to(menuContentRef.current.querySelectorAll("[data-menu-item]"), {
        autoAlpha: 0,
        y: 14,
        duration: 0.3,
        stagger: { each: 0.05, from: "end" },
        ease: "power2.in",
        onComplete: onClose,
      });
    },
    { scope: overlayRef, dependencies: [closing] },
  );

  const navigateTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    onRequestClose();
  };

  return (
    <div
      ref={overlayRef}
      className={clsx(
        "fixed z-90 rounded-[20px] overflow-hidden backdrop-blur-md hidden",
        background || "bg-white/20",
      )}
    >
      <nav
        aria-label="Wedding navigation"
        className="flex h-full flex-col p-6 text-white sm:p-8"
      >
        <div ref={menuContentRef} className="flex h-full flex-col">
          <div className="my-auto space-y-1">
            {[
              ["Home", "home"],
              ["Bride & Groom", "bride-groom"],
              ["Wedding Event", "wedding-event"],
              ["Gallery", "gallery"],
              ["RSVP", "rsvp"],
              ["Gift", "gift"],
            ].map(([label, id], index) => (
              <button
                key={id}
                type="button"
                onClick={() => navigateTo(id)}
                data-menu-item
                className="group flex w-full items-center gap-3 py-1 text-left font-cormorant text-[clamp(1.35rem,4vw,2rem)] leading-tight transition-transform duration-300 hover:translate-x-2"
              >
                <span className="w-5 font-marcellus text-[9px] tracking-widest text-white/55">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="border-b border-transparent transition-colors group-hover:border-white/70">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
