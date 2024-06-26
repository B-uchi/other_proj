import Homepage from "./Homepage";
import HeroSection from "../../components/estate/HeroSection";
import Trust from "../../components/estate/Trust";
import Stats from "../../components/estate/Stats";
import Risk from "../../components/estate/Risk";
import WhyVantage from "../../components/estate/WhyVantage";
import Testimonials from "../../components/estate/Testimonials";
import Question from "../../components/estate/Question";
import Footer from "../../components/estate/Footer";
import Listings from "../../components/estate/Listings";
import CrowdFunding from "../../components/estate/CrowdFunding";

function MainHome() {
  return (
    <div className="w-full">
      <Homepage />
      <Trust />
      <HeroSection />
      <div className="w-full text-center p-5 mt-5 flex-col flex items-center">
        <h1 className="font-lato text-2xl">Start Your Portfolio Today</h1>
        <small>Check out our property listings</small>
        <div className="md:w-[70%] w-[90%]">
          <Listings />
        </div>
      </div>
      <Stats />
      <WhyVantage />
      <Testimonials />
      <CrowdFunding/>
      <Question />
      <Footer />
      <div className="fixed bottom-0 w-full">
        <Risk />
      </div>
    </div>
  );
}

export default MainHome;
