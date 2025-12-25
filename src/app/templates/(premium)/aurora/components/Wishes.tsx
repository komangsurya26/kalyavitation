import { BadgeCheck, BadgeX } from "lucide-react";

export function Wishes() {
  return (
    <div className="p-10 flex flex-col gap-2 text-white h-screen snap-start">
      <h2 className="font-playfair-display font-extralight text-4xl">Wishes</h2>
      <p className="font-poppins font-extralight text-xs">
        Terima kasih telah memberikan ucapan selamat, saran pernikahan terbaik,
        hal-hal lucu, atau apa pun itu—semuanya istimewa bagi kami!
      </p>
      <div className="w-full space-y-2">
        <div className="h-px w-full bg-white/20" />
        <div className="gap-2 flex flex-col overflow-y-scroll h-[600px] hide-scrollbar">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="p-2 bg-black/50 space-y-2">
              <h1 className="font-poppins text-sm flex items-center gap-1">
                <span>Komang</span>
                <BadgeCheck color="green" size={16} />
              </h1>
              <p className="font-poppins text-xs font-light">
                Selamat menempuh perjalanan hidup baru
              </p>
              <p className="text-xs font-light">1 tahun lalu</p>
            </div>
          ))}
          <div className="p-2 bg-black/50 space-y-2">
            <h1 className="font-poppins text-sm flex items-center gap-1">
              <span>Komang</span>
              <BadgeX color="red" size={16} />
            </h1>
            <p className="font-poppins text-xs font-light">
              Selamat menempuh perjalanan hidup baru Selamat menempuh perjalanan
              hidup baru Selamat menempuh perjalanan hidup baru
            </p>
            <p className="text-xs font-light">1 tahun lalu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
