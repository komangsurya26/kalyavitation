export function Background() {
  const videoIdYoutube = "36s3J_eSy1k";
  return (
    // <>
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     playsInline
    //     preload="auto"
    //     className="fixed top-0 right-0 h-screen w-full lg:w-1/3 object-cover -z-10"
    //   >
    //     <source
    //       src="https://res.cloudinary.com/dpij7jkkd/video/upload/v1763908785/videoplayback_pua8re.mp4"
    //       type="video/mp4"
    //     />
    //   </video>
    //   <div className="fixed top-0 right-0 h-screen w-full lg:w-1/3 bg-black/40 -z-10" />
    // </>
    <>
      <iframe
        src={`https://www.youtube.com/embed/${videoIdYoutube}?autoplay=1&mute=1&loop=1&playlist=${videoIdYoutube}&controls=0&modestbranding=1&rel=0&playsinline=1`}
        title="Wedding Video"
        loading="lazy"
        allow="autoplay; fullscreen"
        className="fixed w-[160vh] h-screen object-cover pointer-events-none -z-10"
        style={{
          transform: "scale(1.5)",
        }}
      />
      <div className="fixed top-0 right-0 h-screen w-full lg:w-1/3 bg-black/40 -z-10" />
    </>
  );
}
