'use client'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function BenefitsSection() {
  const { ref, isVisible } = useScrollAnimation()
  const benefits = [
    {
      number: '01',
      title: '集客力を向上したい',
      description: '動画は静止画より人の目を引きやすいため、注目を集める情報発信で来店促進を図れます。'
    },
    {
      number: '02',
      title: '即時性のある情報の提供',
      description: 'アプリで簡単に広告の切り替えが可能。リアルタイムで情報を反映できます。'
    },
    {
      number: '03',
      title: 'ブランド認知度の向上',
      description: '高品質な映像で企業イメージを向上。記憶に残るブランディングが可能となります。'
    },
    {
      number: '04',
      title: '営業活動の効率化',
      description: '必要なタイミングに必要な内容を発信。狙いを定めた効果的なマーケティングを実現可能です。'
    },
    {
      number: '05',
      title: '24時間稼働による集客力の最大化',
      description: '深夜・早朝も休まず情報発信。営業時間外の認知度向上で新規顧客を獲得できます。'
    }
  ]

  return (
    <section ref={ref} className="py-16 relative">
      <div className="section-padding">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center font-sans">
            デジタルサイネージ
          </h2>
          <p className="text-xl md:text-2xl text-brand-light-blue/80 mb-12 tracking-wider text-center font-sans">
            ～ 5つの導入メリット ～
          </p>
        </div>

        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.slice(0, 3).map((benefit) => (
                <div 
                  key={benefit.number} 
                  className="glass-effect rounded-lg p-6 hover-glow transition-all duration-500 min-h-[200px] flex flex-col"
                >
                  <div className="text-3xl md:text-4xl font-bold text-brand-light-blue mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {benefit.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:max-w-4xl lg:mx-auto">
              {benefits.slice(3).map((benefit) => (
                <div 
                  key={benefit.number} 
                  className="glass-effect rounded-lg p-6 hover-glow transition-all duration-500 min-h-[200px] flex flex-col"
                >
                  <div className="text-3xl md:text-4xl font-bold text-brand-light-blue mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {benefit.number}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
