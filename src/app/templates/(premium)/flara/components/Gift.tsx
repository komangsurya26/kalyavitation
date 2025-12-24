"use client";

import Image from "next/image";
import { useState } from "react";
import { DigitalGift } from "./DigitalGift";

export function Gift() {
  const [activeTab, setActiveTab] = useState("");
  return (
    <div className="p-10 text-white">
      <div className="flex flex-col gap-6">
        <div className="w-[250px] h-[180px] relative">
          <Image
            src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766311735/invitations/2/e2cslgvwnhsnsl6g5tt5.webp"
            alt=""
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="uppercase font-marcellus text-4xl">Wedding Gift</h1>
        <p className="font-poppins font-extralight text-sm leading-4">
          Tanpa mengurangi rasa hormat bagi tamu yang ingin mengirimkan hadiah
          kepada kami, bisa melalui nomor rekening dibawah ini:
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("digital-gift")}
            className="uppercase font-marcellus font-light text-sm py-2 px-4 rounded-full  bg-white/20 hover:bg-white hover:text-black"
          >
            E-amplop
          </button>
        </div>
        {activeTab === "digital-gift" && <DigitalGift />}
      </div>
    </div>
  );
}
