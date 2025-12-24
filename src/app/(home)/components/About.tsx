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
    </>
  );
}
