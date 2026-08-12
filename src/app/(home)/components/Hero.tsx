"use client";

import { TypewriterText } from "@/components/shared/TypewriterText";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const heroImage = {
  src: "https://res.cloudinary.com/dpij7jkkd/image/upload/v1786558490/Kalyavitation/ChatGPT_Image_12_Agu_2026_23.14.03_2_ttaeny.png",
  alt: "Template undangan digital premium Kalyavitation",
};

const INTRO_PROGRESS_FALLBACK_MS = 3500;
const INTRO_LEAVE_DELAY_MS = 450;
const INTRO_COMPLETE_FALLBACK_MS = 3600;
const introProgressNumbers = Array.from({ length: 101 }, (_, index) => index);

export function Hero() {
  const originalOverflowRef = useRef("");
  const [scrollY, setScrollY] = useState(0);
  const [introCoverScale, setIntroCoverScale] = useState(10);
  const [introProgressComplete, setIntroProgressComplete] = useState(false);
  const [introDone, setIntroDone] = useState(false);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  const completeIntro = () => {
    setIntroDone(true);
    document.body.style.overflow = originalOverflowRef.current;
    window.dispatchEvent(new Event("hero:intro-complete"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateIntroCoverScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const photoWidth = Math.min(
        Math.max(4.5 * 16, viewportWidth * 0.14),
        10 * 16,
      );
      const photoHeight = photoWidth * 1.25;
      const coverScale =
        Math.max(viewportWidth / photoWidth, viewportHeight / photoHeight) *
        1.04;

      setIntroCoverScale(coverScale);
    };

    updateIntroCoverScale();
    window.addEventListener("resize", updateIntroCoverScale);

    return () => window.removeEventListener("resize", updateIntroCoverScale);
  }, []);

  useEffect(() => {
    originalOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflowRef.current;
    };
  }, []);

  useEffect(() => {
    let firstFrame = 0;
    let secondFrame = 0;

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        setPageReady(true);
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, []);

  useEffect(() => {
    if (introProgressComplete) {
      return;
    }

    const progressFallback = window.setTimeout(() => {
      setIntroProgressComplete(true);
    }, INTRO_PROGRESS_FALLBACK_MS);

    return () => {
      window.clearTimeout(progressFallback);
    };
  }, [introProgressComplete]);

  useEffect(() => {
    if (!introProgressComplete || !pageReady || introLeaving) {
      return;
    }

    const leaveTimer = window.setTimeout(() => {
      setIntroLeaving(true);
    }, INTRO_LEAVE_DELAY_MS);
    return () => {
      window.clearTimeout(leaveTimer);
    };
  }, [introLeaving, introProgressComplete, pageReady]);

  useEffect(() => {
    if (!introLeaving || introDone) {
      return;
    }

    const completeFallback = window.setTimeout(() => {
      completeIntro();
    }, INTRO_COMPLETE_FALLBACK_MS);

    return () => {
      window.clearTimeout(completeFallback);
    };
  }, [introDone, introLeaving]);

  return (
    <section className="relative isolate min-h-svh overflow-hidden bg-[#1d120b] text-white">
      <div
        className={`${
          introDone ? styles.heroContentReveal : styles.heroContentHidden
        } relative z-10 flex h-svh flex-col items-center justify-center px-5 text-center`}
        style={{ transform: `translate3d(0, ${scrollY * -0.08}px, 0)` }}
      >
        <p className="mb-5 text-xs font-light uppercase tracking-[0.5em] text-white/70">
          Digital Invitation
        </p>
        <h1 className="font-playfair-display text-[clamp(3.6rem,10vw,9rem)] font-medium uppercase leading-none">
          Kalya
          <span className="mx-1 font-cormorant font-normal italic normal-case">
            vitation
          </span>
        </h1>
        <h2 className="mt-3 font-marcellus text-2xl font-light uppercase tracking-[0.22em] text-white/85 md:text-4xl">
          <TypewriterText
            text={[
              "Premium dan Elegan",
              "Modern dan Simple",
              "Klasik dan Mewah",
            ]}
          />
        </h2>
      </div>

      <div
        className={`${
          introDone ? styles.heroContentReveal : styles.heroContentHidden
        } absolute inset-x-0 bottom-6 z-10 flex justify-center`}
      >
        <a
          href="https://app.kalyavitation.com"
          className="group flex flex-col items-center gap-3 text-white/75 transition hover:text-white"
        >
          <p className="text-[10px] font-light uppercase tracking-[0.38em]">
            Coba Sekarang
          </p>
          <ChevronDown className="h-5 w-5 transition duration-300 group-hover:translate-y-1" />
        </a>
      </div>

      <div
        className={`${styles.heroIntro} ${
          introDone ? styles.heroIntroComplete : "fixed z-9999 bg-black"
        } inset-0 flex flex-col items-center justify-center text-white ${
          introLeaving && !introDone ? styles.heroIntroLeaving : ""
        }`}
      >
        {!introDone && (
          <div className={styles.heroIntroProgress}>
            <div className={styles.heroIntroProgressNumber}>
              <div className={styles.heroIntroProgressNumberTrack}>
                {introProgressNumbers.map((number) => (
                  <span key={number}>{number}%</span>
                ))}
              </div>
            </div>
            <div
              className={styles.heroIntroProgressFill}
              onAnimationEnd={() => setIntroProgressComplete(true)}
            />
          </div>
        )}
        <h2
          className={`${styles.heroIntroLogo} relative z-10 flex items-center justify-center gap-[clamp(0.75rem,2vw,1.5rem)] font-playfair-display text-[clamp(2.8rem,8vw,7rem)] font-medium uppercase leading-none`}
        >
          <span
            className={`${styles.heroIntroText} ${styles.heroIntroTextLeft} ${
              introDone ? styles.heroIntroTextComplete : ""
            }`}
          >
            Kalya
          </span>
          <span
            className={styles.heroIntroInlinePhoto}
            style={
              {
                "--hero-intro-cover-scale": introCoverScale,
              } as CSSProperties
            }
            onAnimationEnd={(event) => {
              if (introLeaving && event.currentTarget === event.target) {
                completeIntro();
              }
            }}
          >
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </span>
          <span
            className={`${styles.heroIntroText} ${styles.heroIntroTextRight} ${
              introDone ? styles.heroIntroTextComplete : ""
            } font-cormorant font-normal italic normal-case`}
          >
            vitation
          </span>
        </h2>
      </div>
    </section>
  );
}
