/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Lalezar: ['Lalezar', 'cursive'],
                Poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                pink: '#FF8ACD',
                green: '#B5F5D1',
                purple: '#B37DFF',
                yellow: '#FFE959',
                blue: '#BFF2FA',
                reddish: '#FF7262',
                bg: '#FFFFFC',
            },
        },
    },
    plugins: [],
};
