import Hero from "@/components/Hero";
import CategoriesGrid from "@/components/CategoriesGrid";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CategoriesGrid />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Index;
