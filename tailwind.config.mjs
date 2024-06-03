/** @type {import('tailwindcss').Config} */
 
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--color-primary-rgb))',
          light: 'rgb(var(--color-primary-light-rgb))',
          dark: 'rgb(var(--color-primary-dark-rgb))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary-rgb))',
          light: 'rgb(var(--color-secondary-light-rgb))',
          dark: 'rgb(var(--color-secondary-dark-rgb))',
        },
        neutral: {
          light: 'rgb(var(--color-neutral-light-rgb))',
          dark: 'rgb(var(--color-neutral-dark-rgb))',
        },
      },
    },
  },
  plugins: [],
};
