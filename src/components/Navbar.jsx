import { useState, useEffect, useRef } from 'react'
import { Sun, Moon, Menu, X, Download } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function smoothScrollTo(href) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function Navbar() {
  const [isDark, setIsDark] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const drawerRef = useRef(null)

  // Sync dark state with html class
  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    checkDark()
    // Observe class changes
    const observer = new MutationObserver(checkDark)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close drawer on outside click
  useEffect(() => {
    if (!drawerOpen) return
    const handleClick = (e) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setDrawerOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [drawerOpen])

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const toggleDark = () => {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setDrawerOpen(false)
    smoothScrollTo(href)
  }

  const navbarBg = scrolled
    ? 'rgba(var(--bg-rgb, 245, 245, 245), 0.97)'
    : 'rgba(var(--bg-rgb, 245, 245, 245), 0.90)'

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
        style={{
          backgroundColor: isDark
            ? scrolled ? 'rgba(17,24,39,0.97)' : 'rgba(17,24,39,0.90)'
            : scrolled ? 'rgba(245,245,245,0.97)' : 'rgba(245,245,245,0.90)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="font-bold text-xl 2xl:text-2xl font-outfit transition-opacity hover:opacity-80"
              style={{ color: 'var(--accent)', fontFamily: 'Outfit, sans-serif' }}
            >
              Hassan Mohamed
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm 2xl:text-base font-medium transition-colors duration-200 hover:opacity-70"
                    style={{ color: 'var(--text-primary)', fontFamily: 'Figtree, sans-serif' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg transition-colors duration-200 hover:opacity-70"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="/assets/cv.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm 2xl:text-base font-medium border transition-all duration-200 hover:opacity-80"
                style={{
                  color: 'var(--accent)',
                  borderColor: 'var(--accent)',
                  fontFamily: 'Figtree, sans-serif',
                }}
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            {/* Mobile Right Actions */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg transition-colors duration-200"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setDrawerOpen(true)}
                className="p-2 rounded-lg transition-colors duration-200"
                style={{ color: 'var(--text-primary)' }}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              key="drawer"
              ref={drawerRef}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 flex flex-col md:hidden"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderLeft: '1px solid var(--border)',
              }}
            >
              {/* Drawer Header */}
              <div
                className="flex items-center justify-between px-6 py-5"
                style={{ borderBottom: '1px solid var(--border)' }}
              >
                <span
                  className="font-bold text-lg"
                  style={{ color: 'var(--accent)', fontFamily: 'Outfit, sans-serif' }}
                >
                  Hassan Mohamed
                </span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 rounded-lg transition-colors duration-200"
                  style={{ color: 'var(--text-secondary)' }}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav className="flex-1 px-6 py-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 hover:opacity-70"
                        style={{ color: 'var(--text-primary)', fontFamily: 'Figtree, sans-serif' }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Drawer Footer — Download CV */}
              <div className="px-6 py-6" style={{ borderTop: '1px solid var(--border)' }}>
                <a
                  href="/assets/cv.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg text-sm font-medium border transition-all duration-200 hover:opacity-80"
                  style={{
                    color: 'var(--accent)',
                    borderColor: 'var(--accent)',
                    fontFamily: 'Figtree, sans-serif',
                  }}
                  onClick={() => setDrawerOpen(false)}
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
