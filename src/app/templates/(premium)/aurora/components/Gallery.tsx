export function Gallery() {
  const videoIdYoutube = "36s3J_eSy1k";

  return (
    <div className="p-10 text-white h-screen">
      <div className="flex flex-col justify-center items-center gap-2 w-full h-full">
        <h2 className="text-4xl font-playfair-display uppercase">Gallery</h2>

        <p className="text-xs font-poppins text-center font-light leading-4 max-w-md">
          &quot;I was created in time to fill your time, and I use all the time
          in my live to love you.&quot;
        </p>

        <h1 className="text-sm">Photo Video by Flara & Kelvin</h1>

        <div className="w-full max-w-full">
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoIdYoutube}?autoplay=1&mute=1&loop=1&playlist=${videoIdYoutube}&modestbranding=1&rel=0&playsinline=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 overflow-y-auto h-[calc(100vh-30rem)] hide-scrollbar">
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
