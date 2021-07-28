import { IAnimationVariants } from "../../types"
import animations from "../animations"

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
