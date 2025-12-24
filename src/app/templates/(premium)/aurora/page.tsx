"use client";

import { useRef } from "react";
import { HeroImageLeft } from "./components/HeroImageLeft";
import { HeroOpening } from "./components/HeroOpnening";
import { Background } from "./components/Background";
import { Bride } from "./components/Bride";
import { Groom } from "./components/Groom";
import { LoveStory } from "./components/LoveStory";
import { Countdown } from "./components/Countdown";
import { Event } from "./components/Event";
import { Gallery } from "./components/Gallery";
import { Rsvp } from "./components/Rsvp";

export default function AuroraPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <main className="h-screen flex">
      <div className="hidden lg:block lg:w-2/3 relative h-screen">
        <HeroImageLeft />
      </div>

      <div
        ref={scrollRef}
        className="w-full lg:w-1/3 relative h-screen hide-scrollbar"
      >
        <Background />
        <HeroOpening scrollRef={scrollRef} />

        <Bride />

        <Groom />

        <LoveStory />

        <Countdown />

        <Event />

        <Gallery />

        <Rsvp />

        {/* <Gift /> */}

        {/* <Footer /> */}
      </div>
    </main>
  );
}
