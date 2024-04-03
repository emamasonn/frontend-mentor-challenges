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
        "Soft-orange": "hsl(35, 77%, 62%)",
        "Soft-red": "hsl(5, 85%, 63%)",
        "Off-white": "hsl(36, 100%, 99%)",
        "Grayish-blue": "hsl(233, 8%, 79%)",
        "Dark-grayish-blue": "hsl(236, 13%, 42%)",
        "Very-dark-blue": "hsl(240, 100%, 5%)",
        "Very-dark-blue-alpha": "hsla(240, 100%, 5%, 0.5)",
        "Light-royal-blue": "hsl(241, 81%, 54%)",
        "Light-slate-blue": "hsl(252, 100%, 67%)",
        White: "hsl(0, 0%, 100%)",
        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)",
        "Light-red": "hsl(0, 100%, 67%)",
        "Orangey-yellow": "hsl(39, 100%, 56%)",
        "Green-teal": "hsl(166, 100%, 37%)",
        "Cobalt-blue": "hsl(234, 85%, 45%)",
        "Light-red-alpha": "hsla(0, 100%, 67%, 0.1)",
        "Orangey-yellow-alpha": "hsla(39, 100%, 56%, 0.1)",
        "Green-teal-alpha": "hsla(166, 100%, 37%, 0.1)",
        "Cobalt-blue-alpha": "hsla(234, 85%, 45%, 0.1)",
        "Dark-gray-blue-alpha": "hsl(224, 30%, 27%, 0.5)",
        "Violet-blue": "hsla(256, 72%, 46%, 1)",
        Green: "hsl(75, 94%, 57%)",
        Grey: "hsl(0, 0%, 20%)",
        "Dark-grey": "hsl(0, 0%, 12%)",
        "Off-black": "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
export default config;
