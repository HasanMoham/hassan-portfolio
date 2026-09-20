import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

function smoothScrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <div
      className="min-h-screen flex items-center pt-16"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20 2xl:py-28">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-16 2xl:gap-24">

          {/* ── Text Column ── */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial="hidden"
            animate="visible"
          >
            {/* Name */}
            <motion.h1
              custom={0}
              variants={fadeUp}
              className="font-bold leading-tight mb-3 2xl:mb-4"
              style={{
                fontFamily: 'Outfit, sans-serif',
                color: 'var(--text-primary)',
                fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              }}
            >
              Hassan Mohamed
            </motion.h1>

            {/* Title */}
            <motion.p
              custom={1}
              variants={fadeUp}
              className="font-semibold mb-4 2xl:mb-6"
              style={{
                fontFamily: 'Outfit, sans-serif',
                color: 'var(--accent)',
                fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              }}
            >
              Web Developer
            </motion.p>

            {/* Description */}
            <motion.p
              custom={2}
              variants={fadeUp}
              className="mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed 2xl:text-lg"
              style={{ color: 'var(--text-secondary)', fontFamily: 'Figtree, sans-serif' }}
            >
              Engineering dynamic digital experiences. I specialize in building
              user-centric, responsive web applications that perform exactly as
              they should.
            </motion.p>

            {/* Status Pills */}
            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap justify-center md:justify-start gap-3 mb-8 2xl:mb-10"
            >
              {/* Location */}
              <span
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm 2xl:text-base border"
                style={{
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'Figtree, sans-serif',
                }}
              >
                <MapPin size={14} style={{ color: 'var(--accent)' }} />
                Giza, Egypt
              </span>

              {/* Availability */}
              <span
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm 2xl:text-base border"
                style={{
                  borderColor: 'var(--border)',
                  backgroundColor: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                  fontFamily: 'Figtree, sans-serif',
                }}
              >
                <span
                  className="pulse-dot inline-block w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: '#22c55e' }}
                />
                Available for Freelance
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 2xl:gap-4"
            >
              {/* Primary */}
              <button
                onClick={() => smoothScrollTo('contact')}
                className="px-6 py-3 rounded-lg font-semibold text-sm 2xl:text-base text-white transition-all duration-200 hover:opacity-85 hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: 'var(--accent)', fontFamily: 'Figtree, sans-serif' }}
              >
                Let's Work Together
              </button>

              {/* Secondary */}
              <button
                onClick={() => smoothScrollTo('projects')}
                className="px-6 py-3 rounded-lg font-semibold text-sm 2xl:text-base border-2 transition-all duration-200 hover:opacity-80 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  color: 'var(--accent)',
                  borderColor: 'var(--accent)',
                  backgroundColor: 'transparent',
                  fontFamily: 'Figtree, sans-serif',
                }}
              >
                View My Work
              </button>
            </motion.div>
          </motion.div>

          {/* ── Photo Column ── */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="hero-float">
              <img
                src="/assets/profile.jpeg"
                alt="Hassan Mohamed"
                className="rounded-full object-cover w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 2xl:w-96 2xl:h-96"
                style={{
                  outline: '4px solid var(--accent)',
                  outlineOffset: '4px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
