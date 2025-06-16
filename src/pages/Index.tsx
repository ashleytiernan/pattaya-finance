
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyFilters from "@/components/PropertyFilters";
import WhyThailand from "@/components/WhyThailand";
import FeaturedProperties from "@/components/FeaturedProperties";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="py-10 bg-vestors-lightgray">
        <div className="container mx-auto px-4">
          <PropertyFilters />
        </div>
      </div>
      <WhyThailand />
      <FeaturedProperties />
      <Testimonials />
      <Locations />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
