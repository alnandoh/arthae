import About from "./_components/About";
import Hero from "./_components/Hero";
import Services from "./_components/Services";

export default function Home() {
  return (
    <div className="flex-grow p-8">
      <Hero />
      <hr className="my-8" />
      <Services />
      <hr className="my-8" />
      <About />
    </div>
  );
}
