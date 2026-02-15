import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import Socials from "@/components/Socials";
import FAQ from "@/components/FAQ";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c]">
      <Header />
      <Hero />
      <Products />
      <Reviews />
      <Stats />
      <Socials />
      <FAQ />
      <AboutUs />
      <Footer />
    </main>
  );
}
