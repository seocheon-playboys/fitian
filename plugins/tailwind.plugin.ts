import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

const appFonts = plugin(function ({ addUtilities }) {
  const newUtilities: CSSRuleObject = {
    // bold
    '.fitian-bold-16': {
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '1.5',
    },
    '.fitian-bold-14': {
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '14px',
      fontWeight: '700',
      lineHeight: '1.5',
    },
    '.fitian-bold-12': {
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '1.5',
    },
    '.fitian-bold-10': {
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '10px',
      fontWeight: '700',
      lineHeight: '1.5',
    },

    // medium
    '.fitian-medium-16': {
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.5',
    },
    '.fitian-medium-14': {
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '1.5',
    },
    '.fitian-medium-12': {
      fontFamily: 'var(--font-noto-sans-kr)',
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '1.5',
    },
  };

  return addUtilities(newUtilities);
});

const plugins = [appFonts];

export default plugins;
