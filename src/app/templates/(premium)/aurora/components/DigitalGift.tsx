export function DigitalGift() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 2 }).map((_, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between items-center">
            <div className="">
              <p className="uppercase font-poppins font-semibold">BCA</p>
              <p className="font-poppins font-light text-sm">123456789</p>
              <p className="capitalize font-poppins font-light text-sm">
                nama penerima
              </p>
            </div>
            <button className="uppercase font-poppins font-bold text-sm py-2 px-4 border hover:bg-white hover:text-black">
              Salin
            </button>
          </div>
          <div className="h-px w-full bg-white" />
        </div>
      ))}
      <div className="space-y-6 bg-black/50 p-4">
        <div className="flex flex-col gap-6">
          <input
            placeholder="Tuliskan nama anda"
            type="text"
            className="p-2 border-b placeholder:text-sm focus:outline-none"
          />
          <input
            placeholder="Nominal"
            type="text"
            className="p-2 border-b placeholder:text-sm focus:outline-none"
          />
          <select name="" defaultValue={"BCA"} className="p-2 border-b">
            <option value="BCA">BCA</option>
          </select>
        </div>
        <div className="flex">
          <a
            className="uppercase font-poppins text-center font-bold text-sm py-2 px-4 border hover:bg-white hover:text-black w-full"
            href="https://wa.me/628123456789"
          >
            Konfirmasi via whatsapp
          </a>
        </div>
      </div>
    </div>
  );
}
