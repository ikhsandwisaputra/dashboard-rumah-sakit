/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#2A6F56', // Hijau tua sidebar
        'brand-primary-light': '#3E836A', // Hijau lebih terang untuk hover
        'brand-accent': '#38D4A2',  // Hijau untuk item aktif & progress
        'brand-background': '#F0F4F2', // Latar belakang utama
        'brand-text-primary': '#374151', // Abu-abu tua untuk teks
        'brand-text-secondary': '#6B7280', // Abu-abu lebih terang
      }
    },
  },
  plugins: [],
}