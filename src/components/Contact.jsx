import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

// Replace "YOUR_WEB3FORMS_ACCESS_KEY" with your actual key from web3forms.com
const ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'hassan.business2325@gmail.com',
    href: 'mailto:hassan.business2325@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+201023927016',
    href: 'tel:+201023927016',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'github.com/HasanMoham',
    href: 'https://github.com/HasanMoham',
    external: true,
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/hassan2325',
    href: 'https://www.linkedin.com/in/hassan2325',
    external: true,
  },
]

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

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
          transition={{ duration: 0.5 }}
          className="text-center mb-12 2xl:mb-16"
        >
          <h2
            className="font-bold text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl"
            style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
          >
            Got a project in mind?
          </h2>
          <p
            className="mt-2 text-xl sm:text-2xl 2xl:text-3xl font-semibold"
            style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--accent)' }}
          >
            Let's bring it to life.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-16 items-start"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* ── Left: Contact Info ── */}
          <motion.div variants={itemVariants} className="space-y-5 2xl:space-y-6">
            <p
              className="text-base 2xl:text-lg leading-relaxed"
              style={{ color: 'var(--text-secondary)', fontFamily: 'Figtree, sans-serif' }}
            >
              I'm always open to new opportunities and interesting projects.
              Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-3 2xl:space-y-4">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                  className="flex items-center gap-4 p-4 2xl:p-5 rounded-xl border group transition-colors duration-200"
                  style={{
                    backgroundColor: 'var(--bg)',
                    borderColor: 'var(--border)',
                    textDecoration: 'none',
                  }}
                >
                  <span
                    className="flex-shrink-0 p-2 rounded-lg"
                    style={{ backgroundColor: 'var(--bg-card)', color: 'var(--accent)' }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p
                      className="text-xs 2xl:text-sm font-medium uppercase tracking-wider mb-0.5"
                      style={{ color: 'var(--text-secondary)', fontFamily: 'Figtree, sans-serif' }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm 2xl:text-base font-medium group-hover:opacity-70 transition-opacity"
                      style={{ color: 'var(--text-primary)', fontFamily: 'Figtree, sans-serif' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div variants={itemVariants}>
            {status === 'success' ? (
              /* Success state */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 px-8 rounded-xl border"
                style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                <CheckCircle size={56} className="mb-4" style={{ color: '#22c55e' }} />
                <h3
                  className="font-bold text-xl 2xl:text-2xl mb-2"
                  style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text-primary)' }}
                >
                  Message sent successfully!
                </h3>
                <p
                  className="text-sm 2xl:text-base"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'Figtree, sans-serif' }}
                >
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              /* Form */
              <form
                onSubmit={handleSubmit}
                className="space-y-5 2xl:space-y-6 p-6 2xl:p-8 rounded-xl border"
                style={{ backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm 2xl:text-base font-medium mb-1.5"
                    style={{ color: 'var(--text-primary)', fontFamily: 'Figtree, sans-serif' }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border text-sm 2xl:text-base outline-none transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'Figtree, sans-serif',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm 2xl:text-base font-medium mb-1.5"
                    style={{ color: 'var(--text-primary)', fontFamily: 'Figtree, sans-serif' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border text-sm 2xl:text-base outline-none transition-all duration-200"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'Figtree, sans-serif',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm 2xl:text-base font-medium mb-1.5"
                    style={{ color: 'var(--text-primary)', fontFamily: 'Figtree, sans-serif' }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg border text-sm 2xl:text-base outline-none transition-all duration-200 resize-y"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border)',
                      color: 'var(--text-primary)',
                      fontFamily: 'Figtree, sans-serif',
                      minHeight: '120px',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px color-mix(in srgb, var(--accent) 15%, transparent)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none' }}
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div
                    className="flex items-start gap-2 p-3 rounded-lg border text-sm 2xl:text-base"
                    style={{
                      backgroundColor: 'color-mix(in srgb, #ef4444 10%, transparent)',
                      borderColor: '#ef4444',
                      color: '#ef4444',
                      fontFamily: 'Figtree, sans-serif',
                    }}
                  >
                    <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                    {errorMsg}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm 2xl:text-base text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-85 active:scale-[0.99]"
                  style={{ backgroundColor: 'var(--accent)', fontFamily: 'Figtree, sans-serif' }}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}
