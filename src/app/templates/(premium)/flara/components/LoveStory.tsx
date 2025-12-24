import Image from "next/image";

export function LoveStory() {
  return (
    <div className="px-10 py-24 text-white">
      <div className="flex flex-col gap-5">
        <div className="w-[150px] h-[150px] relative">
          <Image
            src="https://res.cloudinary.com/dpij7jkkd/image/upload/v1766311735/invitations/2/e2cslgvwnhsnsl6g5tt5.webp"
            alt=""
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-4xl font-marcellus">Journey of Love</h1>
        <h1 className="text-2xl font-marcellus">Komang & Kalya</h1>
        <div className="flex flex-col gap-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index}>
              <h1 className="text-lg font-marcellus">22 Desember 2025</h1>
              <p className="font-poppins font-light text-sm">
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
