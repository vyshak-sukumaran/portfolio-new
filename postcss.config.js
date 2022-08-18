module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
// !!! important !!!
// in production uncomment the above code to get better performance for tailwind