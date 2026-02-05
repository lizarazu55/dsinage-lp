'use client'

import { useState } from 'react'

interface NavigationProps {
  scrolled: boolean
}

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-brand-dark/90 backdrop-blur-md py-2 pb-0 md:pb-2' : 'bg-transparent py-4 pb-0 md:pb-4'
    }`}>
      <div className="section-padding">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button 
              onClick={scrollToTop}
              className="text-brand-light-blue font-bold text-xl tracking-wider hover:text-brand-light-blue/80 transition-colors cursor-pointer"
              style={{ fontFamily: 'Inter, var(--font-noto-sans-jp), sans-serif' }}
            >
              D-signage
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition">製品について</a>
            <a href="#usecases" className="text-white/80 hover:text-white transition">活用事例</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition">導入プラン</a>
            <a href="#workflow" className="text-white/80 hover:text-white transition">導入の流れ</a>
            <a href="#contact" className="bg-gradient-blue text-white px-6 py-2 rounded-full hover-glow font-semibold tracking-wider">
              お問い合わせ
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white relative w-10 h-10 flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-brand-light-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg className="w-6 h-6 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                  className="transition-all duration-300"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                  className="transition-all duration-300"
                />
              )}
            </svg>
          </button>
        </div>

        <div 
          className={`md:hidden mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-brand-dark/95 backdrop-blur-md rounded-lg p-4">
            <a 
              href="#about" 
              onClick={handleMobileMenuClick}
              className="block text-white/80 hover:text-white py-2 transition-colors"
            >
              製品について
            </a>
            <a 
              href="#usecases" 
              onClick={handleMobileMenuClick}
              className="block text-white/80 hover:text-white py-2 transition-colors"
            >
              活用事例
            </a>
            <a 
              href="#pricing" 
              onClick={handleMobileMenuClick}
              className="block text-white/80 hover:text-white py-2 transition-colors"
            >
              導入プラン
            </a>
            <a 
              href="#workflow" 
              onClick={handleMobileMenuClick}
              className="block text-white/80 hover:text-white py-2 transition-colors"
            >
              導入の流れ
            </a>
            <a 
              href="#contact" 
              onClick={handleMobileMenuClick}
              className="block text-brand-light-blue hover:text-brand-light-blue/80 py-2 transition-colors"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
