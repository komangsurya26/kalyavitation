export function Rsvp() {
  return (
    <div className="p-10 text-white space-y-5 h-screen snap-start">
      <h2 className="text-4xl font-playfair-display">RSVP</h2>
      <p className="font-poppins font-extralight text-xs">
        Bagi tamu undangan yang akan hadir di acara pernikahan kami silahkan
        kirimkan konfirmasi kehadiran dengan mengisi form berikut:
      </p>
      <form action="" className="bg-black/50 p-5 space-y-5">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="font-poppins font-extralight text-sm"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-white/20 border p-1"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-poppins font-extralight text-sm">
            Konfirmasi Kehadiran
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="p-2 border font-poppins text-sm hover:bg-white/20"
            >
              Hadir
            </button>
            <button
              type="button"
              className="p-2 border font-poppins text-sm hover:bg-white/20"
            >
              Tidak Hadir
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="message"
            className="font-poppins font-extralight text-sm"
          >
            Pesan
          </label>
          <textarea name="message" className="bg-white/20 border p-1 h-24" />
        </div>
        <button
          type="button"
          className="py-2 border w-full uppercase font-poppins tracking-wider hover:bg-white/20"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
