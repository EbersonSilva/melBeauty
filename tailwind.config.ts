import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
<<<<<<< HEAD
  corePlugins: {
    scrollBehavior: true, 
  }
=======
>>>>>>> 2c6c4c5acc6dbdfd5a58542dd4dd0533a4fb3f99
} satisfies Config;
