export function LoveStory() {
  return (
    <div className="px-10 py-24 text-white h-screen flex items-center snap-start">
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl font-playfair-display uppercase">Our story</h1>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h1 className="font-marcellus uppercase">22 Desember 2025</h1>
              <p className="font-poppins text-xs">
                Awal bertemu, Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Iusto quod quas perferendis aperiam porro quam
                sint minima alias eaque veritatis dignissimos recusandae optio
                delectus sequi architecto a animi, qui exercitationem!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
