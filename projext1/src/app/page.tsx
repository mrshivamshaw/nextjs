import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/NavBar";

export default function Home() {
  return (
    <main className="flex overflow-x-hidden h-[100vh] w-[100vw] flex-col items-center justify-between bg-black/95 text-white">
      <Navbar/>
      <HeroSection/>
    </main>
  );
}
  