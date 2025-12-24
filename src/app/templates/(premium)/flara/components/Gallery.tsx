export function Gallery() {
  return (
    <div className="p-10 text-white">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-bold font-marcellus">Gallery</h2>
        <p className="text-sm font-poppins text-center font-extralight leading-4">
          I was created in time to fill your time, and I use all the time in my
          live to love you.
        </p>
        <h1 className="font-marcellus text-sm">
          Photo Video by Flara & Kelvin
        </h1>
        <div className="flex flex-col gap-2">
          <img
            src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766311735/invitations/2/nfli5v3nyjcfq5xolw0s.webp"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <img
                key={index}
                src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766311735/invitations/2/xcrfybipd0nq6zqsebnt.webp"
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <img
            src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766311737/invitations/2/i4pudadubzxiomtovtlf.webp"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766311737/invitations/2/i4pudadubzxiomtovtlf.webp"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="flex gap-2 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766311735/invitations/2/xcrfybipd0nq6zqsebnt.webp"
              alt="Gallery"
              className="w-1/3 h-[200px] object-cover"
            />
            <img
              src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766311735/invitations/2/nfli5v3nyjcfq5xolw0s.webp"
              alt="Gallery"
              className="w-2/3 h-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
