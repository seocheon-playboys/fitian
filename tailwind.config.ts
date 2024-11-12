import type { Config } from 'tailwindcss';
import plugins from './plugins/tailwind.plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        static: {
          white: 'var(--white)',
        },
        coolgray: {
          100: 'var(--coolgray-100)',
          95: 'var(--coolgray-95)',
          90: 'var(--coolgray-90)',
          80: 'var(--coolgray-80)',
          70: 'var(--coolgray-70)',
          60: 'var(--coolgray-60)',
          50: 'var(--coolgray-50)',
          40: 'var(--coolgray-40)',
          30: 'var(--coolgray-30)',
          20: 'var(--coolgray-20)',
          15: 'var(--coolgray-15)',
          10: 'var(--coolgray-10)',
          8: 'var(--coolgray-8)',
          4: 'var(--coolgray-4)',
        },
        'aqua-blue': {
          100: 'var(--aqua-blue-100)',
          95: 'var(--aqua-blue-95)',
          90: 'var(--aqua-blue-90)',
          80: 'var(--aqua-blue-80)',
          70: 'var(--aqua-blue-70)',
          60: 'var(--aqua-blue-60)',
          50: 'var(--aqua-blue-50)',
          40: 'var(--aqua-blue-40)',
          30: 'var(--aqua-blue-30)',
          20: 'var(--aqua-blue-20)',
          15: 'var(--aqua-blue-15)',
          10: 'var(--aqua-blue-10)',
          5: 'var(--aqua-blue-5)',
        },
        'hue-blue': {
          100: 'var(--hue-blue-100)',
          90: 'var(--hue-blue-90)',
          80: 'var(--hue-blue-80)',
          70: 'var(--hue-blue-70)',
          60: 'var(--hue-blue-60)',
          50: 'var(--hue-blue-50)',
          40: 'var(--hue-blue-40)',
          30: 'var(--hue-blue-30)',
          20: 'var(--hue-blue-20)',
          15: 'var(--hue-blue-15)',
          10: 'var(--hue-blue-10)',
          8: 'var(--hue-blue-8)',
          5: 'var(--hue-blue-5)',
        },
      },
    },
  },
  plugins: [...plugins],
};
export default config;
