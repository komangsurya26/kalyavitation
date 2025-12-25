export function Event() {
  return (
    <div className="px-10 py-24 text-white">
      <h1 className="uppercase font-cormorant text-xl text-center mb-5">
        Save our date
      </h1>
      <div className="space-y-14">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="space-y-4 text-center">
            <h1 className="font-cormorant text-3xl uppercase">PEMBERKATAN</h1>
            <div className="space-y-1">
              <p className="uppercase font-marcellus font-light">
                Sabtu, 22 Desember 2025
              </p>
              <p className="font-poppins font-light text-sm uppercase">
                10:00 WITA - 12:00 WITA
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-poppins font-light text-sm">
                Jl. Tua Buduk No.12, Kec. Mengwi, Kab. Badung, Bali
              </p>
              <div className="flex justify-center">
                <a
                  href=""
                  className="px-4 py-1 bg-white/20 rounded-full hover:bg-white hover:text-black text-white"
                >
                  <span className="font-marcellus font-light text-sm uppercase">
                    Google Maps
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
