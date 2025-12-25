import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="h-screen snap-start flex flex-col justify-between p-10 text-white relative">
      <div className="space-y-4 text-center mt-5">
        <h1 className="font-playfair-display text-4xl uppercase">Thank you</h1>
        <p className="font-poppins text-xs font-light">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir di hari bahagia kami.
        </p>
        <p className="font-playfair-display font-semibold text-xl">
          - Firya & Alif -
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-center font-marcellus text-2xl">Kalyavitation</h1>
        <p className="text-center font-poppins text-xs">
          © 2025 Kalyavitation. Digital Wedding Invitation
        </p>
        <div className="flex gap-4">
          <FaInstagram />
          <FaFacebook />
          <FaWhatsapp />
        </div>
      </div>

      <div className="absolute -z-10 inset-0 top-[70vh] bg-linear-to-t from-black/60 via-black/30 to-transparent pointer-events-none"></div>
      <div className="absolute -z-10 inset-0 bottom-[70vh] bg-linear-to-b from-black/60 via-black/30 to-transparent pointer-events-none"></div>
    </footer>
  );
}
