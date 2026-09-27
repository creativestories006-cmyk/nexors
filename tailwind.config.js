/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: '#060608',
        panel: '#0D0D12',
        panel2: '#111118',
        ink: '#F2F1F6',
        muted: '#9A9AAC',
        violet: '#8B6CFF',
        cyan: '#37E6E0',
        magenta: '#FF5CB3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Sora"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
