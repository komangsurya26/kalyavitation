import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TEMPLATES } from "@/lib/templates";
import Image from "next/image";
import Link from "next/link";

export function Products() {
  return (
    <div className="py-10 px-4 md:px-10 border-t border-neutral-400">
      <Tabs defaultValue="premium" className="flex items-center justify-center">
        <TabsList className="rounded-full md:w-sm">
          <TabsTrigger
            value="premium"
            className="text-sm md:text-base rounded-full"
          >
            Premium
          </TabsTrigger>
          <TabsTrigger
            value="adat"
            className="text-sm md:text-base rounded-full"
          >
            Adat
          </TabsTrigger>
          <TabsTrigger
            value="klasik"
            className="text-sm md:text-base rounded-full"
          >
            Klasik
          </TabsTrigger>
          <TabsTrigger
            value="modern"
            className="text-sm md:text-base rounded-full"
          >
            Modern
          </TabsTrigger>
        </TabsList>

        {["premium", "adat", "klasik", "modern"].map((category) => (
          <TabsContent key={category} value={category} className="w-full mt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TEMPLATES[category as keyof typeof TEMPLATES]?.map((product) => (
                <div key={product.id} className="flex flex-col gap-2">
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    {product.cover ? (
                      <Image
                        src={product.cover}
                        alt={product.name}
                        width={1333}
                        height={1333}
                        priority
                        className="object-cover object-center w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
                        No Image
                      </div>
                    )}
                  </div>
                  <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-poppins">
                    {product.name}
                  </h1>
                  <p className="text-xs md:text-sm lg:text-base space-x-2">
                    <span className="text-red-500">{product.price}</span>
                    <span className="line-through">
                      {product.originalPrice}
                    </span>
                  </p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <Link
                      href={`/templates/${product.slug}`}
                      className="text-xs sm:text-sm font-medium h-7 sm:h-8 flex items-center justify-center border border-neutral-800 rounded-full"
                    >
                      Review
                    </Link>
                    <a
                      href="https://wa.me/6287782057548"
                      className="text-xs sm:text-sm font-medium h-7 sm:h-8 flex items-center justify-center rounded-full bg-neutral-800 text-white"
                    >
                      Gunakan
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
