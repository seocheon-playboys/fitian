import plugin from 'tailwindcss/plugin';
import { CSSRuleObject } from 'tailwindcss/types/config';

const appFonts = plugin(function ({ addUtilities }) {
  const newUtilities: CSSRuleObject = {};

  return addUtilities(newUtilities);
});

const plugins = [appFonts];

export default plugins;
