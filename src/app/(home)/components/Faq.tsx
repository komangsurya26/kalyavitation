import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/faq";

export function Faq() {
  return (
    <div className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div className="space-y-6">
          <div className="inline-block rounded-full border border-neutral-200 px-4 py-1.5 text-sm font-medium">
            Pusat Bantuan
          </div>
          <h2 className="text-3xl md:text-5xl font-marcellus leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Dapatkan jawaban cepat untuk pertanyaan Anda tentang layanan, proses
            pembuatan, dan fitur undangan digital kami. Kami telah merangkum
            pertanyaan yang paling sering ditanyakan oleh pengguna.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/6287782057548"
              className="px-6 py-3 bg-neutral-800 text-white font-medium"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        <Accordion type="single" defaultValue="item-1" className="w-full">
          {FAQ.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="text-start">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
