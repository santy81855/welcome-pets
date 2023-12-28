import Hero from "@/components/hero/hero";
import Navbar from "../components/navbar/navbar";
import Process from "@/components/process/process";
import About from "@/components/about/about";

export default function Home() {
    return (
      <div>
        <Navbar />
        <Hero/>
        <Process/>
        <About/>
      </div>
    );
}
