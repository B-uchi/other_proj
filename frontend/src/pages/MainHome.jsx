import Homepage from "./Homepage";
import HeroSection from "../components/HeroSection";
import Trust from "../components/Trust";
import Stats from "../components/Stats";
import Risk from "../components/Risk";
import Why from "../components/Why";
import WhyVantage from "../components/WhyVantage";
import Testimonials from "../components/Testimonials";
import Question from "../components/Question";
import Footer from "../components/Footer";
import Listings from "../components/Listings";

function MainHome() {
  return (
    <div className="w-full">
      <Homepage />
      <Trust />
      <HeroSection />
      <Listings/>
      <Stats />
      <Why />
      <WhyVantage/>
      <Testimonials/>
      <Question/>
      <Footer/>
      <div className="fixed bottom-0 w-full">
        <Risk />
      </div>
    </div>
  );
}

export default MainHome;
