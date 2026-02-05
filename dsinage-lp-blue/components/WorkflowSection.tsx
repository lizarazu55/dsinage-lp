'use client'

import { useEffect, useRef, useState } from 'react'

export default function WorkflowSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const desktopStepRefs = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    {
      number: 'STEP 1',
      title: 'お問い合わせ',
      description: '弊社にお気軽にお問い合わせください',
      icon: '✉️'
    },
    {
      number: 'STEP 2',
      title: '製品の提案',
      description: '最適なご提案とお見積りの算出を致します',
      icon: '📋'
    },
    {
      number: 'STEP 3',
      title: 'ご契約',
      description: '在庫確保・コンテンツ制作のご相談',
      icon: '📝'
    },
    {
      number: 'STEP 4',
      title: '納品・設置',
      description: '現地にて設置・初期設定',
      icon: '🚚'
    },
    {
      number: 'STEP 5',
      title: '運用開始',
      description: '運用開始・保守サポート',
      icon: '✨'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const mobileIndex = stepRefs.current.indexOf(entry.target as HTMLDivElement)
            const desktopIndex = desktopStepRefs.current.indexOf(entry.target as HTMLDivElement)
            const index = mobileIndex !== -1 ? mobileIndex : desktopIndex
            
            if (index !== -1 && !visibleSteps.includes(index)) {
              setVisibleSteps((prev) => [...prev, index])
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    )

    const mobileRefs = stepRefs.current
    const desktopRefs = desktopStepRefs.current

    mobileRefs.forEach((ref) => {
      if (ref) observer.observe(ref)
    })
    
    desktopRefs.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      mobileRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      desktopRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      observer.disconnect()
    }
  }, [visibleSteps])

  return (
    <section id="workflow" className="py-20 relative">
      <div className="section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            導入までの流れ
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-brand-light-blue to-transparent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    desktopStepRefs.current[index] = el
                  }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{
                    opacity: visibleSteps.includes(index) ? 1 : 0,
                    transform: visibleSteps.includes(index) 
                      ? 'translateX(0)' 
                      : index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)',
                    transition: 'all 0.8s ease-out',
                    transitionDelay: `${index * 0.1}s`
                  }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="glass-effect rounded-xl p-6 hover-glow inline-block text-left">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{step.icon}</span>
                        <div>
                          <p className="text-cyan-400 font-semibold mb-2">{step.number}</p>
                          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-white/70">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="relative">
              {/* Mobile timeline line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500"></div>
              
              <div className="space-y-8 relative">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    ref={(el) => {
                      stepRefs.current[index] = el
                    }}
                    className="relative flex items-start gap-6"
                    style={{
                      opacity: visibleSteps.includes(index) ? 1 : 0,
                      transform: visibleSteps.includes(index) 
                        ? 'translateX(0)' 
                        : 'translateX(-30px)',
                      transition: 'all 0.6s ease-out',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                        <span className="text-2xl">{step.icon}</span>
                      </div>
                    </div>
                    
                    {/* Content card */}
                    <div className="flex-1">
                      <div className="glass-effect rounded-xl p-5 hover-glow">
                        <p className="text-cyan-400 font-semibold text-sm mb-1">{step.number}</p>
                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-white/70 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
