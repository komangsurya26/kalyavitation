import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="h-screen flex flex-col justify-between py-10 px-5 text-white">
      <div className="space-y-2 text-center">
        <h1 className="font-cormorant text-3xl">
          THANK YOU FOR YOUR ATTENDANCE
        </h1>
        <p className="font-poppins font-light text-xs">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila
          Bapak/Ibu/Saudara/i berkenan hadir di hari bahagia kami.
        </p>
        <h1 className="font-cormorant uppercase text-2xl">Komang & Surya</h1>
        <div className="flex justify-center">
          <Image
            src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766574530/foto_dummy/lume6_bazxai.webp"
            alt="komang & surya"
            width={200}
            height={280}
            className="object-cover"
          />
        </div>
      </div>
      <div className="space-y-2 text-center">
        <h1 className="text-center font-marcellus text-2xl">Kalyavitation</h1>
        <p className="text-center font-poppins font-light text-xs">
          © 2025 Kalyavitation. Digital Wedding Invitation
        </p>
        <div className="flex gap-4 items-center justify-center">
          <FaInstagram />
          <FaFacebook />
          <FaWhatsapp />
        </div>
      </div>
    </footer>
  );
}
