import Image from "next/image";
import { ScrollWrite } from "./ScrollWrite";

export function About() {
  return (
    <>
      <div className="py-28">
        <div className="flex items-center justify-center max-w-4xl mx-auto relative">
          <p className="text-center text-xl sm:text-2xl md:text-4xl font-thin opacity-10">
            Di Kalyavitation, kami merancang undangan digital yang rapi dan
            berkelas untuk mereka yang peduli pada cara momen dibagikan. Setiap
            template dibuat dengan standar yang sama - menjaga kejelasan,
            kualitas, dan detail di balik setiap perayaan. Karena ketika sebuah
            momen dirancang dengan penuh makna, cara menyampaikannya pun harus
            sama bermaknanya.
          </p>
          <ScrollWrite
            className="absolute top-0 left-0 text-center text-xl sm:text-2xl md:text-4xl font-thin opacity-100"
            text="Di Kalyavitation, kami merancang undangan digital yang rapi dan berkelas
            untuk mereka yang peduli pada cara momen dibagikan. Setiap template dibuat
            dengan standar yang sama - menjaga kejelasan, kualitas, dan detail di balik
            setiap perayaan. Karena ketika sebuah momen dirancang dengan penuh makna,
            cara menyampaikannya pun harus sama bermaknanya."
          />
        </div>
      </div>
      <section className="flex border border-neutral-800 whitespace-nowrap w-full h-10 md:h-12 items-center overflow-hidden bg-white">
        {Array.from({ length: 10 }).map((_, index) => (
          <h1
            key={index}
            className="text-sm md:text-lg p-2 font-extralight animate-marquee"
          >
            Fitur Dashboard Dalam Tahap Pengembangan Bisa Hubungi Kami Untuk
            Pembuatan Undangan
          </h1>
        ))}
      </section>
      <div className="px-4 md:px-8 py-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-6 md:mt-16">
            <div className="flex gap-3">
              <div className="relative w-1/4 aspect-2/3">
                <Image
                  src="/images/landing/hero5.webp"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-2/5 aspect-3/2">
                <Image
                  src="/images/landing/hero5.webp"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 lg:mt-40">
              <div className="relative w-2/3 aspect-square">
                <Image
                  src="/images/landing/hero5.webp"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-1/4 h-1/2 aspect-2/3">
                <Image
                  src="/images/landing/hero5.webp"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="h-[400px] md:h-[500px] lg:h-[800px] relative">
            <div className="absolute inset-0 flex justify-center pointer-events-none">
              <div className="sticky h-full w-px bg-neutral-500 z-0" />
            </div>
            <div className="flex flex-col gap-4 sticky top-18 z-10 bg-white py-4">
              <h1 className="text-5xl lg:text-7xl font-marcellus text-center">
                COBA <span className="text-sm -ml-2">TEMPLATE</span> <br />
                TERBAIK<span className="ml-4">KAMI</span>
              </h1>
              <p className="text-center text-sm lg:mt-4 max-w-md mx-auto leading-relaxed">
                Koleksi template undangan terbaik — elegan, berkelas, dan
                dirancang dengan penuh makna. Tema-tema yang paling diminati,
                dipercaya untuk menyempurnakan momen istimewa agar dapat
                dibagikan dengan indah dan berkesan.
              </p>
            </div>
          </div>

          <div className="hidden md:block flex-col gap-6 lg:mt-16">
            <div className="flex justify-end">
              <div className="relative w-1/2 aspect-3/2">
                <Image
                  src="/images/landing/hero5.webp"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center md:mt-24">
              <div className="relative w-3/5 aspect-4/3 z-20">
                <Image
                  src="/images/landing/hero5.webp"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex justify-end md:mt-4">
              <div className="relative w-1/3 aspect-2/3">
                <Image
                  src="/images/landing/hero5.webp"
                  alt="Hero"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
