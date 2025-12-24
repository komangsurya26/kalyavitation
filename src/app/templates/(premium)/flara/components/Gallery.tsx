export function Gallery() {
  return (
    <div className="p-10 text-white">
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-cormorant uppercase">Gallery</h2>
        <p className="text-sm font-poppins text-center font-extralight leading-4">
          I was created in time to fill your time, and I use all the time in my
          live to love you.
        </p>
        <h1 className="font-marcellus text-sm">
          Photo Video by Flara & Kelvin
        </h1>
        <div className="flex flex-col gap-2">
          <img
            src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766574530/foto_dummy/lume6_bazxai.webp"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <img
                key={index}
                src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766574529/foto_dummy/lume5_ikm9yn.webp"
                alt="Gallery"
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <img
            src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766574532/foto_dummy/lume7_mqybzm.webp"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <img
            src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766574530/foto_dummy/lume6_bazxai.webp"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="flex gap-2 overflow-hidden">
            <img
              src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766574529/foto_dummy/lume4_sfykbp.webp"
              alt="Gallery"
              className="w-1/3 h-[200px] object-cover"
            />
            <img
              src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766574528/foto_dummy/lume3_mvnp2o.webp"
              alt="Gallery"
              className="w-2/3 h-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
