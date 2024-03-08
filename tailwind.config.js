/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.html", "node_modules/preline/dist/*.js"],
    theme: {
        extend: {
            colors: {
                primary: "#F1F3FF",
                green: {
                    primary: "#5CB85F",
                    hover: "#428745",
                },
            },
        },
    },
    plugins: [require("preline/plugin")],
};
