import { IVariants } from "../../../../types";

// TODO: change for opacity like chevron
export const scrollDownThumbVarians: IVariants = {
  initial: {
    opacity: 1,
    transitionDuration: "2s",
  },
  animate: {
    opacity: [0, 0.8, 1, 0],
    height: [5, 10, 10, 5],
    translateY: [0, 0, 115, 0],
    transition: {
      times: [0, 0.4, 0.8, 1],
      repeat: Infinity,
      duration: 1.5,
      type: "tween",
    },
  },
};

export const chevronDownVarians: IVariants = {
  animate: {
    opacity: [0.5, 0, 0, 0],
    translateY: [2, 7, 0, 0],
    transition: {
      times: [0, 0.4, 0.6, 1],
      repeat: Infinity,
      duration: 2,
      type: "tween",
    },
  },
};
