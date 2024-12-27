/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      backdropBlur: {
        'gedhe': '100px',
      },
      backgroundImage: {
        'backgroundImg': "url('/images/bg4.png')",
        'blueGradient': 'linear-gradient(to right, #2680eb, #3146bb)',
        'blueGradient2': 'linear-gradient(to bottom, #2680eb, #6bb1fe)',
      },
      backgroundRepeat: {
        'no-repeat': 'no-repeat',
      },
      backgroundSize: {
        'cover': 'cover',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightGreen: "#D3F1DF",
        mediumGreen: "#85A98F",
        darkGreen: "#5A6C57",
        oliveGreen: "#525B44",
        blue: "#2680eb",
        softBlue: "#6bb1fe",
        darkBlue: "#3a4166",
      },
    },
  },
  plugins: [],
};
