export function DigitalGift() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 1 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <div className="flex flex-col leading-6">
              <p className="uppercase font-marcellus">BCA</p>
              <p className="font-poppins font-light text-sm">123456789</p>
              <p className="capitalize font-marcellus font-light text-sm">
                nama penerima
              </p>
            </div>
            <button className="uppercase font-marcellus font-light text-sm py-2 px-4 rounded-full bg-white/20 hover:bg-white hover:text-black">
              Salin
            </button>
          </div>
          <div className="h-px w-full bg-white" />
        </div>
      ))}
      <div className="flex flex-col gap-4">
        <h1 className="uppercase text-center font-marcellus text-xl">
          Konfirmasi kirim kado
        </h1>
        <div className="flex flex-col gap-2">
          <input
            placeholder="Tuliskan nama anda"
            type="text"
            className="p-2 border bg-white/20 placeholder:text-sm"
          />
          <input
            placeholder="Nominal"
            type="text"
            className="p-2 border bg-white/20 placeholder:text-sm"
          />
          <select
            name=""
            defaultValue={"BCA"}
            className="p-2 border bg-white/20"
          >
            <option value="BCA">BCA</option>
          </select>
        </div>
        <div className="flex justify-end">
          <a
            className="uppercase w-fit font-marcellus font-light text-sm py-2 px-4 rounded-full bg-white/20 hover:bg-white hover:text-black"
            href="https://wa.me/628123456789"
          >
            Konfirmasi via whatsapp
          </a>
        </div>
      </div>
    </div>
  );
}
