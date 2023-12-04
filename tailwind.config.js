/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],

    theme: {
        fontFamily: {
            sans: ["Inter", "sans-serif"],
            display: ["Lexend", "sans-serif"],
        },
        extend: {},
    },

    plugins: [require("@tailwindcss/typography", "@tailwindcss/forms")],
};
