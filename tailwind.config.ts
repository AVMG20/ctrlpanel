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
          "error": "#EF4444",      // Bright red for errors
        },
        soly: {
          "primary": "#6366F1",    // Light violet for primary interactive elements
          "secondary": "#383b48",  // Slightly muted dark gray for secondary elements (sidebar, background)
          "accent": "#F43F5E",     // Bright pinkish-red for accent elements
          "neutral": "#1F2028",    // Slightly lighter gray for neutral background (cards and sections)
          "base-100": "#181A20",   // Dark gray for the base background (overall page background)
          "info": "#3B82F6",       // Bright blue for informational elements (like the icons in FAQs)
          "success": "#10B981",    // Neon green for success indicators
          "warning": "#F59E0B",    // Bright yellow for warning messages
          "error": "#EF4444",      // Bright red for error states (warnings)

          "--rounded-box": "0.75rem", // Medium rounding for large boxes (like cards), not too sharp or too soft
          "--rounded-btn": "0.375rem", // Slightly rounded for buttons, keeping them sharp but not boxy
          "--rounded-badge": "1.5rem", // Rounded badge appearance, a little softer for circular badges
          "--animation-btn": "0.25s", // Button click animation duration
          "--animation-input": "0.2s", // Input elements' animation duration
          "--btn-focus-scale": "0.97", // Slight scale down when buttons are focused
          "--border-btn": "1px", // Standard border width for buttons
          "--tab-border": "1px", // Border width for tab components
          "--tab-radius": "0.375rem", // Mild rounding for tab corners
        },
      },
    ],
  },
};

export default config;
