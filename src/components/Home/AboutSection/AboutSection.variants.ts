import { IVariants } from "../../../../types"

export const aboutSectionVariants: IVariants = {
  initial: {
    opacity: 0,
    translateY: 100,
  },
  show: {
    opacity: 1,
    translateY: 0,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
}
