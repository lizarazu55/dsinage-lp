import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-noto-serif-jp)", "Noto Serif JP", "serif"],
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      colors: {
        "brand-blue": "#0066cc",
        "brand-light-blue": "#00aaff",
        "brand-cyan": "#00d4ff",
        "brand-dark": "#1a1a1a",
        "brand-gray": "#2A2A2A",
        "brand-gold": "#D9AE0A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-blue": "linear-gradient(135deg, #0066cc 0%, #00aaff 100%)",
        "gradient-cyan":
          "linear-gradient(135deg, #00aaff 0%, #00d4ff 50%, #0099cc 100%)",
        "gradient-ocean":
          "linear-gradient(180deg, rgba(0,102,204,0.1) 0%, rgba(0,170,255,0.05) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in",
        "slide-up": "slideUp 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
        "rotate-3d": "rotate3d 20s linear infinite",
        "rotate-3d-slow": "rotate3d 30s linear infinite",
        fadeIn: "fadeInUp 0.5s ease-out",
        // NEW: 3回転して奥に移動するアニメーション (元に戻す場合はこの行を削除)
        "spin-and-shrink": "spinAndShrink 4s ease-in-out forwards",
        // "text-appear": "textAppear 1.5s ease-out 3s forwards", // JavaScriptで制御するため不要
        wave: "wave 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        rotate3d: {
          "0%": { transform: "perspective(1000px) rotateY(0deg)" },
          "100%": { transform: "perspective(1000px) rotateY(360deg)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.95)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        // NEW: 画像が3回転して奥に移動 (元に戻す場合はこのkeyframeを削除)
        spinAndShrink: {
          "0%": {
            transform:
              "perspective(1200px) rotateY(-60deg) translateZ(0px) scale(1)",
            opacity: "1",
          },
          "50%": {
            transform:
              "perspective(1200px) rotateY(1080deg) translateZ(100px) scale(1)",
            opacity: "0.8",
          },
          "100%": {
            transform:
              "perspective(1200px) rotateY(1080deg) translateZ(-300px) scale(0.7)",
            opacity: "0.4",
          },
        },
        // NEW: テキストが浮かび上がる (元に戻す場合はこのkeyframeを削除)
        textAppear: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        wave: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
