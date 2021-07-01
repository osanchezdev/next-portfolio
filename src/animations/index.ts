import { IAnimations } from "../../types";

const animationBase = {};

const rubberBandKeyframes = {
  scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
  scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
};

const animations: IAnimations = {
  fade: {
    initial: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
    animate: {
      opacity: 1,
      display: "block",
    },
  },
  rubberBand: {
    initial: {
      scaleX: 1,
      scaleY: 1,
    },
    animate: {
      ...rubberBandKeyframes,
    },
  },
  horizontalFlip: {
    initial: {
      rotateZ: 0,
    },
    animate: {
      rotateZ: 180,
    },
  },
};

export type AnimationTypes = "fade" | "rubberBand" | "horizontalFlip";

export default animations;
