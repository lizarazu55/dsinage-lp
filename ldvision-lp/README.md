# LD-vision LP

越谷 LD-vision（駅前大型LEDビジョン）のランディングページです。

## 技術スタック

- Next.js 14
- TypeScript
- Tailwind CSS

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

http://localhost:3000 でアクセスできます。

## Vercelへのデプロイ

```bash
# Vercel CLIのインストール（未インストールの場合）
npm i -g vercel

# デプロイ
vercel
```

## 画像の差し替え

製品画像は `/public` ディレクトリに配置し、各コンポーネント内のプレースホルダーパスを実際の画像パスに変更してください。

## カスタマイズ

- カラーテーマ: `tailwind.config.ts` で変更可能
- コンテンツ: 各コンポーネントファイルを直接編集
- フォント: `app/layout.tsx` で変更可能
