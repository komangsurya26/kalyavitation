import { BadgeCheck, BadgeX } from "lucide-react";

export function Rsvp() {
  return (
    <div className="p-10 text-white">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-cormorant uppercase">RSVP & DOA</h2>
        <p className="text-sm font-poppins text-center font-extralight leading-4">
          Bagi tamu undangan yang akan hadir di acara pernikahan kami silahkan
          kirimkan konfirmasi kehadiran dengan mengisi form berikut:
        </p>
        <form action="" className="w-full">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-sm">Nama</label>
              <input type="text" className="p-2 bg-white/20" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-sm">
                Konfirmasi Kehadiran
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="p-2 border font-poppins text-sm"
                >
                  Hadir
                </button>
                <button
                  type="button"
                  className="p-2 border font-poppins text-sm"
                >
                  Tidak Hadir
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-poppins text-sm">Doa & Ucapan</label>
              <textarea className="p-2 bg-white/20" />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="p-2 w-24 border font-poppins text-sm"
              >
                Kirim
              </button>
            </div>
          </div>
        </form>
        <div className="w-full space-y-2">
          <div className="h-px w-full bg-white/20" />
          <div className="gap-2 flex flex-col overflow-y-scroll h-[300px] hide-scrollbar">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="p-2 bg-white/20 space-y-2">
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
            <div className="p-2 bg-white/20 space-y-2">
              <h1 className="font-poppins text-sm flex items-center gap-1">
                <span>Komang</span>
                <BadgeX color="red" size={16} />
              </h1>
              <p className="font-poppins text-xs font-light">
                Selamat menempuh perjalanan hidup baru Selamat menempuh
                perjalanan hidup baru Selamat menempuh perjalanan hidup baru
              </p>
              <p className="text-xs font-light">1 tahun lalu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
