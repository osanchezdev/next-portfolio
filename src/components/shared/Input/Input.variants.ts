import { IVariants } from "../../../../types"

export const suggestListVariants: IVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  hide: {
    opacity: 0,
    scale: 0,
  },
}

export const suggestListItemVariants: IVariants = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
}
