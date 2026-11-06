import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Mission from "../components/Mission";
import Waitlist from "../components/Waitlist";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white overflow-hidden">
        <Hero />
        <Marquee />
        <Services />
        <WhyChooseUs />
        <Mission />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}