'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function CoverageMap() {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <section ref={ref} className="py-20 relative">
      <div className="section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            対応エリア
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-brand-light-blue to-transparent mx-auto"></div>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect rounded-2xl p-8">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  北海道から沖縄まで全国対応！
                </h3>
                <p className="text-white/80 mb-6 text-sm md:text-base">
                  販売、設置を全国実施！！
                </p>
                <div className="space-y-4">
                  {/* <div className="flex items-center">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-white/70">対応可能エリア</span>
                  </div> */}
                  <p className="text-white/60 text-xs md:text-sm">
                    <span className="text-red-500 font-bold">※注</span>
                    <br />
                    リースプランでご契約の場合、機器の運送費用は初期費用に含まれます。(北海道、沖縄地域は要相談)
                    <br />
                    ご購入の場合の運送費用は全額お客様負担になりますのでご了承の程、よろしくお願いいたします。
                  </p>
                </div>
                {/* <div className="mt-6">
                  <button className="bg-gradient-blue text-white px-4 md:px-6 py-2 md:py-3 rounded-full hover-glow text-sm md:text-base">
                    エリア詳細を確認
                  </button>
                </div> */}
              </div>
              
              <div className="order-1 md:order-2 w-full">
                <div className="relative h-64 md:h-96 w-full">
                  <Image 
                    src="/map.png" 
                    alt="対応エリアマップ"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain md:object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
