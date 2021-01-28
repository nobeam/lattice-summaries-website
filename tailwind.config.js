const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'media',
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    },
    theme: {
        fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif']
        },
        extend: {},
        colors: {
            white: colors.white,
            black: colors.black,
            // gray: colors.blueGray,
            gray: colors.gray,
            primary: colors.lightBlue,
            // primary: colors.teal,
            secondary: colors.blue,
            danger: colors.red,
            warning: colors.orange
        }
    }
}
