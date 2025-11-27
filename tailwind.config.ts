import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ffeae3",
          100: "#ffd1c0",
          200: "#ffb091",
          300: "#ff8c63",
          400: "#ff764b",
          500: "#ff6b4a",
          600: "#e35438",
          700: "#b8422d",
          800: "#8f3122",
          900: "#5a1e14",
        },
        accent: {
          50: "#eef4ff",
          100: "#d7e4ff",
          200: "#b3cdff",
          300: "#8ab2ff",
          400: "#4a8fff",
          500: "#2e73e6",
          600: "#1f5bb8",
          700: "#1c4a91",
          800: "#173a70",
          900: "#112648",
        },
        creative: {
          50: "#f3e9ff",
          100: "#e3ceff",
          200: "#cba3ff",
          300: "#b07bff",
          400: "#9659ff",
          500: "#8b4dff",
          600: "#702dd6",
          700: "#561fa8",
          800: "#3c1575",
          900: "#220a42",
        },
        success: "#0f9d58",
        warning: "#f7a600",
        error: "#dc3f45",
      },
      fontFamily: {
        display: ["Playfair Display", "Cormorant Garamond", "serif"],
        body: ["Inter", "DM Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        'display-2xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -1px rgb(0 0 0 / 0.06)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04)',
        'soft': '0 4px 20px 0 rgb(0 0 0 / 0.08)',
        'border': '0 0 0 1px rgb(0 0 0 / 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
