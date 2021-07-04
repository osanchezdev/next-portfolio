import { IVariants } from "../../../../types";

export const scrollDownThumbVariants: IVariants = {
  animate: {
    opacity: [0, 1, 0, 0, 0],
    height: [10, 15, 10, 10],
    translateY: [0, 18, 18, 0],
    transition: {
      repeat: Infinity,
      duration: 3.5,
      type: "tween",
    },
  },
};

export const chevronDownVariants: IVariants = {
  animate: {
    opacity: [0, 1, 0, 0],
    translateY: [0, 5, 9, 0],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      type: "tween",
    },
  },
};
