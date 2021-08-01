import _merge from "lodash.merge";
import { IVariants } from "../../../../types";
import { getAnimationVariants } from "../../../animations";

export const welcomeTitleCharsVariants = (i: number): IVariants => {
  let rubberBandAnimation = getAnimationVariants({
    animationName: "rubberBand",
  });
  let calcDelay = i * 0.07;
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeIn",
        delay: calcDelay,
      },
    },
    hover: {
      ..._merge(rubberBandAnimation.animate, {
        opacity: 1,
        transition: {
          delay: 0,
          duration: 0.8,
          type: "spring",
        },
      }),
    },
  };
};

export const welcomeButtonVariants: IVariants = {
  initial: {
    opacity: 0,
    translateX: -100,
  },
  animate: {
    opacity: [0, 0, 0, 0.8, 1],
    translateX: 0,
    transition: {
      times: [0.1, 0.3, 0.5, 0.8, 1],
      delay: 2.7,
      duration: 1,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
  tapped: {
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

export const welcomeScrollDownVariants: IVariants = {
  initial: {
    opacity: 0,
    translateY: 100,
  },
  animate: {
    opacity: [0, 0, 0, 0.8, 1],
    translateY: 0,
    transition: {
      times: [0.1, 0.3, 0.5, 0.8, 1],
      delay: 3.2,
      duration: 1,
    },
  },
};
