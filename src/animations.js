export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      staggerChildren: 0.3,
      delayChildren: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.3,
    },
  },
};

export const cardAnimation = {
  hidden: { opacity: 0, y: 150 },
  show: { opacity: 1, y: 0 },
  exit: {},
};
