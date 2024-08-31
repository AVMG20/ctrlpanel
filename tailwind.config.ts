import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    typography,
    daisyui
  ],
  daisyui: {
    themes: [
      {
        ctrlpanel: {
          "primary": "#10B981",   // Neon green for primary elements
          "secondary": "#8B5CF6", // Bright violet for secondary elements
          "accent": "#EC4899",    // Neon pink for accents
          "neutral": "#1E293B",   // Dark blue-gray for neutral backgrounds
          "base-100": "#0F172A",  // Very dark blue for base background
          "info": "#3B82F6",      // Bright blue for informational elements
          "success": "#10B981",   // Neon green for success
          "warning": "#F59E0B",   // Bright yellow for warnings
          "error": "#EF4444"      // Bright red for errors
        },
      },
    ],
  },
};

export default config;
