import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export function Groom() {
  return (
    <div className="relative h-screen">
      <Image
        src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766570962/foto_dummy/IMG_6805-2_g9diyf.webp"
        alt="Groom"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 top-[70vh] bg-linear-to-t from-black/70 via-black/50 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bottom-[70vh] bg-linear-to-b from-black/70 via-black/50 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 px-10 py-14 flex items-end">
        <div className="flex flex-col gap-3 w-full">
          <h1 className="text-white text-3xl font-pinyon-script">The Groom</h1>
          <h1 className="text-white text-3xl font-playfair-display">
            I Komang Agus Adi
          </h1>
          <div className="h-px w-1/4 bg-white"></div>
          <h1 className="text-white text-lg capitalize font-playfair-display tracking-wider">
            putra kedua dari
          </h1>
          <h1 className="text-white text-sm font-poppins font-extralight">
            Bapak Nama Bapak & <br /> Ibu Nama Ibu
          </h1>
          <a
            href="https://wa.me/628123456789"
            className="flex items-center gap-2 text-white"
          >
            <FaInstagram className="w-3 h-3" />
            <span className="text-sm font-light font-poppins">Username</span>
          </a>
        </div>
      </div>
    </div>
  );
}
