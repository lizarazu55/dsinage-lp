import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Analytics } from '@vercel/analytics/next';

import { 
  GoogleAnalytics, 
  // GoogleTagManager 実装予定
 } from '@next/third-parties/google'


const notoSansJP = localFont({
  src: './fonts/NotoSansJP-VariableFont_wght.ttf',
  weight: '100 900',
  variable: '--font-noto-sans-jp',
  display: 'swap',
  fallback: [
    'Noto Sans JP',
    'Hiragino Kaku Gothic ProN',
    'Hiragino Sans',
    'Yu Gothic',
    'Meiryo',
    'sans-serif',
  ],
})
const playfair = localFont({
  src: [
    { path: './fonts/playfair-display-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/playfair-display-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: './fonts/playfair-display-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: './fonts/playfair-display-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-playfair',
  display: 'swap',
  fallback: ['Times New Roman', 'Times', 'serif'],
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
      <body className={`${notoSansJP.variable} ${playfair.variable}`}>
        {children}
        <Analytics />
        {isProduction && <GoogleAnalytics gaId={gaId} />}
        
      </body>
    </html>
  )
}
