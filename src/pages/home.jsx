import HeroSection from "../components/heroSection";
import Navbar from "../components/navBar";
import ResponsiveCardGird from "../components/responsiveCardGird";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />

      <ResponsiveCardGird />
    </div>
  );
}

export default Home;
