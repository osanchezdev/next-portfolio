export const fullScreenSliderOverlayWrapperVariants = {
  initial: {
    opacity: 0,
    display: "none",
  },
  show: {
    display: "flex",
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  hide: {
    display: "none",
    opacity: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
    },
  },
}

export const fullScreenSliderOverlayVariants = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hide: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}
