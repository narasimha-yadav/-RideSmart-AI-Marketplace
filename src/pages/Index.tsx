import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import EMICalculator from "@/components/EMICalculator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedVehicles />
      <EMICalculator />
      <Footer />
    </div>
  );
};

export default Index;
