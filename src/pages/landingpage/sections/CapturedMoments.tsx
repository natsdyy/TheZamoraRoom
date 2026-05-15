import { motion } from 'framer-motion';
import { useSiteStore } from '../../../store/siteStore';

const testimonialsData = [
  {
    id: 1,
    name: "Mhecailla Simangca",
    date: "Saturday",
    content: "Just went there this week and I absolutely love their food. They also have relaxing and cozy ambiance. Babalikbalikan ko to promise!",
    initials: "M",
    url: "https://www.facebook.com/cailla.simangca/posts/pfbid0PAjV6R5AUnQmmaj2jJSroTBdPpMokxiFH7eeYt5dB8Vg8Gq2ccFCTLrZaq1nySZcl"
  },
  {
    id: 2,
    name: "Cailla's Craft",
    date: "Saturday",
    content: "They provide excellent service and a well-maintained space. They are also approachable to other businesses who want to collab with them. And with that Thank you Zamora's Room for collaborating with us!",
    initials: "C",
    url: "https://www.facebook.com/permalink.php?story_fbid=pfbid02mVCY1R3f1h9e21zbbPsG2oZM8jVs3CC911MhxJztZPyByUSxz4YoKXP5MeDo7LBBl&id=61583980161595"
  },
  {
    id: 3,
    name: "Kim Jefferson L Alvaran",
    date: "about 10 months ago",
    content: "Just visited The Zamora Room Coffee Lab and sobrang sulit ang experience! Yung coffee lasang premium, amoy pa lang panalo na! 😍👌 Perfect tambayan with friends or kung gusto mo lang mag relax with a good cup of coffee. Super cozy ng lugar, ang bait pa ng staff! Highly recommended, promise! 💯💛",
    initials: "K",
    url: "https://www.facebook.com/kim.alvaran06L/posts/pfbid0hniH5qHYxsWpVutKjNpmusmLGUiei6utz7h7eHgkCfqMZ4mBAjfTMxC58NtZsEG3l"
  }
];

export default function CapturedMoments() {
  const moments = useSiteStore((s) => s.moments);

  return (
    <section id="moments" className="py-16 md:py-24 bg-brand-black">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="font-body text-brand-gray text-[10px] tracking-[0.25em] uppercase mb-1.5">
            The Zamora Room:
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-brand-cream">
            Captured Moments
          </h2>
        </motion.div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
  {moments.map((moment, index) => (
    <motion.div
      key={moment.id}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -2 }}
      className="
        relative
        overflow-hidden
        rounded-xl
        bg-brand-black
        group
        cursor-pointer
      "
    >
      {moment.videoUrl ? (
        <video
          src={moment.videoUrl}
          autoPlay
          loop
          muted
          playsInline
          className="
            w-full
            h-[180px]
            md:h-[240px]
            lg:h-[280px]
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
            grayscale-[0.4]
            group-hover:grayscale-0
          "
        />
      ) : (
        <img
          src={moment.image}
          alt={moment.caption}
          loading="lazy"
          className="
            w-full
            h-[180px]
            md:h-[240px]
            lg:h-[280px]
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
            grayscale-[0.4]
            group-hover:grayscale-0
          "
        />
      )}

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-black/10
          to-transparent
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          flex
          items-end
        "
      >
        <div className="p-3">
          <p className="text-brand-cream text-xs md:text-sm">
            {moment.caption}
          </p>
        </div>
      </div>
      
      {/* Video Indicator */}
      {moment.videoUrl && (
        <div className="absolute top-2 right-2 p-1 bg-black/40 backdrop-blur-sm rounded-full text-brand-cream/60">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </motion.div>
  ))}
</div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-20 mb-8"
        >
          <p className="font-body text-brand-gray text-[10px] tracking-[0.25em] uppercase mb-1.5">
            What They Say:
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-brand-cream">
            Testimonials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col hover:bg-[#1a1a1a] transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-cream text-brand-black flex items-center justify-center font-display text-xl">
                  {t.initials}
                </div>
                <div>
                  <h3 className="text-brand-cream font-medium text-sm md:text-base">{t.name}</h3>
                  <p className="text-brand-gray text-xs">{t.date}</p>
                </div>
                <a 
                  href={t.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-auto text-[#1877F2] hover:opacity-80 transition-opacity"
                  title="View on Facebook"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.54-4.5-10.02-10-10.02Z"/>
                  </svg>
                </a>
              </div>
              <p className="text-brand-gray/90 text-sm leading-relaxed font-body">
                "{t.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
