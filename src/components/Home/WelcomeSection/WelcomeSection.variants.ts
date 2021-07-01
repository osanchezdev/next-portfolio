import _merge from "lodash.merge";
import { IVariants } from "../../../../types";
import { getAnimationVariants } from "../../../utils";

export const welcomeTitleCharsVariants = (i: number): IVariants => {
  let rubberBandAnimation = getAnimationVariants({
    animationName: "rubberBand",
  });
  let calcDelay = i * 0.1;
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
          duration: 0.8,
          type: "spring",
        },
      }),
    },
  };
};
