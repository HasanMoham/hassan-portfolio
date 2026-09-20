import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

// ============================================================
// PROJECTS DATA — Edit this array to add/remove/update projects
// Each project needs: id, title, description, category, image, liveUrl
// Categories: "Frontend" | "Backend" | "Deployment"
// For image: use a URL string or import a local image from /public/assets/
// ============================================================
const projects = [
  {
    id: 1,
    title: 'Project Title',
    description: 'A brief description of this project and what it does.',
    category: 'Frontend',
    image: null, // replace with image URL or local path
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Project Title',
    description: 'A brief description of this project and what it does.',
    category: 'Backend',
    image: null,
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Project Title',
    description: 'A brief description of this project and what it does.',
    category: 'Deployment',
    image: null,
    liveUrl: '#',
  },
]

const categories = ['All', 'Frontend', 'Backend', 'Deployment']

// Gradient backgrounds per card id (cycles if more cards added)
const gradients = [
  'linear-gradient(135deg, color-mix(in srgb, var(--accent) 30%, #111) 0%, #1a1a2e 100%)',
  'linear-gradient(135deg, color-mix(in srgb, var(--accent) 20%, #0f3460) 0%, #16213e 100%)',
  'linear-gradient(135deg, color-mix(in srgb, var(--accent) 25%, #2c003e) 0%, #1a0a2e 100%)',
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3, ease: 'easeIn' } },
}

function ProjectCard({ project, gradientIndex }) {
  const [hovered, setHovered] = useState(false)
  const gradient = gradients[gradientIndex % gradients.length]

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="rounded-xl border overflow-hidden shadow-sm"
      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Image / Placeholder area */}
      <div
        className="relative overflow-hidden"
        style={{ height: '200px', background: gradient }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          /* Placeholder text shown when no image */
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-sm font-medium opacity-50 select-none"
              style={{ color: '#fff', fontFamily: 'Figtree, sans-serif' }}
            >
              Project Screenshot
            </span>
          </div>
        )}

        {/* Desktop hover overlay — hidden on touch devices via CSS */}
        <motion.div
          className="desktop-overlay absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-transform hover:scale-105"
            style={{
              color: 'var(--accent)',
              backgroundColor: '#fff',
              fontFamily: 'Figtree, sans-serif',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            View Live <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Touch device persistent bar — shown only on hover:none devices via CSS */}
        <div
          className="touch-bar absolute bottom-0 left-0 right-0 flex items-center justify-center py-2.5"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: 'var(--accent)', fontFamily: 'Figtree, sans-serif' }}
            onClick={(e) => e.stopPropagation()}
          >
            View Live <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 2xl:p-6">
        {/* Category badge */}
        <span
          className="inline-block px-2.5 py-0.5 rounded-full text-xs 2xl:text-sm font-medium border mb-3"
          style={{
            color: 'var(--accent)',
            borderColor: 'var(--accent)',
            fontFamily: 'Figtree, sans-serif',
          }}
        >
          {project.category}
        </span>

        {/* Title */}
        <h3
          className="font-bold text-lg 2xl:text-xl mb-2"
          style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm 2xl:text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)', fontFamily: 'Figtree, sans-serif' }}
        >
          {project.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* CSS: hide/show overlay vs touch bar */}
      <style>{`
        /* Default (pointer devices): show overlay, hide touch bar */
        .desktop-overlay { display: flex; }
        .touch-bar { display: none; }

        /* Touch devices (no hover support): hide overlay, show touch bar */
        @media (hover: none) {
          .desktop-overlay { display: none !important; }
          .touch-bar { display: flex !important; }
        }

        /* Touch bar background: light in light mode, dark in dark mode */
        .touch-bar { background-color: rgba(243,244,246,0.95); }
        html.dark .touch-bar { background-color: rgba(0,0,0,0.65); }
      `}</style>

      <div className="py-20 2xl:py-28" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-10 2xl:mb-14"
          >
            <h2
              className="font-bold text-3xl sm:text-4xl 2xl:text-5xl"
              style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
            >
              My Projects
            </h2>
            <div
              className="mt-3 h-1 w-16 rounded-full 2xl:w-20"
              style={{ backgroundColor: 'var(--accent)' }}
            />
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-10 2xl:mb-12"
          >
            {categories.map((cat) => {
              const isActive = activeFilter === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="px-4 py-1.5 rounded-full text-sm 2xl:text-base font-medium border transition-all duration-200"
                  style={{
                    backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    borderColor: isActive ? 'var(--accent)' : 'var(--border)',
                    fontFamily: 'Figtree, sans-serif',
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  gradientIndex={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </>
  )
}
