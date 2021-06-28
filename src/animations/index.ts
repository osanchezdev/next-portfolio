import { Variant } from "framer-motion";

interface AnimationItemI {
  initial: Variant;
  animate: Variant;
}

interface AnimationsI {
  [key: string]: AnimationItemI;
}

const animationBase = {};

const animations: AnimationsI = {
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
      scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
      scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
    },
    animate: {
      scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
      scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
      transition: {
        ease: "easeOut",
      },
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
