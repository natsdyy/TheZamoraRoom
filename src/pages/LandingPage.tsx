import Hero from './landingpage/sections/Hero';
import About from './landingpage/sections/About';
import VideoReel from './landingpage/sections/VideoReel';
import CapturedMoments from './landingpage/sections/CapturedMoments';
import Merchandise from './landingpage/sections/Merchandise';
import Stores from './landingpage/sections/Stores';
import Footer from './landingpage/sections/Footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <VideoReel />
      <CapturedMoments />
      <Merchandise />
      <Stores />
      <Footer />
    </div>
  );
}
