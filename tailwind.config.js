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
                bg: '#FBFAF6',
            },
            screens: {
                '2xl': '1440px;',
            },
            boxShadow: {
                large: '2px 3px 0px 0px #000;',
                tag: ' 2px 2px 0px 0px #000;',
                iconContainer: '3px 4px 0px #0E2624',
                iconContainerHover: '2px 1.5px 0px #0E2624',
            },
        },
    },
    plugins: [],
};
