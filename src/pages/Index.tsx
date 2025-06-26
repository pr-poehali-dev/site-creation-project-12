import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import Craftsmanship from "@/components/Craftsmanship";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedCollections />
      <Craftsmanship />
      <Footer />
    </div>
  );
};

export default Index;
