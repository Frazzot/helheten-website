/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost"],
        francoisOne: ["FrancoisOne"],
      },
      colors: {
        "grey-dark": "#2E2E2E",
        "off-white": "#DDE2DB",
        sage: "#86997B",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
