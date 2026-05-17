import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Volume1 } from 'lucide-react';
import { useSiteStore } from '../../../store/siteStore';

export default function VideoReel() {
  const { title, description, videoUrl } = useSiteStore((s) => s.videoReel);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted && videoRef.current.volume === 0) {
        videoRef.current.volume = volume;
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
      setIsMuted(newVolume === 0);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-brand-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <p className="font-body text-brand-gold text-[10px] tracking-[0.25em] uppercase mb-2">
              Atmosphere
            </p>
            <h2 className="font-display-serif italic text-3xl md:text-4xl text-brand-cream mb-6 leading-tight whitespace-pre-line">
              {title}
            </h2>
            <p className="font-body text-brand-gray text-sm md:text-base leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-brand-gold/50" />
              <span className="font-body text-[10px] text-brand-gray/60 uppercase tracking-widest">
                Our Process in Motion
              </span>
            </div>
          </motion.div>

          {/* Video Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 relative group"
          >
            <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-brand-dark border border-white/5">
              <video
                ref={videoRef}
                src={videoUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
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

              {/* Volume Controls Container */}
              <div
                className="absolute bottom-4 right-4 z-20 flex items-center gap-3"
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
              >
                <AnimatePresence>
                  {showVolumeSlider && (
                    <motion.div
                      initial={{ opacity: 0, width: 0, x: 10 }}
                      animate={{ opacity: 1, width: 'auto', x: 0 }}
                      exit={{ opacity: 0, width: 0, x: 10 }}
                      className="flex items-center bg-brand-black/40 backdrop-blur-md border border-white/10 px-3 py-2 h-[38px]"
                    >
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-20 h-1 bg-white/20 appearance-none cursor-pointer accent-brand-gold"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={toggleMute}
                  className="p-2.5 bg-brand-black/40 backdrop-blur-md border border-white/10 text-brand-cream hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted || volume === 0 ? <VolumeX size={16} /> : volume < 0.5 ? <Volume1 size={16} /> : <Volume2 size={16} />}
                </button>
              </div>

              {/* Minimalist "Click for Sound" hint */}
              {isMuted && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="px-4 py-2 bg-brand-black/20 backdrop-blur-sm border border-white/5 text-[9px] text-brand-cream uppercase tracking-[0.3em]">
                    Click for sound
                  </div>
                </div>
              )}
            </div>

            {/* Minimalist overlay decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-brand-gold/20 hidden md:block" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-brand-gold/20 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
