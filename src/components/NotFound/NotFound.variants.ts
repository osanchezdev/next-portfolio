import { IVariants } from "../../../types"

export const notFoundVariants: IVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 2.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
}

export const notFoundItemsVariants: IVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 2.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
}
