import { motion } from 'framer-motion'

const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    type: 'Freelance',
    period: 'Jan 2025 – Mar 2025',
    bullets: [
      'Built responsive web interfaces using HTML, CSS, and JavaScript',
      'Converted UI/UX designs into functional web pages',
      'Improved website layout, usability, and performance',
      'Collaborated with clients to deliver requirements on time',
    ],
  },
  {
    id: 2,
    role: 'Software Tester',
    type: 'Freelance',
    period: 'Apr 2025 – Jul 2025',
    bullets: [
      'Performed manual testing for web applications to ensure functionality and usability',
      'Identified, documented, and reported bugs with clear reproduction steps',
      'Tested UI components, responsiveness, and cross-browser compatibility',
      'Collaborated with developers to improve software quality',
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function ExperienceCard({ exp, index }) {
  const isLeft = index % 2 === 0

  return (
    /* Desktop: alternating layout. Mobile: always left-aligned */
    <div className="relative flex items-start gap-0 mb-10 last:mb-0">

      {/* ── Mobile / Tablet layout (always left side) ── */}
      <div className="flex items-start gap-4 w-full md:hidden">
        {/* Dot */}
        <div className="flex flex-col items-center flex-shrink-0 mt-1.5">
          <div
            className="w-4 h-4 rounded-full flex-shrink-0 z-10"
            style={{ backgroundColor: 'var(--accent)', border: '3px solid var(--bg)' }}
          />
          <div
            className="w-0.5 flex-1 mt-1"
            style={{ backgroundColor: 'var(--accent)', opacity: 0.3, minHeight: '100%' }}
          />
        </div>
        {/* Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 rounded-xl border p-5 shadow-sm mb-2"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <CardContent exp={exp} />
        </motion.div>
      </div>

      {/* ── Desktop layout (alternating) ── */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-start gap-6 w-full">
        {/* Left slot */}
        <div className={isLeft ? '' : 'flex justify-end'}>
          {isLeft ? (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border p-6 2xl:p-7 shadow-sm"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <CardContent exp={exp} />
            </motion.div>
          ) : (
            <div /> /* empty */
          )}
        </div>

        {/* Center: dot */}
        <div className="flex flex-col items-center pt-4">
          <div
            className="w-5 h-5 rounded-full z-10 flex-shrink-0"
            style={{ backgroundColor: 'var(--accent)', border: '3px solid var(--bg)' }}
          />
        </div>

        {/* Right slot */}
        <div>
          {!isLeft ? (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border p-6 2xl:p-7 shadow-sm"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border)' }}
            >
              <CardContent exp={exp} />
            </motion.div>
          ) : (
            <div /> /* empty */
          )}
        </div>
      </div>

    </div>
  )
}

function CardContent({ exp }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <h3
          className="font-bold text-lg 2xl:text-xl"
          style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
        >
          {exp.role}
        </h3>
        <span
          className="px-2 py-0.5 rounded-full text-xs 2xl:text-sm font-medium border"
          style={{
            color: 'var(--accent)',
            borderColor: 'var(--accent)',
            fontFamily: 'Figtree, sans-serif',
          }}
        >
          {exp.type}
        </span>
      </div>
      <p
        className="text-sm 2xl:text-base mb-3"
        style={{ color: 'var(--text-secondary)', fontFamily: 'Figtree, sans-serif' }}
      >
        {exp.period}
      </p>
      <ul className="space-y-1.5">
        {exp.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm 2xl:text-base"
            style={{ color: 'var(--text-secondary)', fontFamily: 'Figtree, sans-serif' }}
          >
            <span
              className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            {bullet}
          </li>
        ))}
      </ul>
    </>
  )
}

export default function Experience() {
  return (
    <div
      className="py-20 2xl:py-28"
      style={{ backgroundColor: 'var(--bg-card)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-14 2xl:mb-18"
        >
          <h2
            className="font-bold text-3xl sm:text-4xl 2xl:text-5xl"
            style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
          >
            Experience
          </h2>
          <div
            className="mt-3 h-1 w-16 rounded-full 2xl:w-20"
            style={{ backgroundColor: 'var(--accent)' }}
          />
        </motion.div>

        {/* Timeline wrapper — desktop: relative container with center line */}
        <div className="relative">
          {/* Desktop center vertical line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ backgroundColor: 'var(--accent)', opacity: 0.3 }}
          />

          {/* Mobile left line */}
          <div
            className="md:hidden absolute left-2 top-0 bottom-0 w-0.5"
            style={{ backgroundColor: 'var(--accent)', opacity: 0.3 }}
          />

          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

      </div>
    </div>
  )
}
