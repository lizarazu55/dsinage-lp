import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

import { 
  GoogleAnalytics, 
  // GoogleTagManager 実装予定
 } from '@next/third-parties/google'


const inter = Inter({ subsets: ['latin'] })
const notoSansJP = Noto_Sans_JP({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
})
const isProduction = process.env.NODE_ENV === 'production'
const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID!
// const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID!

export const metadata: Metadata = {
  title: 'D-signage | デジタルサイネージで新しい広告体験を',
  description: 'D-signageは最先端のデジタルサイネージソリューションを提供。高画質ディスプレイと簡単な操作で、あなたのビジネスを次のレベルへ。',
  keywords: 'デジタルサイネージ, digital signage, 広告, ディスプレイ, D-signage',
  openGraph: {
    title: 'D-signage | デジタルサイネージで新しい広告体験を',
    description: 'D-signageは最先端のデジタルサイネージソリューションを提供',
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
      <body className={`${inter.className} ${notoSansJP.variable}`}>
        {children}
        <Analytics />
        {isProduction && <GoogleAnalytics gaId={gaId} />}
        
      </body>
    </html>
  )
}