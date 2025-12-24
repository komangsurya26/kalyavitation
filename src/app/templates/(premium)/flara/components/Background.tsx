export function Background() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="fixed top-0 right-0 h-screen w-full lg:w-1/3 object-cover -z-10"
      >
        <source
          src="https://res.cloudinary.com/dpij7jkkd/video/upload/v1763908785/videoplayback_pua8re.mp4"
          type="video/mp4"
        />
      </video>
      <div className="fixed top-0 right-0 h-screen w-full lg:w-1/3 bg-black/40 -z-10" />
    </>
  );
}
