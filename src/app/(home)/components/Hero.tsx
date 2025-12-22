import { TypewriterText } from "@/components/shared/TypewriterText";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto gap-10 pb-10 pt-28">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-thin text-center uppercase">
            Buat Undangan Digitalmu Dengan Template
          </h1>
          <h2 className="text-3xl md:text-4xl text-center font-marcellus uppercase">
            <TypewriterText
              text={[
                "Premium dan Elegan",
                "Modern dan Simple",
                "Klasik dan Mewah",
              ]}
            />
          </h2>
        </div>
        <a href="https://app.kalyavitation.com" className="flex gap-2">
          <h1 className="uppercase text-lg sm:text-xl font-light">
            Coba Sekarang
          </h1>
          <ArrowUpRight className="w-6 h-6" />
        </a>
      </div>

      <div className="text-white md:px-8">
        <div className="h-full grid grid-cols-1 md:grid-cols-3">
          <Image
            src="/images/landing/hero2.webp"
            alt="Hero"
            width={1333}
            height={1333}
            priority
            className="object-cover object-center w-full h-full"
          />

          <Image
            src="/images/landing/hero1.webp"
            alt="Hero"
            width={1333}
            height={1333}
            priority
            className="object-cover object-center w-full h-full"
          />
          <Image
            src="/images/landing/hero5.webp"
            alt="Hero"
            width={1333}
            height={1333}
            priority
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
