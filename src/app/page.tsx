import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturesBento from "../components/FeaturesBento";
import MenuSplit from "../components/MenuSplit";
import VRewardsSection from "../components/VRewardsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturesBento />
      <MenuSplit />
      <VRewardsSection />
      <Footer />
    </main>
  );
}
