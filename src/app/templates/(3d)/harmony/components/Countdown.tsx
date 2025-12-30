export function Countdown() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 z-12 snap-start">
      <h1 className="text-white font-great-vibes text-5xl">Save The Date</h1>
      <div className="grid grid-cols-4 gap-5 px-10 text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-sans">08</h1>
          <p className="font-poppins text-sm">Hari</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-sans">08</h1>
          <p className="font-poppins text-sm">Jam</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-sans">08</h1>
          <p className="font-poppins text-sm">Menit</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-sans">08</h1>
          <p className="font-poppins text-sm">Detik</p>
        </div>
      </div>
      <div>
        <a
          href=""
          className="px-4 py-2 bg-white/20 rounded-full hover:bg-white hover:text-black text-white"
        >
          <span className="font-poppins font-semibold text-sm uppercase">
            Simpan Tanggal
          </span>
        </a>
      </div>
    </div>
  );
}
