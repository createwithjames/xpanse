/** @type {import('tailwindcss').Config} */
const {
    iconsPlugin,
    getIconCollections,
} = require("@egoist/tailwindcss-icons");

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
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            colors: {
                shamrock: {
                    DEFAULT: "#33CC99",
                    50: "#edfcf5",
                    100: "#d2f9e6",
                    200: "#aaf0d2",
                    300: "#72e3ba",
                    400: "#33cc99",
                    500: "#16b384",
                    600: "#0a916b",
                    700: "#087458",
                    800: "#095c48",
                    900: "#084c3c",
                    950: "#032b22",
                },
                lochinvar: {
                    DEFAULT: "#009999",
                    50: "#effefc",
                    100: "#c7fff9",
                    200: "#90fff3",
                    300: "#51f7ec",
                    400: "#1de4dd",
                    500: "#04c8c3",
                    600: "#009999",
                    700: "#057f80",
                    800: "#0a6365",
                    900: "#0d5354",
                    950: "#002f33",
                },
                iron: {
                    DEFAULT: "#cccccc",
                    50: "#f7f7f7",
                    100: "#ededed",
                    200: "#dfdfdf",
                    300: "#cccccc",
                    400: "#adadad",
                    500: "#999999",
                    600: "#888888",
                    700: "#7b7b7b",
                    800: "#676767",
                    900: "#545454",
                    950: "#363636",
                },
            },
        },
    },

    plugins: [
        require("@tailwindcss/typography", "@tailwindcss/forms"),
        iconsPlugin({
            // Select the icon collections you want to use
            // You can also ignore this option to automatically discover all icon collections you have installed
            collections: getIconCollections(["material-symbols", "lucide"]),
        }),
    ],
};
