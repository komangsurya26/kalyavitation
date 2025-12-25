export function Countdown() {
  return (
    <div className="h-screen px-10 py-24 text-white flex items-center justify-center flex-col space-y-5 snap-start">
      <h1 className="text-4xl font-playfair-display uppercase">
        Save the date
      </h1>
      <div className="grid grid-cols-4 gap-5 px-14">
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
        className="px-4 py-2 border hover:bg-white hover:text-black text-white"
      >
        <span className="font-poppins text-sm uppercase">Simpan Tanggal</span>
      </a>
    </div>
  );
}
