/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {},
        },
        fontFamily: {
            out_black: ['Outfit-Black', 'sans-serif'],
            out_bold: ['Outfit-Bold', 'sans-serif'],
            out_exbold: ['Outfit-ExtraBold', 'sans-serif'],
            out_exlight: ['Outfit-ExtraLight', 'sans-serif'],
            out_light: ['Outfit-Light', 'sans-serif'],
            out_reg: ['Outfit-Regular', 'sans-serif'],
            out_med: ['Outfit-Medium', 'sans-serif'],
            out_semi: ['Outfit-SemiBold', 'sans-serif'],
            out_thin: ['Outfit-Thin', 'sans-serif'],
            out_vari: ['Outfit-Variable', 'sans-serif'],
        },
    },
    plugins: [require('tailwindcss-animate')],
};
