export function Event() {
  return (
    <div className="px-10 py-24 text-white">
      <h1 className="uppercase font-cormorant text-xl text-center mb-5">
        Save our date
      </h1>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-cormorant text-3xl uppercase">PEMBERKATAN</h1>
          <div className="flex flex-col gap-2 text-center">
            <span className="uppercase font-marcellus font-light">
              Sabtu, 22 Desember 2025
            </span>
            <span className="font-poppins font-light text-sm uppercase">
              10:00 WIB
            </span>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <span className="font-marcellus font-light uppercase">
              Vue Palace Hotel
            </span>
            <span className="font-poppins font-light text-sm">
              Jl. Otto Iskandar Dinata No.3, Babakan Ciamis, Kec. Sumur Bandung,
              Kota Bandung
            </span>
          </div>
          <a
            href=""
            className="px-4 py-1 bg-white/20 rounded-full hover:bg-white hover:text-black text-white"
          >
            <span className="font-marcellus font-light text-sm">
              Google Maps
            </span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="font-cormorant text-3xl uppercase">Resepsi</h1>
          <div className="flex flex-col gap-2 text-center">
            <span className="uppercase font-marcellus font-light">
              Minggu, 23 Desember 2025
            </span>
            <span className="font-poppins font-light text-sm uppercase">
              12:00 WIB
            </span>
          </div>
          <div className="flex flex-col gap-2 text-center">
            <span className="font-marcellus font-light uppercase">
              Vue Palace Hotel
            </span>
            <span className="font-poppins font-light text-sm">
              Jl. Otto Iskandar Dinata No.3, Babakan Ciamis, Kec. Sumur Bandung,
              Kota Bandung
            </span>
          </div>
          <a
            href=""
            className="px-4 py-1 bg-white/20 rounded-full hover:bg-white hover:text-black text-white"
          >
            <span className="font-marcellus font-light text-sm">
              Google Maps
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
