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
import { Wishes } from "./components/Wishes";
import { Gift } from "./components/Gift";
import { Footer } from "./components/Footer";
import { FixedBackground } from "./components/FixedBackground";

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

        <FixedBackground bgImage="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766570113/foto_dummy/DSC01597-3-684933cc00cc3_f04pjg.webp">
          <Rsvp />
          <Wishes />
          <Gift />
        </FixedBackground>

        <Footer />
      </div>
    </main>
  );
}
