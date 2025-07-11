import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}', // Dosya yolunu kendi yapına göre ayarla
  ],
  theme: {
    extend: {
      colors: {
        curtain: 'rgba(91, 112, 131, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
