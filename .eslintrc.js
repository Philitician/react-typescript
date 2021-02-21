module.exports = {
    plugins: [
        "prettier",
    ],
    extends: [
        "react-app",
        "react-app/jest",

        // removes eslint rules that could conflict with prettier
        // make sure this is at the bottom
        "prettier",
        "prettier/react"
    ],
}