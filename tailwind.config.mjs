/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '600px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-medium': 'spin 1.5s linear infinite',
        'spin-fast': 'spin 300ms linear infinite',
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
