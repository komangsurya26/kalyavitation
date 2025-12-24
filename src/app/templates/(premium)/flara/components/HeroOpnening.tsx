"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { HamburgerMenu } from "./HamburgerMenu";
import { AudioControl } from "./AudioControl";

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

  useEffect(() => {
    if (!openingRef.current) return;
    const items = openingRef.current.querySelectorAll(".hero-item");

    const ctx = gsap.context(() => {
      gsap.from(items, {
        opacity: 0,
        scale: 0.8,
        duration: 2,
        stagger: 0.4,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!scrollRef?.current) return;

    if (!opened) {
      scrollRef.current.style.overflowY = "hidden";
    } else {
      scrollRef.current.style.overflowY = "auto";
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.style.overflowY = "auto";
      }
    };
  }, [opened, scrollRef]);

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
      className="relative h-screen w-full overflow-hidden"
    >
      <HamburgerMenu visible={opened} />
      <AudioControl
        visible={showAudio}
        playing={audioPlaying}
        toggle={toggleAudio}
      />
      {/* OPENING */}
      <div
        ref={openingRef}
        className="absolute inset-0 grid grid-flow-col grid-rows-2"
      >
        <div className="hero-item flex flex-col items-center justify-center font-marcellus gap-3 text-white">
          <h1 className="uppercase text-sm">the wedding of</h1>
          <h1 className="uppercase text-3xl">komang & surya</h1>
          <h1 className="uppercase text-xs">sabtu, 24 desember 2025</h1>
        </div>

        <div className="hero-item flex flex-col items-center justify-center gap-3 text-white">
          <h1 className="font-extralight text-sm font-poppins">
            Yth. Bapak/Ibu/Saudara/i
          </h1>
          <h1 className="uppercase font-marcellus">Tamu Undangan</h1>
          <h1 className="font-poppins text-xs font-extralight max-w-[40ch] text-center">
            Tanpa mengurangi rasa hormat, kami mengundang anda untuk menghadiri
            acara pernikahan kami.
          </h1>

          <button
            onClick={handleOpen}
            className="uppercase font-marcellus px-4 py-2 bg-white/20 rounded-full text-white text-sm hover:bg-white hover:text-black transition"
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
        <div className="hero-item flex flex-col items-center justify-center font-marcellus gap-3 text-white">
          <h1 className="uppercase text-sm">the wedding of</h1>
          <h1 className="uppercase text-3xl">komang & surya</h1>
          <h1 className="uppercase text-xs">sabtu, 24 desember 2025</h1>
        </div>

        <div className="hero-item flex flex-col items-center justify-center gap-3 text-white">
          <h1 className="font-serif text-sm font-normal max-w-[50ch] text-center ">
            &quot;Two are better than one, because they have a good reward for
            their toil. For if they fall, one will lift up his fellow. But woe
            to him who is alone when he falls and has not another to lift him
            up.&quot;
          </h1>
          <h1 className="font-poppins text-sm font-light max-w-[40ch] text-center">
            Ecclesiastes 4:9-10
          </h1>
        </div>
      </div>

      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/dpij7jkkd/video/upload/v1764142798/audio/You_re_Still_The_One_lyrics_-_Teddy_Swims_gydhgf.mp3"
        loop
        preload="auto"
      />
      {opened && (
        <div className="absolute inset-0 top-[70vh] bg-linear-to-t from-black/70 via-black/50 to-transparent pointer-events-none"></div>
      )}
    </div>
  );
}
