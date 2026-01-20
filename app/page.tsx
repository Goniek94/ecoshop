import Header from "./components/Header";
import HeroHeader from "./components/HeroHeader";
import ProductGrid from "./components/ProductGrid";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      <Header />
      <HeroHeader />
      <ProductGrid />
      <AboutSection />
      <Footer />
    </div>
  );
}
