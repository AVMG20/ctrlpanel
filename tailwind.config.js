/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
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

}

