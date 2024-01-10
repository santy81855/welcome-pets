import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Process from "@/components/process/process";
import About from "@/components/about/about";
import FeaturedPets from "@/components/featured/featuredPets";
import Testimonials from "@/components/testimonials/testimonials";
import Partners from "@/components/partners/partners";
import CTA from "@/components/cta/callToAction";
import Footer from "@/components/footer/footer";

export default function Home() {
    // make the first div background color red with bootstrap classes
    return (
        <>
            <Navbar />
            <Hero />
            <Process />
            <About />
            <FeaturedPets />
            <Testimonials />
            <Partners />
            <CTA />
            <Footer />
        </>
    )
}
