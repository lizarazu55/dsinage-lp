'use client'

import { useState } from 'react'

const pricingPlans = [
  {
    duration: '15秒',
    plans: [
      { period: '1週間', airCount: 476, price: 60000, pricePerAir: 126, pricePerPerson: 0.89 },
      { period: '2週間', airCount: 952, price: 108000, pricePerAir: 113, pricePerPerson: 0.80 },
      { period: '1ヶ月', airCount: 1904, price: 194400, pricePerAir: 93, pricePerPerson: 0.65 },
      { period: '3ヶ月', airCount: 5718, price: 524800, pricePerAir: 84, pricePerPerson: 0.59 },
      { period: '6ヶ月', airCount: 17154, price: 944700, pricePerAir: 76, pricePerPerson: 0.53 },
      { period: '1年', airCount: 34306, price: 1700000, pricePerAir: 68, pricePerPerson: 0.47 },
    ],
  },
  {
    duration: '30秒',
    plans: [
      { period: '1週間', airCount: 476, price: 120000, pricePerAir: 252, pricePerPerson: 1.78 },
      { period: '2週間', airCount: 952, price: 216000, pricePerAir: 226, pricePerPerson: 1.60 },
      { period: '1ヶ月', airCount: 1904, price: 388800, pricePerAir: 186, pricePerPerson: 1.30 },
      { period: '3ヶ月', airCount: 5718, price: 1096000, pricePerAir: 168, pricePerPerson: 1.18 },
      { period: '6ヶ月', airCount: 17154, price: 1889400, pricePerAir: 152, pricePerPerson: 1.06 },
      { period: '1年', airCount: 34306, price: 3400000, pricePerAir: 136, pricePerPerson: 0.94 },
    ],
  },
  {
    duration: '60秒',
    plans: [
      { period: '1週間', airCount: 476, price: 240000, pricePerAir: 504, pricePerPerson: 3.56 },
      { period: '2週間', airCount: 952, price: 432000, pricePerAir: 452, pricePerPerson: 3.20 },
      { period: '1ヶ月', airCount: 1904, price: 777600, pricePerAir: 372, pricePerPerson: 2.60 },
      { period: '3ヶ月', airCount: 5718, price: 2192000, pricePerAir: 336, pricePerPerson: 2.36 },
      { period: '6ヶ月', airCount: 17154, price: 3778800, pricePerAir: 304, pricePerPerson: 2.12 },
      { period: '1年', airCount: 34306, price: 6800000, pricePerAir: 272, pricePerPerson: 1.88 },
    ],
  },
]

export function PricingSectionV1() {
  const [selectedTab, setSelectedTab] = useState(0)
  const selectedPlan = pricingPlans[selectedTab]

  return (
    <div className="space-y-8">
      {/* タブ */}
      <div className="flex justify-center gap-4">
        {pricingPlans.map((plan, index) => (
          <button
            key={plan.duration}
            onClick={() => setSelectedTab(index)}
            className={`px-8 py-3 rounded-full font-semibold transition-all ${
              selectedTab === index
                ? 'bg-brand-light-blue text-white'
                : 'glass-effect text-white/70 hover:text-white'
            }`}
          >
            {plan.duration}プラン
          </button>
        ))}
      </div>

      {/* 料金表 */}
      <div className="glass-effect rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-brand-light-blue/10 border-b border-white/10">
                <th className="px-6 py-4 text-left text-white/90 font-semibold">期間</th>
                <th className="px-6 py-4 text-right text-white/90 font-semibold">放映回数</th>
                <th className="px-6 py-4 text-right text-white/90 font-semibold">料金（税込）</th>
                <th className="px-6 py-4 text-right text-white/90 font-semibold">1枠単価</th>
                <th className="px-6 py-4 text-right text-white/90 font-semibold">
                  <span className="text-brand-light-blue">単価/人</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedPlan.plans.map((item) => (
                <tr
                  key={item.period}
                  className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                    item.period === '1年' ? 'bg-gradient-to-r from-brand-light-blue/10 to-transparent' : ''
                  }`}
                >
                  <td className="px-6 py-4 text-white font-medium">{item.period}</td>
                  <td className="px-6 py-4 text-right text-white/70">
                    {item.airCount.toLocaleString()}回
                  </td>
                  <td className="px-6 py-4 text-right text-white font-semibold">
                    ¥{item.price.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right text-white/70">{item.pricePerAir}円</td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-brand-light-blue font-bold text-lg">
                      {item.pricePerPerson}円/人
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ROI訴求エリア */}
      <div className="glass-effect rounded-2xl p-8 text-center space-y-6 border-2 border-brand-light-blue/30">
        <div className="inline-block p-3 bg-brand-light-blue/10 rounded-full">
          <svg className="w-8 h-8 text-brand-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">圧倒的なコストパフォーマンス</h3>
        <div className="max-w-2xl mx-auto space-y-4">
          <p className="text-white/80 text-lg">
            月間<span className="text-brand-light-blue font-bold text-4xl mx-2">295,363人</span>の来訪者に
          </p>
          <p className="text-white/80 text-lg">
            わずか
            <span className="text-brand-light-blue font-bold text-5xl mx-2">
              {selectedPlan.plans[selectedPlan.plans.length - 1].pricePerPerson}円/人
            </span>
            でリーチ
          </p>
          <p className="text-white/60 text-sm mt-4">※1年プランの場合</p>
        </div>
      </div>

      {/* 注意事項 */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-effect rounded-2xl p-6 space-y-3">
          <h4 className="text-lg font-semibold text-brand-light-blue flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            料金に含まれるもの
          </h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light-blue"></span>
              <span>68回/日の放映（7:00〜24:00）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light-blue"></span>
              <span>月曜始まり・日曜終わりの週単位</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light-blue"></span>
              <span>基本的なスケジュール調整</span>
            </li>
          </ul>
        </div>
        <div className="glass-effect rounded-2xl p-6 space-y-3">
          <h4 className="text-lg font-semibold text-brand-light-blue flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            別途費用
          </h4>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light-blue"></span>
              <span>変則的なスケジュール: 編集手数料 30,000円+税</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light-blue"></span>
              <span>特別編集: 別途お見積もり</span>
            </li>
          </ul>
        </div>
      </div>

      {/* オーダーメイドプラン */}
      <div className="glass-effect rounded-2xl p-8 space-y-6 border border-dashed border-brand-light-blue/40">
        <div className="text-center">
          <div className="inline-block p-3 bg-brand-light-blue/10 rounded-full mb-4">
            <svg className="w-8 h-8 text-brand-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-brand-light-blue mb-3">オーダーメイドプラン</h3>
          <p className="text-white/70 mb-6">ご要望に応じて柔軟にプランニングいたします</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-light-blue"></span>
            <span className="text-white/70">時間帯占有・特別編成</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-light-blue"></span>
            <span className="text-white/70">イベント連動・コラボレーション</span>
          </div>
          {/* <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-light-blue"></span>
            <span className="text-white/70">制作ディレクション込み</span>
          </div> */}
          {/* <div className="flex items-start gap-3">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-light-blue"></span>
            <span className="text-white/70">現地収録サポート</span>
          </div> */}
        </div>
        <div className="text-center pt-4">
          <a
            href="#contact"
            className="inline-block bg-gradient-blue text-white px-8 py-3 rounded-full font-semibold tracking-wider hover:opacity-90 transition"
          >
            相談する
          </a>
        </div>
      </div>
    </div>
  )
}

export function PricingSectionV2() {
  const [mainTab, setMainTab] = useState<'short' | 'long' | 'custom'>('short')
  const [durationTab, setDurationTab] = useState(0) // 0: 15秒, 1: 30秒, 2: 60秒

  // 短期プラン（1週間、2週間、1ヶ月）
  const shortTermPlans = pricingPlans[durationTab].plans.filter(p =>
    ['1週間', '2週間', '1ヶ月'].includes(p.period)
  )

  // 長期プラン（3ヶ月、6ヶ月、1年）
  const longTermPlans = pricingPlans[durationTab].plans.filter(p =>
    ['3ヶ月', '6ヶ月', '1年'].includes(p.period)
  )

  const currentPlans = mainTab === 'short' ? shortTermPlans : longTermPlans

  return (
    <div className="space-y-8">
      {/* メインタブ */}
      <div className="flex justify-center gap-4 flex-wrap">
        <button
          onClick={() => setMainTab('short')}
          className={`px-8 py-3 rounded-full font-semibold transition-all ${
            mainTab === 'short'
              ? 'bg-brand-light-blue text-white'
              : 'glass-effect text-white/70 hover:text-white'
          }`}
        >
          短期プラン
        </button>
        <button
          onClick={() => setMainTab('long')}
          className={`px-8 py-3 rounded-full font-semibold transition-all ${
            mainTab === 'long'
              ? 'bg-brand-light-blue text-white'
              : 'glass-effect text-white/70 hover:text-white'
          }`}
        >
          長期プラン
        </button>
        <button
          onClick={() => setMainTab('custom')}
          className={`px-8 py-3 rounded-full font-semibold transition-all ${
            mainTab === 'custom'
              ? 'bg-brand-light-blue text-white'
              : 'glass-effect text-white/70 hover:text-white'
          }`}
        >
          オーダーメイド
        </button>
      </div>

      {/* 短期・長期プラン */}
      {mainTab !== 'custom' && (
        <>
          {/* 訴求メッセージ */}
          <div className="text-center glass-effect rounded-2xl p-6">
            {mainTab === 'short' ? (
              <>
                <h3 className="text-xl font-semibold text-brand-light-blue mb-2">まずは試したい方に</h3>
                <p className="text-white/70">短期キャンペーンやイベント告知に最適なプランです</p>
              </>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-brand-light-blue mb-2">コスト重視・長期ブランディング</h3>
                <p className="text-white/70">長期契約で圧倒的なコストパフォーマンスを実現</p>
              </>
            )}
          </div>

          {/* 尺選択サブタブ */}
          <div className="flex justify-center gap-3">
            {pricingPlans.map((plan, index) => (
              <button
                key={plan.duration}
                onClick={() => setDurationTab(index)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  durationTab === index
                    ? 'bg-white/10 text-white border border-brand-light-blue/50'
                    : 'glass-effect text-white/60 hover:text-white border border-transparent'
                }`}
              >
                {plan.duration}
              </button>
            ))}
          </div>

          {/* 料金表 */}
          <div className="glass-effect rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-brand-light-blue/10 border-b border-white/10">
                    <th className="px-6 py-4 text-left text-white/90 font-semibold">期間</th>
                    <th className="px-6 py-4 text-right text-white/90 font-semibold">放映回数</th>
                    <th className="px-6 py-4 text-right text-white/90 font-semibold">料金（税込）</th>
                    <th className="px-6 py-4 text-right text-white/90 font-semibold">1枠単価</th>
                    <th className="px-6 py-4 text-right text-white/90 font-semibold">
                      <span className="text-brand-light-blue">単価/人</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentPlans.map((item) => (
                    <tr
                      key={item.period}
                      className={`border-b border-white/5 hover:bg-white/5 transition-colors ${
                        item.period === '1年' ? 'bg-gradient-to-r from-brand-light-blue/10 to-transparent' : ''
                      }`}
                    >
                      <td className="px-6 py-4 text-white font-medium">{item.period}</td>
                      <td className="px-6 py-4 text-right text-white/70">
                        {item.airCount.toLocaleString()}回
                      </td>
                      <td className="px-6 py-4 text-right text-white font-semibold">
                        ¥{item.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right text-white/70">{item.pricePerAir}円</td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-brand-light-blue font-bold text-lg">
                          {item.pricePerPerson}円/人
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 長期プランのROI強調 */}
          {mainTab === 'long' && (
            <div className="glass-effect rounded-2xl p-8 text-center space-y-6 border-2 border-brand-light-blue/30">
              <div className="inline-block p-3 bg-brand-light-blue/10 rounded-full">
                <svg className="w-8 h-8 text-brand-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">圧倒的なコストパフォーマンス</h3>
              <div className="max-w-2xl mx-auto space-y-4">
                <p className="text-white/80 text-lg">
                  月間<span className="text-brand-light-blue font-bold text-2xl mx-2">295,363人</span>の来訪者に
                </p>
                <p className="text-white/80 text-lg">
                  わずか
                  <span className="text-brand-light-blue font-bold text-3xl mx-2">
                    {longTermPlans[longTermPlans.length - 1].pricePerPerson}円/人
                  </span>
                  でリーチ
                </p>
                <p className="text-white/60 text-sm mt-4">※1年プラン・{pricingPlans[durationTab].duration}の場合</p>
              </div>
            </div>
          )}

          {/* 注意事項 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-effect rounded-2xl p-6 space-y-3">
              <h4 className="text-lg font-semibold text-brand-light-blue flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                料金に含まれるもの
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light-blue"></span>
                  <span>68回/日の放映（7:00〜24:00）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light-blue"></span>
                  <span>月曜始まり・日曜終わりの週単位</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light-blue"></span>
                  <span>基本的なスケジュール調整</span>
                </li>
              </ul>
            </div>
            <div className="glass-effect rounded-2xl p-6 space-y-3">
              <h4 className="text-lg font-semibold text-brand-light-blue flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                別途費用
              </h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light-blue"></span>
                  <span>変則的なスケジュール: 編集手数料 30,000円+税</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-light-blue"></span>
                  <span>特別編集: 別途お見積もり</span>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {/* オーダーメイドプラン */}
      {mainTab === 'custom' && (
        <div className="space-y-8">
          {/* オプション例 */}
          <div className="glass-effect rounded-2xl p-8 space-y-6">
            <div className="text-center mb-6">
              <div className="inline-block p-3 bg-brand-light-blue/10 rounded-full mb-4">
                <svg className="w-8 h-8 text-brand-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-light-blue mb-3">オーダーメイドプラン</h3>
              <p className="text-white/70">ご要望に応じて柔軟にプランニングいたします</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-light-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-white font-medium">時間帯占有・特別編成</p>
                  <p className="text-white/60 text-sm">特定の時間帯を独占して放映</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-light-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-white font-medium">イベント連動・コラボレーション</p>
                  <p className="text-white/60 text-sm">地域イベントと連携した企画</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-light-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-white font-medium">制作ディレクション込み</p>
                  <p className="text-white/60 text-sm">企画から制作まで一貫サポート</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-brand-light-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-white font-medium">現地収録サポート</p>
                  <p className="text-white/60 text-sm">撮影・編集のサポート対応</p>
                </div>
              </div>
            </div>
          </div>

          {/* 問い合わせフォーム */}
          <div className="glass-effect rounded-2xl p-8">
            <h4 className="text-xl font-semibold text-white mb-6 text-center">お問い合わせフォーム</h4>
            <CustomPlanContactForm />
          </div>
        </div>
      )}
    </div>
  )
}

// オーダーメイドプラン用の簡易フォーム
function CustomPlanContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // フォーム送信処理（page.tsxのContactFormと同じロジック）
    window.location.href = '#contact'
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="custom-company" className="block text-white/70 mb-2 text-sm">
            会社・店舗名
          </label>
          <input
            id="custom-company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-brand-light-blue transition"
            placeholder="株式会社〇〇"
          />
        </div>
        <div>
          <label htmlFor="custom-name" className="block text-white/70 mb-2 text-sm">
            お名前 <span className="text-brand-light-blue">※必須</span>
          </label>
          <input
            id="custom-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-brand-light-blue transition"
            placeholder="山田太郎"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="custom-email" className="block text-white/70 mb-2 text-sm">
            メールアドレス <span className="text-brand-light-blue">※必須</span>
          </label>
          <input
            type="email"
            id="custom-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-brand-light-blue transition"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label htmlFor="custom-phone" className="block text-white/70 mb-2 text-sm">
            電話番号 <span className="text-brand-light-blue">※必須</span>
          </label>
          <input
            id="custom-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-brand-light-blue transition"
            placeholder="048-000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="custom-message" className="block text-white/70 mb-2 text-sm">
          ご要望内容 <span className="text-brand-light-blue">※必須</span>
        </label>
        <textarea
          id="custom-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-brand-light-blue transition resize-none"
          placeholder="ご希望のプラン内容や実施時期などをご記入ください。"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-blue py-3 rounded-full font-semibold tracking-wider text-white hover:opacity-90 transition"
      >
        お問い合わせ内容を送信する
      </button>
    </form>
  )
}
