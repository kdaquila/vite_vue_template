/**  @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 10s linear infinite',
            },
        },
    },
    plugins: [],
}
