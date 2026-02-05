'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark"></div>
      
      {/* Background image with 3D rotation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Image 
          src="/sozai.png" 
          alt="" 
          width={1440}
          height={2960}
          sizes="(min-width: 768px) 70vh, 80vh"
          className="opacity-70 md:opacity-70 object-contain h-[80vh] md:h-[70vh] w-auto animate-rotate-3d-slow"
          style={{ transformStyle: 'preserve-3d' }}
          priority
        />
      </div>
      
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <div className="absolute inset-0 bg-gradient-radial from-brand-blue/5 via-transparent to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-blue/5 to-transparent"></div>

      <div className="relative z-10 section-padding text-center max-w-full">
        <div>
          <div className="mb-8">
            <div className="inline-block">
              <h1
                className="text-[60px] md:text-8xl font-bold mb-2"
                style={{ fontFamily: 'Inter, var(--font-noto-sans-jp), sans-serif' }}
              >
                <span className="gradient-text">D-signage</span>
              </h1>
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-light-blue to-transparent"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-brand-light-blue/60 mb-2 tracking-widest font-light">
            produced by
          </p>
          <p
            className="text-2xl md:text-3xl text-white/90 mb-8 italic"
            style={{ fontFamily: 'Inter, var(--font-noto-sans-jp), sans-serif' }}
          >
            D-system
          </p>
          
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-brand-light-blue/30"></div>
            <div className="w-2 h-2 bg-brand-light-blue rotate-45"></div>
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-brand-light-blue/30"></div>
          </div>

          <div className="mt-16">
            <a href="#contact" className="inline-block relative group">
              <div className="absolute inset-0 bg-gradient-blue rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="relative bg-gradient-blue text-white px-10 py-4 rounded-full font-semibold tracking-wider hover:scale-105 transition-transform">
                ご相談・お問い合わせ
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-brand-light-blue/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
