export function Event() {
  return (
    <div className="px-10 py-24 text-white h-screen snap-start">
      <div className="p-8 bg-black/60 space-y-10">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="space-y-2">
            <h1 className="font-playfair-display text-4xl uppercase">
              Resepsi
            </h1>
            <h2 className="font-marcellus uppercase">SABTU, 06 JANUARI 2025</h2>
            <p className="font-poppins font-extralight text-sm">
              08.00 - 09.00 WIB
            </p>
            <p className="font-poppins text-xs">
              Jl. Aceh No.66, Merdeka, Kec. Sumur Bandung, Kota Bandung, Jawa
              Barat 40113.
            </p>
            <a
              href=""
              className="px-4 py-2 mt-3 border hover:bg-white hover:text-black text-white flex items-center w-fit"
            >
              <span className="font-poppins text-xs uppercase">
                Lihat lokasi
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
