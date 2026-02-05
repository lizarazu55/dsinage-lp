'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function ProductShowcase() {
  const { ref, isVisible } = useScrollAnimation()

  const specifications = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
      ),
      title: '画面サイズ',
      description: '縦1600mm × 横640mm',
      detail: '全長約1800mm'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: '形式',
      description: '自立式',
      detail: 'キャスター付き / 屋外対応'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '消費電力',
      description: '450W〜900W前後',
      detail: '電気代のみご負担いただきます'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: '対応素材',
      description: '静止画 / 動画 共に対応',
      detail: 'MP4, MOV / PNG, JPEG (容量は12MBまで)'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: '設置条件',
      description: '1コンセント口あればOK',
      detail: '100V以上'
    }
  ]

  const dimensions = {
    width: '646mm',
    depth: '450mm',
    screenHeight: '1606mm',
    totalHeight: '1776mm',
    baseHeight: '170mm'
  }

  return (
    <section ref={ref} id="products" className="py-20 relative">
      <div className="section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-brand-light-blue/60 tracking-widest mb-4">SPECIFICATIONS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-sans">
            サイネージ仕様
          </h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-brand-light-blue to-transparent mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* メイン製品表示 */}
          <div className={`grid lg:grid-cols-2 gap-12 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* 左側：製品画像と寸法 */}
            <div className="relative">
              <div className="glass-effect rounded-2xl p-8">
                <div className="relative flex justify-center items-center mb-6">
                  <Image 
                    src="/sinage-sample.png" 
                    alt="デジタルサイネージ"
                    width={1414}
                    height={2000}
                    sizes="(min-width: 1024px) 384px, 60vw"
                    className="h-96 w-auto object-contain"
                  />
                  
                  {/* 寸法線表示 */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* 幅表示 */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                      <div className="flex items-center">
                        <div className="w-20 h-px bg-brand-light-blue/50"></div>
                        <span className="mx-2 text-brand-light-blue text-sm font-semibold">{dimensions.width}</span>
                        <div className="w-20 h-px bg-brand-light-blue/50"></div>
                      </div>
                    </div>
                    
                    {/* 高さ表示 */}
                    <div className="absolute right-0 top-1/2 transform translate-x-12 -translate-y-1/2">
                      <div className="flex flex-col items-center">
                        <div className="h-32 w-px bg-brand-light-blue/50"></div>
                        <span className="my-2 text-brand-light-blue text-sm font-semibold writing-mode-vertical">{dimensions.totalHeight}</span>
                        <div className="h-32 w-px bg-brand-light-blue/50"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 寸法詳細 */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="glass-effect rounded-lg p-3">
                    <p className="text-brand-light-blue/60 text-xs mb-1">幅</p>
                    <p className="text-white font-semibold">{dimensions.width}</p>
                  </div>
                  <div className="glass-effect rounded-lg p-3">
                    <p className="text-brand-light-blue/60 text-xs mb-1">奥行</p>
                    <p className="text-white font-semibold">{dimensions.depth}</p>
                  </div>
                  <div className="glass-effect rounded-lg p-3">
                    <p className="text-brand-light-blue/60 text-xs mb-1">高さ</p>
                    <p className="text-white font-semibold">{dimensions.totalHeight}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：仕様詳細 */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">デジタルサイネージ詳細仕様</h3>
              
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="glass-effect rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className="flex items-start">
                    <div className="text-brand-light-blue mr-4 mt-1">
                      {spec.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{spec.title}</h4>
                      <p className="text-brand-light-blue text-lg font-bold">{spec.description}</p>
                      {spec.detail && (
                        <p className="text-white/60 text-sm mt-1">{spec.detail}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 補足情報 */}
          <div className={`glass-effect rounded-2xl p-8 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">設置について</h3>
              <p className="text-white/70 leading-relaxed">
                電源コンセント（100V以上）が1口あれば設置可能です。
                キャスター付きで移動も簡単、屋内・屋外どちらでもご利用いただけます。
                高輝度LEDパネル採用により、日中の屋外でも鮮明な映像表示が可能です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
