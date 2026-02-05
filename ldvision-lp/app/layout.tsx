import type { Metadata } from 'next'
import { Noto_Sans_JP, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

import { 
  GoogleAnalytics, 
  // GoogleTagManager 実装予定
 } from '@next/third-parties/google'


const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
})
const isProduction = process.env.NODE_ENV === 'production'
const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
// const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!

export const metadata: Metadata = {
  title: 'LD-vision | 越谷駅前のデジタルサイネージ',
  description:
    '越谷駅東口徒歩2分の大型LEDビジョン「LD-vision」。月間約30万人が行き交う駅前で、ブランドと地域を結びます。',
  keywords: 'LD-vision, デジタルサイネージ, 越谷, 広告, LEDビジョン',
  openGraph: {
    title: 'LD-vision | 越谷駅前のデジタルサイネージ',
    description:
      '越谷駅東口徒歩2分の大型LEDビジョン「LD-vision」。月間約30万人が行き交う駅前で、ブランドと地域を結びます。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      {/* {isProduction && <GoogleTagManager gtmId={gtmId} />} */}
      <body className={`${notoSansJP.className} ${notoSansJP.variable} ${playfair.variable}`}>
        {children}
        <Analytics />
        {isProduction && gaId && <GoogleAnalytics gaId={gaId} />}
        
      </body>
    </html>
  )
}
