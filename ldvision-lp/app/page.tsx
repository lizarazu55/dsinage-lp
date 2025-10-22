'use client'

import Image from 'next/image'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { PricingSectionV1, PricingSectionV2 } from '@/components/PricingSection'

// プランセクションのバージョン切り替え (V1 または V2)
const PRICING_VERSION = 'V1'

const navItems = [
  { href: '#vision', label: 'LD-visionとは' },
  { href: '#location', label: 'ロケーション' },
  { href: '#traffic', label: '人流データ' },
  { href: '#pricing', label: '放映プラン' },
  { href: '#guidelines', label: '入稿・基準' },
  { href: '#workflow', label: '導入の流れ' },
]

const heroStats = [
  { value: '295,363', suffix: '人', label: '月間来訪者数（2025年7月計測）' },
  { value: '9,528', suffix: '人', label: '1日平均来訪者数' },
  { value: '17', suffix: '時間', label: '稼働時間（7:00〜24:00）' },
]

const overviewPoints = [
  {
    title: '駅前ランドマークでの広告出稿',
    description:
      '越谷駅東口から徒歩2分。駅前と商業施設を結ぶ通りの正面に位置し、通勤・通学・買い物客にダイレクトにリーチできます。',
  },
  {
    title: '4:3大型LEDパネル',
    description:
      '横幅3.84m × 縦2.88mの大型サイズ。迫力のある動画・静止画・音声による訴求で街行く人の記憶に残ります。',
  },
  {
    title: '長時間ローテーション',
    description: '7〜24時の17時間放映により、朝夕のピークからナイトタイムまで幅広い時間帯をカバーします。',
  },
  {
    title: '運用・差し替えサポート',
    description:
      '入稿データの確認や差し替えをサポート。特別編集が必要な場合も相談可能です。（別途お見積もり）',
  },
]

const locationHighlights = [
  {
    title: '駅改札からの導線上',
    description: '東口改札までの通行導線沿いに設置。朝夕の乗降客に効率よくアプローチできます。',
  },
  {
    title: '商業エリアとの交差点',
    description:
      '付近にあるショッピングモールや飲食街へ向かう歩行者導線上にあり、購買意欲の高い来訪者へリーチします。',
  },
  {
    title: '昼夜を問わない視認性',
    description: '高輝度LEDで日中の自然光にも強く、夜間は街のランドマークとして存在感を放ちます。',
  },
]


const visionSpecs = [
  { label: 'LEDサイズ', value: '3840mm × 2880mm' },
  { label: 'ドットピッチ', value: '3.8mm' },
  { label: '画像数', value: '7050dots' },
  { label: '解像度 (W×H)', value: '84 × 84' },
  { label: 'サイズ (W×H)', value: '320mm × 320mm' },
  { label: '画像構成', value: 'SMD1515' },
  { label: '輝度', value: '5000 nits (cd/m2)' },
  { label: '音声出力', value: 'あり' },
]

const packageSections = [
  {
    key: 'spec',
    label: 'Specifications',
    heading: 'ビジョン仕様',
    description: '越谷LD-visionの技術仕様と性能詳細をご確認ください。',
  },
  {
    key: 'plan',
    label: 'Packages',
    heading: 'プランと料金',
    description: '掲載期間や放映回数に合わせた最適な放映プランをご提案します。',
  },
]

const videoSubmissionSpecs = [
  { label: 'フォーマット', value: 'MP4, WMV, AVI, MOV, DivX, MPG (mpeg1のみ), FLV, RSS, SWF, asp, Web (HTML)' },
  { label: '動画サイズ', value: '横924 × 縦672 (11:8)' },
  { label: 'ファイルサイズ', value: '800MB' },
  { label: '映像コーデック', value: 'H.264, WMV2, WMV3, MPG, MPEG4, QTRLE, DivX' },
  { label: '音声コーデック', value: 'AAC, MP3, WMAPRO, WMA, WMAV2' },
  { label: 'フレームレート', value: '30fps' },
  { label: '動画尺', value: '15秒 または 30秒' },
]

const imageSubmissionSpecs = [
  { label: 'フォーマット', value: 'PNG, JPG, JPEG, BMP' },
  { label: '画像サイズ', value: '横924 × 縦672 (11:8)' },
  { label: 'ファイルサイズ', value: '800MB' },
]

const restrictions = [
  '公序良俗に反する、または暴力・差別的な表現',
  '誤認を招く恐れのある虚偽・誇大な広告内容',
  '第三者の著作権・肖像権・商標権等を侵害する素材',
  '各種法律（薬機法・景表法など）に抵触する表現',
  '周辺環境に配慮して禁止されている過度な点滅や大音量',
]

const steps = [
  {
    title: '01. お問い合わせ',
    description:
      '掲載希望時期や訴求内容をヒアリングし、枠の空き状況と概算費用をお伝えします。',
  },
  {
    title: '02. プラン設計',
    description:
      '人流データやターゲットに合わせ、放映ローテーションやクリエイティブの方向性を共同設計します。',
  },
  {
    title: '03. データ入稿・審査',
    description:
      '入稿ガイドラインに沿って素材を確認。必要に応じて差し替えサポートや編集対応を行います。',
  },
  {
    title: '04. 放映開始・フィードバック',
    description:
      '放映開始後も素材差し替えやレポーティングで伴走。長期掲出への拡張もスムーズです。',
  },
]

const contactReasons = [
  '放映枠の空き状況と料金を知りたい',
  'キャンペーン時期に向けたスケジュールを相談したい',
  'クリエイティブ制作も含めてまとめて依頼したい',
]

const companyInfo = {
  name: '株式会社Rizarazu',
  service: '越谷 LD-vision 運営／広告企画・制作',
  address: '〒343-0816 埼玉県越谷市弥生町505-28',
  note: 'LD-visionはRizarazu Corporationが企画・運用する地域密着型デジタルサイネージです。',
}

function Navigation({ scrolled }: { scrolled: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-[#04060c] border-b ${
        scrolled ? 'border-[rgba(0,170,255,0.2)] shadow-lg' : 'border-transparent'
      }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between py-[18px]">
          <button
            onClick={scrollToTop}
            className="text-brand-light-blue font-normal text-[20.5px] tracking-[4.915px] uppercase hover:text-brand-light-blue/80 transition-colors"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            LD-vision
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-white transition-colors text-sm"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] text-[rgba(255,255,255,0.7)] px-[11px] py-[6px] pb-[7.97px] rounded-full font-[350] tracking-[1.498px] text-[12.5px] uppercase hover:text-white transition-colors ml-2"
              style={{ fontFamily: 'var(--font-noto-sans)' }}
            >
              問い合わせ
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden text-white relative w-10 h-10 flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-brand-light-blue/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg className="w-6 h-6 transition-transform duration-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-brand-dark/95 backdrop-blur-md rounded-lg p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white py-2 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-brand-light-blue hover:text-brand-light-blue/80 py-2 transition-colors"
            >
              空き枠を問い合わせる
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}


function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ company: '', name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('送信エラー:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-white/70 mb-2">
            会社・店舗名
          </label>
          <input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-brand-light-blue transition"
            placeholder="株式会社〇〇"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-white/70 mb-2">
            お名前 <span className="text-brand-light-blue text-sm">※必須</span>
          </label>
          <input
            id="name"
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
          <label htmlFor="email" className="block text-white/70 mb-2">
            メールアドレス <span className="text-brand-light-blue text-sm">※必須</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-brand-light-blue transition"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-white/70 mb-2">
            電話番号 <span className="text-brand-light-blue text-sm">※必須</span>
          </label>
          <input
            id="phone"
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
        <label htmlFor="message" className="block text-white/70 mb-2">
          お問い合わせ内容 <span className="text-brand-light-blue text-sm">※必須</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-brand-light-blue transition resize-none"
          placeholder="放映希望期間やご相談内容をご記入ください。"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-blue py-3 rounded-full font-semibold tracking-wider text-white hover:opacity-90 transition disabled:opacity-50"
      >
        {isSubmitting ? '送信中...' : '入力内容を送信する'}
      </button>

      {submitStatus === 'success' && (
        <p className="text-brand-light-blue text-sm text-center">送信が完了しました。担当者より折り返しご連絡いたします。</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-400 text-sm text-center">送信に失敗しました。お手数ですが時間を置いて再度お試しください。</p>
      )}
    </form>
  )
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-x-hidden">
      <Navigation scrolled={scrolled} />

      <section id="hero" className="bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
          <Image
            src="/Hero.png"
            alt="越谷LD-vision屋外ビジョン"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: 'center',
            }}
          />
        </div>

        <div className="section-padding py-16 md:py-20">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <div className="bg-[#001a2e] rounded-[32px] p-8 md:p-12 space-y-6">
              <p className="uppercase tracking-[0.4em] text-sm text-brand-light-blue/60">Produced by Rizarazu Corporation</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                越谷 LD-vision
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                越谷駅東口から徒歩2分。月間約300,000人が行き交う駅前で、<br className="hidden md:block" />
                大型LEDビジョンが地域とブランドを結びます。
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
                <a
                  href="#contact"
                  className="bg-gradient-blue text-white px-8 py-3 rounded-full font-semibold tracking-wider hover:opacity-90 transition"
                >
                  空き枠を問い合わせる
                </a>
                <a
                  href="#pricing"
                  className="px-8 py-3 rounded-full border border-white/20 text-white/80 hover:border-brand-light-blue hover:text-white transition"
                >
                  放映プランを見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="py-20 bg-brand-dark/30 relative">
        <div className="section-padding">
          <div className="text-center mb-12">
            <p className="text-sm text-brand-light-blue/80 uppercase tracking-[0.3em]">Overview</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">LD-visionとは</h2>
            <p className="text-white/60">越谷駅東口のランドマークLEDビジョンとして、ブランド体験を印象的に届けます。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {overviewPoints.map((point) => (
              <div key={point.title} className="glass-effect rounded-2xl p-8 space-y-3">
                <h3 className="text-xl font-semibold text-brand-light-blue">{point.title}</h3>
                <p className="text-white/70 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="py-20 bg-brand-dark/40 relative">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">ロケーションの強み</h2>
            <p className="text-white/60">駅前と商業地域の2つをカバーする導線で、高いリーチを確保します。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            <div className="relative group">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/location.png"
                  alt="越谷LD-vision 日中の様子"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-center text-white/70 mt-4 text-sm">日中</p>
            </div>
            <div className="relative group">
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/night_location.png"
                  alt="越谷LD-vision 夜間の様子"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-center text-white/70 mt-4 text-sm">夜間</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locationHighlights.map((highlight) => (
              <div key={highlight.title} className="glass-effect rounded-2xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-brand-light-blue">{highlight.title}</h3>
                <p className="text-white/70 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="traffic" className="py-20 relative">
        <div className="section-padding max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">人流データ</h2>
            <p className="text-white/60">越谷駅東口の人流計測結果を基に、効果的な放映設計を行います（2025年7月計測）。</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
            {heroStats.map((stat) => (
              <div key={`traffic-${stat.label}`} className="glass-effect rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold text-brand-light-blue">
                  {stat.value}
                  <span className="text-2xl text-white/70 ml-1">{stat.suffix}</span>
                </p>
                <p className="text-sm text-white/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="relative group mb-8">
            <div className="grid md:grid-cols-3 gap-6 blur-[8px] group-hover:blur-[6px] transition-all duration-500">
              <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src="/時間別_来訪者数.png"
                  alt="時間別来訪者数"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src="/男女別_構成比率.png"
                  alt="男女別構成比率"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="relative h-[250px] md:h-[300px] rounded-2xl overflow-hidden bg-white/5">
                <Image
                  src="/年代別_構成比率.png"
                  alt="年代別構成比率"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-4"
                />
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-[rgba(0,26,46,0.95)] backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center space-y-6 max-w-md shadow-2xl border border-brand-light-blue/20 pointer-events-auto">
                <div className="inline-block p-3 bg-brand-light-blue/10 rounded-full mb-2">
                  <svg className="w-8 h-8 text-brand-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">詳細な人流データ</h3>
                <p className="text-white/80 leading-relaxed">
                  時間帯別・年代別・性別毎の<br />
                  詳細分析データ
                </p>
                <a
                  href="#contact"
                  className="inline-block bg-gradient-blue text-white px-8 py-3 rounded-full font-semibold tracking-wider hover:opacity-90 transition"
                >
                  分析データお問い合わせ
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm text-white/50 text-center">
            ※詳細データは、お問い合わせ頂いた企業様に個別でご案内いたします。
          </p>
        </div>
      </section>

      <section id="packages" className="py-20 bg-brand-dark/30 relative">
        <div className="section-padding space-y-16">
          {packageSections.map((section) => (
            <div key={section.key} id={section.key === 'plan' ? 'pricing' : undefined} className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-sm text-brand-light-blue/80 uppercase tracking-[0.3em]">{section.label}</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{section.heading}</h2>
                <p className="text-white/60">{section.description}</p>
              </div>

              {/* ビジョン仕様 */}
              {section.key === 'spec' ? (
                <div className="grid md:grid-cols-5 gap-8 items-center">
                  <div className="md:col-span-2 relative group">
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src="/Hero.png"
                        alt="越谷LD-visionビジョン"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="glass-effect rounded-2xl overflow-hidden">
                      <div className="bg-brand-light-blue/10 px-6 py-4 border-b border-white/10">
                        <h3 className="text-xl font-semibold text-brand-light-blue">技術仕様</h3>
                      </div>
                      <div className="divide-y divide-white/5">
                        {visionSpecs.map((spec, index) => (
                          <div
                            key={spec.label}
                            className={`grid grid-cols-2 px-6 py-4 ${
                              index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'
                            }`}
                          >
                            <div className="text-white/70 font-medium">{spec.label}</div>
                            <div className="text-white font-semibold">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // 放映プランと料金
                PRICING_VERSION === 'V1' ? <PricingSectionV1 /> : <PricingSectionV2 />
              )}
            </div>
          ))}

          {/* 一旦残す */}
          {/* <div className="max-w-4xl mx-auto glass-effect rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold text-brand-light-blue mb-3">青年会議所・商工会議所会員特典</h3>
            <p className="text-white/70">
              対象会員企業は掲載料金を通常価格から30%OFFでご案内します。会員証明をご準備のうえ、備考欄にご記入ください。
            </p>
          </div> */}
        </div>
      </section>

      <section id="guidelines" className="py-20 relative">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">入稿ガイドラインと掲載基準</h2>
            <p className="text-white/60">掲載コンテンツの技術仕様と入稿規定をご確認ください。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="glass-effect rounded-2xl overflow-hidden">
              <div className="bg-brand-light-blue/10 px-6 py-4 border-b border-white/10">
                <h3 className="text-xl font-semibold text-brand-light-blue">動画コンテンツ入稿規定</h3>
              </div>
              <div className="divide-y divide-white/5">
                {videoSubmissionSpecs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`grid grid-cols-3 px-6 py-4 ${
                      index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'
                    }`}
                  >
                    <div className="text-white/70 font-medium">{spec.label}</div>
                    <div className="col-span-2 text-white text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl overflow-hidden">
              <div className="bg-brand-light-blue/10 px-6 py-4 border-b border-white/10">
                <h3 className="text-xl font-semibold text-brand-light-blue">静止画コンテンツ入稿規定</h3>
              </div>
              <div className="divide-y divide-white/5">
                {imageSubmissionSpecs.map((spec, index) => (
                  <div
                    key={spec.label}
                    className={`grid grid-cols-3 px-6 py-4 ${
                      index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'
                    }`}
                  >
                    <div className="text-white/70 font-medium">{spec.label}</div>
                    <div className="col-span-2 text-white text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto space-y-4">
            <h3 className="text-xl font-semibold text-brand-light-blue">掲載できないコンテンツ（抜粋）</h3>
            <ul className="space-y-3 text-white/70 leading-relaxed">
              {restrictions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-brand-light-blue"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-white/50">※個別案件の可否は事前にご相談ください。</p>
          </div>
        </div>
      </section>

      <section id="workflow" className="py-20 bg-brand-dark/30 relative">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">導入の流れ</h2>
            <p className="text-white/60">初回相談から放映後のフォローまで、専任担当が伴走します。</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div key={step.title} className="glass-effect rounded-2xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-brand-light-blue">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="pt-20 relative">
        <div className="section-padding">
          <div className="grid md:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ</h2>
                <p className="text-white/60">
                  フォームまたは既存のご連絡チャネルよりお気軽にお問い合わせください。当日中のご返信も可能です。
                </p>
              </div>

              <div className="space-y-3">
                {contactReasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-light-blue"></span>
                    <span className="text-white/70">{reason}</span>
                  </div>
                ))}
              </div>

              <div className="glass-effect rounded-2xl p-6 space-y-2">
                <h3 className="text-lg font-semibold text-brand-light-blue">会員特典のご案内</h3>
                <p className="text-white/70">
                  青年会議所・商工会議所会員の方は掲載料金30%OFFが適用されます。所属団体名を備考欄にご記入ください。
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              <ContactForm />
            </div>
          </div>

          {/* <div className="mt-12 max-w-4xl mx-auto text-center space-y-1 text-white/60 text-sm">
            <p>{companyInfo.name}</p>
            <p>{companyInfo.service}</p>
            <p>{companyInfo.address}</p>
            <p className="text-white/50 text-xs mt-2">{companyInfo.note}</p>
          </div> */}
        </div>
      </section>

      <footer className="py-10 text-center text-white/50 text-sm">
        <p>© {new Date().getFullYear()} Rizarazu Corporation. All Rights Reserved.</p>
      </footer>
    </main>
  )
}
