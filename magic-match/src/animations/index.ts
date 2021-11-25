export const { fadeIn, slideDown } = {
  fadeIn: {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  },
  slideDown: {
    from: {
      y: "-100%",
    },
    to: {
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  },
};
