export function Rsvp() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 px-10 z-12 snap-start">
      <h2 className="text-white font-great-vibes text-5xl">Wedding Wishes</h2>
      <p className="text-white font-poppins text-xs text-center">
        Tell us youre coming and leave a few words—we’d love to hear from you!
      </p>
      <div className="flex flex-col gap-5 text-white w-full">
        <input
          type="text"
          placeholder="Nama"
          className="px-4 py-2 bg-white/20 rounded-md text-white placeholder:text-sm"
        />
        <textarea
          placeholder="Pesan"
          className="px-4 py-2 bg-white/20 rounded-md text-white placeholder:text-sm"
        />
        <select className="px-4 py-2 bg-white/20 rounded-md text-white">
          <option value="hadir">Hadir</option>
          <option value="tidak-hadir">Tidak Hadir</option>
        </select>
        <button className="px-4 py-2 bg-white/20 rounded-md hover:bg-white hover:text-black text-white">
          <span className="font-poppins font-semibold text-sm uppercase">
            Kirim
          </span>
        </button>
      </div>
      <div className="bg-white/20 rounded-md p-4 text-white w-full space-y-2 overflow-y-auto h-[40vh] hide-scrollbar">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <strong className="font-poppins text-xs capitalize">
              Bobby Kertanegara
            </strong>
            <p className="font-poppins text-xs">Selamat untuk pernikahannya!</p>
            <p className="font-poppins text-xs font-light">
              9 days 1 hours ago
            </p>
            <div className="w-full h-px bg-white/20" />
          </div>
        ))}
      </div>
    </div>
  );
}
