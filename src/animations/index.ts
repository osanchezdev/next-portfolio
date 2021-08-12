import { IAnimations, IAnimationVariants } from "../../types"

const animationBase = {}

const rubberBandKeyframes = {
  scaleX: [1, 1.25, 0.75, 1.15, 0.95, 1.05, 1],
  scaleY: [1, 0.75, 1.25, 0.85, 1.05, 0.95, 1],
}

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
}

export const getAnimationVariants = ({
  initialName = "initial",
  animateName = "animate",
  animationName,
}: IAnimationVariants): any => {
  return {
    [initialName]: {
      ...animations[animationName].initial,
    },
    [animateName]: {
      ...animations[animationName].animate,
    },
  }
}

export default animations
