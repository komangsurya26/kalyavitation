"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HamburgerMenu } from "@/app/templates/(premium)/flara/components/HamburgerMenu";
import { AudioControl } from "@/app/templates/(premium)/flara/components/AudioControl";
import { useGSAP } from "@gsap/react";

export function HeroOpening({
  scrollRef,
}: {
  scrollRef: React.RefObject<HTMLDivElement | null>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const openingRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [opened, setOpened] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [showAudio, setShowAudio] = useState(false);

  useGSAP(
    () => {
      gsap.from(".hero-item", {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        stagger: 0.4,
        ease: "power3.out",
      });
    },
    { scope: openingRef }
  );

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (opened) {
      el.classList.remove("overflow-hidden");
      el.classList.add("overflow-y-scroll", "snap-y", "snap-mandatory");
    } else {
      el.classList.add("overflow-hidden");
      el.classList.remove("overflow-y-scroll", "snap-y", "snap-mandatory");
    }
  }, [opened]);

  const handleOpen = () => {
    if (opened) return;
    if (!openingRef.current || !nextRef.current) return;

    setOpened(true);
    setShowAudio(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play();
      setAudioPlaying(true);
    }

    gsap
      .timeline()
      .to(openingRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      })
      .set(openingRef.current, { display: "none" })
      .set(nextRef.current, { display: "grid" })
      .fromTo(
        nextRef.current.querySelectorAll(".hero-item"),
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          stagger: 0.4,
          ease: "power3.out",
        }
      );
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setAudioPlaying(!audioPlaying);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden snap-start"
    >
      <HamburgerMenu visible={opened} background="bg-black/20" />
      <AudioControl
        visible={showAudio}
        playing={audioPlaying}
        toggle={toggleAudio}
        background="bg-black/20"
      />
      {/* OPENING */}
      <div
        ref={openingRef}
        className="absolute inset-0 grid grid-flow-col grid-rows-2"
      >
        <div className="hero-item flex flex-col items-center justify-center gap-3 text-white">
          <h1 className="uppercase text-sm">the wedding of</h1>
          <h1 className="uppercase font-playfair-display text-3xl">
            komang & surya
          </h1>
          <h1 className="uppercase text-xs">sabtu, 24 desember 2025</h1>
        </div>

        <div className="hero-item flex flex-col items-center justify-center gap-3 text-white">
          <h1 className="text-sm font-poppins">Yth. Bapak/Ibu/Saudara/i</h1>
          <h1 className="uppercase font-poppins">Tamu Undangan</h1>
          <h1 className="font-poppins text-xs max-w-[40ch] text-center">
            Tanpa mengurangi rasa hormat, kami mengundang anda untuk menghadiri
            acara pernikahan kami.
          </h1>

          <button
            onClick={handleOpen}
            className="uppercase font-poppins px-4 py-2 border text-white text-sm hover:bg-white hover:text-black transition"
          >
            buka undangan
          </button>
        </div>
      </div>

      {/* NEXT CONTENT */}
      <div
        ref={nextRef}
        className="absolute inset-0 grid-flow-col grid-rows-2 hidden"
      >
        <div className="hero-item grid grid-cols-3 justify-center pt-24 text-white font-sans font-semibold">
          <div className="border-y border-white/20 py-1 h-fit mx-8">
            <h1 className="uppercase text-sm text-center">sabtu</h1>
          </div>
          <div className="border-y border-white/20 py-1 h-fit mx-8">
            <h1 className="uppercase text-sm text-center">06 jan</h1>
          </div>
          <div className="border-y border-white/20 py-1 h-fit mx-8">
            <h1 className="uppercase text-sm text-center">2025</h1>
          </div>
        </div>

        <div className="hero-item flex flex-col items-center justify-end gap-3 px-2 pb-24">
          <h1 className="font-pinyon-script text-white">The wedding of</h1>
          <h1 className="uppercase text-2xl text-center font-playfair-display text-white/80">
            komang & surya
          </h1>
          <h1 className="font-poppins text-xs font-normal max-w-[90ch] text-center text-white/70">
            Ihaiva stam mā vi yaustam, Visvām āyur vyasnutam. Krindantau putrair
            naptrbhih, Modamānau sve grhe. (Rgveda : X.85.42) Artinya : Wahai
            pasangan suami-isteri, semoga kalian tetap bersatu dan tidak pernah
            terpisahkan. Semoga kalian mencapai hidup penuh kebahagiaan, tinggal
            di rumah yang penuh kegembiraan bersama seluruh keturunanmu.
          </h1>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/dpij7jkkd/video/upload/v1764142798/audio/You_re_Still_The_One_lyrics_-_Teddy_Swims_gydhgf.mp3"
        loop
        preload="auto"
      />
      <div className="absolute inset-0 top-[70vh] bg-linear-to-t from-black/70 via-black/50 to-transparent pointer-events-none -z-1"></div>
      <div className="absolute inset-0 bottom-[70vh] bg-linear-to-b from-black/70 via-black/50 to-transparent pointer-events-none -z-1"></div>
    </div>
  );
}
