/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#054b81',
                secondary: '#043a65',
                accent: '#ec691f',
                success: '#116600',
                danger: '#ff0033',
                info: '#4c79dc',
                light: '#f8fafc', // Slightly off-white for better eye comfort
                dark: '#0f172a',
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
                heading: ['Outfit', 'sans-serif'], // Added specific heading font
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'spin-slow': 'spin 12s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
