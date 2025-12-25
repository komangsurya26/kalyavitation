"use client";

import { useState } from "react";
import { DigitalGift } from "./DigitalGift";

export function Gift() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="p-10 h-screen space-y-4 text-white snap-start">
      <h2 className="text-4xl font-playfair-display">Wedding Gift</h2>
      <p className="text-xs font-extralight font-poppins">
        Tanpa mengurangi rasa hormat kami bagi tamu yang ingin mengirimkan
        hadiah kepada kedua mempelai dapat mengirimkannya melalui :
      </p>
      <button
        onClick={() => setActiveTab("digital-gift")}
        className="px-4 py-2 border font-bold text-sm font-poppins uppercase hover:bg-white hover:text-black cursor-pointer"
      >
        E-Amplop
      </button>
      {activeTab === "digital-gift" && <DigitalGift />}
    </div>
  );
}
