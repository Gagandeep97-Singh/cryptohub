module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-15%)",
          },
        },
      },
      animation: {
        'marquee': 'marquee 15s linear infinite'
      },
    },
  },
  plugins: [],
};
