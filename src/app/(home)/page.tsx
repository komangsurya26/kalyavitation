import { Faq } from "./components/Faq";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Features } from "./components/Features";

export default function HomePage() {
  return (
    <main className="bg-zinc-50">
      <Hero />
      <About />
      <Products />
      <Features />
      <Faq />
    </main>
  );
}
