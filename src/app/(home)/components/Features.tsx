import Image from "next/image";
import Link from "next/link";

export function Features() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-[50vh] lg:h-[90vh] relative">
          <Image
            src="/hero1.webp"
            alt="Hero"
            width={1333}
            height={1333}
            priority
            className="object-cover object-center w-full h-full"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-2xl lg:text-4xl font-marcellus font-semibold text-white">
              Dashboard & Custom <br /> Invitation
            </h1>

            <Link
              href="/dashboard"
              className="px-5 py-0.5 hover:bg-white font-light hover:text-black text-white rounded-full border border-white"
            >
              Detail
            </Link>
          </div>
        </div>

        <div className="h-[50vh] lg:h-[90vh] relative">
          <Image
            src="/feature/frame.webp"
            alt="Hero"
            width={1333}
            height={1333}
            priority
            className="object-cover object-center w-full h-full"
          />

          <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-2xl lg:text-4xl font-marcellus font-semibold text-white">
              Frame Invitation
            </h1>

            <div className="px-5 py-0.5 bg-white font-light text-black rounded-full">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50vh] lg:h-[90vh] relative">
        <Image
          src="/feature/dashboard.webp"
          alt="Hero"
          width={1333}
          height={1333}
          priority
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-2xl lg:text-4xl font-marcellus font-semibold text-white">
            Buku Tamu Digital & <br />
            QR Code
          </h1>
          <div className="px-5 py-0.5 bg-white font-light text-black rounded-full">
            Coming Soon
          </div>
        </div>
      </div>
    </>
  );
}
