
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyThailand from "@/components/WhyThailand";
import FeaturedProperties from "@/components/FeaturedProperties";
import Locations from "@/components/Locations";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyThailand />
      <FeaturedProperties />
      <Locations />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
