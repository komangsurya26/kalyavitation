export function Countdown() {
  return (
    <div className="px-10 text-white flex flex-col gap-5 items-center">
      <h1 className="uppercase font-cormorant text-3xl">Save the Date</h1>
      <p className="capitalize font-poppins font-light text-sm text-center">
        &quot;Pernikahan adalah ibadah, dan setiap ibadah bermuara pada
        cinta-Nya sebagai tujuan. Sudah sewajarnya setiap upaya meraih cinta-Nya
        dilakukan dengan sukacita.&quot;
      </p>
      <div className="grid grid-cols-4 gap-5 px-10">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-sans">08</h1>
          <p className="font-poppins font-extralight text-sm">Hari</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-sans">08</h1>
          <p className="font-poppins font-extralight text-sm">Jam</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-sans">08</h1>
          <p className="font-poppins font-extralight text-sm">Menit</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-sans">08</h1>
          <p className="font-poppins font-extralight text-sm">Detik</p>
        </div>
      </div>
      <a
        href=""
        className="px-4 py-1 bg-white/20 rounded-full hover:bg-white hover:text-black text-white"
      >
        <span className="font-marcellus font-light text-sm uppercase">
          Simpan Tanggal
        </span>
      </a>
    </div>
  );
}
