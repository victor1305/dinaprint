import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: '#ff6b00',
        secondary: '#18988b',
        'font-primary': '#303030',
        'dina-gray': '#565656',
        'footer-bg': '#ededed',
        'footer-li': '#5e5e5e',
        'modal-back': 'rgba(0,0,0,0.8)'
      },
      boxShadow: {
        menu: '0 3px 6px 0 rgba(0,0,0,0.16)'
      },
      dropShadow: {
        'title-home': '2px 2px 2px black'
      }
    }
  },
  plugins: []
};
export default config;
