"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "https://res.cloudinary.com/dpij7jkkd/image/upload/v1766570113/foto_dummy/DSC01597-3-684933cc00cc3_f04pjg.webp",
  "https://res.cloudinary.com/dpij7jkkd/image/upload/v1766570114/foto_dummy/DSC01509-3-1-684933ca83cfa_sednmy.webp",
  "https://res.cloudinary.com/dpij7jkkd/image/upload/v1766570111/foto_dummy/DSC01526-2-684933caaa466_peuj25.webp",
];

export function Background() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 right-0 -z-10 h-screen w-full lg:w-1/3 bg-black">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={src}
            alt="Background"
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
