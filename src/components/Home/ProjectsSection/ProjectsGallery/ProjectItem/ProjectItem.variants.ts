import { IVariants } from "../../../../../../types"

export const projectItemOverlayVariants: IVariants = {
  initial: {
    height: "0",
  },
  animate: {
    height: "0",
    transition: {
      delay: 0.15,
      duration: 0.4,
    },
  },
  hover: {
    height: "100%",
    transition: {
      delay: 0.4,
      when: "beforeChildren",
      ease: "easeIn",
    },
  },
}

export const projectItemTechPillsWrapperVariants: IVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
}

export const projectItemTechPillVariants: IVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
  },
}

export const projectItemSeeMoreVariants: IVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
}
