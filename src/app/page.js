import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Process from "@/components/process/process";
import About from "@/components/about/about";
import FeaturedPets from "@/components/featured/featuredPets";

export default function Home() {
    // make the first div background color red with bootstrap classes
    return (
        <>
            <Navbar />
            <Hero />
            <Process />
            <About />
            <FeaturedPets/>
        </>
    )
}
