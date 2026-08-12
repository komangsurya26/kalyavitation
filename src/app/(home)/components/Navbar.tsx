"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [hideTopBar, setHideTopBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [introActive, setIntroActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
      setHideTopBar(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleIntroComplete = () => {
      setIntroActive(false);
    };

    window.addEventListener("hero:intro-complete", handleIntroComplete);

    return () => {
      window.removeEventListener("hero:intro-complete", handleIntroComplete);
    };
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div
        className={clsx(
          "fixed top-0 inset-x-0 z-50 flex h-7 items-center justify-center border-b border-white/10 bg-black/20 text-white/75 backdrop-blur-sm",
          "text-[9px] font-light uppercase tracking-[0.32em] md:text-[10px]",
          "transform transition-all duration-700 ease-in-out",
          introActive || hideTopBar
            ? "pointer-events-none -translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        )}
      >
        Gratis konsultasi & percobaan gratis
      </div>

      {/* Navbar */}
      <header
        className={clsx(
          "fixed inset-x-0 z-1000 text-white",
          "transform transition-all duration-700 ease-in-out",
          introActive
            ? "pointer-events-none -translate-y-full opacity-0"
            : hideTopBar
              ? "translate-y-0 opacity-100"
              : "translate-y-7 opacity-100",
          scrolled
            ? "bg-white/20 text-white shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        )}
      >
        <nav
          className={clsx(
            "grid h-18 grid-cols-2 items-center md:grid-cols-3",
            "px-5 sm:px-10 md:px-16"
          )}
        >
          <h1 className="font-marcellus text-xl uppercase leading-none sm:text-2xl md:text-3xl">
            <Link href="/">Kalyavitation</Link>
          </h1>

          <div className="hidden justify-center gap-8 text-[10px] font-light uppercase tracking-[0.28em] text-white/75 md:flex">
            <Link href="/">Home</Link>
            <Link href="/templates/flara">Template</Link>
            <a href="https://app.kalyavitation.com">Order</a>
          </div>

          <a
            href="https://app.kalyavitation.com"
            className={clsx(
              "justify-self-end border border-white/45 py-2 text-white transition duration-300 hover:bg-white hover:text-[#1d120b]",
              "px-4 text-[10px] font-light uppercase tracking-[0.24em] sm:px-6"
            )}
          >
            DASHBOARD
          </a>
        </nav>
      </header>
    </>
  );
}
