import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Clock } from 'lucide-react';
import ProtectedImage from './ProtectedImage';
import Button from './Button';
import modalImage from '../../assets/Captured Moments/modal.png';
import modal1Image from '../../assets/Captured Moments/modal1.png';
import modal2Image from '../../assets/Captured Moments/modal2.png';

export default function AnnouncementModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentModalImage, setCurrentModalImage] = useState(modalImage);

  useEffect(() => {
    // Check if dismissed in this session
    const isDismissed = sessionStorage.getItem('zamora-room-announcement-dismissed');
    if (isDismissed) {
      return;
    }

    const checkTime = () => {
      // If the user has dismissed it during this tab session, do not show it
      const currentlyDismissed = sessionStorage.getItem('zamora-room-announcement-dismissed');
      if (currentlyDismissed) {
        setIsVisible(false);
        return;
      }

      const now = new Date();
      
      // Determine time and day in Manila Standard Time (PST, UTC+8)
      let manilaHour = now.getHours();
      let manilaDay = now.getDay();
      
      try {
        const manilaString = now.toLocaleString('en-US', { timeZone: 'Asia/Manila' });
        const manilaDate = new Date(manilaString);
        manilaHour = manilaDate.getHours();
        manilaDay = manilaDate.getDay();
      } catch (e) {
        // Fallback: manually shift to UTC+8
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const manilaDate = new Date(utc + 3600000 * 8);
        manilaHour = manilaDate.getHours();
        manilaDay = manilaDate.getDay();
      }

      // Open hours: 8:00 AM (8) to 10:00 PM (22)
      // The modal only shows during these open hours (from 8am to 9:59:59pm)
      const open = manilaHour >= 8 && manilaHour < 22;

      if (open) {
        setIsVisible(true);
        // Set correct image based on day:
        // Monday (1): modal.png
        // Tuesday (2), Thursday (4), Saturday (6): modal1.png
        // Wednesday (3), Friday (5), Sunday (0): modal2.png
        if (manilaDay === 1) {
          setCurrentModalImage(modalImage);
        } else if (manilaDay === 2 || manilaDay === 4 || manilaDay === 6) {
          setCurrentModalImage(modal1Image);
        } else {
          setCurrentModalImage(modal2Image);
        }
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    checkTime();

    // Set interval to check open status dynamically
    const interval = setInterval(checkTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('zamora-room-announcement-dismissed', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-black/85 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-2xl bg-[#0e0c08] border border-brand-gold/25 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(200,150,42,0.2)] z-10 flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-2 bg-[#1c1810]/90 hover:bg-brand-gold hover:text-brand-black text-brand-cream rounded-full transition-all duration-300 z-30 cursor-pointer shadow-md hover:scale-105"
              aria-label="Close Announcement"
            >
              <X size={16} />
            </button>

            {/* Image Section: Displays full uncropped illustration at maximum view width */}
            <div className="w-full relative overflow-hidden flex items-center justify-center bg-brand-black">
              <ProtectedImage
                src={currentModalImage}
                alt="We Are Now Open - The Zamora Room"
                className="w-full h-auto object-contain max-h-[75vh]"
              />
              {/* Soft vignette at bottom for smooth blending with text container */}
              <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />
            </div>

            {/* Bottom Content Bar: Minimalist Info & CTA */}
            <div className="w-full p-5 md:p-6 bg-gradient-to-b from-[#0e0c08] to-[#070604] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-brand-gold/15">
              {/* Caption & Hours */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl text-brand-cream leading-none uppercase tracking-wider">
                    We are now open!
                  </h2>
                </div>
                <p className="font-body text-brand-gray text-[10px] md:text-xs tracking-wider uppercase font-semibold flex items-center gap-1.5">
                  <Clock size={11} className="text-brand-gold" />
                  <span>Store Hours: 8:00 AM – 10:00 PM Daily</span>
                </p>
              </div>

              {/* Enter CTA */}
              <div className="shrink-0">
                <Button
                  onClick={handleClose}
                  variant="primary"
                  className="w-full sm:w-auto px-8 py-2.5 text-[9px] tracking-[0.3em] font-bold"
                >
                  Enter Lab
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
