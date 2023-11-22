module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: {
          "100": "#ff0103",
          "200": "#ff0000",
        },
        gray: {
          "100": "#212529",
          "200": "rgba(0, 0, 0, 0.5)",
          "300": "rgba(0, 0, 0, 0.7)",
          "400": "rgba(0, 0, 0, 0.1)",
          "500": "rgba(0, 0, 0, 0.75)",
          "600": "rgba(0, 0, 0, 0.41)",
          "700": "rgba(0, 0, 0, 0.4)",
          "800": "rgba(255, 255, 255, 0.33)",
          "900": "rgba(255, 255, 255, 0.8)",
        },
        whitesmoke: {
          "100": "#f0f2f5",
          "200": "#f1f1f1",
          "300": "#eaeaea",
        },
        white: "#fff",
        black1: "#000",
        lavender: "#f0efff",
        midnightblue: {
          "100": "#2d2987",
          "200": "#2b2482",
          "300": "#1e2478",
        },
        firebrick: "#a60009",
        "black-75": "rgba(62, 50, 50, 0.75)",
        black: "#3e3232",
        gainsboro: "#d9d9d9",
        dimgray: "#4d4d4d",
      },
      spacing: {},
      fontFamily: {
        helvetica: "Helvetica",
        "anek-tamil": "'Anek Tamil'",
        roboto: "Roboto",
        poppins: "Poppins",
        satisfy: "Satisfy",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "21xl": "40px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
}