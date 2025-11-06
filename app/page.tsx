import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Page() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      {/* zbytek obsahu… */}
      <div className="h-[120vh]" />
    </main>
  );
}
