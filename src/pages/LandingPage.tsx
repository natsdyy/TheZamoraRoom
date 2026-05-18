import Hero from './landingpage/sections/Hero';
import About from './landingpage/sections/About';
import VideoReel from './landingpage/sections/VideoReel';
import SocialReels from './landingpage/sections/SocialReels';
import CapturedMoments from './landingpage/sections/CapturedMoments';
import Merchandise from './landingpage/sections/Merchandise';
import Venues from './landingpage/sections/Venues';
import Footer from './landingpage/sections/Footer';
import AnnouncementModal from '../components/ui/AnnouncementModal';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <AnnouncementModal />
      <Hero />
      <About />
      <VideoReel />
      <SocialReels />
      <CapturedMoments />
      <Merchandise />
      <Venues />
      <Footer />
    </div>
  );
}
