/** @type {import('tailwindcss').Config} */
 
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          light: "var(--color-secondary-light)",
          dark: "var(--color-secondary-dark)",
        },
        neutral: {
          light: "var(--color-background)",
          dark: "var(--color-surface)",
        },
      },
      backgroundColor: {
        DEFAULT: "var(--color-background)",
        light: "var(--color-background)",
        dark: "var(--color-background-dark)",
        surface: 'var(--color-surface)',
        'surface-dark': 'var(--color-surface-dark)'
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        'primary-dark': 'var(--color-text-primary-dark)',
        secondary: 'var(--color-text-secondary)',
        'secondary-dark': 'var(--color-text-secondary-dark)',
        muted: 'var(--color-text-muted)',
        'muted-dark': 'var(--color-text-muted-dark)',
      },
    },
  },
  plugins: [],
};
