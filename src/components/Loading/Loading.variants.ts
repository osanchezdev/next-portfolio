import { IVariants } from "../../../types"

export const loadingPageWrapperVariants: IVariants = {
  initial: {
    opacity: 1,
    scale: 1,
    translateX: -2400,
  },
  show: {
    opacity: 1,
    scale: 1,
    translateX: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 1,
    scale: 1,
    translateX: 2400,
    transition: {
      when: "afterChildren",
      duration: 1,
    },
  },
}

export const loadingPageAnimationVariants: IVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  },
}
