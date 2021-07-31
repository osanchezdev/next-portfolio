import { IVariants } from "../../../../../../types"

export const FormStepVariants: IVariants = {
  initial: {
    translateX: 800,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    translateX: 0,
    transition: {
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    translateX: -800,
    transition: {
      duration: 1,
    },
  },
}

export const CompleteStepVariants: IVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
}
