import Hero from './landinpage/sections/Hero';
import About from './landinpage/sections/About';
import VideoReel from './landinpage/sections/VideoReel';
import CapturedMoments from './landinpage/sections/CapturedMoments';
import Merchandise from './landinpage/sections/Merchandise';
import Stores from './landinpage/sections/Stores';
import Footer from './landinpage/sections/Footer';

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
