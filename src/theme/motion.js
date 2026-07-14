const motion = {
  duration: {
    fast: "150ms",
    normal: "250ms",
    slow: "400ms",
    slower: "600ms",
  },

  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
    spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },

  scale: {
    hover: 1.03,
    tap: 0.98,
  },

  y: {
    hover: -4,
  },
};

export default motion;