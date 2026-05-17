import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteStore } from '../../../store/siteStore';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X 
} from 'lucide-react';

export default function SocialReels() {
  const reels = useSiteStore((s) => s.socialReels);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedReel, setSelectedReel] = useState<any>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="reels" className="py-20 bg-brand-black overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="font-body text-brand-gold text-[10px] tracking-[0.25em] uppercase mb-2">
              Social Feed
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-brand-cream">
              Recent Reels
            </h2>
          </div>
          
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!showLeftArrow}
              className={`p-2 border border-white/10 rounded-full transition-all duration-300 ${
                showLeftArrow ? 'text-brand-cream hover:bg-white/5 cursor-pointer' : 'text-brand-gray/30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!showRightArrow}
              className={`p-2 border border-white/10 rounded-full transition-all duration-300 ${
                showRightArrow ? 'text-brand-cream hover:bg-white/5 cursor-pointer' : 'text-brand-gray/30 cursor-not-allowed'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel) => (
              <ReelCard 
                key={reel.id} 
                reel={reel} 
                onExpand={() => setSelectedReel(reel)} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedReel && (
          <ReelModal reel={selectedReel} onClose={() => setSelectedReel(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ReelCard({ reel, onExpand }: { reel: any; onExpand: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [showVolume, setShowVolume] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const newMute = !isMuted;
      videoRef.current.muted = newMute;
      setIsMuted(newMute);
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex-none w-[280px] md:w-[320px] aspect-[9/16] relative group snap-start"
    >
      <div className="absolute inset-0 bg-brand-dark overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
        <video
          ref={videoRef}
          src={reel.videoUrl}
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          style={{
            WebkitTouchCallout: 'none',
            WebkitUserDrag: 'none',
          } as any}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />

        {/* Invisible Shield overlay to prevent right-click / drag downloads on the video */}
        <div 
          className="absolute inset-0 bg-transparent z-10"
          onContextMenu={(e) => e.preventDefault()}
          style={{
            WebkitTouchCallout: 'none',
          }}
        />
        
        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
          <div className="px-2.5 py-1 bg-brand-black/40 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[8px] text-brand-gold font-body uppercase tracking-[0.2em]">The Zamora Room</span>
          </div>
          
          <button 
            onClick={(e) => { e.stopPropagation(); onExpand(); }}
            className="p-2 rounded-full bg-brand-black/40 backdrop-blur-md border border-white/10 text-brand-cream hover:bg-brand-gold hover:text-brand-black transition-all"
            title="View Full"
          >
            <Maximize2 size={14} />
          </button>
        </div>

        {/* Bottom Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
          <p className="text-brand-cream text-xs font-body leading-relaxed mb-6 line-clamp-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
            {reel.caption}
          </p>
          
          <div className="flex items-center gap-3">
            {/* Play/Pause */}
            <button 
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-brand-black shadow-lg hover:scale-110 transition-all duration-300"
            >
              {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}
            </button>

            {/* Volume Control */}
            <div 
              className="relative flex items-center gap-2 group/volume"
              onMouseEnter={() => setShowVolume(true)}
              onMouseLeave={() => setShowVolume(false)}
            >
              <button 
                onClick={toggleMute}
                className="p-3 rounded-full bg-brand-black/40 backdrop-blur-md border border-white/10 text-brand-cream hover:bg-white/10 transition-all"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              
              <AnimatePresence>
                {showVolume && (
                  <motion.div
                    initial={{ opacity: 0, width: 0, x: -10 }}
                    animate={{ opacity: 1, width: 'auto', x: 0 }}
                    exit={{ opacity: 0, width: 0, x: -10 }}
                    className="overflow-hidden bg-brand-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-2 flex items-center"
                  >
                    <input 
                      type="range" 
                      min="0" 
                      max="1" 
                      step="0.01" 
                      value={isMuted ? 0 : volume}
                      onChange={handleVolume}
                      className="w-16 h-1 bg-white/20 appearance-none cursor-pointer accent-brand-gold"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ReelModal({ reel, onClose }: { reel: any; onClose: () => void }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'auto'; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-black/95 backdrop-blur-xl p-4 md:p-8"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 z-50 p-3 rounded-full bg-white/5 text-brand-cream hover:bg-brand-gold hover:text-brand-black transition-all"
      >
        <X size={24} />
      </button>

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="relative h-full max-h-[90vh] aspect-[9/16] bg-brand-dark rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={reel.videoUrl}
          autoPlay
          loop
          muted={isMuted}
          className="w-full h-full object-cover pointer-events-none"
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          style={{
            WebkitTouchCallout: 'none',
            WebkitUserDrag: 'none',
          } as any}
        />

        {/* Invisible Shield overlay to prevent right-click / drag downloads on the video */}
        <div 
          className="absolute inset-0 w-full h-full bg-transparent z-10"
          onContextMenu={(e) => e.preventDefault()}
          style={{
            WebkitTouchCallout: 'none',
          } as any}
        />

        {/* Modal Controls */}
        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20">
          <p className="text-brand-cream text-lg font-display-serif italic mb-6">
            {reel.caption}
          </p>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                if (videoRef.current?.paused) {
                  videoRef.current.play();
                  setIsPlaying(true);
                } else {
                  videoRef.current?.pause();
                  setIsPlaying(false);
                }
              }}
              className="w-14 h-14 rounded-full bg-brand-gold flex items-center justify-center text-brand-black shadow-xl"
            >
              {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
            </button>

            <button 
              onClick={() => setIsMuted(!isMuted)}
              className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-brand-cream"
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
            
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[10px] text-brand-gold font-body uppercase tracking-[0.3em]">The Zamora Room</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
