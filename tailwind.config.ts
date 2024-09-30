import type {Config} from "tailwindcss";
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

const config: Config = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}",],
    safelist: [
        'alert-success',
        'alert-info',
        'alert-warning',
        'alert-error',
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [typography, daisyui],
    daisyui: {
        themes: [{
            ctrlpanel: {
                "primary": "#10B981",
                "secondary": "#8B5CF6",
                "accent": "#EC4899",
                "neutral": "#1E293B",
                "base-100": "#0F172A",
                "info": "#3B82F6",
                "success": "#22C55E",
                "warning": "#F59E0B",
                "error": "#EF4444",

                "--rounded-box": "0.50rem",
                "--rounded-btn": "0.375rem",
                "--rounded-badge": "1.5rem",
                "--animation-btn": "0.25s",
                "--animation-input": "0.2s",
                "--btn-focus-scale": "0.97",
                "--border-btn": "1px",
                "--tab-border": "1px",
                "--tab-radius": "0.375rem"
            },

            ctrlpanel_dark: {
                "primary": "#10B981",  // Green as the primary color
                "secondary": "#b9109d",  // Neutral grey for secondary elements
                "accent": "#b99110",  // Accent color for non-primary highlights
                "neutral": "#0a0a0a",  // Pure black for neutral background elements
                "base-100": "#0a0a0a",  // Very dark grey for the main background
                "info": "#3B82F6",  // Blue for informational elements
                "success": "#22C55E",  // Green for success states
                "warning": "#F59E0B",  // Orange for warning states
                "error": "#EF4444",  // Red for error states

                // Border, button, and element styles that match the sleek, minimal design in the image
                "--rounded-box": "0.5rem",  // Slightly rounded boxes for cards and containers
                "--rounded-btn": "0.375rem",  // Button rounding for a clean look
                "--rounded-badge": "1.25rem",  // Rounded badges, slightly softer look
                "--animation-btn": "0.25s",  // Button hover animation speed
                "--animation-input": "0.2s",  // Input focus animation speed
                "--btn-focus-scale": "0.97",  // Slight focus scale on buttons
                "--border-btn": "1px",  // Thin button border for clean definition
                "--tab-border": "1px",  // Thin tab border for minimalist look
                "--tab-radius": "0.375rem",  // Slightly rounded tabs
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

                "--rounded-box": "0.50rem",
                "--rounded-btn": "0.375rem",
                "--rounded-badge": "1.5rem",
                "--animation-btn": "0.25s",
                "--animation-input": "0.2s",
                "--btn-focus-scale": "0.97",
                "--border-btn": "1px",
                "--tab-border": "1px",
                "--tab-radius": "0.375rem",
            },
            firestorm: {
                "primary": "#FF5722",
                "secondary": "#212121",
                "accent": "#FF9800",
                "neutral": "#1C1C1C",
                "base-100": "#121212",
                "info": "#FF7043",
                "success": "#FFC107",
                "warning": "#FF8F00",
                "error": "#D32F2F",

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
            "light",
            "dark",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "synthwave",
            "retro",
            "cyberpunk",
            "valentine",
            "halloween",
            "garden",
            "forest",
            "aqua",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "black",
            "luxury",
            "dracula",
            "cmyk",
            "autumn",
            "business",
            "acid",
            "lemonade",
            "night",
            "coffee",
            "winter",
            "dim",
            "nord",
            "sunset",
        ],
    },
};

export default config;
