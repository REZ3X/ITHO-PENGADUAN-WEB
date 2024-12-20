/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        'gedhe': '100px',
      },
      backgroundImage: {
        'backgroundImg': "url('/images/bg3.png')",
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
      },
    },
  },
  plugins: [],
};
