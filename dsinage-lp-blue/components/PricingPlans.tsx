'use client'

import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function PricingPlans() {
  const { ref, isVisible } = useScrollAnimation()
  const [planType, setPlanType] = useState<'rental' | 'purchase'>('rental')
  const [isSticky, setIsSticky] = useState(false)
  const [showDSystemPlans, setShowDSystemPlans] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.getElementById('pricing')
      if (pricingSection) {
        const rect = pricingSection.getBoundingClientRect()
        const sectionTop = rect.top
        const sectionBottom = rect.bottom
        
        // セクションが画面内にあり、かつセクションの上部が画面上部より上にある場合
        setIsSticky(sectionTop < -300 && sectionBottom > 200)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // D-system限定レンタルプラン
  const dSystemRentalPlans = [
    {
      name: 'スモールビジネスプラン',
      subtitle: 'Small Business - Limited',
      initialCost: '350,000円',
      monthlyCost: '15,000円',
      period: '(税込)/月',
      description: 'レンタル機器、運送費用含む',
      contractNote: '最低2年の縛りあり、保守含む',
      features: [
        'スマホアプリで簡単操作',
        '屋外でも安心の防水仕様',
        '回線工事等不要',
      ],
      supports: [
        '故障時のパネル交換対応(当社規定に準ずる)',
        '映像、画像などのコンテンツ制作(別途お見積り)',
      ],
      notes: [
        '機器の配送代は本州地域の運搬について初期費用に含まれます。北海道、沖縄地域への配送は別途費用がかかりますのでご了承ください。',
        '故障によるLEDパネルの交換は当社規定に準ずる形での交換になります。',
        '映し出せる画像、動画の容量は500MBまでとなります。',
        '本製品は高精細LEDを使用しており、高輝度による視認性を重視しております。液晶を使用したモデルとは違い、近距離ではドット感があります。'
      ],
      recommended: false,
      isDSystem: true
    },
    {
      name: 'エンタープライズプラン',
      subtitle: 'Enterprise - Limited',
      initialCost: '400,000円',
      monthlyCost: '25,000円',
      period: '(税込)/月',
      description: 'レンタル機器、運送費用含む',
      contractNote: '最低2年の縛りあり、保守含む',
      features: [
        'WEBアプリで簡単操作',
        '全店舗の一括コンテンツ管理',
        '店舗別・時間別の配信設定',
        '屋外でも安心の防水仕様',
        '回線工事等不要',
      ],
      supports: [
        '故障時のパネル交換対応(当社規定に準ずる)',
        '映像、画像などのコンテンツ制作(別途お見積り)',
      ],
      notes: [
        '機器の配送代は本州地域の運搬について初期費用に含まれます。北海道、沖縄地域への配送は別途費用がかかりますのでご了承ください。',
        '故障によるLEDパネルの交換は当社規定に準ずる形での交換になります。',
        '映し出せる画像、動画の容量は500MBまでとなります。',
        '本製品は高精細LEDを使用しており、高輝度による視認性を重視しております。液晶を使用したモデルとは違い、近距離ではドット感があります。'
      ],
      recommended: true,
      isDSystem: true
    }
  ]

  // 通常レンタルプラン
  const rentalPlans = [
    {
      name: 'スモールビジネスプラン',
      subtitle: 'Small Business',
      initialCost: '400,000円',
      monthlyCost: '20,000円',
      period: '(税込)/月',
      description: 'レンタル機器、運送費用含む',
      contractNote: '最低2年の縛りあり、保守含む',
      features: [
        'スマホアプリで簡単操作',
        '屋外でも安心の防水仕様',
        '回線工事等不要',
      ],
      supports: [
        '故障時のパネル交換対応(当社規定に準ずる)',
        '映像、画像などのコンテンツ制作(別途お見積り)',

      ],
      notes: [
        '機器の配送代は本州地域の運搬について初期費用に含まれます。北海道、沖縄地域への配送は別途費用がかかりますのでご了承ください。',
        '故障によるLEDパネルの交換は当社規定に準ずる形での交換になります。',
        '映し出せる画像、動画の容量は500MBまでとなります。',
        '本製品は高精細LEDを使用しており、高輝度による視認性を重視しております。液晶を使用したモデルとは違い、近距離ではドット感があります。'
      ],
      recommended: false
    },
    {
      name: 'エンタープライズプラン',
      subtitle: 'Enterprise',
      initialCost: '500,000円',
      monthlyCost: '35,000円',
      period: '(税込)/月',
      description: 'レンタル機器、運送費用含む',
      contractNote: '最低2年の縛りあり、保守含む',
      features: [
        'WEBアプリで簡単操作',
        '全店舗の一括コンテンツ管理',
        '店舗別・時間別の配信設定',
        '屋外でも安心の防水仕様',
        '回線工事等不要',
      ],
      supports: [
        '故障時のパネル交換対応(当社規定に準ずる)',
        '映像、画像などのコンテンツ制作(別途お見積り)',

      ],
      notes: [
        '機器の配送代は本州地域の運搬について初期費用に含まれます。北海道、沖縄地域への配送は別途費用がかかりますのでご了承ください。',
        '故障によるLEDパネルの交換は当社規定に準ずる形での交換になります。',
        '映し出せる画像、動画の容量は500MBまでとなります。',
        '本製品は高精細LEDを使用しており、高輝度による視認性を重視しております。液晶を使用したモデルとは違い、近距離ではドット感があります。'
      ],
      recommended: true
    }
  ]

  // D-system限定購入プラン
  const dSystemPurchasePlans = [
    {
      name: 'ご購入プラン(個店向け)',
      subtitle: 'Single Store - Limited',
      purchaseCost: '要お見積り (特別価格でご案内)',
      additionalCost: '(別途配送費用がかかります)',
      insuranceCost: '3,000円',
      insuranceNote: '(税込)/月(LEDパネル故障時に対応)',
      features: [
        'スマホアプリで簡単操作',
        '屋外でも安心の防水仕様',
        '回線工事等不要',
      ],
      supports: [
        '故障時のパネル交換対応(当社規定に準ずる)',
        '映像、画像などのコンテンツ制作(別途お見積り)',

      ],
      notes: [
        '機器の配送代が別途かかります。',
        '故障によるLEDパネルの交換には別途費用がかかります。',
        '映し出せる画像、動画の容量は500MBまでとなります。',
        '本製品は高精細LEDを使用しており、高輝度による視認性を重視しております。液晶を使用したモデルとは違い、近距離ではドット感があります。'
      ],
      recommended: false,
      isDSystem: true
    },
    {
      name: 'ご購入プラン(複数店舗向け)',
      subtitle: 'Multi Store - Limited',
      purchaseCost: '要お見積り (特別価格でご案内)',
      additionalCost: '(別途配送費用がかかります)',
      cloudCost: '10,000円',
      cloudNote: '(税込)/月(クラウド管理ツール利用料)',
      insuranceCost: '3,000円',
      insuranceNote: '(税込)/月(LEDパネル故障時に対応)',
      features: [
        'WEBアプリで簡単操作',
        '全店舗の一括コンテンツ管理',
        '店舗別・時間別の配信設定',
        '屋外でも安心の防水仕様',
        '回線工事等不要',
      ],
      supports: [
        '故障時のパネル交換対応(当社規定に準ずる)',
        '映像、画像などのコンテンツ制作(別途お見積り)',

      ],
      notes: [
        '機器の配送代が別途かかります。',
        '故障によるLEDパネルの交換には別途費用がかかります。',
        '映し出せる画像、動画の容量は500MBまでとなります。',
        '本製品は高精細LEDを使用しており、高輝度による視認性を重視しております。液晶を使用したモデルとは違い、近距離ではドット感があります。'
      ],
      recommended: true,
      isDSystem: true
    }
  ]

  // 通常購入プラン
  const purchasePlans = [
    {
      name: 'ご購入プラン(個店向け)',
      subtitle: 'Single Store Purchase',
      purchaseCost: '要お見積り',
      additionalCost: '(別途配送費用がかかります)',
      insuranceCost: '5,000円',
      insuranceNote: '(税込)/月(LEDパネル故障時に対応)',
      features: [
        'スマホアプリで簡単操作',
        '屋外でも安心の防水仕様',
        '回線工事等不要',
      ],
      supports: [
        '故障時のパネル交換対応(当社規定に準ずる)',
        '映像、画像などのコンテンツ制作(別途お見積り)',

      ],
      notes: [
        '機器の配送代が別途かかります。',
        '故障によるLEDパネルの交換には別途費用がかかります。',
        '映し出せる画像、動画の容量は500MBまでとなります。',
        '本製品は高精細LEDを使用しており、高輝度による視認性を重視しております。液晶を使用したモデルとは違い、近距離ではドット感があります。'
      ],
      recommended: false
    },
    {
      name: 'ご購入プラン(複数店舗向け)',
      subtitle: 'Multi Store Purchase',
      purchaseCost: '要お見積り',
      additionalCost: '(別途配送費用がかかります)',
      cloudCost: '15,000円',
      cloudNote: '(税込)/月(クラウド管理ツール利用料)',
      insuranceCost: '5,000円',
      insuranceNote: '(税込)/月(LEDパネル故障時に対応)',
      features: [
        'WEBアプリで簡単操作',
        '全店舗の一括コンテンツ管理',
        '店舗別・時間別の配信設定',
        '屋外でも安心の防水仕様',
        '回線工事等不要',
      ],
      supports: [
        '故障時のパネル交換対応(当社規定に準ずる)',
        '映像、画像などのコンテンツ制作(別途お見積り)',

      ],
      notes: [
        '機器の配送代が別途かかります。',
        '故障によるLEDパネルの交換には別途費用がかかります。',
        '映し出せる画像、動画の容量は500MBまでとなります。',
        '本製品は高精細LEDを使用しており、高輝度による視認性を重視しております。液晶を使用したモデルとは違い、近距離ではドット感があります。'
      ],
      recommended: true
    }
  ]

  return (
    <section ref={ref} id="pricing" className="py-20 relative">
      <div className="section-padding">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-brand-light-blue/60 tracking-widest mb-4">PRICING PLAN</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            導入プラン
          </h2>
          <p className="text-white/60 mt-4 text-lg">
            各ビジネスに特化した集客ソリューション
          </p>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-light-blue to-transparent mx-auto mt-6"></div>

        </div>

        {/* プラン切り替えボタン - 通常表示 */}
        <div className={`text-center mb-10 ${isSticky ? 'invisible' : 'visible'}`}>
          <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full p-1 border border-brand-light-blue/20">
            <button
              onClick={() => setPlanType('rental')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                planType === 'rental'
                  ? showDSystemPlans
                    ? 'bg-gradient-blue text-white shadow-lg'
                    : 'bg-gradient-blue text-white shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              レンタルプラン
            </button>
            <button
              onClick={() => setPlanType('purchase')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                planType === 'purchase'
                  ? showDSystemPlans
                    ? 'bg-gradient-blue text-white shadow-lg'
                    : 'bg-gradient-blue text-white shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              ご購入プラン
            </button>
          </div>
        </div>
        
        {/* D-systemご利用の方向けリンク */}
        <div className="text-center mb-8">
          {!showDSystemPlans ? (
            <>
              <button
                onClick={() => setShowDSystemPlans(true)}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[#FFD700] border border-white/20 hover:border-white/40 shadow-lg shadow-[#063761]/30 hover:shadow-lg hover:shadow-[#FFD700]/20 transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-primary to-brand-dark bg-[length:200%_100%] animate-wave" />
                <div className="absolute inset-0 bg-gradient-radial from-[#FFD700]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 text-lg">D-systemご利用の方はこちら</span>
                <svg className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              {/* <p className="text-white/60 text-sm mt-2">100台限定</p> */}
            </>
          ) : (
            <>
              <p className="text-2xl font-bold mb-2">D-systemご利用の方</p>
              <p className="text-[#FFD700] mt-2 font-bold">
                <span className="text-7xl">100台</span> 限定
              </p>
              <button
                onClick={() => setShowDSystemPlans(false)}
                className="inline-flex items-center justify-center w-20 h-10 text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-300"
                aria-label="通常プランに戻る"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                戻る
              </button>
            </>
          )}
        </div>

        {/* プラン切り替えボタン - スティッキー表示 */}
        <div className={`fixed top-16 left-0 right-0 z-40 text-center duration-300 ${
          isSticky ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="inline-flex bg-brand-dark/90 backdrop-blur-lg rounded-full p-1 border border-brand-light-blue/30 shadow-lg">
            <button
              onClick={() => setPlanType('rental')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                planType === 'rental'
                  ? showDSystemPlans
                    ? 'bg-gradient-blue text-white shadow-lg'
                    : 'bg-gradient-blue text-white shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              レンタルプラン
            </button>
            <button
              onClick={() => setPlanType('purchase')}
              className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                planType === 'purchase'
                  ? showDSystemPlans
                    ? 'bg-gradient-blue text-white shadow-lg'
                    : 'bg-gradient-blue text-white shadow-lg'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              ご購入プラン
            </button>
          </div>
        </div>

        {/* レンタルプラン */}
        {planType === 'rental' && (
          <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fadeIn`}>
            {(showDSystemPlans ? dSystemRentalPlans : rentalPlans).map((plan, index) => (
              <div
                key={index}
                className={`relative glass-effect rounded-2xl p-8 hover-glow flex flex-col ${
                  plan.recommended ? 'ring-2 ring-brand-light-blue/50' : ''
                }`}
              >
                {plan.recommended && !showDSystemPlans && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-blue text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider">
                      〜おすすめ〜
                    </span>
                  </div>
                )}
                {plan.recommended && showDSystemPlans && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-blue text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider">
                      〜おすすめ〜
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <p className="text-brand-light-blue/60 text-sm tracking-widest mb-2">{plan.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                </div>
                
                <div className="mb-6 pb-6 border-b border-brand-light-blue/20">
                  <div className="mb-4">
                    <p className="text-white/60 text-sm mb-1">初期費用</p>
                    {showDSystemPlans ? (
                      <div className="flex items-center gap-2 md:gap-3">
                        <p className="text-xl text-white/40 line-through decoration-[#ff555a]">
                          {index === 0 ? '400,000円' : '500,000円'}
                        </p>
                        <svg className="w-5 h-5 text-brand-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="flex flex-col">
                          <p className="text-2xl font-bold gradient-text">
                            {plan.initialCost}
                          </p>
                          <span className="text-xl text-[#ff555a] whitespace-nowrap">
                            <span>(</span>
                              {index === 0 ? '-50,000' : '-100,000'}
                              <span className="text-sm">円</span>
                            <span>)</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-2xl font-bold gradient-text">{plan.initialCost}</p>
                    )}
                    <p className="text-white/50 text-xs mt-1">{plan.description}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">月額</p>
                    {showDSystemPlans ? (
                      <div className="flex items-center gap-2 md:gap-3">
                        <p className="text-xl text-white/40 line-through decoration-[#ff555a]">
                          {index === 0 ? '20,000円' : '35,000円'}
                        </p>
                        <svg className="w-5 h-5 text-brand-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="flex flex-col">
                          <p className="text-2xl font-bold gradient-text">
                            {plan.monthlyCost}
                          </p>
                          <span className="text-xl text-[#ff555a] whitespace-nowrap">
                            <span>(</span>
                              {index === 0 ? '-5,000' : '-10,000'}
                              <span className="text-sm">円</span>
                            <span>)</span>
                          </span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-2xl font-bold gradient-text">
                        {plan.monthlyCost}<span className="text-sm ml-1">{plan.period}</span>
                      </p>
                    )}
                    <p className="text-white/50 text-xs mt-1">{plan.contractNote}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-brand-light-blue font-semibold mb-4">主な機能</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-white/80 text-sm">
                        <svg className="w-5 h-5 text-brand-light-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-brand-light-blue font-semibold mb-4">サポート内容</p>
                  <ul className="space-y-3">
                    {plan.supports.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-white/80 text-sm">
                        <svg className="w-5 h-5 text-brand-light-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 bg-brand-light-blue/5 rounded-lg">
                  <p className="text-brand-light-blue font-semibold mb-3 text-sm">※注</p>
                  <ul className="space-y-2">
                    {plan.notes.map((note, idx) => (
                      <li key={idx} className="text-white/60 text-xs leading-relaxed">
                        ・{note}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-grow"></div>

                <a 
                  href="#contact" 
                  className={`w-full py-3 rounded-full font-semibold tracking-wider transition-all inline-block text-center ${
                    showDSystemPlans
                      ? 'bg-gradient-blue text-white hover-glow'
                      : plan.recommended 
                        ? 'bg-gradient-blue text-white hover-glow' 
                        : 'bg-transparent border border-brand-light-blue/30 text-brand-light-blue hover:border-brand-light-blue/60'
                  }`}
                >
                  詳細を聞いてみる
                </a>
              </div>
            ))}
          </div>
        )}

        {/* 購入プラン */}
        {planType === 'purchase' && (
          <div className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fadeIn`}>
            {(showDSystemPlans ? dSystemPurchasePlans : purchasePlans).map((plan, index) => (
              <div
                key={index}
                className={`relative glass-effect rounded-2xl p-8 hover-glow flex flex-col ${
                  plan.recommended ? 'ring-2 ring-brand-light-blue/50' : ''
                }`}
              >
                {plan.recommended && !showDSystemPlans && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-blue text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider">
                      〜おすすめ〜
                    </span>
                  </div>
                )}
                {plan.recommended && showDSystemPlans && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-blue text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider">
                      〜おすすめ〜
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <p className="text-brand-light-blue/60 text-sm tracking-widest mb-2">{plan.subtitle}</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                </div>
                
                <div className="mb-6 pb-6 border-b border-brand-light-blue/20">
                  <div className="mb-4">
                    <p className="text-white/60 text-sm mb-1">購入費用</p>
                    <p className="text-2xl font-bold gradient-text">{plan.purchaseCost}</p>
                    <p className="text-white/50 text-xs mt-1">{plan.additionalCost}</p>
                  </div>
                  {plan.cloudCost && (
                    <div className="mb-4">
                      <p className="text-white/60 text-sm mb-1">月額</p>
                      {showDSystemPlans ? (
                        <div>
                          <div className="flex items-center gap-2 md:gap-3">
                            <p className="text-xl text-white/40 line-through decoration-[#ff555a]">
                              15,000円
                            </p>
                            <svg className="w-5 h-5 text-brand-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            <div>
                              <p className="text-2xl font-bold gradient-text">
                                {plan.cloudCost}
                              </p>
                              <span className="text-xl text-[#ff555a] whitespace-nowrap">
                                <span>(</span>
                                -5,000
                                <span className="text-sm">円</span>
                                <span>)</span>
                              </span>
                            </div>
                          </div>
                          <p className="text-white/50 text-xs mt-1">クラウド管理ツール利用料</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-2xl font-bold gradient-text">
                            {plan.cloudCost}<span className="text-sm ml-1">(税込)/月</span>
                          </p>
                          <p className="text-white/50 text-xs mt-1">クラウド管理ツール利用料</p>
                        </div>
                      )}
                    </div>
                  )}
                  <div>
                    <p className="text-white/60 text-sm mb-1">安心プラン</p>
                    {showDSystemPlans ? (
                      <div>
                        <div className="flex items-center gap-2 md:gap-3">
                          <p className="text-xl text-white/40 line-through decoration-[#ff555a]">
                            5,000円
                          </p>
                          <svg className="w-5 h-5 text-brand-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <div>
                            <p className="text-2xl font-bold gradient-text">
                              {plan.insuranceCost}
                            </p>
                            <span className="text-xl text-[#ff555a] whitespace-nowrap">
                              <span>(</span>
                              -2000
                              <span className="text-sm">円</span>
                              <span>)</span>
                            </span>
                          </div>
                        </div>
                        <p className="text-white/50 text-xs mt-1">LEDパネル故障時に対応</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-2xl font-bold gradient-text">
                          {plan.insuranceCost}<span className="text-sm ml-1">(税込)/月</span>
                        </p>
                        <p className="text-white/50 text-xs mt-1">LEDパネル故障時に対応</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-brand-light-blue font-semibold mb-4">主な機能</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-white/80 text-sm">
                        <svg className="w-5 h-5 text-brand-light-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-brand-light-blue font-semibold mb-4">サポート内容</p>
                  <ul className="space-y-3">
                    {plan.supports.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-white/80 text-sm">
                        <svg className="w-5 h-5 text-brand-light-blue mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8 p-4 bg-brand-light-blue/5 rounded-lg">
                  <p className="text-brand-light-blue font-semibold mb-3 text-sm">※注</p>
                  <ul className="space-y-2">
                    {plan.notes.map((note, idx) => (
                      <li key={idx} className="text-white/60 text-xs leading-relaxed">
                        ・{note}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-grow"></div>

                <a 
                  href="#contact" 
                  className={`w-full py-3 rounded-full font-semibold tracking-wider transition-all inline-block text-center ${
                    showDSystemPlans
                      ? 'bg-gradient-blue text-white hover-glow'
                      : plan.recommended 
                        ? 'bg-gradient-blue text-white hover-glow' 
                        : 'bg-transparent border border-brand-light-blue/30 text-brand-light-blue hover:border-brand-light-blue/60'
                  }`}
                >
                  詳細を聞いてみる
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
