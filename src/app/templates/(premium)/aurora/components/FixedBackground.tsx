export function FixedBackground({
  children,
  bgImage,
}: {
  children: React.ReactNode;
  bgImage: string;
}) {
  return (
    <section className="relative">
      <div className="sticky top-0 h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${bgImage}')`,
          }}
        />
      </div>

      <div className="relative z-10 -mt-[100vh]">{children}</div>
    </section>
  );
}
