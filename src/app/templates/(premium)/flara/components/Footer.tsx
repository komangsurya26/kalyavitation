import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="h-screen flex flex-col justify-between py-10 px-5 text-white">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-center font-cormorant text-3xl">
          THANK YOU FOR YOUR ATTENDANCE
        </h1>
        <p className="text-center font-poppins font-extralight text-sm">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir di hari bahagia kami.
        </p>
        <h1 className="text-center font-marcellus text-2xl">Komang & Surya</h1>
        <div className="h-[280px] w-[200px]">
          <img
            src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766574530/foto_dummy/lume6_bazxai.webp"
            alt="komang & surya"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-center font-marcellus text-2xl">Kalyavitation</h1>
        <p className="text-center font-poppins font-extralight text-sm">
          © 2025 Kalyavitation. Digital Wedding Invitation
        </p>
        <div className="flex gap-4">
          <FaInstagram />
          <FaFacebook />
          <FaWhatsapp />
        </div>
      </div>
    </footer>
  );
}
