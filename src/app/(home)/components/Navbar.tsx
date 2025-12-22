"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [hideTopBar, setHideTopBar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
      setHideTopBar(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div
        className={clsx(
          "fixed top-0 inset-x-0 z-50 flex h-7 items-center justify-center bg-neutral-800 text-white font-semibold",
          "text-[10px] md:text-xs",
          "transform transition-transform duration-500 ease-in-out",
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        )}
      >
        GRATIS KONSULTASI & PERCOBAAN GRATIS
      </div>

      {/* Navbar */}
      <header
        className={clsx(
          "fixed inset-x-0 z-1000",
          "transform transition-transform duration-500 ease-in-out",
          hideTopBar ? "translate-y-0" : "translate-y-7",
          scrolled
            ? "bg-white/20 backdrop-blur-sm shadow-lg transition-colors duration-300"
            : "bg-transparent"
        )}
      >
        <nav
          className={clsx(
            "flex h-18 items-center justify-between",
            "px-6 sm:px-12 md:px-24"
          )}
        >
          <h1 className="font-marcellus text-xl sm:text-2xl md:text-3xl">
            <Link href="/">Kalyavitation</Link>
          </h1>

          <a
            href="https://app.kalyavitation.com"
            className={clsx(
              "rounded-full bg-neutral-800 py-2 text-white",
              "text-xs sm:text-sm",
              "px-4 sm:px-6 md:px-8"
            )}
          >
            DASHBOARD
          </a>
        </nav>
      </header>
    </>
  );
}
