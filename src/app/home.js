import Hero from "@/components/hero";
import Navbar from "../components/navbar";

export default function Home() {
    // make the first div background color red with bootstrap classes
    return (
      <div>
        <Navbar />
        <Hero/>
      </div>
    );
}
