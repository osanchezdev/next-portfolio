import animations, { AnimationTypes } from "../animations";

interface AnimationIVariants {
  initialName?: string;
  animateName?: string;
  animationName: AnimationTypes;
}
export const getAnimationVariants = ({
  initialName = "initial",
  animateName = "animate",
  animationName,
}: AnimationIVariants): any => {
  return {
    [initialName]: {
      ...animations[animationName].initial,
    },
    [animateName]: {
      ...animations[animationName].animate,
    },
  };
};
