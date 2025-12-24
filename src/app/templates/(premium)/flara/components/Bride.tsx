import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export function Bride() {
  return (
    <div className="relative h-screen">
      <Image
        src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766574479/foto_dummy/lume2_lji1to.webp"
        alt="Bride"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 top-[80vh] bg-linear-to-t from-black/70 via-black/50 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 px-10 py-14 flex items-end">
        <div className="flex flex-col gap-3 w-full">
          <h1 className="text-white text-lg font-cormorant">The Bride</h1>
          <h1 className="text-white text-3xl font-cormorant">
            Ni Putu Ayu Dewi
          </h1>
          <div className="h-px w-full bg-white"></div>
          <h1 className="text-white text-sm capitalize font-marcellus">
            putri pertama dari
          </h1>
          <h1 className="text-white text-sm font-marcellus">
            Bapak Nama Bapak & <br /> Ibu Nama Ibu
          </h1>
          <a
            href="https://wa.me/628123456789"
            className="flex items-center gap-2 text-white rounded-full bg-white/30 w-fit py-1 px-3"
          >
            <FaInstagram className="w-3 h-3" />
            <span className="text-sm font-light font-marcellus">Username</span>
          </a>
        </div>
      </div>
    </div>
  );
}
