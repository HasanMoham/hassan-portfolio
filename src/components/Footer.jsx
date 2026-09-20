import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="py-5 2xl:py-6"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

          {/* Copyright */}
          <p
            className="text-sm 2xl:text-base"
            style={{ color: 'var(--text-secondary)', fontFamily: 'Figtree, sans-serif' }}
          >
            © 2026 Hassan Mohamed. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/HasanMoham"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="GitHub"
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hassan2325"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-colors duration-200"
              style={{ color: 'var(--text-secondary)' }}
              aria-label="LinkedIn"
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)' }}
            >
              <Linkedin size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
