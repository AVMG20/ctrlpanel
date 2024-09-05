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
          "primary": "#10B981",
          "secondary": "#8B5CF6",
          "accent": "#EC4899",
          "neutral": "#1E293B",
          "base-100": "#0F172A",
          "info": "#3B82F6",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",

          "--rounded-box": "0.50rem", // Medium rounding for large boxes (like cards), not too sharp or too soft
          "--rounded-btn": "0.375rem", // Slightly rounded for buttons, keeping them sharp but not boxy
          "--rounded-badge": "1.5rem", // Rounded badge appearance, a little softer for circular badges
          "--animation-btn": "0.25s", // Button click animation duration
          "--animation-input": "0.2s", // Input elements' animation duration
          "--btn-focus-scale": "0.97", // Slight scale down when buttons are focused
          "--border-btn": "1px", // Standard border width for buttons
          "--tab-border": "1px", // Border width for tab components
          "--tab-radius": "0.375rem", // Mild rounding for tab corners
        },
        soly: {
          "primary": "#6366F1",
          "secondary": "#383b48",
          "accent": "#F43F5E",
          "neutral": "#1F2028",
          "base-100": "#181A20",
          "info": "#3B82F6",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",

          "--rounded-box": "0.50rem", // Medium rounding for large boxes (like cards), not too sharp or too soft
          "--rounded-btn": "0.375rem", // Slightly rounded for buttons, keeping them sharp but not boxy
          "--rounded-badge": "1.5rem", // Rounded badge appearance, a little softer for circular badges
          "--animation-btn": "0.25s", // Button click animation duration
          "--animation-input": "0.2s", // Input elements' animation duration
          "--btn-focus-scale": "0.97", // Slight scale down when buttons are focused
          "--border-btn": "1px", // Standard border width for buttons
          "--tab-border": "1px", // Border width for tab components
          "--tab-radius": "0.375rem", // Mild rounding for tab corners
        },
        firestorm: {
          "primary": "#FF5722",        // Vibrant Orange
          "secondary": "#212121",      // Deep Charcoal
          "accent": "#FF9800",         // Amber
          "neutral": "#1C1C1C",        // Dark Neutral
          "base-100": "#121212",       // Base Dark
          "info": "#FF7043",           // Soft Orange
          "success": "#FFC107",        // Bright Amber
          "warning": "#FF8F00",        // Bold Amber
          "error": "#D32F2F",          // Fiery Red

          "--rounded-box": "0.50rem",
          "--rounded-btn": "0.375rem",
          "--rounded-badge": "1.5rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.97",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.375rem",
        }
      },
    ],
  },
};

export default config;
