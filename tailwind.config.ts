import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         customBlue: '#377DFF',
        background: "var(--background)",
        foreground: "var(--foreground)",
        
         

      },
        textDecorationOffset: {
        '1': '1px',
        '2': '2px',
        '4': '4px',
        '8': '8px',
      },
    },
  },
  plugins: [],
};
export default config;
